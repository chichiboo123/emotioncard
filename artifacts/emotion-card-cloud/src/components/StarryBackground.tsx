import { motion } from "framer-motion";

export function StarryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-little-prince">
      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFFDE7">
          <circle cx="10%" cy="20%" r="2" className="star-twinkle" style={{ animationDelay: '0s' }} />
          <circle cx="25%" cy="15%" r="1" className="star-twinkle" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="10%" r="2.5" className="star-twinkle" style={{ animationDelay: '0.5s' }} />
          <circle cx="70%" cy="30%" r="1.5" className="star-twinkle" style={{ animationDelay: '1.5s' }} />
          <circle cx="90%" cy="40%" r="2" className="star-twinkle" style={{ animationDelay: '0.2s' }} />
          <circle cx="15%" cy="45%" r="1.5" className="star-twinkle" style={{ animationDelay: '2s' }} />
        </g>
      </svg>
      
      {/* Clouds */}
      <div className="absolute top-20 left-10 w-48 h-16 bg-white/30 rounded-full blur-xl opacity-60" />
      <div className="absolute top-40 right-20 w-64 h-24 bg-white/20 rounded-full blur-2xl opacity-50" />
      
      {/* Planet B-612 hint */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#E8E0D5]/20 rounded-full blur-xl border border-white/10" />
    </div>
  );
}
