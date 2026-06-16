import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Emotion } from "../data/emotions";
import { EmotionCard } from "./EmotionCard";
import { FilterToggle } from "./FilterToggle";

interface RandomModeProps {
  basicEmotions: Emotion[];
  allEmotions: Emotion[];
}

export function RandomMode({ basicEmotions, allEmotions }: RandomModeProps) {
  const [showAll, setShowAll] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  
  const pool = showAll ? allEmotions : basicEmotions;

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    // Prevent picking the exact same card if possible
    if (pool.length > 1 && currentEmotion && pool[randomIndex].id === currentEmotion.id) {
      const nextIndex = (randomIndex + 1) % pool.length;
      setCurrentEmotion(pool[nextIndex]);
    } else {
      setCurrentEmotion(pool[randomIndex]);
    }
  };

  // Initialize with a random card when component mounts or pool changes
  useEffect(() => {
    pickRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll]);

  if (!currentEmotion) return null;

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <FilterToggle showAll={showAll} onChange={setShowAll} />
      </div>

      <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-square mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEmotion.id}
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -100, rotate: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0"
          >
            <EmotionCard 
              emotion={currentEmotion} 
              className="w-full h-full shadow-2xl"
              testId="card-random"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={pickRandom}
        data-testid="btn-next-card"
        className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full text-xl font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="material-icons-round text-2xl group-hover:rotate-180 transition-transform duration-500">
            auto_awesome
          </span>
          다음 카드 뽑기
        </span>
        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </button>
    </div>
  );
}