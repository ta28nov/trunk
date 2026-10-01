"use client";
import { useState } from "react";
import Link from "next/link";

const CORRIDORS = [
  {
    id: "se-region",
    title: "Vùng Đông Nam Bộ & Các KCN Vệ Tinh",
    timeCommit: "1.5 GIỜ — 3.5 GIỜ",
    distance: "Bán kính 150 km",
    vehicle: "Xe tải 8T — 15T & Xe Cẩu Tự Hành",
    origin: "Bãi Xe Trung Tâm Sóng Thần 1 (Dĩ An, Bình Dương)",
    destination: "Các KCN TP.HCM, Đồng Nai, Long An & Bà Rịa",
    milestones: [
      { step: "01", name: "Điều Xe & Bốc Hàng", desc: "Xe có mặt tại cổng kho sau 30 phút nhận lệnh. Kiểm tra quy cách tải trọng.", status: "Hoàn tất" },
      { step: "02", name: "Chằng Buộc Kỹ Thuật", desc: "Sử dụng đai dù tăng đơ bản 50mm, máng gỗ chữ V hoặc xích siết an toàn.", status: "Nghiêm ngặt" },
      { step: "03", name: "Niêm Phong Seal Kẹp Chì", desc: "Bấm seal chì cơ và seal định vị vệ tinh GPS có mã số riêng của chuyến hàng.", status: "Bảo mật" },
      { step: "04", name: "Di Chuyển Giám Sát GPS", desc: "Di chuyển theo vành đai Mỹ Phước — Tân Vạn, Quốc Lộ 1K và Cao tốc Long Thành.", status: "Trực tuyến" },
      { step: "05", name: "Giao Hàng & Bàn Giao POD", desc: "Bàn giao tận tay thủ kho, ký xác nhận biên bản giao nhận và hoàn tất đơn vị.", status: "Ký nhận" },
    ],
  },
  {
    id: "north-south",
    title: "Trục Huyết Mạch Quốc Lộ 1A: Bắc — Nam",
    timeCommit: "44 GIỜ — 48 GIỜ CAM KẾT",
    distance: "1.720 km toàn trình",
    vehicle: "Xe Tải Thùng Mui Bạt 9.6M & Container 40ft",
    origin: "Tổng Kho Sóng Thần (TP.HCM / Bình Dương)",
    destination: "Hà Nội, Hưng Yên, Bắc Ninh & Hải Phòng",
    milestones: [
      { step: "01", name: "Tập Kết & Phân Tuyến", desc: "Phân loại hàng nặng lót sàn chịu lực, hàng nhẹ đóng pallet xếp tầng trên.", status: "Kho gom" },
      { step: "02", name: "Bố Trí 2 Tài Xế Luân Phiên", desc: "2 lái xe đường dài có trên 8 năm thâm niên, đổi lái sau mỗi 4 giờ quy định.", status: "An toàn" },
      { step: "03", name: "Trạm Trung Chuyển Hòa Cầm", desc: "Dừng trạm kỹ thuật tại Đà Nẵng (Km 950) để kiểm tra áp suất lốp và phanh.", status: "24 Giờ" },
      { step: "04", name: "Tiếp Cận Hà Nội & Bắc Ninh", desc: "Qua trạm thu phí Pháp Vân, phân luồng về các tổng kho Giáp Bát và KCN VSIP.", status: "44 Giờ" },
      { step: "05", name: "Hạ Hàng & Đối Soát Chứng Từ", desc: "Giao tận kho nhận, gửi hóa đơn VAT điện tử và biên bản POD gốc qua bưu điện.", status: "48 Giờ" },
    ],
  },
  {
    id: "ports",
    title: "Cụm Cảng Biển Cát Lái & Cái Mép (FCL)",
    timeCommit: "TRỰC CHIẾN 24/7",
    distance: "Kết nối Cảng biển & 42 KCN",
    vehicle: "Đầu Kéo Hyundai Xcient 440HP + Moóc 40ft",
    origin: "Depot Vỏ Cont / Các Cảng Biển Quốc Tế",
    destination: "Cảng Cát Lái, Cảng Cái Mép, ICD Sóng Thần",
    milestones: [
      { step: "01", name: "Tiếp Nhận Booking Hãng Tàu", desc: "Kiểm tra giờ Closing Time / Cut-off Time của từng chuyến tàu container xuất.", status: "Số hóa" },
      { step: "02", name: "Lấy Vỏ Cont Rỗng Tại Depot", desc: "Kiểm tra chất lượng sàn vách cont, không rách bạt, không hôi ẩm mốc.", status: "Đạt chuẩn" },
      { step: "03", name: "Đóng Hàng Tại Kho Nhà Máy", desc: "Đưa xe kéo cont vào xưởng, hỗ trợ xe nâng đóng hàng, khóa gù twistlock.", status: "Chuẩn xác" },
      { step: "04", name: "Bấm Seal Hải Quan & Hạ Bãi", desc: "Kéo cont ra cảng Tân Cảng Cát Lái hoặc TCIT Cái Mép, bấm seal hải quan.", status: "Đúng giờ" },
      { step: "05", name: "Bàn Giao Phiếu EIR", desc: "Lấy phiếu giao nhận container điện tử EIR gửi cho bộ phận xuất nhập khẩu.", status: "Hoàn tất" },
    ],
  },
];

export default function RouteStoryteller() {
  const [activeCorridorId, setActiveCorridorId] = useState("se-region");
  const currentCorridor =
    CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  return (
    <div className="space-y-12">
      {/* ─── CORRIDOR SELECTOR TABS ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 select-none">
        {CORRIDORS.map((corridor) => {
          const isActive = activeCorridorId === corridor.id;
          return (
            <button
              key={corridor.id}
              type="button"
              onClick={() => setActiveCorridorId(corridor.id)}
              className={`p-5 text-left border transition-all duration-200 min-h-[48px] ${
                isActive
                  ? "bg-[#141414] border-[#FF6A00] shadow-xl"
                  : "bg-[#0B0B0B] border-[#2A2A2A] hover:border-[#737373]"
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6A00] block mb-1">
                {corridor.timeCommit}
              </span>
              <h4 className="font-heading font-black text-sm sm:text-base text-white uppercase leading-snug">
                {corridor.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* ─── ROUTE VISUALIZATION CARD (§20 & §21) ─── */}
      <div className="p-6 sm:p-10 bg-[#141414] border border-[#2A2A2A] space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#2A2A2A] pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
              SƠ ĐỒ TRỰC QUAN HÀNH TRÌNH
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              {currentCorridor.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] font-light">
              Điểm đi: <span className="text-white font-medium">{currentCorridor.origin}</span> → Điểm đến: <span className="text-white font-medium">{currentCorridor.destination}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="p-3 bg-[#0B0B0B] border border-[#2A2A2A]">
              <span className="text-[#737373] block text-[10px]">CỰ LY:</span>
              <span className="text-[#FF6A00] font-bold">{currentCorridor.distance}</span>
            </div>
            <div className="p-3 bg-[#0B0B0B] border border-[#2A2A2A]">
              <span className="text-[#737373] block text-[10px]">THỜI GIAN:</span>
              <span className="text-white font-bold">{currentCorridor.timeCommit}</span>
            </div>
          </div>
        </div>

        {/* ─── MILESTONE CHRONOLOGY (Vertical Route Progression) ─── */}
        <div className="relative pl-6 sm:pl-10 space-y-8 border-l-2 border-[#2A2A2A]">
          {currentCorridor.milestones.map((m, idx) => (
            <div key={m.step} className="relative group">
              {/* Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-none bg-[#0B0B0B] border-2 border-[#FF6A00] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md">
                {m.step}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h4 className="font-heading font-bold text-base text-white uppercase">
                    {m.name}
                  </h4>
                  <span className="px-2 py-0.5 bg-[#1F1F1F] text-[#FF6A00] text-[10px] font-mono uppercase font-semibold">
                    {m.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#737373] font-light">
            Phương tiện phân bổ: <strong className="text-[#E5E5E5] font-semibold">{currentCorridor.vehicle}</strong>
          </span>
          <Link
            href="/contact"
            className="btn-arrow-hover px-6 py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
          >
            <span>ĐẶT XE TUYẾN NÀY NGAY</span>
            <span className="arrow-move ml-1.5 font-bold">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
