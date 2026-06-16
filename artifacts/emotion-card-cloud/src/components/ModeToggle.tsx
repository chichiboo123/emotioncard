import { cn } from "@/lib/utils";

export type Mode = "normal" | "random";

interface ModeToggleProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

export function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div 
      className="inline-flex items-center p-1 bg-white/60 backdrop-blur-md rounded-full border shadow-sm"
      data-testid="mode-toggle"
    >
      <button
        onClick={() => onChange("normal")}
        className={cn(
          "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
          mode === "normal" 
            ? "bg-primary text-primary-foreground shadow-md" 
            : "text-muted-foreground hover:text-foreground hover:bg-white/80"
        )}
        aria-label="전체 보기 모드"
      >
        <span className="material-icons-round text-[1.125rem]">grid_view</span>
        전체 보기
      </button>
      <button
        onClick={() => onChange("random")}
        className={cn(
          "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
          mode === "random" 
            ? "bg-secondary text-secondary-foreground shadow-md" 
            : "text-muted-foreground hover:text-foreground hover:bg-white/80"
        )}
        aria-label="랜덤뽑기 모드"
      >
        <span className="material-icons-round text-[1.125rem]">style</span>
        랜덤뽑기
      </button>
    </div>
  );
}