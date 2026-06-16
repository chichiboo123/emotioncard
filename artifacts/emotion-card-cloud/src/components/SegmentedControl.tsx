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
  /** 더 작은 패딩/폰트로 공간을 적게 차지하는 콤팩트 모드 */
  compact?: boolean;
}

/** 앱 전체에서 통일된 모양으로 쓰이는 알약형 분절 토글 */
export function SegmentedControl({ options, ariaLabel, testId, className, bare, compact }: SegmentedControlProps) {
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
            "flex items-center gap-1 rounded-full font-bold transition-all duration-300 whitespace-nowrap",
            compact ? "px-2.5 py-1 text-xs" : "px-3 sm:px-4 py-2 text-xs sm:text-sm",
            option.active
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-white/80",
          )}
        >
          <span
            className={cn(
              "material-icons-round",
              compact ? "text-sm" : "text-base sm:text-lg",
            )}
            aria-hidden="true"
          >
            {option.icon}
          </span>
          {option.label}
        </button>
      ))}
    </div>
  );
}
