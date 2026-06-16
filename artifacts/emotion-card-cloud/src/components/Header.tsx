import { ModeToggle, Mode } from "./ModeToggle";
import { DisplayModeToggle } from "./DisplayModeToggle";

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <header className="w-full shrink-0 flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 md:px-12 z-10 relative">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-[#3D2D8F] p-2 sm:p-2.5 rounded-full shadow-md text-white flex items-center justify-center">
          <span className="material-icons-round text-xl sm:text-2xl leading-none" aria-hidden="true">auto_awesome</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-black text-[#1A1060] tracking-tight drop-shadow-sm">
          여기 있어 감정카드
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-1 p-1.5 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-full border shadow-sm">
        <DisplayModeToggle bare />
        <div className="hidden sm:block w-px self-stretch bg-foreground/10" aria-hidden="true" />
        <div className="block sm:hidden h-px w-full bg-foreground/10" aria-hidden="true" />
        <ModeToggle mode={mode} onChange={onModeChange} bare />
      </div>
    </header>
  );
}
