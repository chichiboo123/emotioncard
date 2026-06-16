import { ModeToggle, Mode } from "./ModeToggle";

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 py-4 sm:py-8 px-4 sm:px-6 md:px-12 z-10 relative">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-[#3D2D8F] p-2.5 sm:p-3 rounded-full shadow-md text-white flex items-center justify-center">
          <span className="material-icons-round text-2xl sm:text-3xl leading-none" aria-hidden="true">auto_awesome</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#1A1060] tracking-tight drop-shadow-sm">
          여기 있어 감정카드
        </h1>
      </div>
      <ModeToggle mode={mode} onChange={onModeChange} />
    </header>
  );
}
