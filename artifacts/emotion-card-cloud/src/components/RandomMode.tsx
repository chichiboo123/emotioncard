import { useState } from "react";
import { motion } from "framer-motion";
import { Emotion, basicEmotions, allEmotions } from "../data/emotions";
import { EmotionCard } from "./EmotionCard";
import { FilterToggle, PoolSize } from "./FilterToggle";
import { CardBack } from "./CardBack";

const CORE_FAMILIES = ["joy", "anger", "sadness", "fear"];
const coreEmotions = basicEmotions.filter((e) => CORE_FAMILIES.includes(e.family));

function getPool(poolSize: PoolSize): Emotion[] {
  if (poolSize === 4) return coreEmotions;
  if (poolSize === 8) return basicEmotions;
  return allEmotions;
}

export function RandomMode() {
  const [poolSize, setPoolSize] = useState<PoolSize>(8);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const handlePoolChange = (size: PoolSize) => {
    setPoolSize(size);
    setIsFlipped(false);
    setCurrentEmotion(null);
  };

  const handleDraw = () => {
    if (isDrawing) return;

    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => drawNew(), 400);
    } else {
      drawNew();
    }
  };

  const drawNew = () => {
    setIsDrawing(true);
    const pool = getPool(poolSize);
    let idx = Math.floor(Math.random() * pool.length);
    if (pool.length > 1 && currentEmotion && pool[idx].id === currentEmotion.id) {
      idx = (idx + 1) % pool.length;
    }
    setCurrentEmotion(pool[idx]);

    setTimeout(() => {
      setIsFlipped(true);
      setIsDrawing(false);
    }, 500);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
      <div className="mb-8 sm:mb-12 flex flex-col items-center gap-2">
        <p className="text-sm font-semibold text-foreground/70">뽑을 감정 카드의 범위를 골라보세요</p>
        <FilterToggle poolSize={poolSize} onChange={handlePoolChange} />
      </div>

      <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[3/4] sm:aspect-[3/4] mb-10 sm:mb-16 perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{
            rotateY: isFlipped ? 180 : 0,
            y: isDrawing ? [0, -16, 8, -8, 0] : 0,
            scale: isFlipped ? 1.03 : 1,
          }}
          transition={{
            rotateY: { duration: 0.6, type: "spring", stiffness: 200, damping: 20 },
            y: { duration: 0.5 },
            scale: { duration: 0.4 },
          }}
        >
          <div className="absolute inset-0 backface-hidden">
            <CardBack />
          </div>
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
        aria-label={isFlipped ? "감정 카드 다시 뽑기" : "감정 카드 뽑기"}
        className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground rounded-full text-lg sm:text-2xl font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 sm:gap-3 overflow-hidden disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          <span className="material-icons-round text-2xl sm:text-3xl group-hover:rotate-180 transition-transform duration-500" aria-hidden="true">
            auto_awesome
          </span>
          {isFlipped ? "다시 뽑기" : "카드 뽑기"}
        </span>
        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </button>
    </div>
  );
}
