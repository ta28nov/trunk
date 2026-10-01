"use client";
import { useState, useEffect } from "react";

export default function FloatingZalo() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      aria-label="Liên hệ nhanh với điều phối viên"
      className="fixed bottom-6 right-4 sm:right-6 z-40 hidden md:flex flex-col items-end gap-2 select-none"
    >
      {/* Speech Prompt */}
      {showPrompt && !closed && (
        <div className="bg-[#141414] text-white p-4 border border-[#2A2A2A] shadow-2xl max-w-[280px] relative animate-fade-up">
          <button
            type="button"
            onClick={() => setClosed(true)}
            className="absolute top-2 right-2 text-xs text-[#737373] hover:text-white font-mono px-1"
            aria-label="Đóng thông báo"
          >
            [×]
          </button>
          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase text-[#FF6A00] font-heading font-bold block">
              Trực Ban Điều Vận Online
            </span>
            <p className="text-xs text-[#E5E5E5] font-light leading-snug">
              Cần xe gấp hoặc tính cước tuyến nhanh? Phản hồi trong 15 phút.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2A2A2A] flex items-center justify-between text-xs">
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6A00] font-heading font-bold hover:underline"
            >
              Chat Zalo Ngay →
            </a>
            <span className="text-[10px] text-[#737373]">Anh Thắng</span>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        <a
          href="tel:0918456789"
          className="px-4 py-3 bg-[#0B0B0B] hover:bg-[#1A1A1A] text-white border border-[#2A2A2A] hover:border-[#FF6A00] font-heading font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
        >
          <span>GỌI 0918.456.789</span>
        </a>
        <a
          href="https://zalo.me/0918456789"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
        >
          <span>ZALO OA →</span>
        </a>
      </div>
    </aside>
  );
}
