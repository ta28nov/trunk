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
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      desc: "Trọng tâm hoạt động với bãi xe trung tâm 15.000m² tại KCN Sóng Thần (Dĩ An). Đội xe túc trực 24/7, kết nối thông suốt giữa các tỉnh công nghiệp lớn nhất cả nước trong ngày.",
      routes: [
        { from: "KCN Sóng Thần (Bình Dương)", to: "KCN VSIP 1 & 2 / Mỹ Phước", dist: "25 - 45 km", eta: "1 - 1.5 Giờ" },
        { from: "TP.HCM / Thủ Đức", to: "KCN Amata / Biên Hòa 2 / Nhơn Trạch", dist: "35 - 55 km", eta: "1.5 - 2 Giờ" },
        { from: "Bình Dương / TP.HCM", to: "Cụm Cảng Quốc Tế Cái Mép — Thị Vải", dist: "75 - 90 km", eta: "2.5 - 3 Giờ" },
        { from: "Bình Dương", to: "KCN Đức Hòa / Bến Lức / Long Hậu (Long An)", dist: "60 - 80 km", eta: "2 - 2.5 Giờ" },
      ],
    },
    {
      id: "north-south",
      region: "north",
      title: "Trục Huyết Mạch Quốc Lộ 1A: Bắc — Nam",
      time: "44H — 48H CAM KẾT",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      desc: "Đội xe mui bạt 9.6M và đầu kéo container chạy xoay vòng liên tục giữa hai đầu đất nước. Bố trí 2 tài xế thay phiên lái an toàn và có trạm trung chuyển đổi ca tại Đà Nẵng.",
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
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      desc: "Chuyên vận chuyển thiết bị công trình điện gió, năng lượng mặt trời, vật tư cơ khí, phân bón và hàng tiêu dùng nhanh tiếp vận các tỉnh Nam Trung Bộ và Tây Nguyên.",
      routes: [
        { from: "TP.HCM / Bình Dương", to: "Phan Thiết / Hàm Tân (Bình Thuận)", dist: "180 km", eta: "4 - 5 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Cam Ranh / Nha Trang (Khánh Hòa)", dist: "420 km", eta: "9 - 10 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Quy Nhơn (Bình Định) / KCN Nhơn Hội", dist: "650 km", eta: "16 - 18 Giờ" },
        { from: "TP.HCM / Bình Dương", to: "Buôn Ma Thuột (Đắk Lắk) / Pleiku", dist: "350 - 520 km", eta: "9 - 14 Giờ" },
      ],
    },
    {
      id: "port-icd",
      region: "south",
      title: "Tuyến Cảng Biển Quốc Tế & Cảng Cạn (ICD)",
      time: "TRỰC CHIẾN 24/7",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      desc: "Chuyên kéo vỏ cont, hạ bãi cảng Cát Lái, Cái Mép, rút ruột container, bấm seal hải quan và vận chuyển hàng xuất nhập khẩu bám sát lịch tàu chạy không trễ giờ cut-off.",
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
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=2400&q=80"
          alt="Hành lang vận tải cao tốc Quốc Lộ 1A"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            MẠNG LƯỚI TUYẾN ĐƯỜNG
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              KẾT NỐI 42+ KHU CÔNG NGHIỆP TRỌNG ĐIỂM
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Vành đai công nghiệp Đông Nam Bộ (1.5H - 3H), Trục huyết mạch Bắc — Nam (48H cam kết), Duyên hải Miền Trung và Cảng biển quốc tế Cát Lái — Cái Mép trực chiến 24/7.
          </p>

          {/* Region Filter Buttons */}
          <div className="pt-6 flex flex-wrap items-center gap-3">
            {[
              { id: "all", label: "Tất Cả Tuyến Đường" },
              { id: "south", label: "Đông Nam Bộ & Cảng Biển" },
              { id: "north", label: "Trục Bắc — Nam (Hà Nội)" },
              { id: "central", label: "Miền Trung & Tây Nguyên" },
            ].map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedRegion(b.id)}
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedRegion === b.id
                    ? "bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-105"
                    : "bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPANSIVE SPLIT-SCREEN CORRIDORS (Clean White, Long Vertical Scroll) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-32">
        {filteredCorridors.map((c, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={c.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-on-scroll"
            >
              {/* Text Content Side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-2">
                  <span className="font-heading font-black text-2xl text-orange-600 block">
                    Tiến độ: {c.time}
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 uppercase leading-tight">
                    {c.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                  {c.desc}
                </p>

                {/* Route Destinations */}
                <div className="space-y-3 pt-2">
                  <strong className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider block">
                    Các Tuyến Điển Hình:
                  </strong>
                  <div className="space-y-3">
                    {c.routes.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 text-slate-900 font-medium text-base">
                          <span className="material-symbols-outlined text-orange-600 text-xl">route</span>
                          <span>{r.from} ➔ {r.to}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-500 shrink-0">
                          <span>{r.dist}</span>
                          <span className="font-bold text-orange-600 bg-orange-100/60 px-3 py-1 rounded-xl">
                            {r.eta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:0918456789"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                    Kiểm Tra Xe Hôm Nay: 0918.456.789
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    Xem Bảng Cước Tuyến Này
                  </Link>
                </div>
              </div>

              {/* Giant Image Frame Side */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover img-hover-zoom"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ 42 INDUSTRIAL PARKS DIRECTORY (Clean Slate-50) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              PHỦ SÓNG 42+ KHU CÔNG NGHIỆP TRỌNG ĐIỂM
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Đội xe Tiên Phong có thẻ ra vào cố định tại hầu hết các KCN trọng điểm, giúp lái xe làm thủ tục cổng bảo vệ trong 5 phút và nhanh chóng tiếp cận bến bốc hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIAL_PARKS.map((ip) => (
              <div
                key={ip.province}
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3 text-orange-600 font-heading font-bold text-lg uppercase">
                  <span className="material-symbols-outlined text-2xl">domain</span>
                  {ip.province}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  {ip.list}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-24 bg-slate-900 text-white reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Tuyến Hàng Của Bạn Không Có Trong Danh Sách?
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-light">
              Chúng tôi nhận điều xe đi khắp 63 tỉnh thành theo hợp đồng nguyên chuyến hoặc dự án công nghiệp dài hạn.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:0918456789"
              className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/30 transition-all hover:scale-105"
            >
              Hỏi Tuyến Đường: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-8 py-5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl border border-navy-700 transition-colors"
            >
              Gửi Thông Tin Kiện Hàng
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
