"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FloatingZalo from "./components/FloatingZalo";
import company from "./data/company.json";
import fleetData from "./data/fleet.json";

export default function HomePage() {
  // Load selector state (Chapter 4) - default to 8 tấn
  const [selectedLoadId, setSelectedLoadId] = useState("xe-8t");
  const selectedVehicle = fleetData.find((v) => v.id === selectedLoadId) || fleetData[2];

  // Chapter 7 form state
  const [cargoDesc, setCargoDesc] = useState("");
  const [routeDesc, setRouteDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [formSent, setFormSent] = useState(false);

  // Video IntersectionObserver (Chapter 3)
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => { });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  // Quick select tonnage and smooth scroll to quote form
  const handleSelectTonnageToQuote = (vehicle) => {
    setSelectedLoadId(vehicle.id);
    setCargoDesc(`Cần vận chuyển xe tải ${vehicle.tonnage} tấn (${vehicle.body || "thùng bạt/kín"})`);
    const formElement = document.getElementById("dat-chuyen");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;

    const message = `Yêu cầu báo giá vận chuyển Hậu Nguyễn:
- Hàng gì: ${cargoDesc || "Chưa ghi cụ thể"}
- Tuyến đường: ${routeDesc || "Chưa ghi cụ thể"}
- Số điện thoại khách: ${phone}`;

    const encoded = encodeURIComponent(message);
    window.open(`${company.zaloLink}?text=${encoded}`, "_blank");
    setFormSent(true);
  };

  return (
    <div className="journey-stream">
      <FloatingZalo />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — THE KINETIC MONOLITH
          Digital Artwork / Editorial Cover / Cinematic Mobility
          Static Mass + Moving Machine
          NO chapters, NO index, NO badges, NO fake labels.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="monolith-hero" id="hero">
        {/* Cinematic Background Layer */}
        <div className="monolith-bg">
          <img
            src="/images/hero/hau-nguyen-clean-full.png"
            alt="Đoàn xe vận tải Hino VT Hậu Nguyễn trên cung đường đèo dốc miền núi phía Bắc"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Atmospheric Depth & Contrast Vignette */}
        <div className="monolith-vignette" />

        {/* Monolith Architectural Typography & Content */}
        <div className="monolith-container">
          <div className="monolith-content">
            <div className="monolith-eyebrow">
              <span>VẬN TẢI · XÂY DỰNG · DỊCH VỤ</span>
            </div>

            <h1 className="monolith-title">
              HẬU NGUYỄN
            </h1>

            <p className="monolith-tagline">
              Hàng đi đúng đường, đến đúng nơi.
            </p>

            <div className="monolith-cta-group">
              <a href="#dat-chuyen" className="btn btn-primary">
                <span>Hỏi giá chuyến hàng</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href={company.hotlineTel}
                className="btn btn-secondary"
                style={{ borderColor: "rgba(255,255,255,0.35)", color: "#FFFFFF" }}
              >
                <span>Hotline: {company.hotline}</span>
              </a>
            </div>
          </div>

          {/* Minimalist Action & Explore Cue */}
          <div className="monolith-footer">
            <a href="#chuyen-cua-hang" className="monolith-explore" style={{ marginLeft: "auto" }}>
              <span>Hành trình vận chuyển</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Transition Zone: Monolith Hero (Dark #0A0E17) → Manifesto (Morning Light #FAF8F2) */}
      <div className="transition-zone tz-hero-to-light" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          CHUYỆN CỦA HÀNG (EDITORIAL MANIFESTO)
          One large editorial statement. NO cards. Generous whitespace.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch2-manifesto journey-stage-morning" id="chuyen-cua-hang">
        <div className="wrap">
          <div className="ch2-wrap">
            <blockquote className="ch2-quote">
              Mỗi chuyến hàng là một lời hứa với người đang chờ ở đầu bên kia.
              Chúng tôi giữ lời đó, từ kho đến tận bàn giao.
            </blockquote>

            <div className="ch2-author">
              <span className="ch2-author-line" />
              <span>Hậu Nguyễn Transport · Nguyên tắc vận hành từng chuyến xe</span>
              <span className="ch2-author-line" />
            </div>
          </div>
        </div>

        {/* Truck on Viaduct Bridge Illustration */}
        <div className="ch2-illustration" aria-hidden="true">
          <img
            src="/images/truck-bridge-manifesto.png"
            alt="Minh họa xe tải Hậu Nguyễn vận hành trên cầu cạn"
            className="ch2-truck-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRÊN ĐƯỜNG (CINEMATIC ROAD FILM)
          Video is the protagonist. Minimal copy: "Kho. Đường. Đèo. Nơi nhận."
          Label: "Hình ảnh minh họa"
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch3-film journey-stage-road" id="tren-duong">
        <div className="wrap">
          <div className="ch3-header">
            <h2 className="ch3-cadence">Kho. Đường. Đèo. Nơi nhận.</h2>
          </div>

          <div className="ch3-video-wrapper">
            <video
              ref={videoRef}
              src="/videos/videoxechaycang.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="ch3-video"
              aria-label="Video xe tải Hậu Nguyễn di chuyển trên cung đường vận chuyển"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          NHU CẦU VẬN CHUYỂN (INTERACTIVE LOAD SELECTOR)
          Interactive Load Selector: 3.5, 6, 8, 10, 15 tấn.
          Single dynamic panel. NO 5-card grid.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch4-load journey-stage-depot" id="tai-trong">
        <div className="wrap">
          <div className="ch4-header">
            <h2 className="ch4-title">Hàng của bạn nặng bao nhiêu?</h2>
            <p className="ch4-subtitle">
              Chọn mức tải dự kiến để xem phương tiện và cấu hình thùng phù hợp với tính chất hàng hóa của bạn.
            </p>
          </div>

          {/* Selector toggle bar */}
          <div className="ch4-selector-bar" role="tablist" aria-label="Chọn mức tải trọng xe tải">
            {fleetData.map((vehicle) => {
              const isActive = vehicle.id === selectedLoadId;
              return (
                <button
                  key={vehicle.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`ch4-selector-btn ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedLoadId(vehicle.id)}
                >
                  <span>{vehicle.tonnage} tấn</span>
                </button>
              );
            })}
          </div>

          {/* Single Dynamic Vehicle Showcase Panel */}
          <div className="ch4-display-panel">
            <div className="ch4-panel-image">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                width={700}
                height={480}
                key={selectedVehicle.id}
              />
            </div>

            <div className="ch4-panel-info">
              <div>
                <span className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                  Phương án phương tiện
                </span>
                <h3 className="ch4-panel-name">{selectedVehicle.name}</h3>
              </div>

              <div className="ch4-specs-grid">
                <div className="ch4-spec-item">
                  <span className="ch4-spec-label">Tải trọng tối đa</span>
                  <span className="ch4-spec-value">{selectedVehicle.tonnage} Tấn</span>
                </div>
                <div className="ch4-spec-item">
                  <span className="ch4-spec-label">Thể tích ước tính</span>
                  <span className="ch4-spec-value">~{selectedVehicle.volume_m3} m³</span>
                </div>
                <div className="ch4-spec-item">
                  <span className="ch4-spec-label">Quy cách thùng</span>
                  <span className="ch4-spec-value">{selectedVehicle.body || "Thùng bạt / kín"}</span>
                </div>
                <div className="ch4-spec-item">
                  <span className="ch4-spec-label">Dòng xe tiêu chuẩn</span>
                  <span className="ch4-spec-value">{selectedVehicle.brand || "Hino / Hyundai"}</span>
                </div>
              </div>

              <div className="ch4-panel-fit">
                <span className="ch4-fit-label">Hàng hóa phù hợp nhất:</span>
                <p className="ch4-fit-desc">{selectedVehicle.suitable_for}</p>
              </div>

              <div>
                <button
                  onClick={() => handleSelectTonnageToQuote(selectedVehicle)}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Hỏi giá cho xe {selectedVehicle.tonnage} tấn này</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Cream (#EFE8D6) → Deep Navy (#14203F) */}
      <div className="transition-zone tz-cream-to-navy" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          TUYẾN ĐƯỜNG LÊN BẮC (ROUTE STORYTELLING)
          Headline: Ba điểm đi. Một hướng: lên Bắc.
          Subtitle: Sơ đồ minh hoạ. Hỏi chúng tôi lịch xe chạy tuyến bạn cần.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch5-route journey-stage-sunset" id="len-bac">
        <div className="wrap">
          <div className="ch5-header">
            <h2 className="ch5-title">Ba điểm đi. Một hướng: lên Bắc.</h2>
            <p className="ch5-subtitle">
              Sơ đồ minh hoạ. Hỏi chúng tôi lịch xe chạy tuyến bạn cần để có phương án tối ưu nhất.
            </p>
          </div>

          <div className="ch5-map-diagram">
            <div className="ch5-diagram-flow">
              {/* Origin nodes */}
              <div className="ch5-origins">
                <div className="ch5-origin-node">
                  <span className="ch5-node-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </span>
                  <div>
                    <h4 className="ch5-node-title">Thanh Hóa</h4>
                    <p className="ch5-node-sub">Kho tổng trung tâm & điều phối</p>
                  </div>
                </div>

                <div className="ch5-origin-node">
                  <span className="ch5-node-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </span>
                  <div>
                    <h4 className="ch5-node-title">Nghệ An</h4>
                    <p className="ch5-node-sub">Điểm nhận hàng & gom chuyến</p>
                  </div>
                </div>

                <div className="ch5-origin-node">
                  <span className="ch5-node-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </span>
                  <div>
                    <h4 className="ch5-node-title">Hà Tĩnh</h4>
                    <p className="ch5-node-sub">Điểm nhận hàng & xuất phát liên tỉnh</p>
                  </div>
                </div>
              </div>

              {/* Trunk route connector */}
              <div className="ch5-connector">
                <div className="ch5-connector-arrow">
                  <span>Trục Bắc</span>
                  <svg className="ch5-connector-svg" viewBox="0 0 64 32" fill="none">
                    <path d="M0 16H52M52 16L40 6M52 16L40 26" stroke="#D9A21B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Destination Branches */}
              <div className="ch5-destinations">
                <div className="ch5-dest-branch">
                  <h4 className="ch5-dest-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span>Phía Bắc & Đồng Bằng Sông Hồng</span>
                  </h4>
                  <div className="ch5-dest-tags">
                    <span className="ch5-dest-pill">Hà Nội</span>
                    <span className="ch5-dest-pill">Hải Phòng</span>
                    <span className="ch5-dest-pill">Quảng Ninh</span>
                    <span className="ch5-dest-pill">Bắc Ninh</span>
                    <span className="ch5-dest-pill">Hải Dương</span>
                    <span className="ch5-dest-pill">Hưng Yên</span>
                  </div>
                </div>

                <div className="ch5-dest-branch">
                  <h4 className="ch5-dest-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span>Tây Bắc & Vùng Cao</span>
                  </h4>
                  <div className="ch5-dest-tags">
                    <span className="ch5-dest-pill">Hòa Bình</span>
                    <span className="ch5-dest-pill">Sơn La</span>
                    <span className="ch5-dest-pill">Điện Biên</span>
                    <span className="ch5-dest-pill">Lai Châu</span>
                    <span className="ch5-dest-pill">Lào Cai</span>
                    <span className="ch5-dest-pill">Yên Bái</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          NGƯỜI VÀ XE (ASYMMETRIC PURPOSEFUL COLLAGE)
          No generic gallery. Genuine context and verified captions.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch6-crew journey-stage-night" id="nguoi-va-xe">
        <div className="wrap">
          <div className="ch6-header">
            <h2 className="ch6-title">Người và xe trên từng cây số.</h2>
            <p className="ch6-subtitle">
              Những hình ảnh chân thực từ kho bốc dỡ, quá trình kiểm tra phương tiện đến những cung đường thực tế.
            </p>
          </div>

          <div className="ch6-collage">
            {/* Image 1: Driver checking vehicle & cargo before departure */}
            <div className="ch6-item ch6-item-1">
              <img
                src="/images/anh-xe/anhthem2.jpg"
                alt="Đội ngũ lái xe Hậu Nguyễn kiểm tra kỹ thuật trước giờ xuất bến"
                loading="lazy"
              />
              <div className="ch6-item-caption">
                Tài xế và phụ xe kiểm tra kỹ thuật, rà soát an toàn hàng hóa trước giờ xuất bến.
              </div>
            </div>

            {/* Image 2: Loading & lashing at depot */}
            <div className="ch6-item ch6-item-2">
              <img
                src="/images/anh-xe/anhthem4.jpg"
                alt="Bốc xếp và chằng buộc hàng hóa tại kho bãi"
                loading="lazy"
              />
              <div className="ch6-item-caption">
                Bốc xếp, chèn lót hàng cẩn trọng tại kho bãi Thanh Hóa.
              </div>
            </div>

            {/* Image 3: Fleet staging at transit hub */}
            <div className="ch6-item ch6-item-3">
              <img
                src="/images/anh-xe/anhthem5.jpg"
                alt="Đội hình phương tiện Hậu Nguyễn tập kết tại bãi trung chuyển"
                loading="lazy"
              />
              <div className="ch6-item-caption">
                Đội hình xe tập kết sẵn sàng phục vụ các tuyến cao điểm.
              </div>
            </div>

            {/* Image 4: Highway and mountain pass transit */}
            <div className="ch6-item ch6-item-4">
              <img
                src="/images/anh-xe/anhthem6.jpg"
                alt="Chuyến xe tải Hậu Nguyễn di chuyển trên cung đường dài"
                loading="lazy"
              />
              <div className="ch6-item-caption">
                Chuyến xe lăn bánh xuyên ngày đêm trên các cung đường liên tỉnh.
              </div>
            </div>

            {/* Image 5: Rear seal intact at delivery point */}
            <div className="ch6-item ch6-item-5">
              <img
                src="/images/anh-xe/duoixemautrang.jpg"
                alt="Khâu kiểm tra niêm phong thùng kín tại điểm giao nhận"
                loading="lazy"
              />
              <div className="ch6-item-caption">
                Niêm phong thùng kín nguyên vẹn khi đến điểm giao hàng.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: Dark Navy (#0E162A) → White / Cream (#FFFFFF) */}
      <div className="transition-zone tz-navy-to-white" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          ĐẾN LƯỢT HÀNG CỦA BẠN (CONVERSION FINALE)
          Heading: Hàng gì, đi đâu?
          3 fields: Hàng gì, Đi từ đâu đến đâu, Số điện thoại.
          CTA: Gửi, chúng tôi gọi lại.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch7-conversion" id="dat-chuyen">
        <div className="wrap">
          <div className="ch7-card ch7-card--overlap">
            <div className="ch7-header">
              <h2 className="ch7-title">Hàng gì, đi đâu?</h2>
              <p className="ch7-subtitle">
                Để lại thông tin cơ bản. Chúng tôi tính toán phương án và gọi lại báo giá chi tiết trong thời gian sớm nhất.
              </p>
            </div>

            {formSent ? (
              <div style={{
                textAlign: "center",
                padding: "2.5rem 1.5rem",
                background: "var(--cream-100)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--gold-300)"
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" style={{ margin: "0 auto 1rem" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                  Cảm ơn bạn đã gửi thông tin!
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>
                  Hậu Nguyễn đã tiếp nhận yêu cầu và sẽ liên hệ lại với bạn ngay qua số điện thoại đã cung cấp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="ch7-form">
                <div className="ch7-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="cargo-field">
                      Hàng gì?
                    </label>
                    <input
                      id="cargo-field"
                      type="text"
                      className="ch7-input"
                      placeholder="Ví dụ: 10 tấn sắt thép, bao bì hạt nhựa, đồ gỗ..."
                      value={cargoDesc}
                      onChange={(e) => setCargoDesc(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="route-field">
                      Đi từ đâu đến đâu?
                    </label>
                    <input
                      id="route-field"
                      type="text"
                      className="ch7-input"
                      placeholder="Ví dụ: Thanh Hóa đi Lào Cai, Nghệ An đi Hà Nội..."
                      value={routeDesc}
                      onChange={(e) => setRouteDesc(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone-field">
                    Số điện thoại nhận báo giá *
                  </label>
                  <input
                    id="phone-field"
                    type="tel"
                    required
                    className="ch7-input"
                    placeholder="Nhập số điện thoại của bạn (bắt buộc)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button type="submit" className="ch7-submit-btn">
                  <span>Gửi, chúng tôi gọi lại</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}

            {/* Direct contact alternatives */}
            <div className="ch7-direct-contacts">
              <span className="ch7-direct-label">Hoặc liên hệ trao đổi trực tiếp:</span>
              <div className="ch7-direct-btns">
                <a href={company.hotlineTel} className="ch7-hotline-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{company.hotline}</span>
                </a>

                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ch7-zalo-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Nhắn Zalo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Zone: White (#FFFFFF) → Footer Vintage Paper (#ebeee7) */}
      <div className="transition-zone tz-white-to-paper" aria-hidden="true" />
    </div>
  );
}
