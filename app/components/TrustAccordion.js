"use client";
import { useState } from "react";
import Link from "next/link";

const COMMITMENTS = [
  {
    id: "ontime",
    title: "Cam Kết Đúng Giờ 99.2% — Bồi Hoàn Cước Nếu Chậm Trễ",
    summary: "Dung sai thời gian giao nhận tối đa 30 phút. Bồi thường chi phí phát sinh nếu chậm trễ do lỗi chủ quan.",
    details: "Với hệ thống điều phối số hóa và 52 xe chính chủ không bán thầu trung gian, chúng tôi kiểm soát chính xác từng phút xuất bến. Trường hợp xe đến trễ điểm giao quá 60 phút mà không có thông báo bất khả kháng hợp lệ, Vận Tải Tiên Phong hoàn trả 10% đến 30% giá cước chuyến đó cho doanh nghiệp.",
  },
  {
    id: "insurance",
    title: "Bảo Hiểm Trách Nhiệm Dân Sự & Hàng Hóa PVI 10 Tỷ VNĐ",
    summary: "Bảo lãnh 100% giá trị lô hàng đối với rủi ro lật xe, cháy nổ, va chạm và thiên tai trên đường thiên lý.",
    details: "Tất cả các chuyến hàng chuyên chở bởi Tiên Phong đều được bảo hiểm tự động theo Hợp đồng khung Bảo hiểm hàng hóa nội địa ký kết với Tổng Công ty Bảo hiểm PVI (Hạn mức bảo lãnh tối đa 10.000.000.000 VNĐ cho mỗi vụ tổn thất). Quy trình giám định và thanh toán bồi thường thực hiện trong vòng 7 ngày làm việc.",
  },
  {
    id: "transparent-quote",
    title: "Báo Giá Trọn Gói Trong 15 Phút — Tuyệt Đối Không Phát Sinh Phụ Phí",
    summary: "Mọi phụ phí bến bãi, cầu đường, thời gian neo xe chờ bốc dỡ được thông báo minh bạch từ đầu.",
    details: "Chúng tôi áp dụng bảng tính cước số hóa theo km và chủng loại xe. Khi báo giá bằng văn bản hoặc email, con số cam kết là chi phí cuối cùng bao gồm phí BOT cầu đường, tài xế và nhiên liệu. Doanh nghiệp không phải lo lắng về việc tài xế đòi thêm tiền phụ cấp bốc xếp hay tiền bồi dưỡng.",
  },
  {
    id: "vat-contract",
    title: "Hợp Đồng Vận Chuyển Nguyên Tắc & Hóa Đơn VAT Điện Tử Trong Ngày",
    summary: "Đầy đủ tư cách pháp nhân GPVT 41-GPVT/SGTVT, xuất hóa đơn tài chính ngay sau khi ký nhận POD.",
    details: "Hỗ trợ doanh nghiệp chuẩn hóa hồ sơ chi phí thuế với hợp đồng vận tải nguyên tắc có giá trị pháp lý cao, biên bản bàn giao hàng hóa POD có chữ ký mộc của thủ kho nhận và hóa đơn GTGT điện tử gửi thẳng qua email phòng kế toán trong vòng 24 giờ sau khi hoàn tất cuốc chạy.",
  },
  {
    id: "licensed-drivers",
    title: "100% Tài Xế Thâm Niên Trên 5 Năm, Sở Hữu Chứng Chỉ An Toàn Nhóm 3",
    summary: "Kiểm tra nồng độ cồn và chất kích thích trước mỗi ca lăn bánh, tuân thủ nghiêm ngặt giờ lái xe.",
    details: "Đội ngũ 68 tài xế thuộc biên chế chính thức được đóng BHXH đầy đủ. 100% tài xế điều khiển xe cẩu tự hành có chứng chỉ an toàn lao động nhóm 3 do Cục An Toàn Lao Động cấp. Tài xế đường dài được bố trí 2 người mỗi xe trên các chặng Bắc — Nam để đảm bảo lái xe không quá 4 giờ liên tục.",
  },
  {
    id: "compensation",
    title: "Chính Sách Bồi Thường 100% Giá Trị Tổn Thất Khi Có Sự Cố",
    summary: "Biên bản đối soát hiện trường độc lập, chi trả bồi thường trực tiếp không đùn đẩy trách nhiệm.",
    details: "Nếu xảy ra bất kỳ sự cố móp méo, rách bao bì, ướt hàng hoặc hao hụt do lỗi chằng buộc của tài xế hoặc thùng xe không đảm bảo, chúng tôi cử cán bộ bảo hiểm lập biên bản giám định hiện trường trong 2 giờ và thanh toán trực tiếp 100% giá trị tổn thất theo hóa đơn mua hàng của doanh nghiệp.",
  },
];

export default function TrustAccordion() {
  const [openId, setOpenId] = useState("ontime");

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {COMMITMENTS.map((item, idx) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border transition-all duration-300 ${
              isOpen
                ? "bg-[#141414] border-[#FF6A00] shadow-xl"
                : "bg-[#0B0B0B] border-[#2A2A2A] hover:border-[#737373]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 select-none min-h-[48px]"
              aria-expanded={isOpen}
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-heading font-black text-xl sm:text-2xl text-[#FF6A00] block mt-0.5 sm:mt-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] font-light mt-1">
                    {item.summary}
                  </p>
                </div>
              </div>

              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#FF6A00] whitespace-nowrap self-start sm:self-center ml-2">
                {isOpen ? "[ THU GỌN − ]" : "[ XEM CHI TIẾT + ]"}
              </span>
            </button>

            <div className={`accordion-expand ${isOpen ? "is-open" : ""}`}>
              <div className="accordion-inner">
                <div className="p-6 sm:p-8 pt-0 border-t border-[#1F1F1F] text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed space-y-4">
                  <p className="pt-4">{item.details}</p>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#737373]">
                    <span>Cam kết pháp lý ký quỹ</span>
                    <span>•</span>
                    <span className="text-[#FF6A00]">Áp dụng mọi hợp đồng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
