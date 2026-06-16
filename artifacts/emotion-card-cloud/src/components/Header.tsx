import { Emotion } from "../data/emotions";
import { ModeToggle, Mode } from "./ModeToggle";

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-6 md:px-12">
      <div className="flex items-center gap-3">
        <div className="bg-white p-3 rounded-full shadow-sm text-primary">
          <span className="material-icons-round text-3xl leading-none">cloud</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          감정카드 클라우드
        </h1>
      </div>
      <ModeToggle mode={mode} onChange={onModeChange} />
    </header>
  );
}