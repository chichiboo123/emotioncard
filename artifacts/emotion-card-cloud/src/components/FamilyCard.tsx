import { motion, AnimatePresence } from "framer-motion";
import { EmotionGroup } from "../data/emotions";
import { EmotionCard } from "./EmotionCard";

interface FamilyCardProps {
  group: EmotionGroup;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export function FamilyCard({ group, isExpanded, onToggle, index }: FamilyCardProps) {
  // 표지(cover) 카드가 이미 '기본(2단계)' 감정을 보여주므로,
  // 펼침 영역에서는 중복을 피하기 위해 약(1단계)·강(3단계) 단계만 노출한다.
  const stageEmotions = group.emotions.filter((e) => e.id !== group.basic.id);

  return (
    <motion.div layout className="flex flex-col gap-2">
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={`${group.name} 감정 ${isExpanded ? "접기" : "단계별로 펼치기"}`}
        className="text-left relative group outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2rem] w-full"
        data-testid={`card-family-${group.family}`}
      >
        <EmotionCard
          emotion={group.basic}
          index={index}
          compact
          className="min-h-[150px] sm:min-h-[170px] lg:min-h-[190px] cursor-pointer"
        />
        <div className="absolute inset-x-0 bottom-2 flex justify-center">
          <div className="flex items-center gap-1 bg-black/10 backdrop-blur-sm text-black/60 rounded-full pl-3 pr-2 py-1 border border-black/5 group-hover:bg-black/20 transition-colors">
            <span className="text-xs font-bold whitespace-nowrap">
              {isExpanded ? "접기" : "단계별 보기"}
            </span>
            <span
              className="material-icons-round block text-lg transition-transform duration-300"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            >
              expand_more
            </span>
          </div>
        </div>
      </button>

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
                <EmotionCard
                  key={emotion.id}
                  emotion={emotion}
                  index={i}
                  className="min-h-[160px] sm:min-h-[200px]"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
