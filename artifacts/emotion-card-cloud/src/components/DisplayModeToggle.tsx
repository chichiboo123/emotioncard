import { useDisplayMode } from "../hooks/useDisplayMode";
import type { DisplayMode } from "../data/emotions";
import { SegmentedControl } from "./SegmentedControl";

const OPTIONS: { mode: DisplayMode; label: string; icon: string }[] = [
  { mode: "child", label: "어린이모드", icon: "child_care" },
  { mode: "adult", label: "어른모드", icon: "person" },
];

interface DisplayModeToggleProps {
  bare?: boolean;
  compact?: boolean;
}

export function DisplayModeToggle({ bare, compact }: DisplayModeToggleProps) {
  const { displayMode, setDisplayMode } = useDisplayMode();

  return (
    <SegmentedControl
      ariaLabel="표시 모드 선택"
      testId="display-mode-toggle"
      bare={bare}
      compact={compact}
      options={OPTIONS.map(({ mode, label, icon }) => ({
        id: `display-${mode}`,
        label,
        icon,
        active: displayMode === mode,
        onClick: () => setDisplayMode(mode),
        ariaLabel: `${label}로 보기`,
      }))}
    />
  );
}
