"use client";
import { useState, useEffect } from "react";
import company from "../data/company.json";

export default function FloatingZalo() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="floating-zalo" aria-label="Liên hệ nhanh">
      {/* Speech bubble */}
      {showBubble && !dismissed && (
        <div className="floating-zalo-bubble">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Đóng"
            style={{ position: "absolute", top: "0.5rem", right: "0.75rem", fontSize: "0.75rem", color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-600)", fontWeight: 700 }}>
              Báo giá nhanh
            </span>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            Cần báo giá cước vận chuyển? Nhắn Zalo để nhận giá ngay.
          </p>
          <div style={{ marginTop: "0.75rem", paddingTop: "0.5rem", borderTop: "1px solid var(--cream-200)" }}>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--gold-600)" }}
            >
              Chat Zalo ngay →
            </a>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="floating-zalo-actions">
        <a
          href={company.hotlineTel}
          className="floating-zalo-btn"
          style={{ background: "var(--white)", color: "var(--navy-700)", border: "1px solid var(--cream-200)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "0.375rem" }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          {company.hotline}
        </a>
        <a
          href={company.zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-zalo-btn"
          style={{ background: "var(--gradient-gold)", color: "var(--navy-900)" }}
        >
          Zalo
        </a>
      </div>
    </aside>
  );
}
