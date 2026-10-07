"use client";
import { useState, useRef, useEffect } from "react";
import company from "../data/company.json";

export default function FloatingZalo() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <aside
      ref={containerRef}
      className="floating-hotline-wrapper"
      aria-label="Liên hệ trực ban & điều phối Hậu Nguyễn"
    >
      {/* Expandable popup panel */}
      {isOpen && (
        <div className="floating-hotline-popup">
          <div className="floating-hotline-popup-header">
            <div>
              <span className="floating-hotline-popup-eyebrow">HOTLINE &amp; ZALO 24/7</span>
              <h4 className="floating-hotline-popup-title">Liên hệ điều phối trực tiếp</h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="floating-hotline-popup-close"
              aria-label="Đóng bảng liên hệ"
            >
              ✕
            </button>
          </div>

          <div className="floating-hotline-list">
            {/* Contact 1: Nguyen Hau (Chính) */}
            <div className="floating-contact-card primary">
              <div className="floating-contact-info">
                <div className="floating-contact-name-row">
                  <span className="floating-contact-name">{company.representative1}</span>
                  <span className="floating-badge-primary">CHÍNH</span>
                </div>
                <span className="floating-contact-role">Trực ban bãi xe &amp; Điều hành 24/7</span>
                <span className="floating-contact-phone">{company.hotline}</span>
              </div>
              <div className="floating-contact-actions">
                <a
                  href={company.hotlineTel}
                  className="floating-btn-call"
                  title={`Gọi ${company.representative1}: ${company.hotline}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Gọi ngay
                </a>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-btn-zalo"
                  title={`Chat Zalo ${company.representative1}`}
                >
                  Chat Zalo
                </a>
              </div>
            </div>

            {/* Contact 2: Nguyen Huu Phuc (Số 2) */}
            <div className="floating-contact-card secondary">
              <div className="floating-contact-info">
                <div className="floating-contact-name-row">
                  <span className="floating-contact-name">{company.representative2}</span>
                  <span className="floating-badge-secondary">SỐ 2</span>
                </div>
                <span className="floating-contact-role">Phụ trách kinh doanh &amp; Điều phối tuyến</span>
                <span className="floating-contact-phone">{company.hotline2}</span>
              </div>
              <div className="floating-contact-actions">
                <a
                  href={company.hotline2Tel}
                  className="floating-btn-call outline"
                  title={`Gọi ${company.representative2}: ${company.hotline2}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Gọi
                </a>
                <a
                  href={company.zalo2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-btn-zalo"
                  title={`Chat Zalo ${company.representative2}`}
                >
                  Chat Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact trigger pill: Minimal footprint, 1-click call to Nguyen Hau, toggle for more */}
      <div className="floating-trigger-pill">
        <a
          href={company.hotlineTel}
          className="floating-trigger-main-call"
          title={`Gọi ngay Hotline chính: ${company.hotline} (${company.representative1})`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span className="floating-trigger-number">{company.hotline}</span>
          <span className="floating-trigger-sub">A. Hậu</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`floating-trigger-toggle-btn ${isOpen ? "active" : ""}`}
          title={isOpen ? "Thu gọn bảng liên hệ" : "Xem thêm Hotline 2 & Chat Zalo"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span style={{ fontSize: "13px", lineHeight: 1, padding: "0 2px" }}>✕</span>
          ) : (
            <>
              <span className="floating-zalo-mini-badge">Zalo</span>
              <span className="floating-chevron">▾</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
