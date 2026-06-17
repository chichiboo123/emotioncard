import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Emotion, allEmotions, emotionGroups } from "../data/emotions";
import { FamilyCard } from "./FamilyCard";
import { EmotionCard } from "./EmotionCard";
import { cn } from "@/lib/utils";

type DisplayMode = "grouped" | "shuffled";

const shuffleEmotions = () => [...allEmotions].sort(() => Math.random() - 0.5);

export function NormalMode() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grouped");
  const [shuffledEmotions, setShuffledEmotions] = useState<Emotion[]>([]);
  const [expandedFamilies, setExpandedFamilies] = useState<Set<string>>(new Set());
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);

  const handleExpandAll = () => {
    setDisplayMode("grouped");
    setShuffledEmotions([]);
    setExpandedFamilies(new Set(emotionGroups.map((group) => group.family)));
  };

  const handleShuffle = () => {
    setExpandedFamilies(new Set());
    setSelectedEmotion(null);
    setShuffledEmotions(shuffleEmotions());
    setDisplayMode("shuffled");
  };

  const handleSort = () => {
    setExpandedFamilies(new Set());
    setSelectedEmotion(null);
    setShuffledEmotions([]);
    setDisplayMode("grouped");
  };

  const toggleFamily = (family: string) => {
    setExpandedFamilies((current) => {
      const next = new Set(current);
      if (next.has(family)) {
        next.delete(family);
      } else {
        next.add(family);
      }
      return next;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 relative z-10">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
        <p className="text-sm font-semibold text-foreground/70 break-keep text-center sm:text-left">
          {displayMode === "grouped"
            ? "기본 감정 카드를 눌러 약 · 강 단계 감정을 펼치고, 펼쳐진 카드는 크게 볼 수 있어요."
            : "24가지 감정이 무작위로 섞였어요. 섞기 버튼을 누를 때마다 새로 섞여요."}
        </p>
        <div className="flex justify-center sm:justify-end shrink-0 gap-2">
          <IconButton icon="unfold_more" label="모두 펼치기" onClick={handleExpandAll} />
          <IconButton icon="shuffle" label="카드 섞기" onClick={handleShuffle} />
          <IconButton icon="format_list_numbered" label="다시 정렬" onClick={handleSort} />
        </div>
      </div>

      <AnimatePresence>
        {selectedEmotion && (
          <motion.div
            key="selected-emotion-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 px-4 py-6 backdrop-blur-sm"
            onClick={() => setSelectedEmotion(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedEmotion.word} 카드 크게 보기`}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="w-full max-w-sm sm:max-w-md"
              onClick={(event) => event.stopPropagation()}
            >
              <EmotionCard emotion={selectedEmotion} className="min-h-[360px] sm:min-h-[430px] shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {displayMode === "shuffled" ? (
          <motion.div
            key="shuffled"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 sm:gap-5"
          >
            {shuffledEmotions.map((emotion, i) => (
              <motion.div
                key={emotion.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.02 }}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => setSelectedEmotion(emotion)}
                  className="h-full w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-[2rem]"
                  aria-label={`${emotion.word} 카드 크게 보기`}
                >
                  <EmotionCard
                    emotion={emotion}
                    index={i}
                    compact
                    className="h-full min-h-[230px] sm:min-h-[280px] lg:min-h-[320px] cursor-pointer"
                  />
                </button>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-3 sm:gap-y-4 items-start"
          >
            {emotionGroups.map((group, index) => (
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
                  isExpanded={expandedFamilies.has(group.family)}
                  onToggle={() => toggleFamily(group.family)}
                  onSelect={setSelectedEmotion}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IconButton({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground",
        "bg-white/60 backdrop-blur-md border shadow-sm hover:text-foreground hover:bg-white/80 transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50",
      )}
    >
      <span className="material-icons-round text-xl" aria-hidden="true">{icon}</span>
    </button>
  );
}
