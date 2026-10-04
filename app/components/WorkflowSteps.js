import Link from "next/link";
import company from "../data/company.json";

const STEPS = [
  {
    step: "01",
    phase: "Giai đoạn 1: Chuẩn bị & Chốt lịch",
    title: "Tiếp nhận nhu cầu",
    desc: "Khách hàng gửi thông tin lô hàng (loại hàng, trọng lượng, thể tích, điểm bốc và điểm dỡ) qua Hotline hoặc Zalo.",
  },
  {
    step: "02",
    phase: "Giai đoạn 1: Chuẩn bị & Chốt lịch",
    title: "Khảo sát & Báo giá trọn gói",
    desc: "Điều phối viên đo đạc cung đường, tư vấn phân khúc xe tối ưu (thùng kín/thùng bạt) và chốt giá cố định không phát sinh phụ phí.",
  },
  {
    step: "03",
    phase: "Giai đoạn 1: Chuẩn bị & Chốt lịch",
    title: "Xác nhận lịch xe & Pháp lý",
    desc: "Gửi thông tin biển số xe, số điện thoại tài xế phụ trách và phát hành lệnh điều xe / hợp đồng vận chuyển có dấu mộc công ty.",
  },
  {
    step: "04",
    phase: "Giai đoạn 2: Vận hành & Nghiệm thu",
    title: "Kiểm đếm & Niêm phong kẹp chì",
    desc: "Tài xế có mặt đúng giờ, hỗ trợ kiểm đếm số lượng, chèn lót chằng buộc chống xô lệch và bấm kẹp chì niêm phong thùng xe.",
  },
  {
    step: "05",
    phase: "Giai đoạn 2: Vận hành & Nghiệm thu",
    title: "Vận chuyển xuyên suốt",
    desc: "Lăn bánh theo trục cao tốc Bắc – Nam hoặc các cung đèo Tây Bắc an toàn, cập nhật vị trí hành trình xe liên tục cho chủ hàng.",
  },
  {
    step: "06",
    phase: "Giai đoạn 2: Vận hành & Nghiệm thu",
    title: "Bàn giao tận nơi & Xuất hóa đơn VAT",
    desc: "Giao hàng đúng điểm hẹn, đối chiếu nguyên đai nguyên kiện, ký biên bản bàn giao (POD) và xuất hóa đơn GTGT theo mã số thuế công ty.",
  },
];

export default function WorkflowSteps() {
  return (
    <section style={{ padding: "clamp(4.5rem, 6vw, 7.5rem) 0", background: "#FFFFFF" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto 3.5rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold-600, #B9840F)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            QUY TRÌNH CHUYÊN NGHIỆP
          </span>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 1.4rem + 1.8vw, 3rem)",
              fontWeight: 800,
              color: "var(--navy-900, #14203F)",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            Quy trình vận hành 6 bước minh bạch
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-muted, #5B6482)",
              marginTop: "0.85rem",
              lineHeight: 1.65,
            }}
          >
            Mọi chuyến hàng tại Hậu Nguyễn đều tuân thủ chặt chẽ quy chuẩn 6 bước từ khi tiếp nhận thông tin tới khi ký biên bản bàn giao.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--cream-50, #FAF8F2)",
                border: "1.5px solid var(--cream-200, #F1E7CF)",
                borderRadius: "16px",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading, 'Fraunces', serif)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "var(--gold-500, #D9A21B)",
                    lineHeight: 1,
                  }}
                >
                  {s.step}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted, #5B6482)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Bước {idx + 1}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.1875rem",
                  fontWeight: 800,
                  color: "var(--navy-900, #14203F)",
                  marginBottom: "0.6rem",
                  lineHeight: 1.35,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text, #1B2A57)",
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.88,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cam kết bồi thường 100% (Risk Reversal Banner) */}
        <div
          style={{
            background: "linear-gradient(135deg, #14203F 0%, #1B2A57 100%)",
            color: "#FFFFFF",
            borderRadius: "20px",
            padding: "clamp(2rem, 4vw, 3rem)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            boxShadow: "0 16px 40px rgba(20, 32, 63, 0.18)",
            border: "1.5px solid rgba(217, 162, 27, 0.3)",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--gold-400, #F2D27A)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              CAM KẾT PHÁP LÝ & AN TOÀN TUYỆT ĐỐI
            </div>
            <h3
              style={{
                fontSize: "clamp(1.35rem, 1.2rem + 1vw, 2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              Cam kết bồi thường 100% giá trị thiệt hại hàng hóa
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, 0.82)",
                margin: 0,
              }}
            >
              Nếu xảy ra mất mát, ướt hàng hoặc hư hỏng do lỗi vận hành của nhà xe, Hậu Nguyễn cam kết bồi thường thỏa đáng theo đúng điều khoản hợp đồng vận chuyển. Xuất hóa đơn VAT điện tử minh bạch theo MST {company.taxCode}.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: "0.85rem 1.75rem",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "999px",
              }}
            >
              Tư vấn điều xe Zalo →
            </a>
            <Link
              href="/terms"
              className="btn btn-secondary"
              style={{
                padding: "0.85rem 1.5rem",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "999px",
                background: "transparent",
                color: "#FFFFFF",
                border: "1.5px solid rgba(255, 255, 255, 0.35)",
              }}
            >
              Xem quy chế vận chuyển
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
