"use client";
import { useState, useRef } from "react";

export default function HeroVideo({ onOpenDoc }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85"
        className="w-full h-full object-cover filter brightness-[0.38] contrast-125 scale-105 transition-all duration-1000"
      >
        <source src="/videos/traffic-hero.webm" type="video/webm" />
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/9/90/Jane_M._Byrne_Interchange_Traffic.webm/Jane_M._Byrne_Interchange_Traffic.webm.720p.vp9.webm"
          type="video/webm"
        />
      </video>

      {/* Industrial Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/80" />

      {/* Technical Video Control Strip in bottom-right corner (Interactive) */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          className="px-3 py-1.5 bg-[#0B0B0B]/80 hover:bg-[#FF6A00] text-white border border-[#2A2A2A] hover:border-[#FF6A00] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md transition-colors"
          aria-label={isPlaying ? "Tạm dừng video nền" : "Phát video nền"}
        >
          {isPlaying ? "[ DỪNG VIDEO ⏸ ]" : "[ PHÁT VIDEO ▶ ]"}
        </button>

        {onOpenDoc && (
          <button
            type="button"
            onClick={onOpenDoc}
            className="px-3 py-1.5 bg-[#FF6A00] hover:bg-[#E55F00] text-white text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-lg"
          >
            [ PHIM TƯ LIỆU ĐỘI XE ▶ ]
          </button>
        )}
      </div>
    </div>
  );
}
