import { ModeToggle, Mode } from "./ModeToggle";

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-6 md:px-12 z-10 relative">
      <div className="flex items-center gap-3">
        <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full shadow-sm text-primary flex items-center justify-center">
          <span className="material-icons-round text-3xl leading-none">auto_awesome</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight drop-shadow-sm">
          감정카드 클라우드
        </h1>
      </div>
      <ModeToggle mode={mode} onChange={onModeChange} />
    </header>
  );
}