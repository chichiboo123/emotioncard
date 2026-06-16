import { cn } from "@/lib/utils";
import { useDisplayMode } from "../hooks/useDisplayMode";
import type { DisplayMode } from "../data/emotions";

const OPTIONS: { mode: DisplayMode; label: string; icon: string }[] = [
  { mode: "child", label: "어린이모드", icon: "child_care" },
  { mode: "adult", label: "어른모드", icon: "person" },
];

export function DisplayModeToggle() {
  const { displayMode, setDisplayMode } = useDisplayMode();

  return (
    <div
      className="inline-flex items-center p-1 bg-white/60 backdrop-blur-md rounded-full border shadow-sm"
      role="group"
      aria-label="표시 모드 선택"
      data-testid="display-mode-toggle"
    >
      {OPTIONS.map(({ mode, label, icon }) => (
        <button
          key={mode}
          onClick={() => setDisplayMode(mode)}
          aria-pressed={displayMode === mode}
          aria-label={`${label}로 보기`}
          data-testid={`display-mode-${mode}`}
          className={cn(
            "px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5",
            displayMode === mode
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-white/80",
          )}
        >
          <span className="material-icons-round text-base sm:text-lg" aria-hidden="true">
            {icon}
          </span>
          {label}
        </button>
      ))}
    </div>
  );
}
