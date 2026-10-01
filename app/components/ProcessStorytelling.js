"use client";
import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Tiếp Nhận & Báo Giá Trong 15 Phút",
    short: "Khảo sát quy cách & cự ly",
    desc: "Tiếp nhận thông tin chi tiết về kích thước hàng, tải trọng, địa chỉ lấy và giao. Phần mềm điều phối tự động tính toán lộ trình tối ưu và gửi báo giá trọn gói không phát sinh phụ phí.",
    action: "Gửi báo giá qua email & Zalo OA có mộc dấu công ty",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    metric: "15 PHÚT",
    metricLabel: "Thời gian phản hồi",
  },
  {
    step: "02",
    title: "Điều Xe & Kiểm Tra Kỹ Thuật 18 Hạng Mục",
    short: "Xuất bến từ bãi xe Sóng Thần",
    desc: "Lệnh điều xe được gửi tự động tới bãi xe trung tâm. Phương tiện trải qua kiểm tra lốp, phanh, đèn, kiểm tra sàn thùng sạch sẽ và đo nồng độ cồn tài xế trước khi lăn bánh.",
    action: "Điều xe sau 30 phút nhận yêu cầu nội vùng",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    metric: "30 PHÚT",
    metricLabel: "Có mặt tại kho gửi",
  },
  {
    step: "03",
    title: "Bốc Hàng & Chằng Buộc Chuyên Dụng",
    short: "Siết đai dù & máng gỗ",
    desc: "Tài xế và phụ xe phối hợp với thủ kho nhà máy sắp xếp hàng hóa khoa học. Hàng nặng lót sàn, chằng buộc bằng xích tăng đơ hoặc dây đai bản 50mm, phủ bạt dù 3 lớp chống nước.",
    action: "Chụp ảnh hiện trạng hàng hóa trước khi xuất phát",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
    metric: "10 TẤN",
    metricLabel: "Lực siết xích tăng đơ",
  },
  {
    step: "04",
    title: "Niêm Phong Seal Chì & Kích Hoạt GPS",
    short: "Bảo mật tuyệt đối lô hàng",
    desc: "Bấm seal kẹp chì định danh của khách hàng và bấm chốt khóa seal cơ khí của nhà xe. Kích hoạt thiết bị giám sát hành trình vệ tinh kết nối trực tiếp với Tổng Cục Đường Bộ 24/7.",
    action: "Cung cấp mã số seal trên biên bản giao nhận",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    metric: "100%",
    metricLabel: "Xe có định vị GPS",
  },
  {
    step: "05",
    title: "Vận Chuyển Giám Sát Hành Trình Trực Tuyến",
    short: "Bám sát tốc độ & lộ trình",
    desc: "Phương tiện di chuyển đúng lộ trình cam kết. Phòng điều vận giám sát liên tục qua màn hình vệ tinh, cảnh báo ngay khi tài xế dừng đỗ bất thường hoặc vượt quá tốc độ cho phép.",
    action: "Cập nhật vị trí lô hàng cho khách hàng qua tin nhắn",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    metric: "24/7",
    metricLabel: "Trực ban điều phối",
  },
  {
    step: "06",
    title: "Hạ Hàng, Nghiệm Thu & Bàn Giao Chứng Từ POD",
    short: "Ký nhận biên bản & xuất hóa đơn",
    desc: "Giao hàng an toàn tại kho đích. Kiểm đếm số lượng, kiểm tra tình trạng nguyên đai nguyên kiện, cắt seal kẹp chì và ký nhận biên bản POD có đóng dấu mộc của bên nhận.",
    action: "Xuất hóa đơn VAT điện tử trong vòng 24 giờ",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    metric: "24 GIỜ",
    metricLabel: "Gửi POD & Hóa đơn VAT",
  },
];

export default function ProcessStorytelling() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* ─── STICKY VISUAL PANEL (Desktop Sticky - §23) ─── */}
      <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden border border-[#2A2A2A] bg-[#141414]">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-700 filter brightness-90"
          />
          <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 border border-[#2A2A2A] px-3 py-1 font-heading font-black text-xs text-[#FF6A00]">
            BƯỚC {current.step} / 06
          </div>
          <div className="absolute bottom-4 right-4 bg-[#0B0B0B]/90 border border-[#2A2A2A] p-3 text-right">
            <span className="font-heading font-black text-xl text-[#FF6A00] block">
              {current.metric}
            </span>
            <span className="text-[10px] text-[#A3A3A3] font-mono uppercase block">
              {current.metricLabel}
            </span>
          </div>
        </div>

        <div className="p-4 bg-[#141414] border border-[#2A2A2A] flex items-center justify-between text-xs">
          <span className="text-[#A3A3A3] font-light">
            Thao tác chuẩn: <strong className="text-white font-medium">{current.action}</strong>
          </span>
          <Link
            href="/contact"
            className="text-[#FF6A00] font-heading font-bold uppercase hover:underline whitespace-nowrap"
          >
            Tư vấn quy trình →
          </Link>
        </div>
      </div>

      {/* ─── STEP ACCORDION / LIST (Scrolling Steps - §23) ─── */}
      <div className="lg:col-span-7 space-y-3">
        {STEPS.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-6 border cursor-pointer transition-all duration-200 select-none ${
                isActive
                  ? "bg-[#141414] border-[#FF6A00] shadow-lg"
                  : "bg-[#0B0B0B] border-[#2A2A2A] hover:border-[#737373]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={`font-heading font-black text-xl sm:text-2xl block mt-0.5 ${
                      isActive ? "text-[#FF6A00]" : "text-[#737373]"
                    }`}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white uppercase leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#737373] font-light mt-0.5">
                      {s.short}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs font-mono font-bold uppercase ${
                    isActive ? "text-[#FF6A00]" : "text-[#525252]"
                  }`}
                >
                  {isActive ? "[ ĐANG CHỌN ]" : "[ XEM ]"}
                </span>
              </div>

              {isActive && (
                <div className="pt-4 mt-4 border-t border-[#1F1F1F] space-y-3 text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed animate-fade-up">
                  <p>{s.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
