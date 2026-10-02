"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MarqueeTicker from "./components/MarqueeTicker";
import FloatingZalo from "./components/FloatingZalo";
import company from "./data/company.json";
import fleetData from "./data/fleet.json";

export default function HomePage() {
  const [quoteVehicle, setQuoteVehicle] = useState("");
  const [formSent, setFormSent] = useState(false);
  const videoRef = useRef(null);
  const routeRef = useRef(null);
  const [routeAnimated, setRouteAnimated] = useState(false);

  // Horizontal Carousel controls
  const carouselRef = useRef(null);
  const [carouselPaused, setCarouselPaused] = useState(false);

  // Auto-scroll horizontal gallery
  useEffect(() => {
    if (carouselPaused) return;
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [carouselPaused]);

  const handleScrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    carouselRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  // Video IntersectionObserver: play only when in view
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
      { threshold: 0.3 }
    );
    obs.observe(videoRef.current);
    return () => obs.disconnect();
  }, []);

  // Route line animation on scroll
  useEffect(() => {
    if (!routeRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setRouteAnimated(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(routeRef.current);
    return () => obs.disconnect();
  }, []);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    window.open(`${company.zaloLink}`, "_blank");
    setFormSent(true);
  };

  return (
    <div style={{ background: "var(--cream-50)" }}>
      <FloatingZalo />

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 1 — HERO BANNER (ảnh xe thật)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        {/* Main hero image - tràn phải, bo góc trái dưới */}
        <div className="hero-image-wrap">
          <img
            src="/images/anh-xe/2aOboR2bWKHWSTybaVdjrrlTD6dDgeHC5C32ncuW.jpg"
            alt="Xe tải Hyundai thùng kín màu xanh chính diện tại kho Hậu Nguyễn"
            width={1280}
            height={960}
            fetchPriority="high"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(255,252,245,.96) 0%, rgba(255,252,245,.75) 35%, rgba(255,252,245,.2) 65%, transparent 100%)",
          }} />
        </div>

        {/* Sub images chồng lệch - desktop only */}
        <div className="hero-sub-images">
          <img
            src="/images/anh-xe/hino-thung-kin-trang-va-xe-thung-bat-03.jpg"
            alt="Xe tải Hino thùng kín trắng kèm xe thùng bạt"
            width={320}
            height={240}
            loading="lazy"
            style={{ animationDelay: "150ms" }}
            className="hero-animate-5"
          />
          <img
            src="/images/anh-xe/hyundai-thung-kin-04-xeo.jpg"
            alt="Xe tải Hyundai thùng kín góc nghiêng"
            width={320}
            height={240}
            loading="lazy"
            style={{ animationDelay: "300ms", marginTop: "2rem" }}
            className="hero-animate-5"
          />
        </div>

        {/* Hero text content */}
        <div className="hero-content" style={{ position: "relative", zIndex: 5 }}>
          <div style={{ maxWidth: "600px" }}>
            <div className="eyebrow hero-animate-1" style={{ marginBottom: "1.5rem" }}>
              VẬN TẢI · XÂY DỰNG · DỊCH VỤ
            </div>

            <h1
              className="hero-animate-2"
              style={{
                fontSize: "var(--fs-display)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--navy-700)",
                marginBottom: "1.5rem",
              }}
            >
              Xe thùng kín<br />
              &amp; thùng bạt<br />
              <span style={{ color: "var(--gold-600)" }}>Hino · Hyundai.</span>
            </h1>

            <p
              className="hero-animate-3"
              style={{
                fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Vận chuyển hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc. Giá cước theo từng loại xe.
            </p>

            <div className="hero-animate-4" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a href="#bao-gia" className="btn btn-primary" style={{ fontSize: "0.9375rem" }}>
                Nhận báo giá
              </a>
              <Link href="/fleet" className="btn btn-secondary" style={{ fontSize: "0.9375rem" }}>
                Xem đội xe <span className="arrow" style={{ marginLeft: "0.25rem" }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <MarqueeTicker />

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 2 — LỜI GIỚI THIỆU (Nâng cấp phong cách & màu sắc tinh tế)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--cream-100)", paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-m)" }}>
        <div className="wrap">
          <div
            className="reveal"
            style={{
              background: "linear-gradient(135deg, var(--white) 0%, rgba(255, 252, 245, 0.9) 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(2rem, 1.5rem + 3vw, 3.5rem)",
              border: "1px solid var(--cream-200)",
              borderLeft: "6px solid var(--gold-500)",
              boxShadow: "var(--shadow-md)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background SVG Watermark */}
            <div style={{ position: "absolute", top: "-15px", right: "20px", opacity: 0.05, pointerEvents: "none" }}>
              <svg width="220" height="220" viewBox="0 0 24 24" fill="var(--navy-900)">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(217, 162, 27, 0.12)", color: "var(--gold-700)", padding: "0.35rem 0.85rem", borderRadius: "var(--radius-pill)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold-500)", display: "inline-block" }}></span>
              Cam kết dịch vụ thực tế · Uy tín tại Thanh Hóa
            </div>

            <h2
              style={{
                fontSize: "var(--fs-h2)",
                fontWeight: 700,
                lineHeight: 1.4,
                color: "var(--navy-700)",
                letterSpacing: "-0.015em",
                marginBottom: "2rem",
                maxWidth: "920px",
              }}
            >
              Chúng tôi là đơn vị vận tải tại <strong style={{ color: "var(--navy-900)" }}>Thanh Hóa</strong>, vận hành đội xe{" "}
              <span style={{ background: "rgba(217, 162, 27, 0.2)", color: "var(--gold-700)", padding: "0.15rem 0.6rem", borderRadius: "6px", fontWeight: 800 }}>thùng kín</span>{" "}
              và{" "}
              <span style={{ background: "rgba(27, 42, 87, 0.1)", color: "var(--navy-700)", padding: "0.15rem 0.6rem", borderRadius: "6px", fontWeight: 800 }}>thùng bạt</span>{" "}
              chuyên dụng dòng <span style={{ color: "var(--gold-600)", fontWeight: 800 }}>Hino và Hyundai</span>, điều phối từng chuyến hàng bằng <span style={{ borderBottom: "2px solid var(--gold-500)", paddingBottom: "2px" }}>quy trình rõ ràng</span>, để khách hàng yên tâm từ lúc nhận đến lúc giao.
            </h2>

            {/* 3 trụ cột giá trị thực tế */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cream-200)" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "var(--radius-sm)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.25rem" }}>Đội xe Hino &amp; Hyundai</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>Động cơ khỏe, máy êm, thùng xe kín khít chống mưa bụi tuyệt đối.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "var(--radius-sm)", background: "rgba(27, 42, 87, 0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--navy-700)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.25rem" }}>An toàn &amp; Bảo quản</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>Chằng buộc kỹ lưỡng, niêm phong kẹp chì, đền bù nếu hư hại hàng.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "var(--radius-sm)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.25rem" }}>Thông tin trực tiếp 24/7</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>Báo vị trí xe liên tục, xử lý sự cố phát sinh nhanh gọn trên toàn tuyến.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
              <Link href="/about" className="btn-ghost" style={{ fontSize: "0.9375rem" }}>
                Tìm hiểu năng lực công ty <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 3 — VIDEO THỰC TẾ (tự động phát khi cuộn tới)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-cream-alt" style={{ paddingTop: "var(--gap-l)", paddingBottom: "var(--gap-l)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "2rem" }}>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>HÌNH ẢNH THỰC TẾ</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Một ngày vận hành tại Hậu Nguyễn
            </h2>
          </div>

          <div className="reveal-scale delay-2">
            <div className="video-frame" style={{ aspectRatio: "16/9", position: "relative" }}>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/anh-xe/2aobor2ds0wcrwmfn6felo7xcnbykze8dc0usey48.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/images/anh-xe/Video_Project_1_khong_watermark.mp4" type="video/mp4" />
              </video>
              <span className="video-label">Hình ảnh minh hoạ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transition gradient */}
      <div className="section-transition" />

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 4 — ĐỘI XE CHUYÊN DỤNG (5 xe với 5 ảnh thật không trùng)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-cream" id="doi-xe" style={{ paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-m)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "var(--space-12)" }}>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>ĐỘI XE CHUYÊN DỤNG</div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem" }}>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", maxWidth: "600px" }}>
                Xe tải từ 3,5 đến 15 tấn — Hino &amp; Hyundai
              </h2>
              <Link href="/fleet" className="btn-ghost" style={{ fontSize: "0.9375rem" }}>
                Xem tất cả đội xe <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Fleet cards grid - 5 xe với 5 ảnh hoàn toàn khác nhau */}
          <div className="grid-3">
            {fleetData.map((truck, idx) => (
              <div key={truck.id} className={`fleet-card reveal delay-${idx + 1}`}>
                <div className="fleet-card-image">
                  <img
                    src={truck.image}
                    alt={`${truck.name} tại kho bãi Hậu Nguyễn`}
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                    <span className="fleet-tag">Tải {truck.group}</span>
                  </div>
                </div>
                <div className="fleet-card-body">
                  <h3 style={{ fontSize: "var(--fs-h3)", marginBottom: "0.75rem", color: "var(--navy-700)" }}>
                    {truck.name}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", fontSize: "var(--fs-small)", color: "var(--text-muted)", marginBottom: "1rem" }}>
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
                  <a
                    href="#bao-gia"
                    className="btn btn-primary"
                    style={{ width: "100%", fontSize: "var(--fs-small)" }}
                    onClick={() => setQuoteVehicle(truck.name)}
                  >
                    Báo giá xe này
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* So sánh thùng kín vs thùng bạt */}
          <div style={{ marginTop: "var(--gap-m)" }}>
            <h3 className="reveal" style={{ fontSize: "var(--fs-h3)", color: "var(--navy-700)", marginBottom: "var(--space-6)", textAlign: "center" }}>
              Phân biệt đặc thù: Thùng kín và Thùng bạt
            </h3>
            <div className="compare-grid">
              <div className="compare-card reveal delay-1" style={{ background: "var(--white)" }}>
                <h3 style={{ color: "var(--navy-700)" }}>Thùng kín chuyên dụng</h3>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Hàng khô ráo 100%, chống nước mưa, bụi đường và thời tiết khắc nghiệt
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Niêm phong kẹp chì an toàn cho hàng giá trị cao
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Tối ưu chở hàng điện máy, điện tử, nội thất, bao bì, thực phẩm khô
                  </li>
                </ul>
              </div>
              <div className="compare-card reveal delay-2" style={{ background: "var(--white)" }}>
                <h3 style={{ color: "var(--navy-700)" }}>Thùng bạt mui phủ</h3>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Linh hoạt mở bạt 2 bên hông và phía sau, dễ dàng cẩu hàng từ trên xuống
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Phù hợp kiện hàng cồng kềnh, quy cách không cố định
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    Tối ưu chở vật liệu xây dựng, nông sản, máy công nghiệp, sắt thép cây
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 5 — THƯ VIỆN ẢNH CUỘN NGANG (Có nút bấm & Tự động trượt)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-white" style={{ paddingTop: "var(--gap-s)", paddingBottom: "var(--gap-m)" }}>
        <div className="wrap">
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", marginBottom: "var(--space-8)" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>THƯ VIỆN ẢNH THỰC TẾ</div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>Hình ảnh đội xe trên từng chặng đường</h2>
              <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                Hình ảnh thực tế chụp tại bãi xe Thanh Hóa và trên hành trình vận chuyển phía Bắc.
              </p>
            </div>

            {/* Nút điều hướng trượt ảnh ngang */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={handleScrollLeft}
                className="carousel-nav-btn"
                aria-label="Xem ảnh trước"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                type="button"
                onClick={handleScrollRight}
                className="carousel-nav-btn"
                aria-label="Xem ảnh tiếp theo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel container với drag / pause on hover */}
        <div
          style={{ paddingLeft: "max(1.25rem, calc((100% - 1200px) / 2))" }}
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
          onTouchStart={() => setCarouselPaused(true)}
        >
          <div className="h-scroll" ref={carouselRef}>
            {[
              { src: "/images/anh-xe/2aOboR2bWKHWSTybaVdjrrlTD6dDgeHC5C32ncuW.jpg", alt: "Xe Hyundai thùng kín xanh chính diện", caption: "Hyundai thùng kín sạch sẽ", h: 380 },
              { src: "/images/anh-xe/2aobor2bwezaofexh8djevyqev5lhuxmkjzhyvsc4.jpg", alt: "Đầu xe Hino 300 Series", caption: "Đầu xe Hino chính hãng", h: 320 },
              { src: "/images/anh-xe/2aobor2ds0wcrwmfn6felo7xcnbykze8dc0usey48.jpg", alt: "Xe tải Hino xếp dỡ trong kho", caption: "Bốc hàng trong kho có mái che", h: 420 },
              { src: "/images/anh-xe/hino-thung-kin-trang-va-xe-thung-bat-03.jpg", alt: "Xe Hino thùng kín trắng và xe thùng bạt", caption: "Đội ngũ thùng kín & thùng bạt", h: 310 },
              { src: "/images/anh-xe/2aobor2dsq0ovyscdkx33jpr6gc3vqc12uu56br212.jpg", alt: "Đoàn xe tải Hậu Nguyễn trên đường quê", caption: "Đoàn xe lưu thông trên tuyến", h: 390 },
              { src: "/images/anh-xe/hyundai-thung-kin-04-xeo.jpg", alt: "Xe Hyundai thùng kín xanh góc xiên", caption: "Khung thùng Inox kiên cố", h: 330 },
              { src: "/images/anh-xe/1wupukp6eune6ck1zz7boqxxraszzp7tnwjkkbmqpkrz3x0rdnzwytsgayexn7frnbr11.jpg", alt: "Xe tải lớn trên đường dài", caption: "Vận chuyển hàng đường dài", h: 370 },
            ].map((img, idx) => (
              <div
                key={idx}
                className="photo-wrap reveal"
                style={{
                  width: "clamp(280px, 75vw, 420px)",
                  height: `${img.h}px`,
                  flexShrink: 0,
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="photo"
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  insetInline: 0,
                  background: "linear-gradient(transparent, rgba(20, 32, 63, 0.8))",
                  padding: "1rem",
                  color: "var(--white)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}>
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 6 — QUY TRÌNH VẬN HÀNH THỰC TẾ & CAM KẾT NĂNG LỰC
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--cream-100)", paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-m)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>QUY TRÌNH VẬN HÀNH CHUYÊN NGHIỆP</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              4 bước kiểm soát từng chuyến hàng
            </h2>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Từ bãi xe Thanh Hóa đến điểm giao hàng tại các tỉnh phía Bắc và Tây Bắc, mọi khâu đều được giám sát chặt chẽ.
            </p>
          </div>

          <div className="process-grid">
            <div className="card reveal delay-1" style={{ position: "relative" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-500)", marginBottom: "0.5rem", lineHeight: 1 }}>
                01
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Khảo sát &amp; Chọn đúng tải
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Tư vấn loại xe (3,5t đến 15t) và loại thùng (kín/bạt) chuẩn thể tích hàng. Tuyệt đối không chở quá tải, tối ưu chi phí cước cho khách.
              </p>
            </div>

            <div className="card reveal delay-2" style={{ position: "relative" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-500)", marginBottom: "0.5rem", lineHeight: 1 }}>
                02
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Kiểm tra thùng &amp; Chằng buộc
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Vệ sinh sàn thùng sạch sẽ trước khi xếp hàng. Sử dụng đai tăng bạt, nẹp góc và chèn lót chống va đập, trầy xước trong suốt chặng đường.
              </p>
            </div>

            <div className="card reveal delay-3" style={{ position: "relative" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-500)", marginBottom: "0.5rem", lineHeight: 1 }}>
                03
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Lộ trình thông suốt 24/7
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Tài xế bản địa thông thuộc địa hình đường đèo dốc Tây Bắc. Cập nhật vị trí và thời gian dự kiến đến điểm nhận qua Zalo trực tiếp cho chủ hàng.
              </p>
            </div>

            <div className="card reveal delay-4" style={{ position: "relative" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-500)", marginBottom: "0.5rem", lineHeight: 1 }}>
                04
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Nghiệm thu &amp; Bàn giao
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Hỗ trợ mở thùng, xuống hàng cẩn thận, đối chiếu nguyên vẹn theo biên bản giao nhận. Ký xác nhận và hoàn tất thủ tục chứng từ minh bạch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition to navy */}
      <div className="section-transition-to-navy" />

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 7 — TUYẾN ĐƯỜNG (Route line vàng)
         ═══════════════════════════════════════════════════════════════ */}
      <section
        className="section section-navy"
        id="tuyen-duong"
        ref={routeRef}
        style={{ paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-m)" }}
      >
        <div className="wrap">
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="route-grid">
            {/* Route visualization */}
            <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
              <svg
                viewBox="0 0 300 400"
                width="300"
                height="400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: "100%" }}
              >
                <path
                  d="M 150 380 C 150 300, 80 250, 100 200 C 120 150, 200 120, 180 80 C 160 40, 150 20, 150 10"
                  stroke="var(--gold-300)"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                  className={`route-line ${routeAnimated ? "animate" : ""}`}
                  fill="none"
                />

                <circle cx="150" cy="380" r="8" fill="var(--gold-500)" opacity={routeAnimated ? 1 : 0} style={{ transition: "opacity .6s .3s" }} />
                <text x="170" y="385" fill="var(--gold-300)" fontSize="14" fontWeight="600">Hà Tĩnh</text>

                <circle cx="100" cy="300" r="8" fill="var(--gold-500)" opacity={routeAnimated ? 1 : 0} style={{ transition: "opacity .6s .6s" }} />
                <text x="115" y="305" fill="var(--gold-300)" fontSize="14" fontWeight="600">Nghệ An</text>

                <circle cx="120" cy="220" r="8" fill="var(--gold-500)" opacity={routeAnimated ? 1 : 0} style={{ transition: "opacity .6s .9s" }} />
                <text x="135" y="225" fill="var(--gold-300)" fontSize="14" fontWeight="600">Thanh Hóa</text>

                <circle cx="150" cy="30" r="12" fill="var(--gold-500)" opacity={routeAnimated ? 1 : 0} style={{ transition: "opacity .6s 1.5s" }} />
                <text x="170" y="35" fill="var(--text-on-dark)" fontSize="14" fontWeight="700">Phía Bắc &amp; Tây Bắc</text>

                <polygon points="145,15 155,15 150,5" fill="var(--gold-300)" opacity={routeAnimated ? 1 : 0} style={{ transition: "opacity .6s 1.8s" }} />
              </svg>
            </div>

            {/* Route text */}
            <div className="reveal delay-2">
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>TUYẾN ĐƯỜNG HUYẾT MẠCH</div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--text-on-dark)", marginBottom: "1.5rem" }}>
                Hà Tĩnh · Nghệ An · Thanh Hóa
              </h2>
              <p style={{ fontSize: "var(--fs-body)", color: "rgba(255,252,245,.75)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Xuất phát thường xuyên từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc. Đội xe Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn sẵn sàng phục vụ 24/7.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Hỏi lịch xe tuyến này
                </a>
                <Link href="/routes" className="btn btn-secondary" style={{ borderColor: "rgba(255,252,245,.2)", color: "var(--text-on-dark)" }}>
                  Chi tiết các chặng →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition from navy */}
      <div className="section-transition-from-navy" />

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 8 — HÌNH ẢNH THỰC TẾ (Bento Grid 5 ảnh khác nhau 100%, không trùng lặp)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-cream" style={{ paddingTop: "var(--gap-s)", paddingBottom: "var(--gap-s)" }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "var(--space-8)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>HÌNH ẢNH ĐỘI XE THỰC TẾ</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>Xe thật, hàng thật — Không chỉnh sửa ảo</h2>
            <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Toàn bộ ảnh chụp trực tiếp từ công tác bốc dỡ hàng và các chuyến xe vận chuyển thực tế của Hậu Nguyễn.
            </p>
          </div>

          {/* Bento grid layout: 5 ảnh độc nhất, không đè lấn nhau */}
          <div className="bento-collage">
            {/* Item 1: Large card */}
            <div className="photo-wrap bento-item-1 reveal" style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: "260px" }}>
              <img
                src="/images/anh-xe/1wupukp6eun6pn8boglw1rswrlcaa7qzqcpp2lsmnvydlgpeppd3szd7cr8ndr9svdy10.jpg"
                alt="Xe tải Hậu Nguyễn đang bốc xếp hàng tại kho"
                loading="lazy"
                width={600}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="photo"
              />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(20, 32, 63, 0.8)", backdropFilter: "blur(6px)", padding: "0.4rem 0.8rem", borderRadius: "6px", color: "var(--white)", fontSize: "0.8125rem", fontWeight: 600 }}>
                Xếp dỡ cẩn thận tại kho bãi
              </div>
            </div>

            {/* Item 2 */}
            <div className="photo-wrap bento-item-2 reveal delay-1" style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: "220px" }}>
              <img
                src="/images/anh-xe/2aobor2drt7ywlfmbds7qarkztfe3bcukt7pfh0i6.jpg"
                alt="Cửa hông xe thùng kín tiện lợi xếp hàng"
                loading="lazy"
                width={500}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="photo"
              />
              <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", background: "rgba(20, 32, 63, 0.8)", backdropFilter: "blur(6px)", padding: "0.35rem 0.7rem", borderRadius: "6px", color: "var(--white)", fontSize: "0.75rem", fontWeight: 600 }}>
                Cửa hông tiện bốc hàng
              </div>
            </div>

            {/* Item 3 */}
            <div className="photo-wrap bento-item-3 reveal delay-2" style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: "220px" }}>
              <img
                src="/images/anh-xe/2aobor2dsf4migfymyor6lebbdkukrbxkdwsvlwk14.jpg"
                alt="Xe tải Hyundai xanh thùng kín"
                loading="lazy"
                width={400}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="photo"
              />
              <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", background: "rgba(20, 32, 63, 0.8)", backdropFilter: "blur(6px)", padding: "0.35rem 0.7rem", borderRadius: "6px", color: "var(--white)", fontSize: "0.75rem", fontWeight: 600 }}>
                Hyundai thùng kín xanh
              </div>
            </div>

            {/* Item 4 */}
            <div className="photo-wrap bento-item-4 reveal delay-3" style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: "220px" }}>
              <img
                src="/images/anh-xe/1wupukp6eune6ck1zz7boqxxraszzp7tnwjkkbmqpkrz3x0rdnzwytsgayexn7frnbr11.jpg"
                alt="Xe tải lớn vận chuyển đường dài liên tỉnh"
                loading="lazy"
                width={500}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="photo"
              />
              <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", background: "rgba(20, 32, 63, 0.8)", backdropFilter: "blur(6px)", padding: "0.35rem 0.7rem", borderRadius: "6px", color: "var(--white)", fontSize: "0.75rem", fontWeight: 600 }}>
                Vận chuyển đường dài liên tỉnh
              </div>
            </div>

            {/* Item 5 */}
            <div className="photo-wrap bento-item-5 reveal delay-4" style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: "220px" }}>
              <img
                src="/images/anh-xe/2aobor2bwt6lhf1vltgbjvxakuqh9v9nribu1z5c7.jpg"
                alt="Xe tải di chuyển trên trục cao tốc Bắc Nam"
                loading="lazy"
                width={400}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="photo"
              />
              <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", background: "rgba(20, 32, 63, 0.8)", backdropFilter: "blur(6px)", padding: "0.35rem 0.7rem", borderRadius: "6px", color: "var(--white)", fontSize: "0.75rem", fontWeight: 600 }}>
                Lưu thông cao tốc an toàn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHƯƠNG 9 — KÊU GỌI HÀNH ĐỘNG + FORM BÁO GIÁ (Định kiểu màu sắc rõ ràng)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section section-navy" id="bao-gia" style={{ paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-l)" }}>
        <div className="wrap">
          <div className="cta-grid" style={{ display: "grid", gap: "3rem", alignItems: "start" }}>
            {/* CTA text */}
            <div className="reveal">
              <h2 style={{ fontSize: "var(--fs-h1)", color: "var(--text-on-dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Cần vận chuyển hàng?<br />
                <span style={{ color: "var(--gold-300)" }}>Hãy cho chúng tôi biết tuyến và loại hàng.</span>
              </h2>
              <p style={{ fontSize: "var(--fs-body)", color: "rgba(255,252,245,.75)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px" }}>
                Giá cước tính theo từng loại xe, tải trọng thực tế, quãng đường và loại hàng. Đội ngũ điều xe phản hồi nhanh qua Hotline &amp; Zalo.
              </p>
              <div>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,252,245,.6)", display: "block", marginBottom: "0.25rem" }}>Hotline trực ban 24/7:</span>
                <a
                  href={company.hotlineTel}
                  style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-300)", display: "inline-block", letterSpacing: "0.02em" }}
                >
                  {company.hotline}
                </a>
              </div>
              <div style={{ marginTop: "1.25rem" }}>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Nhắn Zalo báo giá ngay
                </a>
              </div>
            </div>

            {/* Contact Form với select hiển thị chữ đen nền trắng rõ ràng */}
            <div className="reveal delay-2" style={{ background: "rgba(255,252,245,.06)", borderRadius: "var(--radius-md)", padding: "var(--space-8)", border: "1px solid rgba(255,252,245,.12)" }}>
              {formSent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-300)" strokeWidth="2" style={{ margin: "0 auto 1rem" }}><path d="M20 6L9 17l-5-5"/></svg>
                  <h3 style={{ color: "var(--text-on-dark)", marginBottom: "0.75rem" }}>Đã mở Zalo nhận báo giá!</h3>
                  <p style={{ color: "rgba(255,252,245,.75)", fontSize: "var(--fs-small)" }}>
                    Chúng tôi sẽ liên hệ lại ngay để tư vấn loại xe và báo giá chi tiết.
                  </p>
                  <a href={company.hotlineTel} className="btn btn-primary" style={{ marginTop: "1rem" }}>
                    Gọi ngay {company.hotline}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit}>
                  <h3 style={{ color: "var(--text-on-dark)", marginBottom: "var(--space-6)", fontSize: "var(--fs-h3)" }}>
                    Nhận báo giá nhanh
                  </h3>
                  <div style={{ display: "grid", gap: "var(--space-4)" }}>
                    <div className="form-group">
                      <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Họ và tên *</label>
                      <input type="text" name="name" className="form-input" placeholder="Nguyễn Văn A" required style={{ background: "rgba(255,252,245,.08)", borderColor: "rgba(255,252,245,.18)", color: "var(--text-on-dark)" }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Số điện thoại *</label>
                      <input type="tel" name="phone" inputMode="tel" className="form-input" placeholder="09xx xxx xxx" required style={{ background: "rgba(255,252,245,.08)", borderColor: "rgba(255,252,245,.18)", color: "var(--text-on-dark)" }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Loại xe cần thuê</label>
                      <select
                        name="vehicle"
                        className="form-select"
                        value={quoteVehicle}
                        onChange={(e) => setQuoteVehicle(e.target.value)}
                        style={{
                          background: "#14203F",
                          borderColor: "rgba(242, 210, 122, 0.4)",
                          color: "#FFFCF5",
                          fontWeight: 600,
                        }}
                      >
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
                        <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Điểm đi</label>
                        <input type="text" name="from" className="form-input" placeholder="VD: Thanh Hóa" style={{ background: "rgba(255,252,245,.08)", borderColor: "rgba(255,252,245,.18)", color: "var(--text-on-dark)" }} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Điểm đến</label>
                        <input type="text" name="to" className="form-input" placeholder="VD: Hà Nội, Sơn La..." style={{ background: "rgba(255,252,245,.08)", borderColor: "rgba(255,252,245,.18)", color: "var(--text-on-dark)" }} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: "rgba(255,252,245,.85)" }}>Loại hàng hoá</label>
                      <input type="text" name="cargo" className="form-input" placeholder="VD: Điện máy, nội thất, bao bì..." style={{ background: "rgba(255,252,245,.08)", borderColor: "rgba(255,252,245,.18)", color: "var(--text-on-dark)" }} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                      Gửi yêu cầu báo giá
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BẢN ĐỒ VỊ TRÍ BÃI XE & TRỤ SỞ (Nâng cấp lớn, đẹp, có thẻ chỉ đường)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--cream-100)", paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-l)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-8)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>ĐỊA BÀN HOẠT ĐỘNG &amp; BÃI XE</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Vị trí trụ sở &amp; Bãi xe Hậu Nguyễn
            </h2>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Nằm tại vị trí chiến lược trên địa bàn tỉnh Thanh Hóa, thuận tiện kết nối trục Quốc lộ 1A và cao tốc Bắc - Nam để xuất phát nhanh chóng.
            </p>
          </div>

          <div className="map-showcase reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.5!2d105.75!3d19.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4bqg4buLYSBjaOG7iSA5MiDEkMO0bmcgWHXDom4sIFRyxrDhu51uZyBWxg3uLCBUaGFuaCBIw7Nh!5e0!3m2!1svi!2svn!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ vị trí 92 Đông Xuân, Xã Trường Văn, Tỉnh Thanh Hóa"
              style={{ width: "100%", height: "100%", border: 0 }}
            />

            {/* Floating Info Overlay Card */}
            <div className="map-overlay-card">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#16a34a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.2)" }}></span>
                Tiếp nhận hàng 24/7
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                {company.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                <strong>Địa chỉ:</strong> {company.address}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href={company.hotlineTel}
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "0.875rem", justifyContent: "center" }}
                >
                  Gọi điều xe: {company.hotline}
                </a>
                <a
                  href="https://maps.google.com/?q=92+Đông+Xuân+Trường+Văn+Thanh+Hóa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", fontSize: "0.875rem", justifyContent: "center" }}
                >
                  Mở chỉ đường Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
