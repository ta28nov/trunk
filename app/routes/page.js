"use client";
import { useState, useEffect, useRef } from "react";
import company from "../data/company.json";

export default function RoutesPage() {
  const routeRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!routeRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    obs.observe(routeRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--cream-100)", padding: "var(--section-y) 0 var(--space-12)" }}>
        <div className="wrap">
          <div className="eyebrow hero-animate-1" style={{ marginBottom: "1rem" }}>MẠNG LƯỚI TUYẾN ĐƯỜNG</div>
          <h1 className="hero-animate-2" style={{ fontSize: "var(--fs-h1)", color: "var(--navy-700)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Hà Tĩnh · Nghệ An · Thanh Hóa<br />
            <span style={{ color: "var(--gold-600)" }}>đi các tỉnh phía Bắc và Tây Bắc</span>
          </h1>
          <p className="hero-animate-3" style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", maxWidth: "680px", lineHeight: 1.65 }}>
            Xuất phát thường xuyên từ dải đất Bắc Trung Bộ (Hà Tĩnh, Nghệ An, Thanh Hóa), kết nối nhanh chóng lên hệ thống đường cao tốc và quốc lộ để vận chuyển hàng hóa đến khắp các tỉnh đồng bằng, trung du và miền núi phía Bắc.
          </p>
        </div>
      </section>

      {/* Route visualization */}
      <section className="section" ref={routeRef}>
        <div className="wrap">
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="route-layout">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg
                viewBox="0 0 400 500"
                width="400"
                height="500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: "100%" }}
              >
                {/* Route path */}
                <path
                  d="M 200 480 C 200 400, 120 350, 140 280 C 160 210, 260 180, 240 120 C 220 60, 200 30, 200 10"
                  stroke="var(--gold-500)"
                  strokeWidth="3"
                  strokeDasharray="10 8"
                  className={`route-line ${animated ? "animate" : ""}`}
                  fill="none"
                />

                {/* Origin points */}
                <circle cx="200" cy="480" r="10" fill="var(--gold-500)" opacity={animated ? 1 : 0} style={{ transition: "opacity .6s .3s" }} />
                <text x="220" y="486" fill="var(--navy-700)" fontSize="16" fontWeight="700">Hà Tĩnh</text>

                <circle cx="140" cy="350" r="10" fill="var(--gold-500)" opacity={animated ? 1 : 0} style={{ transition: "opacity .6s .6s" }} />
                <text x="160" y="356" fill="var(--navy-700)" fontSize="16" fontWeight="700">Nghệ An</text>

                <circle cx="160" cy="260" r="10" fill="var(--gold-500)" opacity={animated ? 1 : 0} style={{ transition: "opacity .6s .9s" }} />
                <text x="180" y="266" fill="var(--navy-700)" fontSize="16" fontWeight="700">Thanh Hóa</text>

                {/* Destination marker */}
                <circle cx="200" cy="30" r="14" fill="var(--gold-500)" opacity={animated ? 1 : 0} style={{ transition: "opacity .6s 1.5s" }} />
                <text x="224" y="36" fill="var(--navy-700)" fontSize="16" fontWeight="700">Phía Bắc &amp; Tây Bắc</text>

                {/* Arrow */}
                <polygon points="193,18 207,18 200,4" fill="var(--gold-500)" opacity={animated ? 1 : 0} style={{ transition: "opacity .6s 1.8s" }} />
              </svg>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>ĐIỂM NHẬN HÀNG THƯỜNG XUYÊN</div>
              <h2 className="reveal" style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", marginBottom: "1.5rem" }}>
                3 Điểm xuất phát trọng điểm
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="card reveal delay-1" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--navy-700)" }}>Thanh Hóa (Tổng trạm điều phối)</h3>
                    <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>
                      Trụ sở bãi xe tại 92 Đông Xuân, Xã Trường Văn. Đầy đủ các dòng xe từ 3,5t đến 15t, hỗ trợ nhận hàng tận nơi 24/7.
                    </p>
                  </div>
                </div>

                <div className="card reveal delay-2" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--navy-700)" }}>Nghệ An</h3>
                    <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>
                      Nhận hàng tại TP. Vinh, KCN Nam Cấm, Hoàng Mai và các huyện dọc tuyến Quốc lộ 1A. Chạy thẳng ra Bắc theo giờ hẹn.
                    </p>
                  </div>
                </div>

                <div className="card reveal delay-3" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--cream-100)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--navy-700)" }}>Hà Tĩnh</h3>
                    <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>
                      Tiếp nhận hàng tại TP. Hà Tĩnh, Kỳ Anh, Hồng Lĩnh và khu vực lân cận. Lịch xe chạy liên tục ghép chuyến hoặc nguyên xe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal delay-4" style={{ marginTop: "2rem" }}>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Hỏi lịch xe tuyến này qua Zalo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Hành lang tuyến chi tiết */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>HÀNH LANG VẬN TẢI CHI TIẾT</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Các trục tuyến kết nối trọng điểm
            </h2>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Tùy thuộc vào tính chất mặt hàng và vị trí kho nhận, Hậu Nguyễn bố trí lộ trình thông suốt và phương tiện phù hợp.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div className="card reveal delay-1" style={{ borderTop: "4px solid var(--gold-500)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="fleet-tag">Trục Đồng Bằng</span>
              </div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Hà Nội &amp; Các Tỉnh Vùng Thủ Đô
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Kết nối Thanh Hóa ➔ Ninh Bình, Hà Nam, Hà Nội, Hưng Yên, Bắc Ninh, Hải Dương, Hải Phòng, Quảng Ninh.
              </p>
              <div style={{ padding: "0.75rem", background: "var(--cream-100)", borderRadius: "var(--radius-sm)", fontSize: "0.8125rem", color: "var(--navy-700)" }}>
                <strong>Thời gian giao hàng:</strong> Trong ngày hoặc sáng sớm hôm sau theo yêu cầu vào phố cấm giờ.
              </div>
            </div>

            <div className="card reveal delay-2" style={{ borderTop: "4px solid var(--navy-700)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="fleet-tag" style={{ background: "rgba(27,42,87,.1)", color: "var(--navy-700)" }}>Trục Tây Bắc</span>
              </div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Cung Đường Đèo Dốc Tây Bắc
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Kết nối Thanh Hóa ➔ Hòa Bình, Sơn La, Điện Biên, Lai Châu. Sử dụng đội xe Hino &amp; Hyundai gầm cao máy khỏe.
              </p>
              <div style={{ padding: "0.75rem", background: "var(--cream-100)", borderRadius: "var(--radius-sm)", fontSize: "0.8125rem", color: "var(--navy-700)" }}>
                <strong>Lưu ý nghiệp vụ:</strong> Chằng buộc đai xích chuyên sâu, lái xe chuyên tuyến đèo dốc nhiều kinh nghiệm.
              </div>
            </div>

            <div className="card reveal delay-3" style={{ borderTop: "4px solid var(--gold-500)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="fleet-tag">Trục Đông Bắc</span>
              </div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                Khu Công Nghiệp &amp; Cửa Khẩu
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Kết nối Thanh Hóa ➔ Vĩnh Phúc, Phú Thọ, Thái Nguyên, Tuyên Quang, Yên Bái, Lào Cai, Lạng Sơn.
              </p>
              <div style={{ padding: "0.75rem", background: "var(--cream-100)", borderRadius: "var(--radius-sm)", fontSize: "0.8125rem", color: "var(--navy-700)" }}>
                <strong>Loại hàng chuyên chở:</strong> Thiết bị máy móc, nguyên vật liệu xây dựng, nông sản xuất nhập khẩu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Showcase */}
      <section className="section" style={{ background: "var(--cream-100)", paddingTop: "var(--gap-m)", paddingBottom: "var(--gap-l)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>VỊ TRÍ BÃI XE TRUNG TÂM</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Trụ sở xuất phát tại Thanh Hóa
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
                Trực ban điều phối xe 24/7
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                {company.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                {company.address}
              </p>
              <a href={company.hotlineTel} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Gọi kiểm tra xe: {company.hotline}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
