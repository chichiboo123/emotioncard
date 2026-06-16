import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Emotion, EmotionGroup, allEmotions, emotionGroups, familyOrder } from "../data/emotions";
import { FamilyCard } from "./FamilyCard";
import { EmotionCard } from "./EmotionCard";

type DisplayMode = "grouped" | "shuffled";

export function NormalMode() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grouped");
  const [groups, setGroups] = useState<EmotionGroup[]>(emotionGroups);
  const [shuffledEmotions, setShuffledEmotions] = useState<Emotion[]>([]);
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  const handleShuffle = () => {
    setExpandedFamily(null);
    const shuffled = [...allEmotions].sort(() => Math.random() - 0.5);
    setShuffledEmotions(shuffled);
    setDisplayMode("shuffled");
  };

  const handleSort = () => {
    setExpandedFamily(null);
    setGroups(emotionGroups);
    setDisplayMode("grouped");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 pb-16 relative z-10">
      <div className="flex justify-end gap-2 sm:gap-3 mb-6 sm:mb-8">
        <button
          onClick={handleShuffle}
          data-testid="btn-shuffle"
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/70 hover:bg-white backdrop-blur-md text-foreground rounded-full shadow-sm border font-bold text-xs sm:text-sm transition-all"
        >
          <span className="material-icons-round text-base sm:text-xl">shuffle</span>
          카드 섞기
        </button>
        <button
          onClick={handleSort}
          data-testid="btn-sort"
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/70 hover:bg-white backdrop-blur-md text-foreground rounded-full shadow-sm border font-bold text-xs sm:text-sm transition-all"
        >
          <span className="material-icons-round text-base sm:text-xl">format_list_numbered</span>
          다시 정렬
        </button>
      </div>

      <AnimatePresence mode="wait">
        {displayMode === "shuffled" ? (
          <motion.div
            key="shuffled"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4"
          >
            {shuffledEmotions.map((emotion, i) => (
              <motion.div
                key={emotion.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.02 }}
              >
                <EmotionCard
                  emotion={emotion}
                  index={i}
                  className="min-h-[180px] sm:min-h-[220px]"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="grouped"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 items-start"
          >
            {groups.map((group, index) => (
              <motion.div
                key={group.family}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <FamilyCard
                  group={group}
                  index={index}
                  isExpanded={expandedFamily === group.family}
                  onToggle={() =>
                    setExpandedFamily(expandedFamily === group.family ? null : group.family)
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
