import { motion } from "framer-motion";

export function CardBack() {
  return (
    <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-[#1A233A] to-[#2A2D43] border-4 border-white/20 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFFDE7">
            <circle cx="20%" cy="30%" r="2" />
            <circle cx="80%" cy="20%" r="1.5" />
            <circle cx="60%" cy="70%" r="2" />
            <circle cx="30%" cy="80%" r="1" />
            <circle cx="50%" cy="50%" r="1.5" />
          </g>
        </svg>
      </div>
      
      <span className="material-icons-round text-6xl text-primary/80 mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" aria-hidden="true">
        stars
      </span>
      <h3 className="text-white/80 font-black text-2xl tracking-widest">
        EMOTION
      </h3>
      <p className="text-white/60 font-bold text-sm mt-2 tracking-[0.15em]">
        여기 있어 감정카드
      </p>

      {/* Decorative curved lines */}
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20 rounded-tr-[2rem] rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20 rounded-bl-[2rem] rounded-tr-full" />
    </div>
  );
}