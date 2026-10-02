import company from "../data/company.json";
import fleetData from "../data/fleet.json";
import Link from "next/link";

export const metadata = {
  title: "Bảng giá cước – Hậu Nguyễn Transport",
  description: `Bảng giá cước vận tải theo từng loại xe từ 3,5 đến 15 tấn dòng Hino & Hyundai. Giá cước minh bạch tính theo quãng đường và loại hàng. Hotline ${company.hotline}.`,
};

export default function PricingPage() {
  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--cream-100)", padding: "var(--section-y) 0 var(--space-12)" }}>
        <div className="wrap">
          <div className="eyebrow hero-animate-1" style={{ marginBottom: "1rem" }}>BẢNG GIÁ MINH BẠCH</div>
          <h1 className="hero-animate-2" style={{ fontSize: "var(--fs-h1)", color: "var(--navy-700)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Giá cước vận tải theo từng loại xe
          </h1>
          <p className="hero-animate-3" style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", maxWidth: "660px", lineHeight: 1.65 }}>
            Giá cước được tính toán tối ưu dựa trên loại xe, quãng đường thực tế và đặc tính hàng hóa. Hậu Nguyễn là chủ xe trực tiếp điều phối, không qua môi giới, đảm bảo mức giá cạnh tranh nhất.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Biểu phí khung theo tải trọng xe
            </h2>
            <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Để nhận báo giá chính xác cho lộ trình cụ thể của quý khách, vui lòng nhấn "Báo giá" để kết nối Zalo với điều xe.
            </p>
          </div>

          {/* Desktop table */}
          <div className="pricing-table-desktop" style={{ display: "none" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, background: "var(--white)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <thead>
                <tr style={{ background: "var(--navy-700)" }}>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "left", color: "var(--text-on-dark)", fontSize: "var(--fs-small)", fontWeight: 700 }}>Loại xe &amp; Phân nhóm</th>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "left", color: "var(--text-on-dark)", fontSize: "var(--fs-small)", fontWeight: 700 }}>Tải trọng chở</th>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "left", color: "var(--text-on-dark)", fontSize: "var(--fs-small)", fontWeight: 700 }}>Thể tích thùng</th>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "left", color: "var(--text-on-dark)", fontSize: "var(--fs-small)", fontWeight: 700 }}>Mức giá tham khảo</th>
                  <th style={{ padding: "1.125rem 1.5rem", textAlign: "center", color: "var(--text-on-dark)", fontSize: "var(--fs-small)", fontWeight: 700 }}>Yêu cầu báo giá</th>
                </tr>
              </thead>
              <tbody>
                {fleetData.map((truck, idx) => (
                  <tr key={truck.id} style={{ borderBottom: idx < fleetData.length - 1 ? "1px solid var(--cream-200)" : "none" }}>
                    <td style={{ padding: "1.125rem 1.5rem", fontWeight: 700, color: "var(--navy-700)" }}>
                      {truck.name}
                      <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 500, color: "var(--text-muted)", marginTop: "0.25rem" }}>
                        Tải {truck.group} · {truck.suitable_for}
                      </span>
                    </td>
                    <td style={{ padding: "1.125rem 1.5rem", color: "var(--text-muted)", fontWeight: 600 }}>{truck.tonnage} tấn</td>
                    <td style={{ padding: "1.125rem 1.5rem", color: "var(--text-muted)", fontWeight: 600 }}>{truck.volume_m3} khối</td>
                    <td style={{ padding: "1.125rem 1.5rem" }}>
                      {truck.price ? (
                        <span style={{ fontWeight: 800, color: "var(--gold-600)" }}>{truck.price}</span>
                      ) : (
                        <span style={{ color: "var(--gold-700)", fontWeight: 700, background: "rgba(217, 162, 27, 0.12)", padding: "0.3rem 0.6rem", borderRadius: "4px", fontSize: "0.875rem" }}>
                          Liên hệ báo giá
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "1.125rem 1.5rem", textAlign: "center" }}>
                      <a
                        href={company.zaloLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: "0.8125rem", padding: "0 1.25rem", minHeight: "40px" }}
                      >
                        Báo giá xe này
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="pricing-cards-mobile grid-2">
            {fleetData.map((truck, idx) => (
              <div key={truck.id} className={`pricing-card reveal delay-${Math.min(idx + 1, 5)}`}>
                <div style={{ display: "inline-block", background: "var(--cream-100)", color: "var(--gold-700)", fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "4px", marginBottom: "0.5rem" }}>
                  Tải {truck.group}
                </div>
                <h3 style={{ fontSize: "var(--fs-h3)", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                  {truck.name}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                  {truck.suitable_for}
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1rem", fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>
                  <span>Tải trọng: <strong>{truck.tonnage} tấn</strong></span>
                  <span>Thể tích: <strong>{truck.volume_m3} khối</strong></span>
                </div>
                <div style={{ padding: "0.75rem", background: "var(--cream-100)", borderRadius: "var(--radius-sm)", marginBottom: "1rem" }}>
                  {truck.price ? (
                    <span style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--gold-600)" }}>{truck.price}</span>
                  ) : (
                    <span style={{ fontWeight: 700, color: "var(--gold-700)" }}>Liên hệ nhận báo giá</span>
                  )}
                </div>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "var(--fs-small)" }}
                >
                  Báo giá xe này
                </a>
              </div>
            ))}
          </div>

          <p className="reveal" style={{ textAlign: "center", marginTop: "var(--space-8)", fontSize: "var(--fs-small)", color: "var(--text-muted)", maxWidth: "600px", marginInline: "auto" }}>
            Giá cước tính theo từng loại xe, quãng đường và loại hàng. Gọi trực tiếp <a href={company.hotlineTel} style={{ color: "var(--gold-600)", fontWeight: 700 }}>{company.hotline}</a> để nhận báo giá chi tiết chỉ sau 5 phút.
          </p>
        </div>
      </section>

      {/* 4 Yếu tố cấu thành giá cước */}
      <section className="section" style={{ background: "var(--white)", borderTop: "1px solid var(--cream-200)" }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto var(--space-12)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>CƠ CHẾ MINH BẠCH</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              4 yếu tố cấu thành chi phí cước
            </h2>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Hậu Nguyễn cam kết không thu phụ phí ngoài hợp đồng. Biểu phí được tính toán rõ ràng theo các tiêu chí:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <div className="card reveal delay-1">
              <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", color: "var(--gold-600)", fontWeight: 800, marginBottom: "0.75rem" }}>
                1
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.35rem" }}>
                Khoảng cách &amp; Tuyến đường
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Đo đạc chính xác số km vận chuyển thực tế từ điểm nhận đến điểm trả. Tối ưu qua các tuyến cao tốc để rút ngắn thời gian.
              </p>
            </div>

            <div className="card reveal delay-2">
              <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "rgba(27, 42, 87, 0.08)", display: "grid", placeItems: "center", color: "var(--navy-700)", fontWeight: 800, marginBottom: "0.75rem" }}>
                2
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.35rem" }}>
                Khối lượng &amp; Thể tích hàng
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Chọn đúng phân khúc xe từ 3,5t đến 15t, vừa vặn khối hàng, tránh việc dùng xe thừa tải trọng gây lãng phí chi phí.
              </p>
            </div>

            <div className="card reveal delay-3">
              <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "rgba(217, 162, 27, 0.15)", display: "grid", placeItems: "center", color: "var(--gold-600)", fontWeight: 800, marginBottom: "0.75rem" }}>
                3
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.35rem" }}>
                Yêu cầu thùng xe (Kín / Bạt)
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Hàng khô, điện máy cần thùng kín bảo vệ tuyệt đối hoặc hàng công nghiệp cồng kềnh cần thùng bạt hỗ trợ cẩu hạ.
              </p>
            </div>

            <div className="card reveal delay-4">
              <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "rgba(27, 42, 87, 0.08)", display: "grid", placeItems: "center", color: "var(--navy-700)", fontWeight: 800, marginBottom: "0.75rem" }}>
                4
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)", marginBottom: "0.35rem" }}>
                Hỗ trợ chuyến hàng kết hợp
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Ưu đãi giảm giá đặc biệt khi khách hàng có hàng hai chiều hoặc ghép chuyến cùng lộ trình từ Bắc Trung Bộ ra Bắc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
