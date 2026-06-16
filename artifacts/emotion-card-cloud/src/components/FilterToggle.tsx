import { cn } from "@/lib/utils";

export type PoolSize = 4 | 8 | 24;

interface FilterToggleProps {
  poolSize: PoolSize;
  onChange: (size: PoolSize) => void;
}

const OPTIONS: { size: PoolSize; label: string }[] = [
  { size: 4, label: "4개" },
  { size: 8, label: "8개" },
  { size: 24, label: "24개" },
];

export function FilterToggle({ poolSize, onChange }: FilterToggleProps) {
  return (
    <div
      className="inline-flex items-center p-1 bg-white/60 backdrop-blur-md rounded-full border shadow-sm"
      data-testid="filter-toggle"
    >
      {OPTIONS.map(({ size, label }) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={cn(
            "px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all duration-200",
            poolSize === size
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-transparent text-muted-foreground hover:bg-white/80"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
