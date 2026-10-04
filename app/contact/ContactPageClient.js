"use client";
import { useState } from "react";
import company from "../data/company.json";
import fleetData from "../data/fleet.json";
import FAQSection from "../components/FAQSection";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(company.zaloLink, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO BANNER — 100SVH FULL VIEWPORT (LIKE HOMEPAGE)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="subpage-hero" id="hero">
        <div className="subpage-hero-bg">
          <img
            src="/images/about/hub.jpg"
            alt="Văn phòng và điều phối bãi xe Hậu Nguyễn Transport"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="subpage-hero-vignette" />

        <div className="subpage-hero-container">
          <div className="subpage-hero-eyebrow">
            <span>KẾT NỐI TRỰC TIẾP · PHẢN HỒI 24/7</span>
          </div>

          <h1 className="subpage-hero-title">
            Liên Hệ Ban Điều Xe <br />
            <span style={{ color: "var(--gold-300)" }}>Hậu Nguyễn Transport</span>
          </h1>

          <p className="subpage-hero-desc">
            Gọi hotline trực ban, trao đổi nhanh qua Zalo hoặc để lại thông tin đơn hàng dưới đây. Chúng tôi phản hồi phương án điều xe tối ưu và báo giá chuẩn xác chỉ sau 5 phút.
          </p>

          <div className="subpage-hero-actions">
            <a href={company.hotlineTel} className="btn btn-primary">
              <span>Hotline trực ban: {company.hotline}</span>
            </a>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
            >
              <span>Chat Zalo điều xe</span>
            </a>
            <a href="#thong-tin-lien-he" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Thông tin liên hệ &amp; Bản đồ</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Transition Zone: Hero (Dark #0A0E17) → Contact Info (#FAF8F2) */}
      <div className="transition-zone tz-hero-to-light" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT INFO & INQUIRY FORM
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0" }} id="thong-tin-lien-he">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(1.5rem, 4vw, 3rem)", alignItems: "start" }}>
            {/* Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Hotline Card */}
              <div style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--cream-200)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                boxShadow: "0 8px 24px rgba(20, 32, 63, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                    Hotline điều xe trực ban 24/7
                  </span>
                  <a href={company.hotlineTel} style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--navy-900)" }}>
                    {company.hotline}
                  </a>
                </div>
              </div>

              {/* Zalo Card */}
              <div style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--cream-200)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                boxShadow: "0 8px 24px rgba(20, 32, 63, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "rgba(20, 32, 63, 0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-700)" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                    Nhắn tin Zalo nhận báo giá
                  </span>
                  <a href={company.zaloLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--gold-600)" }}>
                    {company.zalo}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--cream-200)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                boxShadow: "0 8px 24px rgba(20, 32, 63, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                    Văn phòng &amp; Bãi đỗ xe trung tâm
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-900)" }}>
                    {company.address}
                  </span>
                </div>
              </div>

              {/* Tax Code Card */}
              <div style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--cream-200)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                boxShadow: "0 8px 24px rgba(20, 32, 63, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "rgba(20, 32, 63, 0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-700)" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                    Mã số thuế doanh nghiệp
                  </span>
                  <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)" }}>
                    {company.taxCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="ch7-card" style={{ maxWidth: "100%", width: "100%", margin: 0, minWidth: 0, boxSizing: "border-box" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" style={{ margin: "0 auto 1.25rem" }}><path d="M20 6L9 17l-5-5"/></svg>
                  <h3 style={{ color: "var(--navy-900)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>Yêu cầu đã được chuyển tới Zalo!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginBottom: "2rem", lineHeight: 1.6 }}>
                    Ban điều phối Hậu Nguyễn sẽ đối chiếu lịch trình xe và gọi lại phản hồi ngay cho quý khách.
                  </p>
                  <a href={company.hotlineTel} className="ch7-submit-btn" style={{ textDecoration: "none" }}>
                    Gọi ngay hotline: {company.hotline}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ch7-form">
                  <div style={{ marginBottom: "0.5rem" }}>
                    <div className="eyebrow" style={{ marginBottom: "0.25rem" }}>ĐẶT LỊCH XE NHANH</div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy-900)", margin: 0 }}>
                      Để lại thông tin chuyến hàng
                    </h3>
                  </div>

                  <div className="ch7-form-row">
                    <div className="form-group">
                      <label className="form-label">Họ và tên của bạn *</label>
                      <input type="text" name="name" className="ch7-input" placeholder="Nguyễn Văn A" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Số điện thoại liên hệ *</label>
                      <input type="tel" name="phone" inputMode="tel" className="ch7-input" placeholder="09xx xxx xxx" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Dự kiến loại xe</label>
                    <select name="vehicle" className="ch7-input" style={{ color: "var(--navy-900)", fontWeight: 500 }}>
                      <option value="" style={{ color: "#14203F", backgroundColor: "#FFFFFF" }}>-- Chọn loại xe phù hợp --</option>
                      {fleetData.map((t) => (
                        <option key={t.id} value={t.name} style={{ color: "#14203F", backgroundColor: "#FFFFFF" }}>
                          {t.name} ({t.tonnage} tấn · {t.volume_m3} khối)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ch7-form-row">
                    <div className="form-group">
                      <label className="form-label">Điểm nhận hàng</label>
                      <input type="text" name="from" className="ch7-input" placeholder="VD: Thanh Hóa" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Điểm trả hàng</label>
                      <input type="text" name="to" className="ch7-input" placeholder="VD: Hà Nội, Sơn La..." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quy cách &amp; loại hàng</label>
                    <input type="text" name="cargo" className="ch7-input" placeholder="VD: Điện máy, nội thất, vật tư..." />
                  </div>

                  <button type="submit" className="ch7-submit-btn">
                    <span>Nhận phương án &amp; báo giá qua Zalo</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BẢN ĐỒ VỊ TRÍ TRỤ SỞ & BÃI XE
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "0 0 clamp(4.5rem, 6vw, 7.5rem)", background: "var(--cream-50)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>VỊ TRÍ BÃI XE</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)" }}>
              Bản đồ định vị văn phòng &amp; Bãi xe Hậu Nguyễn
            </h2>
          </div>

          <div className="map-showcase">
            <iframe
              src={company.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ 92 Đông Xuân, Xã Trường Văn, Tỉnh Thanh Hóa"
              style={{ width: "100%", height: "100%", border: 0 }}
            />

            <div className="map-overlay-card">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#16a34a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
                Đang trực ban tiếp nhận
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                {company.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                <strong>Trụ sở:</strong> {company.address}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={company.hotlineTel} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Gọi ngay: {company.hotline}
                </a>
                <a
                  href="https://maps.google.com/?q=92+Đông+Xuân+Trường+Văn+Thanh+Hóa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Chỉ đường Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CÂU HỎI THƯỜNG GẶP (FAQ ACCORDION)
         ═══════════════════════════════════════════════════════════════ */}
      <FAQSection title="Hỏi đáp thường gặp khi đặt xe &amp; giao nhận hàng" />

      {/* Transition Zone: Content (#FAF8F2) → Footer Paper (#0D1529) */}
      <div className="transition-zone tz-white-to-paper" aria-hidden="true" />
    </div>
  );
}
