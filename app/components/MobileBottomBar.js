"use client";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Thanh thao tác nhanh di động"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0B0B0B] border-t border-[#2A2A2A] shadow-2xl backdrop-blur-md"
      style={{
        paddingBottom: "max(8px, env(safe-area-inset-bottom, 8px))",
      }}
    >
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href="tel:0918456789"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#141414] active:bg-[#222222] border border-[#262626] text-white text-center transition-colors min-h-[48px]"
        >
          <span className="text-[10px] text-[#A3A3A3] font-mono uppercase tracking-wider block">
            HOTLINE 24/7
          </span>
          <span className="text-xs font-heading font-black text-[#FF6A00] block mt-0.5">
            0918.456.789
          </span>
        </a>

        <a
          href="https://zalo.me/0918456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#141414] active:bg-[#222222] border border-[#262626] text-white text-center transition-colors min-h-[48px]"
        >
          <span className="text-[10px] text-[#A3A3A3] font-mono uppercase tracking-wider block">
            TRỰC BAN
          </span>
          <span className="text-xs font-heading font-black text-white block mt-0.5">
            CHAT ZALO OA
          </span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#FF6A00] active:bg-[#E55F00] text-white text-center transition-colors min-h-[48px]"
        >
          <span className="text-[10px] text-white/80 font-mono uppercase tracking-wider block">
            15 PHÚT
          </span>
          <span className="text-xs font-heading font-black text-white block mt-0.5">
            BÁO GIÁ →
          </span>
        </Link>
      </div>
    </nav>
  );
}
