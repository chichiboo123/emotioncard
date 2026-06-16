import { Emotion } from "../data/emotions";
import { EmotionCard } from "./EmotionCard";

interface NormalModeProps {
  emotions: Emotion[];
}

export function NormalMode({ emotions }: NormalModeProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {emotions.map((emotion, i) => (
          <EmotionCard 
            key={emotion.id} 
            emotion={emotion} 
            index={i} 
            testId={`card-normal-${emotion.id}`}
            className="min-h-[320px]"
          />
        ))}
      </div>
    </div>
  );
}