import { motion } from "framer-motion";
import { Emotion, levelLabel } from "../data/emotions";
import { cn } from "@/lib/utils";

interface EmotionCardProps {
  emotion: Emotion;
  index?: number;
  className?: string;
  testId?: string;
  isBase?: boolean;
}

export function EmotionCard({ emotion, index = 0, className = "", testId, isBase }: EmotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "relative flex flex-col p-6 sm:p-8 lg:p-10 justify-center items-center text-center shadow-lg border-[3px] sm:border-4 transition-shadow",
        isBase ? "border-white shadow-xl ring-4 ring-primary/20" : "border-white/40",
        className
      )}
      style={{
        backgroundColor: emotion.bgColor,
        color: emotion.textColor,
        borderRadius: "2rem",
      }}
      data-testid={testId}
    >
      {/* Level Badge */}
      <div className="absolute top-4 left-4 sm:left-6 flex items-center gap-1.5 bg-white/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
        <div className="flex gap-0.5">
          {[1, 2, 3].map((l) => (
            <div 
              key={l} 
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                l <= emotion.level ? "bg-current" : "bg-current opacity-20"
              )} 
            />
          ))}
        </div>
        <span className="text-xs font-bold whitespace-nowrap">{levelLabel[emotion.level]}</span>
      </div>

      {/* Word */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight break-keep mb-3 drop-shadow-sm mt-4">
        {emotion.word}
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base font-normal leading-relaxed max-w-[260px] opacity-90 break-keep">
        {emotion.description}
      </p>

      {/* Decorative */}
      <span className="material-icons-round absolute bottom-4 right-6 text-4xl opacity-[0.08] pointer-events-none" aria-hidden="true">
        stars
      </span>
    </motion.div>
  );
}