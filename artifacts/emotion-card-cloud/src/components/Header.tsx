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
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
        <DisplayModeToggle />
        <ModeToggle mode={mode} onChange={onModeChange} />
      </div>
    </header>
  );
}
