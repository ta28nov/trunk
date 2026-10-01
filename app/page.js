"use client";
import { useState } from "react";
import Link from "next/link";
import QuoteCalculator from "./components/QuoteCalculator";

const FLEET_ITEMS = [
  {
    id: 1,
    category: "container",
    name: "Đầu Kéo Container 40ft / 45ft",
    badge: "14 Đầu Kéo",
    capacity: "Tải trọng: 32.0 Tấn",
    specs: "Kéo cont Cát Lái, Cái Mép & liên tỉnh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
  },
  {
    id: 2,
    category: "mui-bat",
    name: "Xe Tải Mui Bạt 9.6M",
    badge: "18 Xe Chạy Bắc — Nam",
    capacity: "Tải trọng: 15 Tấn (57 m³)",
    specs: "Thùng dài 9.6m • Tuyến đường dài",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
  },
  {
    id: 3,
    category: "cau-tu-hanh",
    name: "Xe Cẩu Tự Hành 5T — 15T",
    badge: "8 Xe Bãi Nam",
    capacity: "Sức nâng: 5 — 15 Tấn",
    specs: "Cẩu hạ máy CNC, lắp đặt xưởng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
  },
  {
    id: 4,
    category: "chuyen-dung",
    name: "Xe Thùng Kín Khóa Seal",
    badge: "12 Xe Thùng Kín",
    capacity: "Tải trọng: 5T — 10T",
    specs: "Bửng nâng thủy lực, khóa seal chì",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
  },
  {
    id: 5,
    category: "chuyen-dung",
    name: "Xe Đông Lạnh Thermo King",
    badge: "Kiểm Soát Nhiệt",
    capacity: "Dải nhiệt: -18°C ~ +10°C",
    specs: "Data Logger xuất file nhiệt độ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnrXDdpPf_sU_P9FactYQKlcoubcLLieDwY5SGdkisvPIdq61R7_rf7xTxdq9r_RUj6Ah6sDWkczOQEnyEZxgVnxjJJImx8nqHAIv8bSubgYAtXjLjht6rvAB7dnkUCgQhD_p79AiTAKM9kM2U4UNPayuKynm8Slpo8eCY5N6u70ObZjSfjKLiaO6XK7FTnd-kXZMPcOhlHu365Fn-HVFRYwE-QdPdEPmQBDcbQkH6efQpBrWXEWtj0Q",
  },
  {
    id: 6,
    category: "container",
    name: "Moóc Lùn Quá Khổ Quá Tải",
    badge: "Siêu Trọng 50T",
    capacity: "Tải trọng: Lên đến 50 Tấn",
    specs: "Giấy phép lưu hành Cục Đường Bộ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnUtZ941yLn33tHkUUAGsDU1V-958h-SpPgeEqlZCeOi19Vk9jlD8s5VEs08PCqtZjoDjgM0OwdVEAlX5QVqrcAXKtYtxe-W3q0US5Mszt4CNrsN5dZn_zKxGAnRwccFHSMEurWyTdr8RFMIrqDRRLz3tKFWLJzEgtXogn2x39PO0fcePuRz_zzBC2GSoHRz4hswHDcHEMo8FWnb6vLsmen1iTDI68boZOIpotGleYfQQGzZPxcXt-cQ",
  },
];

export default function Home() {
  const [fleetFilter, setFleetFilter] = useState("all");

  const filteredFleet = FLEET_ITEMS.filter((item) => {
    if (fleetFilter === "all") return true;
    return item.category === fleetFilter;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 01: HERO BENTO (Dynamic, Spacious, Visual)
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-6 md:pt-10 pb-12 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Main Hero Bento Card (8 Cols) */}
          <div className="lg:col-span-8 bento-card-dark p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-orange-500/15 transition-all duration-700" />
            
            <div className="space-y-4 md:space-y-6 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill bg-navy-800 text-orange-400 border border-navy-700">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Sẵn Sàng Điều Vận Ngay
                </span>
                <span className="badge-pill bg-navy-800/60 text-slate-300 border border-navy-700">
                  <span className="material-symbols-outlined text-xs text-green-400">shield</span>
                  Bảo Hiểm 10 Tỷ VNĐ
                </span>
              </div>

              <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15]">
                Năng Lực Vận Tải Thực Tế
                <span className="block text-orange-500 mt-1 md:mt-2">
                  Đội Xe Trực Tiếp — Không Qua Trung Gian
                </span>
              </h1>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                Chuyên chở hàng công nghiệp, máy móc cơ khí & container. 100% định vị GPS giám sát trực tuyến 24/7, cam kết giờ giao nhận chính xác.
              </p>
            </div>

            <div className="pt-6 md:pt-8 flex flex-wrap items-center gap-3 relative z-10">
              <a
                href="tel:0918456789"
                className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                Gọi Điều Phối 24/7
              </a>
              <a
                href="#quote-calc"
                className="px-6 py-3.5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all border border-navy-700 hover:border-slate-500 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">calculate</span>
                Tính Giá Nhanh
              </a>
            </div>
          </div>

          {/* Hero Side Bento Card (4 Cols): Live Telemetry & Real Photo */}
          <div className="lg:col-span-4 bento-card p-0 flex flex-col justify-between group overflow-hidden">
            <div className="relative h-56 sm:h-64 lg:h-full w-full overflow-hidden bg-slate-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA"
                alt="Đội xe đầu kéo container Vận Tải Tiên Phong"
                className="w-full h-full object-cover img-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent flex flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="badge-pill bg-navy-950/80 backdrop-blur-md text-orange-400 border border-navy-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                    GPS ACTIVE
                  </span>
                  <span className="text-[10px] font-heading font-bold text-slate-300 uppercase tracking-widest">
                    Cát Lái • Sóng Thần
                  </span>
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-wider block">
                    Đội Xe Trực Chiến
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase leading-snug">
                    52 Đầu Xe Chính Chủ Sẵn Sàng Bốc Hàng
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Bento Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="bento-card p-5 sm:p-6 flex items-center justify-between group">
            <div className="space-y-1">
              <span className="font-heading font-bold text-3xl md:text-4xl text-navy-900 block group-hover:text-orange-500 transition-colors">
                52+
              </span>
              <span className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wider block">
                Đầu Xe Chính Chủ
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
          </div>

          <div className="bento-card p-5 sm:p-6 flex items-center justify-between group">
            <div className="space-y-1">
              <span className="font-heading font-bold text-3xl md:text-4xl text-orange-500 block">
                ≤30&apos;
              </span>
              <span className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wider block">
                Có Mặt Bốc Hàng
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
          </div>

          <div className="bento-card p-5 sm:p-6 flex items-center justify-between group">
            <div className="space-y-1">
              <span className="font-heading font-bold text-3xl md:text-4xl text-navy-900 block group-hover:text-orange-500 transition-colors">
                10 TỶ
              </span>
              <span className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wider block">
                Bảo Hiểm Hàng Hóa PVI
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 02: LEGAL & INFRASTRUCTURE BENTO
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Năng Lực Hạ Tầng & Pháp Lý
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
              Hồ Sơ Minh Bạch — An Tâm Hợp Tác
            </h2>
          </div>
          <Link
            href="/trust"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
          >
            Xem Chứng Chỉ & Giấy Phép
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Bento Card: Sóng Thần Yard Image (6 cols) */}
          <div className="md:col-span-6 bento-card p-0 overflow-hidden group min-h-[260px] md:min-h-[300px]">
            <div className="relative w-full h-full min-h-[260px] md:min-h-[300px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA"
                alt="Bãi xe Sóng Thần 15000m2"
                className="w-full h-full object-cover img-hover-zoom absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="badge-pill bg-orange-500 text-white w-fit mb-2">
                  15,000m² Kho Bãi
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white uppercase">
                  3 Trung Tâm Bãi Xe Chiến Lược
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Sóng Thần (Bình Dương) • Cát Lái (TP.HCM) • Hòa Cầm (Đà Nẵng). Sức chứa 120 đầu kéo.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Card: Legal Status (3 cols) */}
          <div className="md:col-span-3 bento-card p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                Pháp Nhân Chính Quy
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sở GTVT TP.HCM cấp giấy phép số <strong>41-GPVT/SGTVT</strong>. MST: <strong>0314892039</strong>.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-heading font-semibold text-orange-600">
              Hoạt động từ năm 2014
            </div>
          </div>

          {/* Bento Card: B2B Experience (3 cols) */}
          <div className="md:col-span-3 bento-card p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                850+ Đối Tác B2B
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chuyên phục vụ doanh nghiệp FDI tại VSIP, Amata, Tân Thuận với tỷ lệ đúng hạn <strong>99.4%</strong>.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] font-heading font-semibold text-navy-900">
              Công nợ 30 ngày linh hoạt
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 03: FLEET BENTO SHOWCASE (Compact, Visual)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full" id="fleet-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Danh Mục Phương Tiện
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
              Đội Xe Trực Tiếp — Đa Tải Trọng
            </h2>
          </div>

          {/* Filter Pills with Micro-animation */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "Tất Cả" },
              { id: "container", label: "Đầu Kéo" },
              { id: "mui-bat", label: "Mui Bạt" },
              { id: "cau-tu-hanh", label: "Xe Cẩu" },
              { id: "chuyen-dung", label: "Thùng Kín & Lạnh" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFleetFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                  fleetFilter === tab.id
                    ? "bg-navy-900 text-white shadow-sm scale-105"
                    : "bg-white hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              className="bento-card flex flex-col group overflow-hidden"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover img-hover-zoom"
                />
                <span className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-white text-[10px] font-heading font-bold uppercase px-2.5 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-sm md:text-base text-navy-900 uppercase group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-orange-600 font-heading">
                    {item.capacity}
                  </div>
                  <p className="text-xs text-slate-500">
                    {item.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:0918456789"
                    className="flex-1 py-2 bg-slate-100 hover:bg-orange-500 hover:text-white text-navy-900 text-xs font-heading font-bold uppercase tracking-wider text-center rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    Điều Xe Nhanh
                  </a>
                  <Link
                    href="/fleet"
                    className="px-3 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-heading font-semibold uppercase rounded-lg"
                  >
                    Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 04: CORE SERVICE PILLARS (4 Bento Cards)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Dịch Vụ Vận Tải Nòng Cốt
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
              4 Trụ Cột Vận Hành Toàn Diện
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
          >
            Xem Quy Trình 5 Bước
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              num: "01",
              icon: "front_loader",
              title: "Bao Xe Nguyên Chuyến (FTL)",
              desc: "Niêm phong kẹp chì, bốc sau 30 phút, chạy thẳng không ghép hàng.",
              tag: "Cam kết giờ giao",
            },
            {
              num: "02",
              icon: "sync_alt",
              title: "Ghép Hàng Bắc — Nam",
              desc: "2 chuyến xuất bến cố định mỗi ngày, nhận gom từ 500kg đến 5 tấn.",
              tag: "Tiết kiệm chi phí",
            },
            {
              num: "03",
              icon: "precision_manufacturing",
              title: "Di Dời & Cẩu Hạ Máy",
              desc: "Xe cẩu 5T—15T, tháo dỡ, chằng buộc và đưa máy CNC vào móng xưởng.",
              tag: "Bảo hiểm 100%",
            },
            {
              num: "04",
              icon: "directions_boat",
              title: "Kéo Container Cảng / ICD",
              desc: "Kéo vỏ, rút ruột tại Cát Lái, Cái Mép, Sóng Thần bám sát giờ tàu.",
              tag: "Trực chiến 24/7",
            },
          ].map((srv) => (
            <div
              key={srv.num}
              className="bento-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{srv.icon}</span>
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-300">
                    {srv.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-navy-900 uppercase group-hover:text-orange-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-heading font-semibold text-orange-600 uppercase">
                  {srv.tag}
                </span>
                <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 05: CARGO SAFETY & VISUAL OPERATIONS
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch">
          {/* Bento Card: Night Operations Photo (6 cols) */}
          <div className="lg:col-span-6 bento-card p-0 overflow-hidden group min-h-[300px]">
            <div className="relative w-full h-full min-h-[300px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ"
                alt="Cẩu hạ máy CNC 14 tấn tại VSIP 2"
                className="w-full h-full object-cover img-hover-zoom absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="badge-pill bg-navy-900 text-orange-400 border border-navy-700 w-fit mb-2">
                  Thực Địa Nhà Xưởng
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white uppercase">
                  Cẩu Máy CNC 14 Tấn Vào Xưởng KCN VSIP 2
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Đội xe cẩu tự hành 15T phối hợp cùng rùa đẩy thủy lực đưa máy móc chính xác vào bệ móng.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Card: GPS Control Room Photo (6 cols) */}
          <div className="lg:col-span-6 bento-card p-0 overflow-hidden group min-h-[300px]">
            <div className="relative w-full h-full min-h-[300px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuqO2LBRff0Jkiuf-3movRgoEM7vSzRshIOA1f_niWEJykdc07tW-5TlElFimkAgzaiwtFEyt0l6191dfVmqgiBkvVm0ueoqhvHKOJLC_WkrbS4WufsAa3wQR9EVHR8iF1G4yEKQ8qJGtVMzX7StN7bUmOR0sSNBpCL3IaicnWUyJ0ijJgXEJHS3e7IJ_jIDGLD52-2B71owM9l045mX0l06VFpO5GJmTFznUlJPgj-ycmt-CWRxTz2w"
                alt="Phòng điều độ GPS 24/7"
                className="w-full h-full object-cover img-hover-zoom absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="badge-pill bg-navy-900 text-green-400 border border-navy-700 w-fit mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Điều Độ Trực Tuyến
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white uppercase">
                  Giám Sát GPS & Camera Cabin 24/7
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Hệ thống kiểm soát tốc độ, cảnh báo buồn ngủ và camera truyền dữ liệu về Cục Đường Bộ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Warning Bento Strip */}
        <div className="mt-4 md:mt-6 bento-card p-4 sm:p-5 bg-red-50/70 border-red-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">gavel</span>
            </div>
            <p className="text-xs text-red-900 leading-snug">
              <strong>Chính sách tuân thủ pháp luật:</strong> Tuyệt đối từ chối vận chuyển hóa chất cấm, chất cháy nổ và hàng không hóa đơn chứng từ theo <strong>Nghị định 10/2020/NĐ-CP</strong>.
            </p>
          </div>
          <span className="badge-pill bg-red-600 text-white w-fit self-start sm:self-center shrink-0">
            NĐ 10/2020
          </span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 06: 4 GOLDEN PROMISES (Crisp Bento Grid)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="bento-card-dark p-6 sm:p-8 md:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-widest block">
                Cam Kết Thương Hiệu
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mt-1">
                4 Cam Kết Vàng Bảo Vệ Doanh Nghiệp
              </h2>
            </div>
            <div className="text-xs text-slate-400">
              Ghi rõ trong điều khoản hợp đồng kinh tế
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: "shield_with_heart",
                title: "Bồi Thường 100%",
                desc: "Đền bù 100% giá trị thị trường nếu hàng hóa hư hỏng theo hợp đồng bảo hiểm PVI.",
              },
              {
                icon: "alarm_on",
                title: "Đúng Hạn Tuyệt Đối",
                desc: "Cam kết giờ giao nhận. Bồi thường 500.000đ/giờ trễ chuyến không do thiên tai.",
              },
              {
                icon: "no_transfer",
                title: "Không Bán Lại Tải",
                desc: "100% xe chính chủ thương hiệu Tiên Phong, không bán tải sang bên thứ 3.",
              },
              {
                icon: "receipt_long",
                title: "Hóa Đơn Minh Bạch",
                desc: "Báo giá trọn gói không phát sinh. Hóa đơn VAT điện tử gửi trong ngày.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-navy-900/60 p-5 rounded-xl border border-navy-800 space-y-2 hover:border-slate-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-sm uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 07: QUOTE CALCULATOR (Interactive Bento Hub)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full" id="quote-calc">
        <div className="bento-card p-0 overflow-hidden shadow-lg">
          <QuoteCalculator />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 08: TESTIMONIALS & PARTNER LOGOS
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Phản Hồi Đối Tác
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
              Được Tin Dùng Tại Các KCN Trọng Điểm
            </h2>
          </div>
          <div className="flex items-center gap-1 text-orange-500 text-xs font-bold">
            <span className="material-symbols-outlined text-base">star</span>
            <span className="material-symbols-outlined text-base">star</span>
            <span className="material-symbols-outlined text-base">star</span>
            <span className="material-symbols-outlined text-base">star</span>
            <span className="material-symbols-outlined text-base">star</span>
            <span className="text-slate-600 ml-1">4.9 / 5.0 (230+ Đánh giá B2B)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              quote: "Tiên Phong chở linh kiện cho nhà máy chúng tôi tại VSIP 1 hơn 3 năm nay. Đúng giờ, tài xế có thẻ an toàn và GPS cập nhật rất chuẩn xác.",
              name: "Ông Trần Minh Khang",
              role: "Giám Đốc Vận Hành — Linh Kiện Điện Tử Hàn Quốc",
            },
            {
              quote: "Đợt chuyển xưởng sang Đồng Nai gồm 6 máy phay CNC siêu trọng. Đội xe cẩu của Tiên Phong phối hợp nhịp nhàng, bàn giao móng an toàn 100%.",
              name: "Bà Lê Thu Hương",
              role: "Trưởng Phòng Mua Hàng — Cơ Khí Chính Xác Long Thành",
            },
            {
              quote: "Cần cont gấp lúc 11h đêm để kịp giờ tàu Cát Lái, gọi hotline là có xe ngay sau 25 phút. Hóa đơn chứng từ gửi kế toán rất nhanh gọn.",
              name: "Ông Nguyễn Văn Dũng",
              role: "Chủ Quản Logistics — Nông Sản Miền Đông",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bento-card p-6 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <span className="material-symbols-outlined text-orange-500 text-2xl">format_quote</span>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-heading font-bold text-xs uppercase text-navy-900">{t.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION 09: FINAL CONVERSION BENTO BANNER
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="bento-card-dark p-8 md:p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fe6b00_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="badge-pill bg-orange-500/20 text-orange-400 border border-orange-500/30">
              Hỗ Trợ 24/7/365
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
              Cần Điều Xe Gấp Hoặc Báo Giá Hợp Đồng Tháng?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Hơn 52 đầu xe tại Sóng Thần, Cát Lái và Đà Nẵng luôn sẵn sàng nhận lệnh. Nhận báo giá chính xác trong vòng 15 phút.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href="tel:0918456789"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                Hotline: 0918.456.789
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white hover:bg-slate-100 text-navy-900 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all hover:-translate-y-0.5"
              >
                Gửi Yêu Cầu Báo Giá
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
