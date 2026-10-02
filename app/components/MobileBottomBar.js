"use client";
import company from "../data/company.json";

export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Thanh thao tác nhanh"
      className="mobile-cta-bar"
    >
      <a href={company.hotlineTel} className="cta-call">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        Gọi ngay
      </a>
      <a
        href={company.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-zalo"
      >
        Zalo báo giá
      </a>
    </nav>
  );
}
