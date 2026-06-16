import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Emotion } from "../data/emotions";
import { EmotionCard } from "./EmotionCard";
import { FilterToggle } from "./FilterToggle";
import { CardBack } from "./CardBack";

interface RandomModeProps {
  basicEmotions: Emotion[];
  allEmotions: Emotion[];
}

export function RandomMode({ basicEmotions, allEmotions }: RandomModeProps) {
  const [showAll, setShowAll] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const pool = showAll ? allEmotions : basicEmotions;

  const handleDraw = () => {
    if (isDrawing) return;
    
    if (isFlipped) {
      // Hide card first
      setIsFlipped(false);
      setTimeout(() => {
        drawNew();
      }, 400); // Wait for flip back
    } else {
      drawNew();
    }
  };

  const drawNew = () => {
    setIsDrawing(true);
    
    // Pick new emotion
    let randomIndex = Math.floor(Math.random() * pool.length);
    if (pool.length > 1 && currentEmotion && pool[randomIndex].id === currentEmotion.id) {
      randomIndex = (randomIndex + 1) % pool.length;
    }
    setCurrentEmotion(pool[randomIndex]);

    // Animate flip
    setTimeout(() => {
      setIsFlipped(true);
      setIsDrawing(false);
    }, 500); // Shaking/delay before flip
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-8 relative z-10">
      <div className="mb-12">
        <FilterToggle showAll={showAll} onChange={(v) => {
          setShowAll(v);
          setIsFlipped(false);
          setCurrentEmotion(null);
        }} />
      </div>

      <div className="relative w-full max-w-sm aspect-[3/4] sm:aspect-square mb-16 perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
            y: isDrawing ? [0, -20, 10, -10, 0] : 0,
            scale: isFlipped ? 1.05 : 1
          }}
          transition={{ 
            rotateY: { duration: 0.6, type: "spring", stiffness: 200, damping: 20 },
            y: { duration: 0.5 },
            scale: { duration: 0.4 }
          }}
        >
          {/* Card Back */}
          <div className="absolute inset-0 backface-hidden">
            <CardBack />
          </div>

          {/* Card Front */}
          <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
            {currentEmotion && (
              <EmotionCard 
                emotion={currentEmotion} 
                className="w-full h-full shadow-2xl m-0"
                testId="card-random"
              />
            )}
          </div>
        </motion.div>
      </div>

      <button
        onClick={handleDraw}
        disabled={isDrawing}
        data-testid="btn-draw-card"
        className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full text-xl sm:text-2xl font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <span className="relative z-10 flex items-center gap-3">
          <span className="material-icons-round text-3xl group-hover:rotate-180 transition-transform duration-500">
            auto_awesome
          </span>
          {isFlipped ? '다시 뽑기' : '카드 뽑기'}
        </span>
        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </button>
    </div>
  );
}