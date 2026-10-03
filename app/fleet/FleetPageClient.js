"use client";
import { useState } from "react";
import Link from "next/link";

const GROUPS = [
  { value: "", label: "Tất cả nhóm" },
  { value: "nhỏ", label: "Tải nhỏ (3.5T)" },
  { value: "trung", label: "Tải trung (8T)" },
  { value: "nặng", label: "Tải nặng (15T 3 Chân)" },
];

const BODY_TYPES = [
  { value: "", label: "Tất cả loại thùng" },
  { value: "Thùng kín", label: "Thùng kín Inox" },
  { value: "Thùng bạt", label: "Thùng bạt mui phủ" },
];

const BRANDS = [
  { value: "", label: "Tất cả hãng" },
  { value: "Hino", label: "Hino (Nhật Bản)" },
  { value: "Hyundai", label: "Hyundai (Hàn Quốc)" },
];

export default function FleetPageClient({ fleet, company }) {
  const [filterGroup, setFilterGroup] = useState("");
  const [filterBody, setFilterBody] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const filtered = fleet.filter((t) => {
    if (filterGroup && t.group !== filterGroup) return false;
    if (filterBody && t.body && !t.body.includes(filterBody)) return false;
    if (filterBrand && t.brand && !t.brand.includes(filterBrand)) return false;
    return true;
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    window.open(company.zaloLink, "_blank");
    setQuoteSuccess(true);
  };

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO BANNER — 100SVH FULL VIEWPORT (LIKE HOMEPAGE)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="subpage-hero" id="hero">
        <div className="subpage-hero-bg">
          <img
            src="/images/anh-xe/hino-thung-kin-trang-va-xe-thung-bat-03.jpg"
            alt="Đội xe Hino và Hyundai chuyên dụng Hậu Nguyễn"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="subpage-hero-vignette" />

        <div className="subpage-hero-container">
          <div className="subpage-hero-eyebrow">
            <span className="subpage-hero-line" />
            <span>HINO &amp; HYUNDAI CHUYÊN DỤNG</span>
          </div>

          <h1 className="subpage-hero-title">
            Đội Xe Tải Đường Dài <br />
            <span style={{ color: "var(--gold-300)" }}>Thùng Kín &amp; Thùng Bạt 3.5T – 15T</span>
          </h1>

          <p className="subpage-hero-desc">
            100% xe chính chủ vận hành, động cơ bốc khỏe leo dốc an toàn, kết cấu thùng bạt mui phủ gia cố kiên cố và thùng kín Inox chống mưa dột tuyệt đối cho các tuyến miền Bắc &amp; Tây Bắc.
          </p>

          <div className="subpage-hero-actions">
            <a href={company.hotlineTel} className="btn btn-primary">
              <span>Hotline điều xe: {company.hotline}</span>
            </a>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
            >
              <span>Chat Zalo tư vấn chọn xe</span>
            </a>
            <a href="#bo-loc-xe" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Lọc danh sách đội xe</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Transition Zone: Hero (Dark #0A0E17) → Filter (#FFFFFF) */}
      <div className="transition-zone tz-hero-to-light" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          BỘ LỌC TẢI TRỌNG & LOẠI THÙNG
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "2.5rem 0 1.5rem", background: "#FFFFFF", borderBottom: "1px solid var(--cream-200)" }} id="bo-loc-xe">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Nhóm tải trọng */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy-900)", marginRight: "0.5rem" }}>
                Tải trọng:
              </span>
              {GROUPS.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setFilterGroup(g.value)}
                  className={`filter-btn ${filterGroup === g.value ? "active" : ""}`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Loại thùng & Hãng */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy-900)", marginRight: "0.5rem" }}>
                Loại thùng:
              </span>
              {BODY_TYPES.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setFilterBody(b.value)}
                  className={`filter-btn ${filterBody === b.value ? "active" : ""}`}
                >
                  {b.label}
                </button>
              ))}

              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy-900)", marginInline: "1rem 0.5rem" }}>
                Hãng xe:
              </span>
              {BRANDS.map((br) => (
                <button
                  key={br.value}
                  type="button"
                  onClick={() => setFilterBrand(br.value)}
                  className={`filter-btn ${filterBrand === br.value ? "active" : ""}`}
                >
                  {br.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DANH SÁCH ĐỘI XE
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(3.5rem, 5vw, 6rem) 0" }}>
        <div className="wrap">
          <div className="grid-3">
            {filtered.map((truck) => (
              <div
                key={truck.id}
                className="fleet-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--cream-200)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(20, 32, 63, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div className="fleet-card-image" style={{ position: "relative", aspectRatio: "4 / 3", background: "#0E162A" }}>
                  <img
                    src={truck.image}
                    alt={`${truck.name} - xe tải Hậu Nguyễn Transport`}
                    width={600}
                    height={450}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                    <span className="fleet-tag" style={{ background: "rgba(20, 32, 63, 0.85)", color: "var(--gold-300)", backdropFilter: "blur(4px)", border: "1px solid rgba(217, 162, 27, 0.4)" }}>
                      Tải {truck.group}
                    </span>
                  </div>
                </div>

                <div className="fleet-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--navy-900)" }}>
                      {truck.name}
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.25rem", fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                      <span>Tải trọng: <strong style={{ color: "var(--navy-900)" }}>{truck.tonnage} tấn</strong></span>
                      <span>Thể tích: <strong style={{ color: "var(--navy-900)" }}>{truck.volume_m3} khối</strong></span>
                      {truck.brand && <span>{truck.brand}</span>}
                      {truck.body && <span>{truck.body}</span>}
                    </div>
                    {truck.suitable_for && (
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                        {truck.suitable_for}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTruck(truck);
                      setQuoteSuccess(false);
                    }}
                    className="btn btn-primary"
                    style={{ width: "100%", fontSize: "0.875rem", cursor: "pointer", justifyContent: "center" }}
                  >
                    Báo giá xe này →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontSize: "1.125rem" }}>
              Không có phương tiện phù hợp với bộ lọc hiện tại. Vui lòng chọn lại hoặc gọi trực tiếp hotline.
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SO SÁNH THÙNG KÍN VÀ THÙNG BẠT
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(5rem, 6vw, 8rem) 0", background: "#FFFFFF", borderTop: "1px solid var(--cream-200)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: "var(--gold-600)" }}>
              <span style={{ width: "24px", height: "2px", background: "var(--gold-500)" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>TƯ VẤN QUY CÁCH XE</span>
            </div>
            <h2 style={{ fontSize: "var(--fs-h1)", color: "var(--navy-900)", marginBottom: "1rem" }}>
              Thùng Kín hay Thùng Bạt?
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              Lựa chọn đúng kiểu thùng xe giúp bảo vệ trọn vẹn chất lượng hàng hóa và thuận tiện cho việc nâng hạ tại kho.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* Thùng Kín */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid var(--cream-200)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 14px 36px rgba(20, 32, 63, 0.08)",
            }}>
              <div style={{ display: "inline-block", background: "rgba(217, 162, 27, 0.12)", color: "var(--gold-700)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 800, marginBottom: "1.25rem" }}>
                BẢO VỆ CHUYÊN BIỆT
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "1.25rem" }}>
                Thùng Kín Inox Cách Nhiệt
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "grid", gap: "1rem" }}>
                {[
                  "Chống mưa bão, sương mù và bụi bẩn 100% trên các chặng đường dài.",
                  "Khóa niêm phong và dán seal an toàn, bảo vệ hàng hóa giá trị cao.",
                  "Lý tưởng cho hàng điện máy, điện tử, dược phẩm, bao bì, thực phẩm khô.",
                ].map((txt, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thùng Bạt */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid var(--cream-200)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 14px 36px rgba(20, 32, 63, 0.08)",
            }}>
              <div style={{ display: "inline-block", background: "rgba(20, 32, 63, 0.08)", color: "var(--navy-900)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 800, marginBottom: "1.25rem" }}>
                ĐA DỤNG LINH HOẠT
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "1.25rem" }}>
                Thùng Bạt Mui Phủ Kiên Cố
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "grid", gap: "1rem" }}>
                {[
                  "Dễ dàng mở kèo, dỡ bạt từ bên hông hoặc cẩu hạ trực tiếp từ nóc thùng xe.",
                  "Chứa được các kiện hàng cồng kềnh, cấu kiện cơ khí, máy móc có chiều cao lớn.",
                  "Lý tưởng cho hàng sắt thép, vật liệu công trình, nông sản đóng bao tải.",
                ].map((txt, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Content (#FFFFFF) → Footer Paper (#ebeee7) */}
      <div className="transition-zone tz-white-to-paper" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          MODAL BÁO GIÁ NHANH
         ═══════════════════════════════════════════════════════════════ */}
      {selectedTruck && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(10, 14, 23, 0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "grid",
            placeItems: "center",
            padding: "1rem",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedTruck(null);
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              maxWidth: "520px",
              width: "100%",
              padding: "2.5rem 2rem",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
              position: "relative",
              border: "1px solid var(--cream-200)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedTruck(null)}
              aria-label="Đóng"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: "var(--text-muted)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {quoteSuccess ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" style={{ margin: "0 auto 1rem" }}><path d="M20 6L9 17l-5-5" /></svg>
                <h3 style={{ color: "var(--navy-900)", marginBottom: "0.5rem" }}>Đã mở Zalo tiếp nhận báo giá!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  Điều xe sẽ liên hệ phản hồi ngay cho quý khách.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedTruck(null)}
                  className="btn btn-secondary"
                  style={{ width: "100%" }}
                >
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span className="eyebrow" style={{ display: "block", marginBottom: "0.25rem" }}>YÊU CẦU BÁO GIÁ XE</span>
                  <h3 style={{ fontSize: "1.375rem", color: "var(--navy-900)", fontWeight: 800 }}>
                    {selectedTruck.name}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    Tải trọng {selectedTruck.tonnage} tấn · Thể tích {selectedTruck.volume_m3} khối
                  </p>
                </div>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label">Họ tên của bạn *</label>
                    <input type="text" name="name" className="form-input" placeholder="Nguyễn Văn A" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Số điện thoại *</label>
                    <input type="tel" name="phone" inputMode="tel" className="form-input" placeholder="09xx xxx xxx" required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="form-group">
                      <label className="form-label">Điểm lấy hàng</label>
                      <input type="text" name="from" className="form-input" placeholder="VD: Thanh Hóa" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Điểm trả hàng</label>
                      <input type="text" name="to" className="form-input" placeholder="VD: Hà Nội" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Loại hàng hoá</label>
                    <input type="text" name="cargo" className="form-input" placeholder="VD: Hàng khô, thiết bị..." />
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                      Gửi báo giá qua Zalo
                    </button>
                    <a href={company.hotlineTel} className="btn btn-secondary" style={{ padding: "0 1.25rem" }}>
                      Gọi điện
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
