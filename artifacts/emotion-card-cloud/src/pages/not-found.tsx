import { Link } from "wouter";
import { StarryBackground } from "@/components/StarryBackground";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center relative overflow-hidden px-4">
      <StarryBackground />

      <div className="relative z-10 flex flex-col items-center text-center gap-5 bg-white/70 backdrop-blur-md rounded-[2rem] border shadow-lg px-8 py-10 max-w-md">
        <span
          className="material-icons-round text-6xl text-primary drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          aria-hidden="true"
        >
          travel_explore
        </span>
        <h1 className="text-3xl font-black text-[#1A1060] tracking-tight">
          길을 잃었어요
        </h1>
        <p className="text-sm font-semibold text-foreground/70 break-keep">
          찾으시는 페이지가 별 너머로 사라졌나 봐요.
          <br />
          감정카드로 다시 돌아가 볼까요?
        </p>
        <Link
          href="/"
          data-testid="link-home"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-black shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <span className="material-icons-round text-xl" aria-hidden="true">home</span>
          처음으로 가기
        </Link>
      </div>
    </div>
  );
}
