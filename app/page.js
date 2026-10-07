"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FloatingZalo from "./components/FloatingZalo";
import company from "./data/company.json";
import fleetData from "./data/fleet.json";

// Accurate geographic route profiles for Northern & Northwest logistics
const DESTINATION_INFO = {
  "Hà Nội": { time: "Khoảng 2.5 – 3.5 giờ", route: "Cao tốc Mai Sơn – QL45 – Pháp Vân", note: "Giao nhận tận kho nội thành & KCN ngoại thành" },
  "Hải Phòng": { time: "Khoảng 3.5 – 4.5 giờ", route: "Trục ven biển & QL10 – Cao tốc Hà Nội Hải Phòng", note: "Kết nối cảng Đình Vũ, Lạch Huyện" },
  "Quảng Ninh": { time: "Khoảng 4.5 – 5.5 giờ", route: "Cao tốc Hải Phòng – Hạ Long – Vân Đồn", note: "Phục vụ vật liệu, thiết bị công nghiệp" },
  "Bắc Ninh": { time: "Khoảng 3.0 – 4.0 giờ", route: "Cao tốc Hà Nội – Bắc Giang", note: "Giao nhận các KCN Quế Võ, Yên Phong" },
  "Hải Dương": { time: "Khoảng 3.0 – 4.0 giờ", route: "QL5A & Cao tốc Hà Nội – Hải Phòng", note: "Kết nối trung chuyển hàng công nghiệp" },
  "Hưng Yên": { time: "Khoảng 2.5 – 3.5 giờ", route: "Trục QL39 & Cao tốc Hà Nội – Hải Phòng", note: "Phục vụ KCN Phố Nối và vùng phụ cận" },
  "Hòa Bình": { time: "Khoảng 3.5 – 4.5 giờ", route: "Đường Hồ Chí Minh & QL6", note: "Cửa ngõ Tây Bắc, địa hình dốc thoải" },
  "Sơn La": { time: "Khoảng 7.0 – 9.0 giờ", route: "QL6 vượt đèo Mộc Châu", note: "Lái xe kinh nghiệm đèo dốc núi cao" },
  "Điện Biên": { time: "Khoảng 11 – 13 giờ", route: "Trục QL279 & QL6 vượt đèo Pha Đin", note: "Hàng chằng buộc gia cố chống xô lệch" },
  "Lai Châu": { time: "Khoảng 12 – 14 giờ", route: "Cao tốc Nội Bài – Lào Cai ➔ QL4D đèo Ô Quy Hồ", note: "Kiểm tra kỹ thuật phanh & lốp chuyên sâu" },
  "Lào Cai": { time: "Khoảng 6.0 – 7.5 giờ", route: "Cao tốc Nội Bài – Lào Cai xuyên suốt", note: "Giao thương cửa khẩu quốc tế Kim Thành" },
  "Yên Bái": { time: "Khoảng 5.0 – 6.0 giờ", route: "Cao tốc Nội Bài – Lào Cai (IC12)", note: "Kết nối trung chuyển kho bãi miền núi" },
  "Đà Nẵng": { time: "Khoảng 8.0 – 10 giờ", route: "Trục cao tốc Bắc – Nam & QL1A", note: "Cảng biển Tiên Sa & KCN Hòa Khánh" },
  "TP. Hồ Chí Minh": { time: "Khoảng 28 – 34 giờ", route: "Trục cao tốc Bắc – Nam xuyên suốt", note: "Giao nhận tận kho nội ngoại thành & KCN phía Nam" },
  "Bình Dương": { time: "Khoảng 27 – 33 giờ", route: "QL13 & Vành đai công nghiệp", note: "KCN VSIP, Sóng Thần, Mỹ Phước" },
  "Đồng Nai": { time: "Khoảng 26 – 32 giờ", route: "Cao tốc Phan Thiết – Dầu Giây & Long Thành", note: "KCN Biên Hòa, Amata, Nhơn Trạch" },
  "Cần Thơ": { time: "Khoảng 32 – 38 giờ", route: "Cao tốc Trung Lương – Mỹ Thuận – Cần Thơ", note: "Trung tâm logistics Đồng bằng Sông Cửu Long" },
};

const QUICK_ROUTES = [
  "Thanh Hóa → Hà Nội",
  "Nghệ An → Hải Phòng",
  "Hà Tĩnh → Bắc Ninh",
  "Thanh Hóa → Sơn La",
  "Nghệ An → Lào Cai",
  "Thanh Hóa → TP. Hồ Chí Minh",
  "Hà Tĩnh → Bình Dương",
];

export default function HomePage() {
  // Load selector state (Chapter 4) - default to 8 tấn
  const [selectedLoadId, setSelectedLoadId] = useState("xe-8t");
  const selectedVehicle = fleetData.find((v) => v.id === selectedLoadId) || fleetData[2];
  const [isSwitchingVehicle, setIsSwitchingVehicle] = useState(false);

  // Chapter 5 route details interactive state
  const [activeDestName, setActiveDestName] = useState("Hà Nội");

  // Chapter 7 form state & Anti-bot security defenses
  const [cargoDesc, setCargoDesc] = useState("");
  const [routeDesc, setRouteDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [hpToken, setHpToken] = useState(""); // Honeypot trap field (hidden from humans)
  const [formSent, setFormSent] = useState(false);
  const mountTimeRef = useRef(0);
  const lastSubmitRef = useRef(0);

  // Video IntersectionObserver (Chapter 3) & Mount time recorder
  const videoRef = useRef(null);

  useEffect(() => {
    mountTimeRef.current = Date.now();
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

  const handleSelectTonnage = (vehicleId) => {
    if (vehicleId === selectedLoadId) return;
    setIsSwitchingVehicle(true);
    setSelectedLoadId(vehicleId);
    setTimeout(() => {
      setIsSwitchingVehicle(false);
    }, 280);
  };

  // Quick select tonnage and smooth scroll to quote form
  const handleSelectTonnageToQuote = (vehicle) => {
    handleSelectTonnage(vehicle.id);
    setCargoDesc(`Cần vận chuyển xe tải ${vehicle.tonnage} tấn (${vehicle.body || "thùng bạt/kín"})`);
    const formElement = document.getElementById("dat-chuyen");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPhoneError("");

    // 1. Honeypot check: Bots fill hidden inputs; humans do not
    if (hpToken && hpToken.trim().length > 0) {
      // Silently pretend success to deceive bot without running payload
      setFormSent(true);
      return;
    }

    // 2. Speed-trap check: Submissions under 1.2s are automated crawler scripts
    if (mountTimeRef.current > 0 && Date.now() - mountTimeRef.current < 1200) {
      setFormSent(true);
      return;
    }

    // 3. Flood rate-limiting cooldown (min 4s between clicks)
    const now = Date.now();
    if (now - lastSubmitRef.current < 4000) {
      setPhoneError("Thao tác quá nhanh. Quý khách vui lòng chờ 3-5 giây.");
      return;
    }

    // 4. Validate phone format (Vietnamese mobile 10 digits)
    const rawPhone = phone.replace(/[\s.-]/g, "");
    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
    if (!vnPhoneRegex.test(rawPhone)) {
      setPhoneError("Vui lòng nhập đúng định dạng số điện thoại di động (10 chữ số, VD: 0823040412).");
      return;
    }

    // 5. Input sanitization (strip dangerous injection chars)
    const cleanCargo = cargoDesc.replace(/[<>'"`;(){}[\]\\/]/g, "").trim().slice(0, 150);
    const cleanRoute = routeDesc.replace(/[<>'"`;(){}[\]\\/]/g, "").trim().slice(0, 150);
    const cleanPhone = rawPhone.slice(0, 15);

    lastSubmitRef.current = now;

    const message = `Yêu cầu báo giá vận chuyển Hậu Nguyễn:
- Hàng gì: ${cleanCargo || "Chưa ghi cụ thể"}
- Tuyến đường: ${cleanRoute || "Chưa ghi cụ thể"}
- Số điện thoại khách: ${cleanPhone}`;

    const encoded = encodeURIComponent(message);
    window.open(`${company.zalo2Link || company.zaloLink}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setFormSent(true);
  };

  const activeRouteData = DESTINATION_INFO[activeDestName] || DESTINATION_INFO["Hà Nội"];

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
                <span>Hotline: {company.hotline} (A. Hậu)</span>
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

      {/* Transition: Dark Monolith Hero (#0A0E17) → Manifesto (#FAF8F2) */}
      <div className="transition-zone tz-hero-to-cream" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          CHUYỆN CỦA HÀNG (EDITORIAL MANIFESTO)
          One large editorial statement. NO cards. Generous whitespace.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch2-manifesto journey-stage-morning" id="chuyen-cua-hang">
        <div className="wrap">
          <div className="ch2-wrap">
            <blockquote className="ch2-quote reveal-up">
              Mỗi chuyến hàng là một lời hứa với người đang chờ ở đầu bên kia.
              Chúng tôi giữ lời đó, từ kho đến tận bàn giao.
            </blockquote>

            <div className="ch2-author reveal-up" data-delay="0.15s">
              <span>Hậu Nguyễn Transport · Nguyên tắc vận hành từng chuyến xe</span>
            </div>
          </div>
        </div>

        {/* Truck on Viaduct Bridge Illustration */}
        <div className="ch2-illustration reveal-scale" aria-hidden="true">
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
          Video is the protagonist. Clean, pristine visual.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch3-film journey-stage-road" id="tren-duong">
        <div className="wrap">
          <div className="ch3-header reveal-up">
            <h2 className="ch3-cadence">Kho. Đường. Đèo. Nơi nhận.</h2>
          </div>

          <div className="ch3-video-wrapper reveal-scale">
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
          <div className="ch4-header reveal-up">
            <h2 className="ch4-title">Hàng của bạn nặng bao nhiêu?</h2>
            <p className="ch4-subtitle">
              Chọn mức tải dự kiến để xem phương tiện và cấu hình thùng phù hợp với tính chất hàng hóa của bạn.
            </p>
          </div>

          {/* Selector toggle bar */}
          <div className="ch4-selector-bar reveal-up" role="tablist" aria-label="Chọn mức tải trọng xe tải">
            {fleetData.map((vehicle) => {
              const isActive = vehicle.id === selectedLoadId;
              return (
                <button
                  key={vehicle.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`ch4-selector-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectTonnage(vehicle.id)}
                >
                  <span>{vehicle.tonnage} tấn</span>
                </button>
              );
            })}
          </div>

          {/* Single Dynamic Vehicle Showcase Panel */}
          <div className="ch4-display-panel reveal-scale">
            <div className={`ch4-panel-image ${isSwitchingVehicle ? "is-switching" : ""}`}>
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
                  <span className="ch4-spec-value counter-num">{selectedVehicle.tonnage} Tấn</span>
                </div>
                <div className="ch4-spec-item">
                  <span className="ch4-spec-label">Thể tích ước tính</span>
                  <span className="ch4-spec-value counter-num">~{selectedVehicle.volume_m3} m³</span>
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

      {/* Transition: Warm Cream (#FAF8F2) → Deep Navy (#14203F) */}
      <div className="transition-zone tz-cream-to-navy" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          TUYẾN ĐƯỜNG LÊN BẮC (ROUTE STORYTELLING)
          Headline: Ba điểm đi. Một hướng: lên Bắc.
          Subtitle: Sơ đồ minh hoạ. Hỏi chúng tôi lịch xe chạy tuyến bạn cần.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch5-route journey-stage-sunset" id="len-bac">
        <div className="wrap">
          <div className="ch5-header reveal-up">
            <h2 className="ch5-title">Ba điểm đi. Một hướng: lên Bắc.</h2>
            <p className="ch5-subtitle">
              Sơ đồ minh hoạ. Hỏi chúng tôi lịch xe chạy tuyến bạn cần để có phương án tối ưu nhất.
            </p>
          </div>

          <div className="ch5-map-diagram reveal-scale">
            <div className="ch5-diagram-flow">
              {/* Origin nodes */}
              <div className="ch5-origins">
                <div className="ch5-origin-node">
                  <span className="pulse-radar-ring" />
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
                  <span className="pulse-radar-ring" style={{ animationDelay: "0.9s" }} />
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
                  <span className="pulse-radar-ring" style={{ animationDelay: "1.8s" }} />
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
                  <span>Toàn Quốc</span>
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
                    <span>Phía Bắc &amp; Đồng Bằng Sông Hồng</span>
                  </h4>
                  <div className="ch5-dest-tags">
                    {["Hà Nội", "Hải Phòng", "Quảng Ninh", "Bắc Ninh", "Hải Dương", "Hưng Yên"].map((dest) => (
                      <span
                        key={dest}
                        className={`ch5-dest-pill ${activeDestName === dest ? "active" : ""}`}
                        onClick={() => setActiveDestName(dest)}
                        onMouseEnter={() => setActiveDestName(dest)}
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ch5-dest-branch">
                  <h4 className="ch5-dest-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span>Tây Bắc &amp; Vùng Cao</span>
                  </h4>
                  <div className="ch5-dest-tags">
                    {["Hòa Bình", "Sơn La", "Điện Biên", "Lai Châu", "Lào Cai", "Yên Bái"].map((dest) => (
                      <span
                        key={dest}
                        className={`ch5-dest-pill ${activeDestName === dest ? "active" : ""}`}
                        onClick={() => setActiveDestName(dest)}
                        onMouseEnter={() => setActiveDestName(dest)}
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ch5-dest-branch">
                  <h4 className="ch5-dest-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    <span>Miền Trung &amp; Các Tỉnh Phía Nam</span>
                  </h4>
                  <div className="ch5-dest-tags">
                    {["Đà Nẵng", "TP. Hồ Chí Minh", "Bình Dương", "Đồng Nai", "Cần Thơ"].map((dest) => (
                      <span
                        key={dest}
                        className={`ch5-dest-pill ${activeDestName === dest ? "active" : ""}`}
                        onClick={() => setActiveDestName(dest)}
                        onMouseEnter={() => setActiveDestName(dest)}
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Live Route Details Inspector */}
            <div className="route-live-preview">
              <div className="route-live-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span>Hành trình đến {activeDestName}: {activeRouteData.route}</span>
              </div>
              <div className="route-live-meta">
                <span className="route-live-pill">Thời gian: {activeRouteData.time}</span>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)" }}>{activeRouteData.note}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          NGƯỜI VÀ XE (PURE ARTISTIC PHOTOGRAPHIC COLLAGE)
          No fake labels, no captions, purely clean visual atmosphere.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch6-crew journey-stage-night" id="nguoi-va-xe">
        <div className="wrap">
          <div className="ch6-header reveal-up">
            <h2 className="ch6-title">Người và xe trên từng cây số.</h2>
            <p className="ch6-subtitle">
              Những hình ảnh chân thực từ kho bốc dỡ, quá trình kiểm tra phương tiện đến những cung đường thực tế.
            </p>
          </div>

          <div className="ch6-collage">
            {/* Image 1: Driver checking vehicle & cargo before departure */}
            <div className="ch6-item ch6-item-1 reveal-up">
              <img
                src="/images/anh-xe/anhthem2.jpg"
                alt="Đội ngũ lái xe Hậu Nguyễn kiểm tra kỹ thuật trước giờ xuất bến"
                loading="lazy"
              />
            </div>

            {/* Image 2: Loading & lashing at depot */}
            <div className="ch6-item ch6-item-2 reveal-up" data-delay="0.1s">
              <img
                src="/images/anh-xe/anhthem4.jpg"
                alt="Bốc xếp và chằng buộc hàng hóa tại kho bãi"
                loading="lazy"
              />
            </div>

            {/* Image 3: Fleet staging at transit hub */}
            <div className="ch6-item ch6-item-3 reveal-up" data-delay="0.15s">
              <img
                src="/images/anh-xe/anhthem5.jpg"
                alt="Đội hình phương tiện Hậu Nguyễn tập kết tại bãi trung chuyển"
                loading="lazy"
              />
            </div>

            {/* Image 4: Highway and mountain pass transit */}
            <div className="ch6-item ch6-item-4 reveal-up" data-delay="0.2s">
              <img
                src="/images/anh-xe/anhthem6.jpg"
                alt="Chuyến xe tải Hậu Nguyễn di chuyển trên cung đường dài"
                loading="lazy"
              />
            </div>

            {/* Image 5: Rear seal intact at delivery point */}
            <div className="ch6-item ch6-item-5 reveal-up" data-delay="0.25s">
              <img
                src="/images/anh-xe/duoixemautrang.jpg"
                alt="Khâu kiểm tra niêm phong thùng kín tại điểm giao nhận"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Deep Navy (#14203F) → Pure White (#FFFFFF) */}
      <div className="transition-zone tz-navy-to-white" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════
          ĐẾN LƯỢT HÀNG CỦA BẠN (CONVERSION FINALE)
          Heading: Hàng gì, đi đâu?
          3 fields: Hàng gì, Đi từ đâu đến đâu, Số điện thoại.
          CTA: Gửi, chúng tôi gọi lại.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ch7-conversion" id="dat-chuyen">
        <div className="wrap">
          <div className="ch7-card ch7-card--overlap reveal-scale">
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

                {/* Quick Route Preset Suggestion Chips */}
                <div className="ch7-quick-routes">
                  <span className="ch7-quick-label">Tuyến phổ biến:</span>
                  {QUICK_ROUTES.map((route) => (
                    <button
                      key={route}
                      type="button"
                      className="ch7-quick-chip"
                      onClick={() => setRouteDesc(route)}
                    >
                      {route}
                    </button>
                  ))}
                </div>

                {/* Anti-bot Honeypot Trap (invisible to real visitors) */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }} aria-hidden="true">
                  <label htmlFor="company-fax-field">Fax Number</label>
                  <input
                    id="company-fax-field"
                    type="text"
                    name="company_fax_field"
                    value={hpToken}
                    onChange={(e) => setHpToken(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone-field">
                    Số điện thoại nhận báo giá *
                  </label>
                  <input
                    id="phone-field"
                    type="tel"
                    required
                    maxLength={15}
                    className="ch7-input"
                    placeholder="Nhập số điện thoại của bạn (bắt buộc)"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError("");
                    }}
                  />
                  {phoneError && (
                    <div style={{ color: "#ef4444", fontSize: "0.8125rem", marginTop: "0.4rem", fontWeight: 600 }}>
                      ⚠️ {phoneError}
                    </div>
                  )}
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
                <a href={company.hotlineTel} className="ch7-hotline-link" title="Nguyễn Hậu - Hotline chính">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{company.hotline} (A. Hậu - Chính)</span>
                </a>

                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ch7-zalo-btn"
                  title="Chat Zalo Nguyễn Hậu"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Zalo A. Hậu</span>
                </a>

                <a href={company.hotline2Tel} className="ch7-hotline-link" style={{ background: "rgba(20,32,63,0.06)", borderColor: "var(--cream-200)" }} title="Nguyễn Hữu Phúc - Hotline 2">
                  <span>{company.hotline2} (A. Phúc)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: Pure White (#FFFFFF) → Dark Navy Footer (#0D1529) */}
      <div className="transition-zone tz-white-to-footer" aria-hidden="true" />
    </div>
  );
}
