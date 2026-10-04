"use client";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Cước vận chuyển được tính trọn gói hay có phát sinh thêm phụ phí không?",
    a: "Hậu Nguyễn cam kết báo giá trọn gói 100% đã bao gồm toàn bộ chi phí tài xế, nhiên liệu, vé cầu đường cao tốc (BOT). Tuyệt đối không phát sinh bất kỳ khoản phí ngoài nào sau khi đã chốt hợp đồng hoặc lệnh điều xe.",
  },
  {
    q: "Chính sách cam kết bồi thường hàng hóa khi xảy ra sự cố như thế nào?",
    a: "Chúng tôi cam kết bồi thường 100% giá trị thiệt hại thực tế theo thỏa thuận hợp đồng nếu xảy ra hư hỏng, ướt hàng hoặc mất mát do lỗi vận hành của nhà xe. Hàng hóa giá trị cao được niêm phong kẹp chì cẩn thận trước khi lăn bánh.",
  },
  {
    q: "Công ty có xuất hóa đơn giá trị gia tăng (VAT) hợp lệ cho doanh nghiệp không?",
    a: "Có đầy đủ 100%. Hậu Nguyễn là pháp nhân doanh nghiệp hợp pháp (MST: 2803219353). Chúng tôi xuất hóa đơn điện tử VAT hợp lệ theo đúng quy định của Tổng cục Thuế ngay sau khi hoàn thành chuyến hàng và ký biên bản giao nhận (POD).",
  },
  {
    q: "Thời gian vận chuyển từ Thanh Hóa, Nghệ An, Hà Tĩnh đi các tỉnh phía Bắc mất bao lâu?",
    a: "Nhờ tối ưu lộ trình theo trục cao tốc Bắc – Nam, thời gian giao hàng từ Thanh Hóa/Nghệ An ra Hà Nội và các tỉnh lân cận chỉ từ 6 – 10 tiếng. Đối với các tuyến vùng cao Tây Bắc (Sơn La, Điện Biên, Lào Cai), thời gian di chuyển từ 18 – 28 tiếng tùy địa hình.",
  },
  {
    q: "Đội xe của Hậu Nguyễn có hỗ trợ bốc xếp hai đầu không?",
    a: "Chúng tôi có hỗ trợ tài xế phụ bốc xếp (với các kiện hàng vừa và nhẹ) hoặc hỗ trợ kết nối, điều phối đội ngũ bốc xếp chuyên nghiệp, xe cẩu tự hành, xe nâng hạ tại hai đầu kho bãi theo yêu cầu thỏa thuận trước chuyến.",
  },
  {
    q: "Khách hàng cần đặt xe trước bao lâu để đảm bảo có xe đúng giờ?",
    a: "Với các dòng xe 3.5 tấn đến 8 tấn, chỉ cần liên hệ trước 2 – 4 tiếng. Với dòng xe tải nặng 3 chân, 4 chân (10 – 15 tấn) hoặc các chuyến chạy đường dài Tây Bắc, quý khách nên thông báo trước 6 – 12 tiếng để ban điều xe bố trí phương tiện và hoa tiêu tối ưu nhất.",
  },
];

export default function FAQSection({ title = "Câu hỏi thường gặp về dịch vụ vận tải" }) {
  const [openIdx, setOpenIdx] = useState(0); // Mở sẵn câu đầu tiên

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section style={{ padding: "clamp(4rem, 6vw, 6.5rem) 0", background: "var(--cream-50, #FAF8F2)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold-600, #B9840F)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            GIẢI ĐÁP THẮC MẮC
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--navy-900, #14203F)",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted, #5B6482)",
              marginTop: "0.75rem",
              lineHeight: 1.6,
            }}
          >
            Mọi thắc mắc về cước phí, quy chuẩn bảo vệ hàng hóa và trách nhiệm pháp lý được giải đáp minh bạch dưới đây.
          </p>
        </div>

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: isOpen ? "1.5px solid var(--gold-500, #D9A21B)" : "1.5px solid var(--cream-200, #F1E7CF)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(20, 32, 63, 0.08)"
                    : "0 2px 8px rgba(20, 32, 63, 0.03)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--navy-900, #14203F)",
                    fontFamily: "inherit",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "clamp(0.95rem, 0.9rem + 0.3vw, 1.0625rem)",
                      fontWeight: 700,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--gold-500, #D9A21B)" : "rgba(20, 32, 63, 0.06)",
                      color: isOpen ? "#FFFFFF" : "var(--navy-900, #14203F)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      transition: "transform 0.3s ease, background 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      color: "var(--text, #1B2A57)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(241, 231, 207, 0.6)",
                      paddingTop: "0.875rem",
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
