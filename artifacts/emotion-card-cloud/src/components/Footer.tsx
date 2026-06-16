export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto text-center opacity-70 hover:opacity-100 transition-opacity">
      <a
        href="https://litt.ly/chichiboo"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="footer-link"
        className="text-sm font-medium text-foreground inline-flex items-center gap-2 hover:text-primary transition-colors"
      >
        <span className="material-icons-round text-base">school</span>
        교육뮤지컬 꿈꾸는 치수쌤
      </a>
    </footer>
  );
}