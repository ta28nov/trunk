"use client";
import { useState, useEffect } from "react";

export default function FloatingZalo() {
  const [showBubble, setShowBubble] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end gap-2 select-none">
      {/* Animated Speech Bubble */}
      {showBubble && !closed && (
        <div className="animate-fade-up bg-white text-navy-950 p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 max-w-[260px] relative backdrop-blur-md">
          <button
            type="button"
            onClick={() => setClosed(true)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
            aria-label="Đóng"
          >
            ×
          </button>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping mt-1.5 shrink-0" />
            <div>
              <p className="font-heading font-bold text-xs text-navy-900 leading-tight">
                Điều Phối Viên Đang Online!
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                Báo giá nhanh trong <strong>15 phút</strong>. Gửi số xe & định vị qua Zalo.
              </p>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-heading font-bold text-blue-600 hover:text-blue-700 uppercase flex items-center gap-1"
            >
              <span>Chat Zalo Ngay</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
            <span className="text-[10px] text-slate-400">Anh Thắng</span>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200/80 transform rotate-45" />
        </div>
      )}

      {/* Floating Buttons: Hotline Call + Zalo Pulse */}
      <div className="flex items-center gap-2.5">
        {/* Hotline Mini Button */}
        <a
          href="tel:0918456789"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-navy-950/90 hover:bg-navy-900 text-white rounded-full shadow-lg border border-navy-700/80 backdrop-blur-md transition-all hover:scale-105 group"
          title="Gọi Hotline 0918.456.789"
        >
          <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-sm">phone</span>
          </span>
          <div className="text-left pr-1">
            <span className="text-[9px] uppercase font-heading tracking-widest text-orange-400 block font-bold leading-tight">
              Hotline 24/7
            </span>
            <span className="font-heading font-bold text-xs text-white leading-tight">
              0918.456.789
            </span>
          </div>
        </a>

        {/* Pulsing Zalo Button */}
        <a
          href="https://zalo.me/0918456789"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 shadow-xl shadow-blue-500/35 hover:shadow-blue-500/50 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Liên hệ Zalo Vận Tải Tiên Phong"
        >
          {/* Pulse Ripple Rings */}
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30 pointer-events-none" />
          <span className="absolute -inset-1 rounded-full border-2 border-blue-400/50 animate-pulse pointer-events-none" />

          {/* Official Zalo Icon Typography */}
          <div className="relative flex flex-col items-center justify-center font-heading font-black tracking-tight text-white leading-none">
            <span className="text-xs">Zalo</span>
            <span className="text-[9px] text-blue-100 font-bold">24/7</span>
          </div>

          {/* Active online green dot */}
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm" />
        </a>
      </div>
    </div>
  );
}
