"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import company from "../data/company.json";

export default function AboutPageClient() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(videoRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO BANNER — 100SVH FULL VIEWPORT (LIKE HOMEPAGE)
          Visual: /images/about/hub.jpg (Twilight Logistics Terminal)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="subpage-hero" id="hero">
        <div className="subpage-hero-bg">
          <img
            src="/images/about/hub.jpg"
            alt="Bãi tập kết đội xe Hậu Nguyễn Transport lúc rạng đông"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="subpage-hero-vignette" />

        <div className="subpage-hero-container">
          <div className="subpage-hero-eyebrow">
            <span>HỒ SƠ NĂNG LỰC DOANH NGHIỆP</span>
          </div>

          <h1 className="subpage-hero-title">
            Vận Tải Hậu Nguyễn <br />
            <span style={{ color: "var(--gold-300)" }}>Chuyên Nghiệp · Thực Tế · Kỷ Cương</span>
          </h1>

          <p className="subpage-hero-desc">
            Hệ sinh thái vận tải hàng hóa chuyên tuyến từ Hà Tĩnh, Nghệ An, Thanh Hóa vươn tới các tỉnh phía Bắc và Tây Bắc.
            Trực tiếp sở hữu đội xe Hino &amp; Hyundai, chủ xe trực tiếp điều phối, không qua trung gian.
          </p>

          <div className="subpage-hero-actions">
            <a href={company.hotlineTel} className="btn btn-primary">
              <span>Hotline trực ban: {company.hotline}</span>
            </a>
            <Link
              href="/fleet"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
            >
              <span>Xem đội xe chuyên dụng →</span>
            </Link>
            <a href="#quy-trinh-van-hanh" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Xem video quy trình</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STANDALONE VIDEO SECTION (NẰM 1 MÌNH HỆT NHƯ TRANG CHỦ)
          Video: videoquytrinhchay.mp4 (Live freight departure and operations)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="cinematic-standalone-section" id="quy-trinh-van-hanh">
        <div className="wrap">
          <div className="cinematic-standalone-header">
            <div style={{ display: "inline-flex", alignItems: "center", color: "var(--gold-300)" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                QUY TRÌNH TỪNG CHUYẾN HÀNG
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", margin: 0 }}>
              Vận hành thực tế trên từng cây số
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, maxWidth: "680px", margin: 0 }}>
              Hình ảnh trực quan ghi lại quy trình xuất bến, kiểm tra kỹ thuật và điều phối từng kiện hàng trước khi lăn bánh lên cung đường dài.
            </p>
          </div>

          {/* Video nằm độc lập một mình */}
          <div className="cinematic-standalone-frame">
            <video
              ref={videoRef}
              src="/videos/videoquytrinhchay.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="cinematic-standalone-video"
              aria-label="Video quy trình vận chuyển và bốc dỡ hàng thực tế của Hậu Nguyễn"
            />
          </div>

          {/* Các layer khác nằm ở dưới video (hệt như trang chủ) */}
          <div style={{ marginTop: "4rem" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}>
              {[
                {
                  step: "BƯỚC 1",
                  title: "Khảo sát hàng & Cân đối tải",
                  desc: "Chủ xe trực tiếp tư vấn loại xe (3.5T - 15T) và kiểu thùng phù hợp để tiết kiệm chi phí tối đa cho khách hàng.",
                },
                {
                  step: "BƯỚC 2",
                  title: "Chằng buộc & Niêm phong",
                  desc: "Sử dụng đầy đủ tăng đơ cáp, bạt chống nước 2 lớp, thanh nẹp chống xô lệch, đảm bảo hàng nguyên đai nguyên kiện.",
                },
                {
                  step: "BƯỚC 3",
                  title: "Vận hành xuyên suốt",
                  desc: "Tài xế chuyên tuyến, am hiểu từng khúc cua đèo dốc, duy trì tốc độ tiêu chuẩn và tuân thủ an toàn đường bộ.",
                },
                {
                  step: "BƯỚC 4",
                  title: "Bàn giao tận kho",
                  desc: "Hạ hàng đúng vị trí yêu cầu, kiểm đếm số lượng cùng người nhận và ký biên bản giao nhận minh bạch.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#14203F",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem 1.5rem",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--gold-400)",
                    letterSpacing: "0.15em",
                    marginBottom: "0.75rem",
                  }}>
                    {item.step}
                  </span>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Video Section (#0A0E17) → Triết lý phương tiện (#FFFFFF) */}
      <div className="transition-zone tz-dark-to-white" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          TRIẾT LÝ PHƯƠNG TIỆN: HINO & HYUNDAI
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>ĐẶC THÙ PHƯƠNG TIỆN</div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)", lineHeight: 1.25, marginBottom: "1.5rem" }}>
                Tại sao Hậu Nguyễn kiên định chọn Hino và Hyundai?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Trên hành lang vận tải kết nối duyên hải Bắc Trung Bộ lên vùng cao Tây Bắc, các phương tiện phải liên tục đối mặt với đèo dốc quanh co, khí hậu ẩm ướt và điều kiện mặt đường khắc nghiệt. Để đảm bảo tính thông suốt và an toàn tuyệt đối, Hậu Nguyễn chỉ vận hành hai dòng xe danh tiếng:
              </p>
              <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ padding: "1.25rem", background: "var(--cream-100)", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--gold-500)" }}>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Hino Motors (Nhật Bản)
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    Nổi tiếng với độ bền cơ khí vô đối, động cơ siêu tải leo đèo êm ái, hệ thống phanh khí xả an toàn và khung gầm nguyên khối chịu áp lực xoắn cao.
                  </p>
                </div>
                <div style={{ padding: "1.25rem", background: "var(--cream-100)", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--navy-700)" }}>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Hyundai Trucks (Hàn Quốc)
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    Vận hành linh hoạt, tăng tốc đầm chắc trên cao tốc, khoang chở hàng thể tích lớn và tiết kiệm nhiên liệu vượt trội.
                  </p>
                </div>
              </div>
              <Link href="/fleet" className="btn btn-primary">
                Khám phá chi tiết đội xe →
              </Link>
            </div>

            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 20px 48px rgba(20, 32, 63, 0.12)" }}>
              <img
                src="/images/anh-xe/2xe.jpg"
                alt="Đội xe Hino và Hyundai Hậu Nguyễn xếp đội hình"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: White (#FFFFFF) → Navy (#14203F) */}
      <div className="transition-zone tz-white-to-navy" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          NGUYÊN TẮC HÀNH NGHỀ & CAM KẾT VÀNG (NAVY ZONE)
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(5rem, 6vw, 8rem) 0", background: "#14203F", color: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            {/* Real Work Image */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1.5px solid rgba(255, 255, 255, 0.15)", boxShadow: "0 20px 48px rgba(0, 0, 0, 0.4)" }}>
              <img
                src="/images/about/chuyen-gia-xe.jpg"
                alt="Xe tải Hino VT Hậu Nguyễn kiểm tra kỹ thuật và đóng hàng xuất bến"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Commitments */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", marginBottom: "0.75rem", color: "var(--gold-300)" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>NGUYÊN TẮC HÀNH NGHỀ</span>
              </div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "#FFFFFF", marginBottom: "1.5rem" }}>
                4 tiêu chí vàng khi giao nhận
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Đúng giờ & Giữ chữ tín", desc: "Xuất bến đúng giờ hẹn, duy trì tốc độ và bàn giao đúng tiến độ cam kết theo hợp đồng." },
                  { title: "Thùng kín khô ráo – Thùng bạt kiên cố", desc: "Thùng xe luôn được vệ sinh sạch sẽ trước khi bốc hàng, chống nước mưa và bụi bẩn 100%." },
                  { title: "Cập nhật vị trí chuyến đi thời gian thực", desc: "Chủ hàng được thông báo vị trí xe trực tiếp qua Zalo, chủ động bố trí nhân lực bốc dỡ." },
                  { title: "Báo giá trực tiếp – Không phát sinh", desc: "Mức cước rõ ràng theo trọng tải và lộ trình thực tế, xuất hóa đơn tài chính VAT hợp lệ." },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "#182342", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.55, margin: 0, paddingLeft: "1.75rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Navy (#14203F) → White (#FFFFFF) */}
      <div className="transition-zone tz-navy-to-white-standard" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          HỒ SƠ NĂNG LỰC DOANH NGHIỆP — SCAN DOCUMENTS
         ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>TÀI LIỆU MINH CHỨNG</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)" }}>
              Hồ sơ năng lực pháp nhân Hậu Nguyễn
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Tài liệu xác nhận năng lực tài chính, đội xe và quy trình an toàn của Công ty TNHH Vận tải &amp; Xây dựng Hậu Nguyễn.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "0 16px 40px rgba(20, 32, 63, 0.12)", border: "1px solid var(--cream-200)" }}>
              <img
                src="/images/ho-so/ho_so_01.webp"
                alt="Trang bìa hồ sơ năng lực Hậu Nguyễn"
                loading="lazy"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "0 16px 40px rgba(20, 32, 63, 0.12)", border: "1px solid var(--cream-200)" }}>
              <img
                src="/images/ho-so/ho_so_02.webp"
                alt="Giới thiệu công ty trong hồ sơ năng lực"
                loading="lazy"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Content White (#FFFFFF) → Footer Paper (#ebeee7) */}
      <div className="transition-zone tz-white-to-paper" aria-hidden="true" />
    </div>
  );
}
