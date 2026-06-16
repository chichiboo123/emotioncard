import { ModeToggle, Mode } from "./ModeToggle";
import { DisplayModeToggle } from "./DisplayModeToggle";

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <header className="w-full shrink-0 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 py-2.5 sm:py-3 px-4 sm:px-6 md:px-12 z-10 relative">
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className="bg-[#3D2D8F] p-1.5 sm:p-2 rounded-full shadow-md text-white flex items-center justify-center">
          <span className="material-icons-round text-lg sm:text-xl leading-none" aria-hidden="true">auto_awesome</span>
        </div>
        <h1 className="text-lg sm:text-2xl font-black text-[#1A1060] tracking-tight drop-shadow-sm">
          여기 있어 감정카드
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-full border shadow-sm max-w-full">
        <DisplayModeToggle bare compact />
        <div className="hidden sm:block w-px self-stretch my-1 bg-foreground/10" aria-hidden="true" />
        <ModeToggle mode={mode} onChange={onModeChange} bare compact />
      </div>
    </header>
  );
}
