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
  return (
    <motion.div layout className="flex flex-col gap-3">
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="text-left relative group outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2rem] w-full"
        data-testid={`card-family-${group.family}`}
      >
        <EmotionCard
          emotion={group.basic}
          index={index}
          className="min-h-[220px] sm:min-h-[280px] cursor-pointer"
        />
        <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/10 backdrop-blur-sm text-black/60 rounded-full p-1 border border-black/5">
            <span
              className="material-icons-round block transition-transform duration-300"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
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
              {group.emotions.map((emotion, i) => (
                <EmotionCard
                  key={emotion.id}
                  emotion={emotion}
                  index={i}
                  isBase={emotion.level === 2}
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
