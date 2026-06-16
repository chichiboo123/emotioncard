import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EmotionGroup, emotionGroups, familyOrder } from "../data/emotions";
import { FamilyCard } from "./FamilyCard";

export function NormalMode() {
  const [groups, setGroups] = useState<EmotionGroup[]>(emotionGroups);
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  const handleShuffle = () => {
    setExpandedFamily(null); // Close any open accordion before shuffling
    const shuffled = [...groups].sort(() => Math.random() - 0.5);
    setGroups(shuffled);
  };

  const handleSort = () => {
    setExpandedFamily(null);
    const sorted = [...groups].sort((a, b) => {
      return familyOrder.indexOf(a.family) - familyOrder.indexOf(b.family);
    });
    setGroups(sorted);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6 pb-20 relative z-10">
      {/* Controls */}
      <div className="flex justify-end gap-3 mb-8">
        <button
          onClick={handleShuffle}
          data-testid="btn-shuffle"
          className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white backdrop-blur-md text-foreground rounded-full shadow-sm border font-bold text-sm transition-all"
        >
          <span className="material-icons-round">shuffle</span>
          카드 섞기
        </button>
        <button
          onClick={handleSort}
          data-testid="btn-sort"
          className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white backdrop-blur-md text-foreground rounded-full shadow-sm border font-bold text-sm transition-all"
        >
          <span className="material-icons-round">format_list_numbered</span>
          다시 정렬
        </button>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        <AnimatePresence>
          {groups.map((group, index) => (
            <motion.div 
              key={group.family}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={expandedFamily === group.family ? "col-span-1 sm:col-span-2 lg:col-span-4" : ""}
            >
              <FamilyCard 
                group={group}
                index={index}
                isExpanded={expandedFamily === group.family}
                onToggle={() => setExpandedFamily(expandedFamily === group.family ? null : group.family)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}