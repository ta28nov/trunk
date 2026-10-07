"use client";
import { useState } from "react";
import company from "../data/company.json";

export default function MobileBottomBar() {
  const [activeSheet, setActiveSheet] = useState(null); // 'call' | 'zalo' | null

  return (
    <>
      <nav
        aria-label="Thanh thao tác nhanh"
        className="mobile-cta-bar"
      >
        <button
          type="button"
          onClick={() => setActiveSheet(activeSheet === "call" ? null : "call")}
          className="cta-call"
          style={{ border: "none", cursor: "pointer", width: "100%", justifyContent: "center" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Gọi Hotline
        </button>
        <button
          type="button"
          onClick={() => setActiveSheet(activeSheet === "zalo" ? null : "zalo")}
          className="cta-zalo"
          style={{ border: "none", cursor: "pointer", width: "100%", justifyContent: "center" }}
        >
          Chat Zalo
        </button>
      </nav>

      {/* Quick Selection Sheet for Mobile */}
      {activeSheet && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 16, 32, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          onClick={() => setActiveSheet(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              width: "100%",
              maxWidth: "480px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              padding: "1.5rem 1.25rem 2rem",
              boxShadow: "0 -10px 40px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, color: "var(--gold-600)" }}>
                {activeSheet === "call" ? "Chọn người liên hệ qua điện thoại" : "Chọn người liên hệ qua Zalo"}
              </span>
              <button
                type="button"
                onClick={() => setActiveSheet(null)}
                style={{ background: "none", border: "none", fontSize: "1.25rem", cursor: "pointer", color: "var(--text-muted)", padding: "0.25rem" }}
              >
                ✕
              </button>
            </div>

            {/* Option 1: Nguyen Hau (Chính) */}
            <a
              href={activeSheet === "call" ? company.hotlineTel : company.zaloLink}
              target={activeSheet === "zalo" ? "_blank" : undefined}
              rel={activeSheet === "zalo" ? "noopener noreferrer" : undefined}
              onClick={() => setActiveSheet(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(217,162,27,0.14) 0%, rgba(217,162,27,0.05) 100%)",
                border: "1.5px solid var(--gold-500)",
                textDecoration: "none",
                color: "var(--navy-900)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                  <span style={{ fontSize: "1.0625rem", fontWeight: 800 }}>
                    {company.hotline}
                  </span>
                  <span style={{ fontSize: "0.6875rem", background: "var(--gold-500)", color: "var(--navy-900)", padding: "0.1rem 0.4rem", borderRadius: "4px", fontWeight: 700 }}>
                    CHÍNH
                  </span>
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  {company.representative1} · Điều hành trực ban 24/7
                </span>
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--gold-600)" }}>
                {activeSheet === "call" ? "Gọi ngay →" : "Mở Zalo →"}
              </span>
            </a>

            {/* Option 2: Nguyen Huu Phuc */}
            <a
              href={activeSheet === "call" ? company.hotline2Tel : company.zalo2Link}
              target={activeSheet === "zalo" ? "_blank" : undefined}
              rel={activeSheet === "zalo" ? "noopener noreferrer" : undefined}
              onClick={() => setActiveSheet(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                background: "var(--cream-100)",
                border: "1px solid var(--cream-200)",
                textDecoration: "none",
                color: "var(--navy-900)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                  <span style={{ fontSize: "1.0625rem", fontWeight: 800 }}>
                    {company.hotline2}
                  </span>
                  <span style={{ fontSize: "0.6875rem", background: "rgba(20,32,63,0.1)", color: "var(--navy-800)", padding: "0.1rem 0.4rem", borderRadius: "4px", fontWeight: 600 }}>
                    SỐ 2
                  </span>
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  {company.representative2} · Phụ trách kinh doanh &amp; điều xe
                </span>
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy-700)" }}>
                {activeSheet === "call" ? "Gọi ngay →" : "Mở Zalo →"}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
