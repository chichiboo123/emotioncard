import { cn } from "@/lib/utils";

export interface SegmentOption {
  id: string;
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
  ariaLabel?: string;
}

interface SegmentedControlProps {
  options: SegmentOption[];
  ariaLabel?: string;
  testId?: string;
  className?: string;
  /** 부모가 이미 배경/테두리를 제공할 때, 자체 알약 배경 없이 버튼만 노출 */
  bare?: boolean;
}

/** 앱 전체에서 통일된 모양으로 쓰이는 알약형 분절 토글 */
export function SegmentedControl({ options, ariaLabel, testId, className, bare }: SegmentedControlProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      data-testid={testId}
      className={cn(
        "inline-flex items-center",
        !bare && "p-1 bg-white/60 backdrop-blur-md rounded-full border shadow-sm",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.onClick}
          aria-pressed={option.active}
          aria-label={option.ariaLabel ?? option.label}
          data-testid={`segment-${option.id}`}
          className={cn(
            "flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap",
            option.active
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-white/80",
          )}
        >
          <span className="material-icons-round text-base sm:text-lg" aria-hidden="true">
            {option.icon}
          </span>
          {option.label}
        </button>
      ))}
    </div>
  );
}
