import { motion, AnimatePresence } from "framer-motion";
import { Emotion, EmotionGroup, getFamilyLabel } from "../data/emotions";
import { useDisplayMode } from "../hooks/useDisplayMode";
import { EmotionCard } from "./EmotionCard";
import { cn } from "@/lib/utils";

interface FamilyCardProps {
  group: EmotionGroup;
  isExpanded: boolean;
  onToggle: () => void;
  onSelect: (emotion: Emotion) => void;
  index: number;
}

export function FamilyCard({ group, isExpanded, onToggle, onSelect, index }: FamilyCardProps) {
  const { displayMode } = useDisplayMode();
  const familyLabel = getFamilyLabel(group, displayMode);

  // 표지(cover) 카드가 이미 '기본(2단계)' 감정을 보여주므로,
  // 펼침 영역에서는 중복을 피하기 위해 약(1단계)·강(3단계) 단계만 노출한다.
  const stageEmotions = group.emotions.filter((e) => e.id !== group.basic.id);

  return (
    <motion.div layout className="flex flex-col gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => (isExpanded ? onSelect(group.basic) : onToggle())}
          aria-label={
            isExpanded ? `${familyLabel} 카드 크게 보기` : `${familyLabel} 감정 단계별로 펼치기`
          }
          className="text-left relative outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2rem] w-full"
          data-testid={`card-family-${group.family}`}
        >
          <EmotionCard
            emotion={group.basic}
            index={index}
            compact
            className="min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] cursor-pointer"
          />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.button
              type="button"
              onClick={onToggle}
              aria-expanded={isExpanded}
              aria-label={`${familyLabel} 감정 접기`}
              initial={{ opacity: 0, y: 8, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute bottom-3 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full",
                "bg-white/55 text-foreground/70 shadow-sm backdrop-blur-md transition hover:bg-white/80 hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50",
              )}
            >
              <span className="material-icons-round text-2xl" aria-hidden="true">
                keyboard_arrow_up
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-1 pb-4">
              {stageEmotions.map((emotion, i) => (
                <button
                  key={emotion.id}
                  type="button"
                  onClick={() => onSelect(emotion)}
                  className="w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-[2rem]"
                  aria-label={`${emotion.word} 카드 크게 보기`}
                >
                  <EmotionCard
                    emotion={emotion}
                    index={i}
                    compact
                    className="min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
