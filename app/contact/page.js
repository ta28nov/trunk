"use client";
import { useState } from "react";
import company from "../data/company.json";
import fleetData from "../data/fleet.json";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(company.zaloLink, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--cream-100)", padding: "var(--section-y) 0 var(--space-12)" }}>
        <div className="wrap">
          <div className="eyebrow hero-animate-1" style={{ marginBottom: "1rem" }}>LIÊN HỆ &amp; BÁO GIÁ</div>
          <h1 className="hero-animate-2" style={{ fontSize: "var(--fs-h1)", color: "var(--navy-700)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Liên hệ Hậu Nguyễn Transport
          </h1>
          <p className="hero-animate-3" style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", maxWidth: "650px", lineHeight: 1.65 }}>
            Gọi điện trực tiếp hotline, nhắn Zalo hoặc để lại thông tin đơn hàng dưới đây. Đội ngũ điều phối bãi xe Hậu Nguyễn sẽ phản hồi và gửi phương án xe tối ưu nhất cho quý khách.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gap: "3rem" }} className="contact-grid">
            {/* Contact info cards */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Phone */}
                <div className="card reveal">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block" }}>Hotline trực ban điều xe 24/7</span>
                      <a href={company.hotlineTel} style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--navy-700)" }}>
                        {company.hotline}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Zalo */}
                <div className="card reveal delay-1">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block" }}>Nhắn tin Zalo nhận báo giá ngay</span>
                      <a href={company.zaloLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--gold-600)" }}>
                        {company.zalo}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card reveal delay-2">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block" }}>Hòm thư điện tử</span>
                      <a href={`mailto:${company.email}`} style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-700)", wordBreak: "break-all" }}>
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="card reveal delay-3">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block" }}>Địa chỉ văn phòng &amp; Bãi xe</span>
                      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-700)" }}>
                        {company.address}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MST */}
                <div className="card reveal delay-4">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block" }}>Mã số thuế doanh nghiệp</span>
                      <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy-700)" }}>
                        {company.taxCode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="reveal delay-1" style={{ background: "var(--white)", borderRadius: "var(--radius-md)", padding: "var(--space-8)", border: "1px solid var(--cream-200)", boxShadow: "var(--shadow-sm)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" style={{ margin: "0 auto 1rem" }}><path d="M20 6L9 17l-5-5"/></svg>
                  <h3 style={{ color: "var(--navy-700)", marginBottom: "0.75rem" }}>Cảm ơn bạn!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "var(--fs-small)", marginBottom: "1.5rem" }}>
                    Yêu cầu đã được chuyển tới Zalo điều xe của Hậu Nguyễn.
                  </p>
                  <a href={company.hotlineTel} className="btn btn-primary">
                    Gọi hotline {company.hotline}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>ĐẶT XE NHANH CHÓNG</div>
                  <h3 style={{ fontSize: "var(--fs-h3)", color: "var(--navy-700)", marginBottom: "var(--space-6)" }}>
                    Điền thông tin yêu cầu báo giá
                  </h3>
                  <div style={{ display: "grid", gap: "var(--space-4)" }}>
                    <div className="form-group">
                      <label className="form-label">Họ và tên *</label>
                      <input type="text" name="name" className="form-input" placeholder="Nguyễn Văn A" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Số điện thoại *</label>
                      <input type="tel" name="phone" inputMode="tel" className="form-input" placeholder="09xx xxx xxx" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Loại xe dự kiến</label>
                      <select name="vehicle" className="form-select" style={{ color: "var(--navy-700)", fontWeight: 500 }}>
                        <option value="" style={{ color: "#14203F", backgroundColor: "#FFFFFF" }}>-- Chọn loại xe phù hợp --</option>
                        {fleetData.map((t) => (
                          <option key={t.id} value={t.name} style={{ color: "#14203F", backgroundColor: "#FFFFFF" }}>
                            {t.name} ({t.tonnage} tấn · {t.volume_m3} khối)
                          </option>
                        ))}
                      </select>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                      <div className="form-group">
                        <label className="form-label">Điểm đi (Tỉnh/Huyện)</label>
                        <input type="text" name="from" className="form-input" placeholder="VD: Thanh Hóa" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Điểm đến (Tỉnh/Huyện)</label>
                        <input type="text" name="to" className="form-input" placeholder="VD: Hà Nội, Sơn La..." />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Loại hàng &amp; Quy cách</label>
                      <input type="text" name="cargo" className="form-input" placeholder="VD: Điện máy, nội thất, vật liệu..." />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                      Gửi yêu cầu báo giá qua Zalo
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map showcase */}
      <section className="section" style={{ background: "var(--cream-100)", paddingTop: 0, paddingBottom: "var(--gap-l)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>VỊ TRÍ BẢN ĐỒ</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Bản đồ định vị văn phòng &amp; Bãi đỗ xe
            </h2>
          </div>

          <div className="map-showcase reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.5!2d105.75!3d19.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4bqg4buLYSBjaOG7iSA5MiDEkMO0bmcgWHXDom4sIFRyxrDhu51uZyBWxg3uLCBUaGFuaCBIw7Nh!5e0!3m2!1svi!2svn!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ 92 Đông Xuân, Xã Trường Văn, Tỉnh Thanh Hóa"
              style={{ width: "100%", height: "100%", border: 0 }}
            />

            <div className="map-overlay-card">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#16a34a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
                Đang mở cửa tiếp nhận
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                {company.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                <strong>Vị trí:</strong> {company.address}
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
    </div>
  );
}
