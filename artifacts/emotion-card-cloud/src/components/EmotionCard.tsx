import { motion } from "framer-motion";
import { Emotion } from "../data/emotions";

interface EmotionCardProps {
  emotion: Emotion;
  index?: number;
  className?: string;
  testId?: string;
}

export function EmotionCard({ emotion, index = 0, className = "", testId }: EmotionCardProps) {
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
      className={`relative flex flex-col p-8 sm:p-10 justify-center items-center text-center shadow-lg border-4 border-white/20 ${className}`}
      style={{
        backgroundColor: emotion.bgColor,
        color: emotion.textColor,
        borderRadius: "2rem",
      }}
      data-testid={testId}
    >
      {/* Intensity Badge */}
      {emotion.intensity === "strong" && (
        <div className="absolute top-4 left-6 flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full backdrop-blur-md">
          <span className="material-icons-round text-sm">local_fire_department</span>
          <span className="text-xs font-bold">강한 감정</span>
        </div>
      )}
      {emotion.intensity === "weak" && (
        <div className="absolute top-4 left-6 flex items-center gap-1 bg-white/30 px-3 py-1 rounded-full backdrop-blur-md">
          <span className="material-icons-round text-sm">water_drop</span>
          <span className="text-xs font-bold">약한 감정</span>
        </div>
      )}

      {/* Word */}
      <h2 className="text-5xl sm:text-[4rem] font-black tracking-tight mb-4 drop-shadow-sm">
        {emotion.word}
      </h2>
      
      {/* Description */}
      <p className="text-base sm:text-lg font-medium leading-relaxed max-w-[280px] opacity-90">
        {emotion.description}
      </p>

      {/* Decorative Cloud */}
      <span className="material-icons-round absolute bottom-4 right-6 text-4xl opacity-10 pointer-events-none">
        cloud
      </span>
    </motion.div>
  );
}