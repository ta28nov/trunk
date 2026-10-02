import company from "../data/company.json";
import Link from "next/link";

export const metadata = {
  title: "Giới thiệu – Hậu Nguyễn Transport",
  description: `${company.name} – Đơn vị vận tải uy tín tại Thanh Hóa, chuyên xe thùng kín và thùng bạt dòng Hino và Hyundai chạy Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc.`,
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--cream-50)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "var(--cream-100)", padding: "var(--section-y) 0 var(--space-12)" }}>
        <div className="wrap">
          <div className="eyebrow hero-animate-1" style={{ marginBottom: "1rem" }}>VỀ CHÚNG TÔI</div>
          <h1 className="hero-animate-2" style={{ fontSize: "var(--fs-h1)", color: "var(--navy-700)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Vận Tải Hậu Nguyễn<br />
            <span style={{ color: "var(--gold-600)" }}>Thực Tế · Chuyên Nghiệp · An Tâm</span>
          </h1>
          <p className="hero-animate-3" style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", maxWidth: "720px", lineHeight: 1.7 }}>
            Đơn vị vận tải hàng hóa chuyên tuyến xuất phát từ Hà Tĩnh, Nghệ An, Thanh Hóa kết nối đi các tỉnh phía Bắc và Tây Bắc. Vận hành 100% bằng đội xe chuyên dụng Hino và Hyundai thùng kín, thùng bạt được tuyển chọn khắt khe.
          </p>
        </div>
      </section>

      {/* Brand Story & Value Proposition */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>CÂU CHUYỆN VẬN HÀNH</div>
              <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", marginBottom: "1.5rem" }}>
                Tại sao Hậu Nguyễn chỉ chuyên dòng xe Hino &amp; Hyundai?
              </h2>
              <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Trên các tuyến vận chuyển từ Bắc Trung Bộ ngược lên các tỉnh miền núi phía Bắc và Tây Bắc, địa hình có nhiều cung đường đèo dốc hiểm trở, thời tiết sương mù và mưa rào bất chợt. Để đảm bảo an toàn tuyệt đối cho tài sản của khách hàng, Hậu Nguyễn kiên định chỉ đầu tư hai dòng xe uy tín hàng đầu: <strong>Hino (Nhật Bản)</strong> và <strong>Hyundai (Hàn Quốc)</strong>.
              </p>
              <p style={{ fontSize: "var(--fs-body)", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                Hệ thống khung gầm đúc chịu tải cao, máy khỏe êm, kết hợp kết cấu thùng kín Inox chống dột nước và thùng bạt mui phủ gia cố kiên cố giúp hàng hóa luôn giữ trọn phẩm chất từ lúc bốc lên xe đến khi hạ hàng tại kho nhận.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={company.hotlineTel} className="btn btn-primary">
                  Hotline điều xe: {company.hotline}
                </a>
                <Link href="/fleet" className="btn btn-secondary">
                  Khám phá đội xe →
                </Link>
              </div>
            </div>

            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div className="card" style={{ borderLeft: "4px solid var(--gold-500)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                  Chủ xe trực tiếp điều phối
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Không qua các khâu trung gian môi giới, giúp khách hàng làm việc trực tiếp với đội ngũ quản lý xe, chủ động thời gian bốc xếp và nắm rõ biểu phí minh bạch.
                </p>
              </div>

              <div className="card" style={{ borderLeft: "4px solid var(--navy-700)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                  Tài xế bản địa giàu kinh nghiệm
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Đội ngũ lái xe am hiểu tường tận từng khúc cua, điểm nghỉ và quy định tải trọng trên từng cung đường quốc lộ, cao tốc và đường đèo Tây Bắc.
                </p>
              </div>

              <div className="card" style={{ borderLeft: "4px solid var(--gold-500)" }}>
                <h3 style={{ fontSize: "1.125rem", color: "var(--navy-700)", marginBottom: "0.5rem" }}>
                  Đầy đủ trang thiết bị chằng buộc
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Mỗi xe đều trang bị đầy đủ tăng đơ bạt, nẹp góc cao su, thanh chống xô lệch và bạt chống thấm 2 lớp chuyên dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="section" style={{ background: "var(--cream-50)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gap: "3rem" }} className="about-grid">
            {/* Legal Info */}
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>HỒ SƠ PHÁP LÝ</div>
              <h2 className="reveal" style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", marginBottom: "var(--space-6)" }}>
                Thông tin doanh nghiệp
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="card reveal delay-1">
                  <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Tên đầy đủ theo ĐKKD</span>
                  <span style={{ fontWeight: 800, color: "var(--navy-700)", fontSize: "1rem" }}>{company.name}</span>
                </div>
                <div className="card reveal delay-2">
                  <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Địa chỉ trụ sở chính</span>
                  <span style={{ fontWeight: 600, color: "var(--navy-700)" }}>{company.address}</span>
                </div>
                <div className="card reveal delay-3">
                  <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Mã số thuế doanh nghiệp</span>
                  <span style={{ fontWeight: 700, color: "var(--gold-600)", fontSize: "1.125rem" }}>{company.taxCode}</span>
                </div>
                <div className="card reveal delay-4">
                  <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Lĩnh vực kinh doanh</span>
                  <span style={{ fontWeight: 600, color: "var(--navy-700)" }}>{company.services.join(" · ")}</span>
                </div>
                <div className="card reveal delay-5">
                  <span style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Đường dây nóng tiếp nhận 24/7</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
                    <a href={company.hotlineTel} style={{ fontWeight: 800, color: "var(--gold-600)", fontSize: "1.25rem" }}>{company.hotline}</a>
                    <a href={`mailto:${company.email}`} style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{company.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitments */}
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>CAM KẾT DỊCH VỤ</div>
              <h2 className="reveal" style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)", marginBottom: "var(--space-6)" }}>
                4 tiêu chí vàng khi giao nhận
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Đúng giờ & Giữ chữ tín", desc: "Xuất bến đúng hẹn, duy trì tốc độ an toàn và bàn giao đúng thời gian cam kết trong hợp đồng." },
                  { title: "Thùng kín khô ráo – Thùng bạt kiên cố", desc: "Thùng xe luôn được vệ sinh sạch sẽ trước khi bốc hàng, chống nước mưa và bụi đường 100%." },
                  { title: "Cập nhật định vị hành trình liên tục", desc: "Chủ hàng được thông báo vị trí xe theo thời gian thực qua Zalo, an tâm kiểm soát tiến độ chuyến hàng." },
                  { title: "Báo giá trực tiếp – Không phát sinh", desc: "Mức cước rõ ràng theo từng loại xe và lộ trình thực tế, hóa đơn chứng từ đầy đủ hợp lệ." },
                ].map((item, idx) => (
                  <div key={idx} className={`card reveal delay-${idx + 1}`}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-700)" }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)", lineHeight: 1.6, paddingLeft: "1.65rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company profile images */}
      <section className="section section-cream-alt">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>HỒ SƠ NĂNG LỰC DOANH NGHIỆP</div>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--navy-700)" }}>
              Tài liệu năng lực pháp nhân Hậu Nguyễn
            </h2>
          </div>
          <div className="grid-2">
            <div className="photo-wrap reveal delay-1" style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img
                src="/images/ho-so/Ho_so_nang_luc_Hau_Nguyen_20_trang_pages-to-jpg-0001.jpg"
                alt="Trang bìa hồ sơ năng lực Hậu Nguyễn"
                loading="lazy"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="photo"
              />
            </div>
            <div className="photo-wrap reveal delay-2" style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img
                src="/images/ho-so/Ho_so_nang_luc_Hau_Nguyen_20_trang_pages-to-jpg-0002.jpg"
                alt="Giới thiệu công ty trong hồ sơ năng lực"
                loading="lazy"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="photo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
