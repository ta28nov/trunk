"use client";
import { useState, useEffect } from "react";
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

// Kiểm tra và lấy link Zalo doanh nghiệp hợp lệ (ưu tiên Hotline chính tiếp nhận điều hành 24/7)
function getValidZaloUrl(comp) {
  const primary = comp?.zaloLink;
  if (typeof primary === "string" && primary.trim().startsWith("https://zalo.me/")) {
    return primary.trim();
  }
  const secondary = comp?.zalo2Link;
  if (typeof secondary === "string" && secondary.trim().startsWith("https://zalo.me/")) {
    return secondary.trim();
  }
  // Fallback số điện thoại hotline chính đã chuẩn hóa
  const cleanPhone = (comp?.hotline || "0823040412").replace(/\D/g, "");
  return `https://zalo.me/${cleanPhone}`;
}

export default function FleetPageClient({ fleet, company }) {
  const [filterGroup, setFilterGroup] = useState("");
  const [filterBody, setFilterBody] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [lastQuoteUrl, setLastQuoteUrl] = useState("");
  const [lastQuoteMsg, setLastQuoteMsg] = useState("");
  const [copied, setCopied] = useState(false);

  // Prevent background scroll when modal is open and support ESC key
  useEffect(() => {
    if (selectedTruck) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedTruck(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedTruck]);

  const filtered = fleet.filter((t) => {
    if (filterGroup && t.group !== filterGroup) return false;
    if (filterBody && t.body && !t.body.includes(filterBody)) return false;
    if (filterBrand && t.brand && !t.brand.includes(filterBrand)) return false;
    return true;
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const from = (formData.get("from") || "").toString().trim();
    const to = (formData.get("to") || "").toString().trim();
    const cargo = (formData.get("cargo") || "").toString().trim();

    // Chỉ hiển thị các thông số xe đã xác nhận thực tế
    const confirmedSpecParts = [];
    if (selectedTruck?.tonnage) confirmedSpecParts.push(`${selectedTruck.tonnage} tấn`);
    if (selectedTruck?.volume_m3) confirmedSpecParts.push(`${selectedTruck.volume_m3} khối`);
    if (selectedTruck?.body) confirmedSpecParts.push(selectedTruck.body);
    const truckDesc = selectedTruck?.name
      ? `${selectedTruck.name}${confirmedSpecParts.length ? ` (${confirmedSpecParts.join(", ")})` : ""}`
      : "Xe tải theo yêu cầu";

    const msg = `Yêu cầu báo giá xe tải Hậu Nguyễn:
- Loại xe: ${truckDesc}
- Khách hàng: ${name}
- Số điện thoại: ${phone}
- Điểm lấy hàng: ${from || "Chưa ghi cụ thể"}
- Điểm trả hàng: ${to || "Chưa ghi cụ thể"}
- Loại hàng: ${cargo || "Chưa ghi cụ thể"}`;

    const targetZalo = getValidZaloUrl(company);
    const fullUrl = `${targetZalo}?text=${encodeURIComponent(msg)}`;

    setLastQuoteUrl(fullUrl);
    setLastQuoteMsg(msg);
    setCopied(false);

    // Tự động sao chép vào clipboard để khách có thể dán (Paste) nếu thiết bị không tự điền tham số ?text=
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(msg).catch(() => {});
    }

    window.open(fullUrl, "_blank", "noopener,noreferrer");
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
            <a href={company.hotlineTel} className="btn btn-primary" title="Gọi Hotline chính Nguyễn Hậu">
              <span>Hotline: {company.hotline} (A. Hậu)</span>
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

      {/* Transition: Dark Hero (#0A0E17) → Filter & Fleet (#FFFFFF) */}
      <div className="transition-zone tz-dark-to-white" aria-hidden="true" />

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
                      {truck.tonnage ? <span>Tải trọng: <strong style={{ color: "var(--navy-900)" }}>{truck.tonnage} tấn</strong></span> : null}
                      {truck.volume_m3 ? <span>Thể tích: <strong style={{ color: "var(--navy-900)" }}>{truck.volume_m3} khối</strong></span> : null}
                      {truck.brand ? <span>{truck.brand}</span> : null}
                      {truck.body ? <span>{truck.body}</span> : null}
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
            <div style={{ display: "inline-flex", alignItems: "center", marginBottom: "0.75rem", color: "var(--gold-600)" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>TƯ VẤN QUY CÁCH XE</span>
            </div>
            <h2 style={{ fontSize: "var(--fs-h1)", color: "var(--navy-900)", marginBottom: "1rem" }}>
              Thùng Kín hay Thùng Bạt?
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              Lựa chọn đúng kiểu thùng xe giúp bảo vệ trọn vẹn chất lượng hàng hóa và thuận tiện cho việc nâng hạ tại kho.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "2rem" }}>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"/></svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Fleet Showcase (#FFFFFF) → Dark Navy Footer (#0D1529) */}
      <div className="transition-zone tz-white-to-footer" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          MODAL BÁO GIÁ NHANH (RESPONSIVE MOBILE-FIRST)
         ═══════════════════════════════════════════════════════════════ */}
      {selectedTruck && (
        <div
          role="dialog"
          aria-modal="true"
          className="fleet-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedTruck(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(10, 14, 23, 0.8)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(0.5rem, 2.5vw, 1.25rem)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            className="fleet-modal-card"
            style={{
              background: "#FFFFFF",
              borderRadius: "clamp(16px, 3vw, 24px)",
              maxWidth: "520px",
              width: "100%",
              maxHeight: "min(92vh, 660px)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
              position: "relative",
              border: "1.5px solid var(--cream-200)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              margin: "auto",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.25rem 0.75rem",
                position: "relative",
                borderBottom: "1px solid var(--cream-100)",
                paddingRight: "3.5rem",
                background: "var(--cream-50)",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedTruck(null)}
                aria-label="Đóng cửa sổ báo giá"
                style={{
                  position: "absolute",
                  top: "0.875rem",
                  right: "0.875rem",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1px solid var(--cream-200)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--navy-900)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <span className="eyebrow" style={{ display: "inline-block", marginBottom: "0.2rem", fontSize: "0.75rem" }}>
                YÊU CẦU BÁO GIÁ XE
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "var(--navy-900)", fontWeight: 800, margin: 0, lineHeight: 1.25 }}>
                {selectedTruck.name}
              </h3>
              {(() => {
                const confirmed = [];
                if (selectedTruck.tonnage) confirmed.push(<span key="t">Tải trọng: <strong>{selectedTruck.tonnage} tấn</strong></span>);
                if (selectedTruck.volume_m3) confirmed.push(<span key="v">Thể tích: <strong>{selectedTruck.volume_m3} khối</strong></span>);
                if (selectedTruck.body) confirmed.push(<span key="b">{selectedTruck.body}</span>);
                if (selectedTruck.brand) confirmed.push(<span key="br">{selectedTruck.brand}</span>);
                if (confirmed.length === 0) return null;
                return (
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: "0.25rem 0 0", lineHeight: 1.35 }}>
                    {confirmed.map((item, idx) => (
                      <span key={idx}>
                        {idx > 0 && " · "}
                        {item}
                      </span>
                    ))}
                  </p>
                );
              })()}
            </div>

            {/* Scrollable Form Body */}
            <div
              style={{
                padding: "1rem 1.25rem 1.25rem",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                flex: 1,
              }}
            >
              {quoteSuccess ? (
                <div style={{ textAlign: "center", padding: "1.25rem 0" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(217, 162, 27, 0.15)", color: "var(--gold-600)", display: "grid", placeItems: "center", margin: "0 auto 0.85rem" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <h3 style={{ color: "var(--navy-900)", marginBottom: "0.35rem", fontSize: "1.2rem", fontWeight: 800 }}>
                    Tiếp tục gửi yêu cầu qua Zalo
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.55 }}>
                    Vui lòng kiểm tra nội dung tin nhắn và nhấn gửi trên Zalo để hoàn tất yêu cầu báo giá.
                  </p>

                  {lastQuoteMsg && (
                    <div style={{ background: "var(--cream-50)", border: "1px dashed var(--cream-200)", borderRadius: "var(--radius-md)", padding: "0.85rem", marginBottom: "1.25rem", textAlign: "left" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--navy-900)", textTransform: "uppercase" }}>
                          Nội dung báo giá đã soạn:
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
                              navigator.clipboard.writeText(lastQuoteMsg);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2500);
                            }
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            color: copied ? "#16a34a" : "var(--gold-600)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            padding: "0.2rem 0.4rem",
                          }}
                        >
                          {copied ? "✓ Đã sao chép" : "Sao chép lại"}
                        </button>
                      </div>
                      <pre style={{ margin: 0, fontSize: "0.8125rem", color: "var(--navy-900)", whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.45 }}>
                        {lastQuoteMsg}
                      </pre>
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <a
                      href={lastQuoteUrl || getValidZaloUrl(company)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: "100%", justifyContent: "center", minHeight: "46px" }}
                    >
                      Mở lại Zalo tiếp nhận
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTruck(null);
                        setQuoteSuccess(false);
                      }}
                      className="btn btn-secondary"
                      style={{ width: "100%", justifyContent: "center", minHeight: "46px" }}
                    >
                      Đóng cửa sổ
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8125rem", fontWeight: 700, marginBottom: "0.3rem", display: "block", color: "var(--navy-900)" }}>
                        Họ tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="ch7-input"
                        placeholder="Nguyễn Văn A"
                        required
                        style={{ height: "44px", fontSize: "1rem", width: "100%", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8125rem", fontWeight: 700, marginBottom: "0.3rem", display: "block", color: "var(--navy-900)" }}>
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        inputMode="tel"
                        className="ch7-input"
                        placeholder="09xx xxx xxx"
                        required
                        style={{ height: "44px", fontSize: "1rem", width: "100%", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8125rem", fontWeight: 700, marginBottom: "0.3rem", display: "block", color: "var(--navy-900)" }}>
                        Điểm lấy hàng
                      </label>
                      <input
                        type="text"
                        name="from"
                        className="ch7-input"
                        placeholder="VD: Thanh Hóa"
                        style={{ height: "44px", fontSize: "1rem", width: "100%", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8125rem", fontWeight: 700, marginBottom: "0.3rem", display: "block", color: "var(--navy-900)" }}>
                        Điểm trả hàng
                      </label>
                      <input
                        type="text"
                        name="to"
                        className="ch7-input"
                        placeholder="VD: Hà Nội"
                        style={{ height: "44px", fontSize: "1rem", width: "100%", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.8125rem", fontWeight: 700, marginBottom: "0.3rem", display: "block", color: "var(--navy-900)" }}>
                      Loại hàng hoá
                    </label>
                    <input
                      type="text"
                      name="cargo"
                      className="ch7-input"
                      placeholder="VD: Hàng khô, thiết bị, bao bì..."
                      style={{ height: "44px", fontSize: "1rem", width: "100%", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Actions buttons */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "0.6rem", marginTop: "0.4rem" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ minHeight: "46px", justifyContent: "center", fontSize: "0.9rem", padding: "0 1rem", fontWeight: 700 }}
                    >
                      <span>Gửi báo giá qua Zalo →</span>
                    </button>
                    <a
                      href={company.hotlineTel}
                      className="btn btn-secondary"
                      style={{ minHeight: "46px", justifyContent: "center", fontSize: "0.85rem", padding: "0 1rem", whiteSpace: "nowrap" }}
                    >
                      Gọi điện
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
