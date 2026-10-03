"use client";
import { useState } from "react";
import Link from "next/link";
import company from "../data/company.json";
import fleetData from "../data/fleet.json";

export default function PricingPage() {
  const [cargoType, setCargoType] = useState("");
  const [fromLoc, setFromLoc] = useState("");
  const [toLoc, setToLoc] = useState("");
  const [weight, setWeight] = useState("");

  const handleConsultZalo = (e) => {
    e.preventDefault();
    const msg = `Xin chào Hậu Nguyễn, tôi cần báo giá vận chuyển:\n- Từ: ${fromLoc || "..."}\n- Đến: ${toLoc || "..."}\n- Loại hàng: ${cargoType || "..."}\n- Tải trọng dự kiến: ${weight || "..."}`;
    window.open(company.zaloLink, "_blank");
  };

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO BANNER — 100SVH FULL VIEWPORT (LIKE HOMEPAGE)
          Visual: /images/pricing/cargo.jpg (Industrial strapping & cargo lashing)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="subpage-hero" id="hero">
        <div className="subpage-hero-bg">
          <img
            src="/images/pricing/cargo.jpg"
            alt="Quy chuẩn chằng buộc hàng hóa và đai cáp chuyên dụng xe Hậu Nguyễn"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="subpage-hero-vignette" />

        <div className="subpage-hero-container">
          <div className="subpage-hero-eyebrow">
            <span className="subpage-hero-line" />
            <span>MINH BẠCH CHI PHÍ · KHÔNG MÔI GIỚI</span>
          </div>

          <h1 className="subpage-hero-title">
            Báo Giá Cước Trực Tiếp <br />
            <span style={{ color: "var(--gold-300)" }}>Tối Ưu Theo Từng Loại Xe</span>
          </h1>

          <p className="subpage-hero-desc">
            Làm việc trực tiếp với đội ngũ chủ xe Hậu Nguyễn. Cước phí được tính toán chính xác theo tải trọng xe, khoảng cách thực tế và đặc tính bảo quản hàng hóa. Cam kết trọn gói, xuất hóa đơn VAT đầy đủ.
          </p>

          <div className="subpage-hero-actions">
            <a href={company.hotlineTel} className="btn btn-primary">
              <span>Hotline báo giá ngay: {company.hotline}</span>
            </a>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
            >
              <span>Chat Zalo nhận bảng tính cước</span>
            </a>
            <a href="#danh-muc-xe" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Xem bảng cước các xe</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Transition Zone: Hero (Dark #0A0E17) → Biểu phí khung (#FFFFFF) */}
      <div className="transition-zone tz-hero-to-light" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          BIỂU PHÍ KHUNG THEO ĐỘI XE
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }} id="danh-muc-xe">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>DANH MỤC PHƯƠNG TIỆN</div>
            <h2 style={{ fontSize: "var(--fs-h1)", color: "var(--navy-900)", marginBottom: "1rem" }}>
              Khung cước tham khảo theo trọng tải xe
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              Để nhận báo giá chính xác cho lộ trình cụ thể của quý khách, vui lòng nhấn "Báo giá xe này" để kết nối trực tiếp với ban điều phối.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {fleetData.map((truck) => (
              <div
                key={truck.id}
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid var(--cream-200)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  boxShadow: "0 12px 32px rgba(20, 32, 63, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{
                      display: "inline-block",
                      background: "rgba(217, 162, 27, 0.12)",
                      color: "var(--gold-700)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "0.3rem 0.65rem",
                      borderRadius: "var(--radius-pill)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}>
                      Tải {truck.group}
                    </span>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--navy-700)" }}>
                      {truck.brand || "Hino / Hyundai"}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                    {truck.name}
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: "1.25rem" }}>
                    {truck.suitable_for}
                  </p>

                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    padding: "1rem",
                    background: "var(--cream-100)",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1.5rem",
                    fontSize: "0.875rem",
                  }}>
                    <div>
                      <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem" }}>Tải trọng chở</span>
                      <strong style={{ color: "var(--navy-900)", fontSize: "1.0625rem" }}>{truck.tonnage} tấn</strong>
                    </div>
                    <div>
                      <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.75rem" }}>Thể tích thùng</span>
                      <strong style={{ color: "var(--navy-900)", fontSize: "1.0625rem" }}>{truck.volume_m3} khối</strong>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{
                    padding: "0.85rem 1rem",
                    background: "var(--navy-900)",
                    color: "#FFFFFF",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.75)" }}>Cước dự kiến:</span>
                    <strong style={{ fontSize: "1.125rem", color: "var(--gold-400)" }}>
                      {truck.price || "Liên hệ báo giá"}
                    </strong>
                  </div>

                  <a
                    href={company.zaloLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Báo giá xe này qua Zalo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Zone: White (#FFFFFF) → Navy (#14203F) */}
      <div className="transition-zone tz-white-to-navy" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          4 YẾU TỐ CẤU THÀNH CHI PHÍ (HIGH CONTRAST NAVY)
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(5rem, 6vw, 8rem) 0", background: "#14203F", color: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: "var(--gold-300)" }}>
              <span style={{ width: "24px", height: "2px", background: "var(--gold-500)" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>NGUYÊN TẮC TÍNH CƯỚC</span>
            </div>
            <h2 style={{ fontSize: "var(--fs-h1)", color: "#FFFFFF", marginBottom: "1rem" }}>
              4 yếu tố quyết định cước phí vận chuyển
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.65 }}>
              Hậu Nguyễn cam kết không thu phụ phí phát sinh ngoài hợp đồng. Chi phí chuyến xe được bóc tách rõ ràng theo các tiêu chí:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.75rem" }}>
            {[
              {
                num: "01",
                title: "Khoảng cách & Lộ trình cao tốc",
                desc: "Đo đạc chính xác số km vận chuyển thực tế từ điểm bốc đến điểm trả. Tối ưu theo trục cao tốc Bắc – Nam để rút ngắn tối đa thời gian giao nhận.",
              },
              {
                num: "02",
                title: "Tải trọng & Thể tích thực tế",
                desc: "Điều phối phân khúc xe vừa vặn kích thước lô hàng (từ 3.5 tấn đến 15 tấn), tránh lãng phí thể tích trống hoặc chở quá tải vi phạm luật.",
              },
              {
                num: "03",
                title: "Đặc thù thùng (Kín / Bạt mui phủ)",
                desc: "Hàng khô, điện tử, linh kiện cần thùng kín Inox bảo vệ tuyệt đối hoặc hàng công nghiệp cồng kềnh cần thùng bạt hỗ trợ cẩu hạ từ trên nóc xuống.",
              },
              {
                num: "04",
                title: "Chuyến kết hợp 2 chiều",
                desc: "Chính sách chiết khấu giảm cước 20% - 30% cho khách hàng gửi hàng khứ hồi hoặc khớp lịch trình các chuyến quay đầu từ Bắc về Trung.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#182342",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "var(--gold-400)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.65rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Zone: Navy (#14203F) → White (#FFFFFF) */}
      <div className="transition-zone tz-navy-to-white-standard" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          QUICK QUOTE FORM
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }}>
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>LIÊN HỆ NHANH</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)" }}>
              Nhận tính toán phương án xe &amp; báo giá
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Để lại thông tin chuyến hàng, điều xe Hậu Nguyễn sẽ liên hệ lại tư vấn phương án xe phù hợp nhất.
            </p>
          </div>

          <form
            onSubmit={handleConsultZalo}
            style={{
              background: "var(--cream-100)",
              border: "1px solid var(--cream-200)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              boxShadow: "0 16px 40px rgba(20, 32, 63, 0.08)",
            }}
          >
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div className="form-group">
                  <label className="form-label">Điểm lấy hàng (Tỉnh / Huyện)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="VD: Hà Tĩnh, Thanh Hóa..."
                    value={fromLoc}
                    onChange={(e) => setFromLoc(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Điểm trả hàng (Tỉnh / Huyện)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="VD: Hà Nội, Hải Phòng, Sơn La..."
                    value={toLoc}
                    onChange={(e) => setToLoc(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div className="form-group">
                  <label className="form-label">Loại hàng hoá</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="VD: Hàng khô, thiết bị, nông sản..."
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Khối lượng / Tải trọng dự kiến</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="VD: 5 tấn, 30 khối..."
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
              >
                Gửi thông tin nhận báo giá qua Zalo →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Transition Zone: Content White (#FFFFFF) → Footer Paper (#ebeee7) */}
      <div className="transition-zone tz-white-to-paper" aria-hidden="true" />
    </div>
  );
}
