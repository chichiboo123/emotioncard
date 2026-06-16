import { cn } from "@/lib/utils";

interface FilterToggleProps {
  showAll: boolean;
  onChange: (showAll: boolean) => void;
}

export function FilterToggle({ showAll, onChange }: FilterToggleProps) {
  return (
    <div 
      className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm"
      data-testid="filter-toggle"
    >
      <span className="text-sm font-semibold text-foreground mr-2">감정 종류:</span>
      <button
        onClick={() => onChange(false)}
        className={cn(
          "px-3 py-1.5 rounded-full text-xs font-bold transition-colors",
          !showAll 
            ? "bg-primary text-primary-foreground" 
            : "bg-transparent text-muted-foreground hover:bg-white"
        )}
      >
        기본 감정 8개
      </button>
      <button
        onClick={() => onChange(true)}
        className={cn(
          "px-3 py-1.5 rounded-full text-xs font-bold transition-colors",
          showAll 
            ? "bg-primary text-primary-foreground" 
            : "bg-transparent text-muted-foreground hover:bg-white"
        )}
      >
        전체 감정 24개
      </button>
    </div>
  );
}