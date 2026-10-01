"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES_DATA = [
  {
    num: "01",
    id: "ftl",
    title: "Bao Xe Nguyên Chuyến (Full Truckload — FTL)",
    subtitle: "Dành riêng cho doanh nghiệp cần giao nhận toàn bộ tải trọng thùng xe",
    shortDesc: "Phương tiện chạy thẳng từ kho gửi đến kho nhận không dừng đỗ trả hàng phụ. Niêm phong seal kẹp chì tại kho bãi xuất phát.",
    fullDesc: "Phương án vận chuyển chuyên biệt dành cho doanh nghiệp sản xuất cần giao nhận toàn bộ tải trọng thùng xe, yêu cầu bảo mật cao và kiểm soát chặt chẽ lịch trình. Xe được điều động riêng, kẹp chì seal điện tử tại cổng nhà máy và chạy thẳng đến điểm đích mà không ghép chung với bất kỳ lô hàng nào.",
    suitableCargo: "Thành phẩm cơ khí chính xác, hạt nhựa nguyên sinh, bao bì màng nhôm, linh kiện điện tử vi mạch, hàng xuất khẩu đóng kiện pallet.",
    vehicleType: "Xe tải mui bạt 8T, 15T (thùng dài 9.6m), Đầu kéo container 40ft/45ft hoặc xe thùng kín bửng nâng.",
    coverage: "Toàn bộ vùng kinh tế Đông Nam Bộ, Miền Tây, Tây Nguyên và trục xuyên suốt Quốc Lộ 1A Bắc — Nam.",
    dispatchTime: "Điều xe sau 30 phút xác nhận đơn đặt",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    id: "ltl",
    title: "Ghép Hàng Định Tuyến Bắc — Nam",
    subtitle: "Lịch trình xuất bến cố định 2 chuyến mỗi ngày dọc Quốc lộ 1A",
    shortDesc: "Tối ưu 30% chi phí cho kiện hàng từ 500kg đến 5 tấn. Phân loại khoa học tại tổng kho Sóng Thần, cam kết 48H đến Hà Nội.",
    fullDesc: "Giải pháp vận chuyển kinh tế cho các đơn hàng từ 500kg đến 5 tấn. Chúng tôi gom hàng tại tổng kho Sóng Thần (Dĩ An, Bình Dương) và phân loại theo nguyên tắc kỹ thuật: hàng nặng chịu lực lót sàn, hàng nhẹ đóng pallet xếp tầng trên nhằm triệt tiêu tối đa rủi ro móp méo va đập.",
    suitableCargo: "Hàng tiêu dùng nhanh FMCG, thiết bị phụ trợ đóng thùng gỗ, phụ tùng ô tô xe máy, hạt nhựa đóng bao 25kg.",
    vehicleType: "Xe tải thùng mui bạt 9.6M 15 Tấn trang bị bạt phủ 3 lớp chống thấm dột 100% và sàn thép chống trượt.",
    coverage: "Xuất bến từ Bình Dương/TP.HCM giao dọc tuyến: Đà Nẵng (28H), Huế, Nghệ An, Hà Nội (48H), Bắc Ninh, Hải Phòng.",
    dispatchTime: "Lịch xuất bến cố định 12:00 & 20:00 hàng ngày",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    id: "machinery",
    title: "Di Dời & Cẩu Hạ Máy Móc Nhà Xưởng",
    subtitle: "Dịch vụ trọn gói từ khảo sát kết cấu móng đến cẩu định vị máy CNC",
    shortDesc: "Đội ngũ kỹ sư có chứng chỉ an toàn nhóm 3, xe cẩu 5T—15T, rùa đẩy thủy lực 50T và bảo hiểm thiết bị 10 tỷ VNĐ.",
    fullDesc: "Dịch vụ kỹ thuật công nghiệp trọn gói từ khâu khảo sát thực địa kết cấu nền móng nhà xưởng, tính toán góc nghiêng cẩu, lập biện pháp chằng buộc gia cố lực đến cẩu hạ máy móc vào đúng vị trí lắp đặt. Kỹ thuật viên lái cẩu sở hữu chứng chỉ an toàn lao động nhóm 3 do Cục An Toàn cấp.",
    suitableCargo: "Máy phay tiện CNC, máy ép nhựa thủy lực, máy dập kim loại, robot hàn tự động, bồn áp lực và lò hơi công nghiệp.",
    vehicleType: "Xe cẩu tự hành 5T — 15T Soosan/Unic cần vươn 20.5m, rùa đẩy thủy lực tải nặng 50T, ba-lăng xích và đệm cao su giảm chấn.",
    coverage: "Tất cả các khu công nghiệp trọng điểm tại Bình Dương (VSIP, Mỹ Phước), Đồng Nai (Amata, Long Đức) và TP.HCM.",
    dispatchTime: "Khảo sát hiện trường trong vòng 2 giờ sau cuộc gọi",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "04",
    id: "container",
    title: "Vận Chuyển Container Cảng Biển & ICD",
    subtitle: "Kéo cont 20ft, 40ft, 45ft bám sát thời hạn Closing Time của hãng tàu",
    shortDesc: "Trực chiến 24/7 tại Cát Lái, Cái Mép và ICD Sóng Thần. Hoàn tất thủ tục mượn vỏ và kiểm hóa hải quan nhanh chóng.",
    fullDesc: "Chuyên kéo vỏ cont rỗng từ depot, hạ bãi cont hàng tại Cảng Tân Cảng — Cát Lái, Cụm Cảng Quốc Tế Cái Mép (TCIT, CMIT, SSIT) và ICD Sóng Thần. Chúng tôi theo dõi sát sao thời hạn Cut-off Time của từng hãng tàu biển quốc tế, xử lý nhanh thủ tục mượn vỏ và kiểm hóa hải quan.",
    suitableCargo: "Container khô tiêu chuẩn 20ft, 40ft, 45ft HQ, container flat rack chở máy quá khổ và cont treo may mặc GOH.",
    vehicleType: "Đầu kéo Hyundai Xcient 440 mã lực và Hino 700 trang bị moóc sàn và moóc xương 40ft chịu tải cao.",
    coverage: "Kết nối trực tiếp cụm cảng biển quốc tế với hơn 42 khu công nghiệp trên toàn vùng kinh tế trọng điểm phía Nam.",
    dispatchTime: "Trực cảng 24/7, đáp ứng xe kéo sau 15 phút lệnh",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function InteractiveServices() {
  const [expandedId, setExpandedId] = useState("ftl");

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {SERVICES_DATA.map((srv) => {
        const isOpen = expandedId === srv.id;

        return (
          <div
            key={srv.id}
            className={`border transition-all duration-300 ${
              isOpen
                ? "bg-white border-[#0B0B0B] shadow-xl"
                : "bg-[#F9F8F5] border-[#DDD9CF] hover:border-[#FF6A00]"
            }`}
          >
            {/* Header Clickable Row */}
            <button
              type="button"
              onClick={() => toggleExpand(srv.id)}
              className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-heading font-black text-2xl sm:text-4xl text-[#FF6A00] block">
                  {srv.num}
                </span>
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-2xl text-[#0B0B0B] uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] font-light mt-0.5">
                    {srv.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#0B0B0B]">
                  {isOpen ? "[ THU GỌN − ]" : "[ XEM CHI TIẾT + ]"}
                </span>
              </div>
            </button>

            {/* Expandable Technical Content */}
            <div className={`accordion-expand ${isOpen ? "is-open" : ""}`}>
              <div className="accordion-inner">
                <div className="p-6 sm:p-8 pt-0 border-t border-[#EAE7DF] space-y-6 text-[#0B0B0B]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
                    {/* Visual Preview */}
                    <div className="lg:col-span-5 overflow-hidden border border-[#DDD9CF] h-60 sm:h-72">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover img-editorial"
                      />
                    </div>

                    {/* Detailed Specifications */}
                    <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm">
                      <p className="text-[#525252] font-light leading-relaxed">
                        {srv.fullDesc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 bg-[#F2F0EA] border border-[#DDD9CF]">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#FF6A00] block mb-1">
                            MẶT HÀNG PHÙ HỢP
                          </span>
                          <span className="text-xs text-[#262626] font-medium leading-snug block">
                            {srv.suitableCargo}
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F0EA] border border-[#DDD9CF]">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#FF6A00] block mb-1">
                            CHỦNG LOẠI PHƯƠNG TIỆN
                          </span>
                          <span className="text-xs text-[#262626] font-medium leading-snug block">
                            {srv.vehicleType}
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F0EA] border border-[#DDD9CF]">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#FF6A00] block mb-1">
                            HÀNH LANG VẬN HÀNH
                          </span>
                          <span className="text-xs text-[#262626] font-medium leading-snug block">
                            {srv.coverage}
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F0EA] border border-[#DDD9CF]">
                          <span className="text-[11px] font-mono font-bold uppercase text-[#FF6A00] block mb-1">
                            THỜI GIAN ĐIỀU XE
                          </span>
                          <span className="text-xs text-[#262626] font-medium leading-snug block">
                            {srv.dispatchTime}
                          </span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-3 flex flex-wrap items-center gap-4">
                        <Link
                          href="/contact"
                          className="btn-arrow-hover px-6 py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                        >
                          <span>YÊU CẦU BÁO GIÁ DỊCH VỤ NÀY</span>
                          <span className="arrow-move ml-1.5 font-bold">→</span>
                        </Link>
                        <Link
                          href="/services"
                          className="text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0B] hover:text-[#FF6A00] transition-colors"
                        >
                          Xem thông số chi tiết trang dịch vụ →
                        </Link>
                      </div>
                    </div>
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
