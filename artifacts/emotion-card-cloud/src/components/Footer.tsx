export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto flex flex-col items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity z-10">
      <a
        href="https://litt.ly/chichiboo"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="footer-link"
        className="text-sm font-medium text-foreground/80 inline-flex items-center gap-2 hover:text-primary transition-colors"
      >
        <span className="material-icons-round text-base" aria-hidden="true">school</span>
        교육뮤지컬 꿈꾸는 치수쌤
      </a>
      <p className="text-xs text-foreground/60 font-medium">
        이 웹앱은 로버트 플루치크의 감정의 바퀴 이론에 기반하여 제작한 앱입니다.
      </p>
    </footer>
  );
}