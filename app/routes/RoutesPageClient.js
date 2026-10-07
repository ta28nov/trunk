"use client";
import { useEffect, useRef } from "react";
import company from "../data/company.json";

export default function RoutesPageClient() {
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
          Visual: /images/routes/corridor.jpg (Misty mountain pass at twilight)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="subpage-hero" id="hero">
        <div className="subpage-hero-bg">
          <img
            src="/images/routes/corridor.jpg"
            alt="Hành lang vận tải miền núi Tây Bắc lúc chạng vạng"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="subpage-hero-vignette" />

        <div className="subpage-hero-container">
          <div className="subpage-hero-eyebrow">
            <span>MẠNG LƯỚI TUYẾN ĐƯỜNG VẬN HÀNH</span>
          </div>

          <h1 className="subpage-hero-title">
            Hà Tĩnh · Nghệ An · Thanh Hóa <br />
            <span style={{ color: "var(--gold-300)" }}>kết nối phía Bắc, Tây Bắc &amp; Toàn Quốc</span>
          </h1>

          <p className="subpage-hero-desc">
            Các chuyến xe chạy liên tục trên trục cao tốc Bắc – Nam và hệ thống quốc lộ huyết mạch.
            Nhận vận chuyển liên tỉnh đi các tỉnh phía Bắc, Tây Bắc, Đà Nẵng, TP. Hồ Chí Minh và phục vụ bao xe theo yêu cầu trên cả nước.
          </p>

          <div className="subpage-hero-actions">
            <a href={company.hotlineTel} className="btn btn-primary" title="Gọi Hotline chính Nguyễn Hậu">
              <span>Hotline điều xe: {company.hotline} (A. Hậu)</span>
            </a>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
            >
              <span>Hỏi lịch xe qua Zalo</span>
            </a>
            <a href="#video-tuyen-duong" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Xem luồng xe thực tế</span>
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
          Video: traffic-hero.webm (High-speed traffic & highway corridor motion)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="cinematic-standalone-section" id="video-tuyen-duong">
        <div className="wrap">
          <div className="cinematic-standalone-header">
            <div style={{ display: "inline-flex", alignItems: "center", color: "var(--gold-300)" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                NHỊP LĂN BÁNH TRÊN ĐẠI LỘ CAO TỐC
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", margin: 0 }}>
              Chuyển động không ngừng nghỉ xuyên đêm
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, maxWidth: "680px", margin: 0 }}>
              Hệ thống phương tiện Hậu Nguyễn bám sát trục cao tốc và quốc lộ huyết mạch, duy trì hành trình an toàn và chính xác từng giờ.
            </p>
          </div>

          {/* Video nằm độc lập một mình */}
          <div className="cinematic-standalone-frame">
            <video
              ref={videoRef}
              src="/videos/traffic-hero.webm"
              muted
              loop
              playsInline
              autoPlay
              className="cinematic-standalone-video"
              aria-label="Video luồng giao thông cao tốc và hành lang vận chuyển"
            />
          </div>
        </div>
      </section>

      {/* Transition: Video Standalone (#0A0E17) → Layer 1 (#FFFFFF) */}
      <div className="transition-zone tz-dark-to-white" aria-hidden="true" />

      {/* Layer 1: Hành lang vận tải đặc thù */}
      <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(2.5rem, 4vw, 5rem)",
            alignItems: "center",
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>HÀNH LANG VẬN TẢI ĐẶC THÙ</div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                Vận chuyển chuyên tuyến đường đèo dốc &amp; cao tốc liên tỉnh
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Từ miền Trung ngược ra Bắc là những cung đường có sự chuyển tiếp địa hình phức tạp: từ đồng bằng duyên hải lên các cung đèo dốc quanh co vùng Tây Bắc (Hòa Bình, Sơn La, Điện Biên, Lai Châu) hay các vùng cao Đông Bắc (Yên Bái, Lào Cai).
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Hậu Nguyễn chuẩn bị phương tiện khắt khe: máy khỏe, gầm đúc chịu tải, hệ thống phanh khí xả an toàn, kết hợp nẹp chằng buộc bạt 2 lớp chống xô lệch và chống thấm nước tuyệt đối.
              </p>

              <div style={{ display: "flex", gap: "2.5rem" }}>
                <div>
                  <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-600)", display: "block", lineHeight: 1 }}>100%</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "0.35rem", display: "block" }}>Tài xế chuyên đường dài</span>
                </div>
                <div>
                  <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--navy-900)", display: "block", lineHeight: 1 }}>24/7</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "0.35rem", display: "block" }}>Điều xe &amp; hỗ trợ bốc xếp</span>
                </div>
              </div>
            </div>

            {/* Feature Cards Column */}
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div className="card" style={{ borderLeft: "4px solid var(--gold-500)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                  Tối ưu thời gian qua trục cao tốc mới
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  Kết nối trực tiếp các đoạn cao tốc Diễn Châu – Bãi Vọt – Nghi Sơn – Mai Sơn – Cao Bồ, giảm 30-40% thời gian chạy xe so với quốc lộ cũ.
                </p>
              </div>

              <div className="card" style={{ borderLeft: "4px solid var(--navy-700)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                  Kinh nghiệm vượt đèo Tây Bắc an toàn
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  Đội xe Hino trang bị phanh khí xả phụ trợ, tài xế bản địa thông thuộc từng cua dốc Dốc Cun, đèo Thung Khe, đèo Chiềng Đông.
                </p>
              </div>

              <div className="card" style={{ borderLeft: "4px solid var(--gold-500)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                  Bốc hạ hàng tận nơi 2 đầu
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  Hỗ trợ sang tải vào các tuyến phố cấm giờ hoặc đường nhỏ bằng các dòng xe tải trung 3.5T – 6T linh hoạt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Layer 1 (#FFFFFF) → Layer 2 (#14203F) */}
      <div className="transition-zone tz-white-to-navy" aria-hidden="true" />

      {/* Layer 2: Mạng lưới vận chuyển liên tỉnh & Toàn quốc (High contrast Navy) */}
      <section style={{ padding: "clamp(5rem, 6vw, 8rem) 0", background: "#14203F", color: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", marginBottom: "0.75rem", color: "var(--gold-300)" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>CHI TIẾT MẠNG LƯỚI VẬN CHUYỂN TOÀN QUỐC</span>
            </div>
            <h2 style={{ fontSize: "var(--fs-h1)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Hành lang phân phối Bắc – Trung – Nam &amp; Mạng lưới kết nối cả nước
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.65 }}>
              Dù hàng hóa là máy móc công nghiệp, bao bì tiêu dùng, vật liệu xây dựng hay hàng kết cấu, Hậu Nguyễn luôn có giải pháp tuyến đường tối ưu chi phí và thời gian. Bên cạnh hai trục thế mạnh phía Bắc &amp; Tây Bắc, chúng tôi mở rộng hành lang vận chuyển xuyên Việt tới Đà Nẵng, TP. Hồ Chí Minh, các tỉnh Đông Nam Bộ &amp; Tây Nam Bộ và kết nối linh hoạt tới 63 tỉnh thành trên cả nước.
            </p>
          </div>

          <div className="routes-network-grid">
            {/* Trục 1: Đồng bằng & KCN phía Bắc */}
            <div style={{
              background: "#182342",
              border: "1.5px solid rgba(217, 162, 27, 0.35)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(217, 162, 27, 0.2)", color: "var(--gold-300)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                TRỤC ĐỒNG BẰNG &amp; KHU CÔNG NGHIỆP PHÍA BẮC
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.85rem" }}>
                Hà Nội, Hải Phòng &amp; Vùng Thủ Đô
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Kết nối từ Thanh Hóa – Nghệ An – Hà Tĩnh chạy thẳng theo cao tốc đến các trung tâm logistics, cảng biển và các KCN lớn:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {["Hà Nội", "Hải Phòng", "Quảng Ninh", "Bắc Ninh", "Hưng Yên", "Hải Dương", "Hà Nam", "Nam Định", "Vĩnh Phúc", "Thái Nguyên"].map((c) => (
                  <span key={c} style={{ background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "0.35rem 0.75rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", color: "#FFFFFF" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto", padding: "1rem", background: "rgba(10, 16, 32, 0.6)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.85)" }}>
                <strong style={{ color: "var(--gold-300)" }}>Thời gian giao hàng:</strong> Trong ngày hoặc sáng sớm ngày hôm sau theo lịch hẹn bốc hạ hàng.
              </div>
            </div>

            {/* Trục 2: Vùng cao & Cửa khẩu Tây Bắc */}
            <div style={{
              background: "#182342",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(255, 255, 255, 0.1)", color: "#FFFFFF", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                TRỤC VÙNG CAO &amp; CỬA KHẨU BIÊN GIỚI
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.85rem" }}>
                Tây Bắc, Yên Bái &amp; Lào Cai
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Đội xe chuyên dụng leo đèo khỏe, tài xế bản địa thông thạo các dốc cua nguy hiểm và cung đường đèo cao:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {["Hòa Bình", "Sơn La", "Điện Biên", "Lai Châu", "Lào Cai", "Yên Bái", "Phú Thọ", "Tuyên Quang", "Lạng Sơn", "Cao Bằng"].map((c) => (
                  <span key={c} style={{ background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "0.35rem 0.75rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", color: "#FFFFFF" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto", padding: "1rem", background: "rgba(10, 16, 32, 0.6)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.85)" }}>
                <strong style={{ color: "var(--gold-300)" }}>Nghiệp vụ an toàn:</strong> Tăng đơ gia cố, chằng buộc xích cẩn trọng, kiểm tra áp suất lốp và phanh tại từng trạm dừng chân.
              </div>
            </div>

            {/* Trục 3: Trục Xuyên Việt & Mạng lưới phía Nam */}
            <div style={{
              background: "#182342",
              border: "1.5px solid rgba(217, 162, 27, 0.45)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(217, 162, 27, 0.25)", color: "var(--gold-300)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                TRỤC XUYÊN VIỆT &amp; KINH TẾ TRỌNG ĐIỂM PHÍA NAM
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.85rem" }}>
                Đà Nẵng, TP. Hồ Chí Minh &amp; Miền Nam
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Tuyến vận tải đường dài trục cao tốc Bắc – Nam &amp; QL1A kết nối thẳng vào các trung tâm kinh tế, khu công nghiệp và cảng biển phía Nam:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {["Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Khánh Hòa", "TP. Hồ Chí Minh", "Bình Dương", "Đồng Nai", "Long An", "Bà Rịa - Vũng Tàu", "Tây Ninh", "Cần Thơ", "Tiền Giang"].map((c) => (
                  <span key={c} style={{ background: "rgba(217, 162, 27, 0.15)", border: "1px solid rgba(217, 162, 27, 0.3)", padding: "0.35rem 0.75rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", color: "#FFFFFF" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto", padding: "1rem", background: "rgba(10, 16, 32, 0.6)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.85)" }}>
                <strong style={{ color: "var(--gold-300)" }}>Lộ trình &amp; Dịch vụ:</strong> Xe chạy liên tục 48h – 72h, nhận hàng bao xe &amp; ghép chuyến, giao nhận tận kho/xưởng, cập nhật định vị chuyến đi 24/7.
              </div>
            </div>

            {/* Trục 4: Phủ sóng toàn quốc theo yêu cầu */}
            <div style={{
              background: "#182342",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem 2rem",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(255, 255, 255, 0.1)", color: "#FFFFFF", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                PHỦ SÓNG TOÀN QUỐC · NHẬN HÀNG TẬN NƠI
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.85rem" }}>
                Vận Chuyển Theo Yêu Cầu 63 Tỉnh Thành
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Quý khách có nhu cầu chuyển hàng bao xe, máy móc thiết bị, hàng kết cấu công trình đi bất kỳ tỉnh thành nào trên cả nước — chỉ cần liên hệ, Hậu Nguyễn luôn có phương án điều phối:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {["Bao xe nguyên chuyến", "Hàng dự án công trình", "Vận tải Bắc – Nam", "Kết nối 63 tỉnh thành", "Hóa đơn VAT đầy đủ", "Hợp đồng minh bạch"].map((c) => (
                  <span key={c} style={{ background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "0.35rem 0.75rem", borderRadius: "var(--radius-pill)", fontSize: "0.8125rem", color: "#FFFFFF" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto", padding: "1rem", background: "rgba(10, 16, 32, 0.6)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.85)" }}>
                <strong style={{ color: "var(--gold-300)" }}>Hotline điều xe toàn quốc:</strong> Gọi ngay <strong>{company.hotline}</strong> (A. Hậu - Chính) hoặc <strong>{company.hotline2}</strong> (A. Phúc) để chốt lịch xe nhanh nhất.
              </div>
            </div>
          </div>

          {/* Nationwide CTA Banner */}
          <div style={{
            marginTop: "3.5rem",
            background: "linear-gradient(135deg, rgba(217, 162, 27, 0.18) 0%, rgba(24, 35, 66, 0.95) 100%)",
            border: "1.5px solid rgba(217, 162, 27, 0.4)",
            borderRadius: "var(--radius-lg)",
            padding: "2.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
          }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ display: "inline-block", color: "var(--gold-300)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
                NHU CẦU VẬN CHUYỂN LIÊN TỈNH &amp; PHÍA NAM
              </div>
              <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                Cần chuyển hàng đi các tỉnh phía Nam hoặc bất kỳ tỉnh thành nào trên cả nước?
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.6, margin: 0 }}>
                Hậu Nguyễn luôn sẵn sàng phương tiện và lộ trình tối ưu chi phí cho bạn. Liên hệ ngay với đại diện phụ trách kinh doanh &amp; điều xe để nhận báo giá chi tiết trong 5 phút.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={company.hotlineTel} className="btn btn-primary" style={{ padding: "0 1.5rem", minHeight: "48px" }} title="Gọi Hotline chính Nguyễn Hậu">
                <span>Gọi A. Hậu: {company.hotline}</span>
              </a>
              <a
                href={company.hotline2Tel}
                className="btn btn-secondary"
                style={{ borderColor: "rgba(255, 255, 255, 0.4)", color: "#FFFFFF", padding: "0 1.5rem", minHeight: "48px" }}
                title="Gọi Hotline 2 Nguyễn Hữu Phúc"
              >
                <span>Gọi A. Phúc: {company.hotline2}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Layer 2 (#14203F) → Layer 3 (#FFFFFF) */}
      <div className="transition-zone tz-navy-to-white" aria-hidden="true" />

      {/* Layer 3: Bãi xe trung tâm & Bản đồ */}
      <section style={{ padding: "clamp(4.5rem, 5vw, 7rem) 0", background: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "0.5rem" }}>VỊ TRÍ BÃI XE TRUNG TÂM</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-900)" }}>
              Trụ sở điều phối tại Thanh Hóa
            </h2>
          </div>

          <div className="map-showcase">
            <iframe
              src={company.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ vị trí Hậu Nguyễn Transport tại Thanh Hóa"
              style={{ width: "100%", height: "100%", border: 0 }}
            />

            <div className="map-overlay-card">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#16a34a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
                Trực ban điều phối xe 24/7
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                {company.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                {company.address}
              </p>
              <a href={company.hotlineTel} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} title="Gọi Hotline chính Nguyễn Hậu">
                Gọi kiểm tra xe: {company.hotline} (A. Hậu)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Layer 3 (#FFFFFF) → Dark Navy Footer (#0D1529) */}
      <div className="transition-zone tz-white-to-footer" aria-hidden="true" />
    </div>
  );
}
