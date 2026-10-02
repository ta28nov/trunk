"use client";
import { useState } from "react";

const GROUPS = [
  { value: "", label: "Tất cả nhóm" },
  { value: "nhỏ", label: "Tải nhỏ" },
  { value: "trung", label: "Tải trung" },
  { value: "nặng", label: "Tải nặng" },
];

const BODY_TYPES = [
  { value: "", label: "Tất cả thùng" },
  { value: "Thùng kín", label: "Thùng kín" },
  { value: "Thùng bạt", label: "Thùng bạt" },
];

const BRANDS = [
  { value: "", label: "Tất cả hãng" },
  { value: "Hino", label: "Hino" },
  { value: "Hyundai", label: "Hyundai" },
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
      {/* Hero */}
      <section style={{ background: "var(--cream-100)", padding: "var(--section-y) 0 var(--space-12)" }}>
        <div className="wrap">
          <div className="eyebrow hero-animate-1" style={{ marginBottom: "1rem" }}>ĐỘI XE CHUYÊN DỤNG</div>
          <h1 className="hero-animate-2" style={{ fontSize: "var(--fs-h1)", color: "var(--navy-700)", marginBottom: "1rem" }}>
            Xe tải Hino & Hyundai<br />thùng kín và thùng bạt
          </h1>
          <p className="hero-animate-3" style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", maxWidth: "600px", lineHeight: 1.65 }}>
            Đội xe từ 3,5 đến 15 tấn, thùng kín bảo vệ hàng khô ráo và thùng bạt linh hoạt cho hàng cồng kềnh. Nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: "var(--space-8) 0 var(--space-4)" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Nhóm xe */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "var(--fs-small)", fontWeight: 600, color: "var(--text-muted)", marginRight: "0.5rem" }}>Tải trọng:</span>
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
              <span style={{ fontSize: "var(--fs-small)", fontWeight: 600, color: "var(--text-muted)", marginRight: "0.5rem" }}>Loại thùng:</span>
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

              <span style={{ fontSize: "var(--fs-small)", fontWeight: 600, color: "var(--text-muted)", marginInline: "0.75rem 0.5rem" }}>Hãng:</span>
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

      {/* Fleet grid */}
      <section style={{ paddingBottom: "var(--section-y)" }}>
        <div className="wrap">
          <div className="grid-3">
            {filtered.map((truck, idx) => (
              <div key={truck.id} className={`fleet-card reveal delay-${Math.min(idx + 1, 5)}`}>
                <div className="fleet-card-image">
                  <img
                    src={truck.image}
                    alt={`${truck.name} - xe tải Hậu Nguyễn`}
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                    <span className="fleet-tag">Tải {truck.group}</span>
                  </div>
                </div>
                <div className="fleet-card-body">
                  <h2 style={{ fontSize: "var(--fs-h3)", marginBottom: "0.75rem", color: "var(--navy-700)" }}>
                    {truck.name}
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", fontSize: "var(--fs-small)", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                    <span><strong style={{ color: "var(--text)" }}>{truck.tonnage} tấn</strong></span>
                    <span>{truck.volume_m3} khối</span>
                    {truck.brand && <span>{truck.brand}</span>}
                    {truck.body && <span>{truck.body}</span>}
                  </div>
                  {truck.suitable_for && (
                    <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                      {truck.suitable_for}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTruck(truck);
                      setQuoteSuccess(false);
                    }}
                    className="btn btn-primary"
                    style={{ width: "100%", fontSize: "var(--fs-small)", cursor: "pointer" }}
                  >
                    Báo giá xe này →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem 0", color: "var(--text-muted)" }}>
              Không có xe phù hợp với bộ lọc này.
            </div>
          )}
        </div>
      </section>

      {/* Comparison section */}
      <section className="section section-cream-alt">
        <div className="wrap">
          <h2 className="reveal" style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", textAlign: "center", marginBottom: "var(--space-8)" }}>
            Thùng kín và Thùng bạt
          </h2>
          <div className="compare-grid">
            <div className="compare-card reveal delay-1" style={{ background: "var(--white)" }}>
              <h3 style={{ color: "var(--navy-700)" }}>Thùng kín</h3>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Hàng khô ráo, chống mưa nắng và bụi
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  An toàn hàng hoá giá trị
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Hợp hàng tiêu dùng, điện máy, nội thất
                </li>
              </ul>
            </div>
            <div className="compare-card reveal delay-2" style={{ background: "var(--white)" }}>
              <h3 style={{ color: "var(--navy-700)" }}>Thùng bạt</h3>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Linh hoạt hàng cồng kềnh
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Xếp dỡ nhiều hướng
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Hợp vật liệu, nông sản, hàng dài
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal for selected truck */}
      {selectedTruck && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20, 32, 63, 0.6)",
            backdropFilter: "blur(4px)",
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
              background: "var(--white)",
              borderRadius: "var(--radius-md)",
              maxWidth: "520px",
              width: "100%",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-lg)",
              position: "relative",
              border: "1px solid var(--cream-200)",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedTruck(null)}
              aria-label="Đóng"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: "var(--text-muted)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {quoteSuccess ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" style={{ margin: "0 auto 1rem" }}><path d="M20 6L9 17l-5-5"/></svg>
                <h3 style={{ color: "var(--navy-700)", marginBottom: "0.5rem" }}>Đã mở Zalo nhận báo giá!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "var(--fs-small)", marginBottom: "1.5rem" }}>
                  Chúng tôi sẽ phản hồi nhanh nhất cho yêu cầu {selectedTruck.name}.
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
                  <span className="eyebrow" style={{ display: "block", marginBottom: "0.25rem" }}>YÊU CẦU BÁO GIÁ</span>
                  <h3 style={{ fontSize: "var(--fs-h3)", color: "var(--navy-700)" }}>
                    {selectedTruck.name}
                  </h3>
                  <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    Tải trọng {selectedTruck.tonnage} tấn · Thể tích {selectedTruck.volume_m3} khối
                  </p>
                </div>

                <div style={{ display: "grid", gap: "var(--space-3)" }}>
                  <div className="form-group">
                    <label className="form-label">Họ tên *</label>
                    <input type="text" name="name" className="form-input" placeholder="Nguyễn Văn A" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Số điện thoại *</label>
                    <input type="tel" name="phone" inputMode="tel" className="form-input" placeholder="09xx xxx xxx" required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                    <div className="form-group">
                      <label className="form-label">Điểm đi</label>
                      <input type="text" name="from" className="form-input" placeholder="VD: Thanh Hóa" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Điểm đến</label>
                      <input type="text" name="to" className="form-input" placeholder="VD: Hà Nội" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Loại hàng hoá</label>
                    <input type="text" name="cargo" className="form-input" placeholder="VD: Hàng khô, thiết bị..." />
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.75rem" }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                      Gửi báo giá qua Zalo
                    </button>
                    <a href={company.hotlineTel} className="btn btn-secondary" style={{ padding: "0 1rem" }}>
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
