import { SegmentedControl } from "./SegmentedControl";

export type Mode = "normal" | "random";

interface ModeToggleProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
  bare?: boolean;
}

export function ModeToggle({ mode, onChange, bare }: ModeToggleProps) {
  return (
    <SegmentedControl
      ariaLabel="보기 방식 선택"
      testId="mode-toggle"
      bare={bare}
      options={[
        {
          id: "view-normal",
          label: "전체 보기",
          icon: "grid_view",
          active: mode === "normal",
          onClick: () => onChange("normal"),
          ariaLabel: "전체 보기 모드",
        },
        {
          id: "view-random",
          label: "랜덤뽑기",
          icon: "style",
          active: mode === "random",
          onClick: () => onChange("random"),
          ariaLabel: "랜덤뽑기 모드",
        },
      ]}
    />
  );
}
