"use client";
import { useState } from "react";
import Link from "next/link";

export default function RoutesPage() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const CORRIDORS = [
    {
      id: "southeast",
      region: "south",
      title: "Hành Lang Đông Nam Bộ & Các KCN Vệ Tinh",
      time: "1.5H — 3.5H",
      badge: "Xuất Bến Liên Tục",
      badgeColor: "bg-orange-500 text-white",
      desc: "Trọng tâm hoạt động với bãi xe trung tâm tại Sóng Thần. Kết nối các tỉnh công nghiệp lớn nhất cả nước trong ngày.",
      routes: [
        { from: "KCN Sóng Thần (Bình Dương)", to: "KCN VSIP 1 & 2 / Mỹ Phước", dist: "25 - 45 km", eta: "1 - 1.5 Giờ" },
        { from: "TP.HCM / Thủ Đức", to: "KCN Amata / Biên Hòa 2 / Nhơn Trạch (Đồng Nai)", dist: "35 - 55 km", eta: "1.5 - 2 Giờ" },
        { from: "Bình Dương / TP.HCM", to: "Cụm Cảng Cái Mép — Thị Vải (Bà Rịa Vũng Tàu)", dist: "75 - 90 km", eta: "2.5 - 3 Giờ" },
        { from: "Bình Dương", to: "KCN Đức Hòa / Bến Lức / Long Hậu (Long An)", dist: "60 - 80 km", eta: "2 - 2.5 Giờ" },
      ],
    },
    {
      id: "north-south",
      region: "north",
      title: "Trục Huyết Mạch Quốc Lộ 1A: Bắc — Nam",
      time: "44H — 48H CAM KẾT",
      badge: "2 Chuyến / Ngày",
      badgeColor: "bg-navy-900 text-white",
      desc: "Đội xe mui bạt 9.6M và đầu kéo container chạy xoay vòng liên tục giữa hai đầu đất nước, có trạm đổi lái an toàn tại Đà Nẵng.",
      routes: [
        { from: "Tổng kho Sóng Thần (TP.HCM)", to: "KCN Hòa Cầm / Liên Chiểu (Đà Nẵng)", dist: "950 km", eta: "24 - 28 Giờ" },
        { from: "Tổng kho Sóng Thần", to: "Kho Giáp Bát / Gia Lâm (Hà Nội)", dist: "1,720 km", eta: "44 - 48 Giờ" },
        { from: "TP.HCM", to: "KCN Đình Vũ / Tràng Duệ (Hải Phòng)", dist: "1,790 km", eta: "46 - 50 Giờ" },
        { from: "TP.HCM", to: "KCN VSIP Bắc Ninh / Yên Phong", dist: "1,760 km", eta: "46 - 50 Giờ" },
      ],
    },
    {
      id: "central-highland",
      region: "central",
      title: "Duyên Hải Miền Trung & Vùng Tây Nguyên",
      time: "18H — 28H",
      badge: "Hàng Ngày",
      badgeColor: "bg-blue-600 text-white",
      desc: "Chuyên vận chuyển vật tư nông sản, phân bón, thiết bị điện gió năng lượng tái tạo và hàng tiêu dùng.",
      routes: [
        { from: "TP.HCM / Bình Dương", to: "Phan Thiết / Hàm Tân (Bình Thuận)", dist: "180 km", eta: "4 - 5 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Cam Ranh / Nha Trang (Khánh Hòa)", dist: "420 km", eta: "9 - 10 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Quy Nhơn (Bình Định) / KCN Nhơn Hội", dist: "650 km", eta: "16 - 18 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Buôn Ma Thuột (Đắk Lắk) / Pleiku (Gia Lai)", dist: "350 - 520 km", eta: "9 - 14 Giờ" },
      ],
    },
    {
      id: "port-icd",
      region: "south",
      title: "Tuyến Cảng Biển Quốc Tế & Cảng Cạn (ICD)",
      time: "TRỰC CHIẾN 24/7",
      badge: "Kẹp Chì Hải Quan",
      badgeColor: "bg-green-600 text-white",
      desc: "Chuyên kéo vỏ cont, rút ruột, bấm seal kiểm hóa và vận chuyển hàng xuất nhập khẩu bám sát giờ tàu.",
      routes: [
        { from: "Bãi Cát Lái", to: "Cảng Tân Cảng — Cát Lái (Cổng A/B/C/D)", dist: "2 - 5 km", eta: "15 - 30 Phút" },
        { from: "KCN Sóng Thần / VSIP", to: "ICD Sóng Thần / ICD Phước Long / Long Bình", dist: "10 - 25 km", eta: "30 - 45 Phút" },
        { from: "KCN Amata / Nhơn Trạch", to: "Cụm Cảng Quốc Tế Cái Mép (TCIT, CMIT)", dist: "45 - 65 km", eta: "1.5 - 2 Giờ" },
        { from: "TP.HCM / Long An", to: "Cảng Quốc Tế Hiệp Phước (Nhà Bè)", dist: "30 - 50 km", eta: "1 - 1.5 Giờ" },
      ],
    },
  ];

  const INDUSTRIAL_PARKS = [
    { province: "Bình Dương (12 KCN)", list: "VSIP 1, VSIP 2, Sóng Thần 1-2-3, Mỹ Phước 1-2-3, Nam Tân Uyên, Bàu Bàng, Tân Đông Hiệp" },
    { province: "Đồng Nai (10 KCN)", list: "Amata, Biên Hòa 1-2, Nhơn Trạch 1-6, Long Đức, Giang Điền, Long Thành, Lộc An" },
    { province: "TP. Hồ Chí Minh (8 KCN/KCX)", list: "KCX Tân Thuận, KCX Linh Trung 1-2, KCN Hiệp Phước, Tân Bình, Vĩnh Lộc, Tây Bắc Củ Chi" },
    { province: "Bà Rịa — Vũng Tàu (5 KCN)", list: "Phú Mỹ 1-2-3, KCN Cái Mép, KCN Đông Xuyên, KCN Châu Đức" },
    { province: "Long An & Miền Tây (7 KCN)", list: "Thuận Đạo, Long Hậu, Đức Hòa 1-3, Tân Đức, KCN Trà Nóc (Cần Thơ)" },
  ];

  const filteredCorridors = CORRIDORS.filter((c) => {
    if (selectedRegion === "all") return true;
    return c.region === selectedRegion;
  });

  return (
    <div className="flex flex-col w-full">
      {/* ═══ HEADER BANNER ═══ */}
      <section className="bg-navy-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
            Mạng Lưới Vận Tải Trọng Điểm
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Mạng Lưới Tuyến Đường & Kết Nối Cụm Khu Công Nghiệp
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Hơn 42 khu công nghiệp trọng điểm Đông Nam Bộ cùng trục Quốc lộ 1A Bắc — Nam được phục vụ hàng ngày với cam kết thời gian giao nhận chính xác.
          </p>
        </div>
      </section>

      {/* ═══ MAP & CORRIDORS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Hành Lang Vận Tải
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
                4 Trục Tuyến Đường Huyết Mạch
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2">
              {[
                { id: "all", label: "Tất Cả" },
                { id: "south", label: "Đông Nam Bộ & Cảng" },
                { id: "north", label: "Trục Bắc — Nam" },
                { id: "central", label: "Miền Trung" },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedRegion(b.id)}
                  className={`px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                    selectedRegion === b.id
                      ? "bg-navy-900 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCorridors.map((c) => (
              <div
                key={c.id}
                className="bg-slate-50 rounded-lg border border-slate-200 shadow-sm p-6 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                    <h3 className="font-heading font-bold text-base md:text-lg text-navy-900 uppercase mt-1.5">
                      {c.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Tiến độ cam kết</span>
                    <span className="font-heading font-bold text-sm text-orange-600">{c.time}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>

                {/* Sub-routes table */}
                <div className="space-y-2">
                  <span className="text-[11px] font-heading font-bold text-navy-900 uppercase tracking-wider block">
                    Các Chặng Phổ Biến:
                  </span>
                  <div className="space-y-1.5">
                    {c.routes.map((r, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-2.5 rounded border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-1.5 text-navy-900 font-medium">
                          <span className="material-symbols-outlined text-orange-500 text-base">route</span>
                          <span>{r.from} ➔ {r.to}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500 text-[11px] shrink-0">
                          <span>{r.dist}</span>
                          <span className="font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">{r.eta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="tel:0918456789"
                    className="text-xs font-heading font-bold text-orange-600 hover:text-orange-700 uppercase flex items-center gap-1"
                  >
                    <span>Kiểm Tra Lịch Xuất Bến Hôm Nay</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 42 INDUSTRIAL PARKS DIRECTORY ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Danh Bạ Địa Bàn Hoạt Động
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Phủ Sóng 42+ Khu Công Nghiệp Trọng Điểm
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Xe tải Tiên Phong có thẻ ra vào cố định tại hầu hết các KCN trọng điểm, giúp rút ngắn thời gian làm thủ tục qua cổng bảo vệ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIAL_PARKS.map((ip) => (
              <div
                key={ip.province}
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-navy-900 font-heading font-bold text-sm uppercase">
                  <span className="material-symbols-outlined text-orange-500 text-lg">domain</span>
                  {ip.province}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ip.list}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl uppercase">
              Tuyến Hàng Của Bạn Không Có Trong Danh Sách?
            </h3>
            <p className="text-xs text-slate-300">
              Chúng tôi nhận điều xe đi khắp 63 tỉnh thành theo hợp đồng nguyên chuyến hoặc dự án dài hạn.
            </p>
          </div>
          <a
            href="tel:0918456789"
            className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0"
          >
            Hỏi Tuyến Đường: 0918.456.789
          </a>
        </div>
      </section>
    </div>
  );
}
