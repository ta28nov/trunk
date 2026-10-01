"use client";
import { useState } from "react";
import Link from "next/link";
import QuoteCalculator from "./components/QuoteCalculator";

const FLEET_ITEMS = [
  {
    id: 1,
    category: "container",
    name: "Đầu Kéo Container 40ft / 45ft",
    badge: "14 Đầu Kéo Trực Chiến",
    capacity: "Tải trọng: 32.0 Tấn",
    specs: "Kéo cont khô/lạnh Cát Lái, Cái Mép & liên tỉnh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
  },
  {
    id: 2,
    category: "mui-bat",
    name: "Xe Tải Thùng Mui Bạt 9.6M (15 Tấn)",
    badge: "18 Xe Đang Chạy",
    capacity: "Tải trọng: 15 Tấn (57 m³)",
    specs: "Thùng dài 9.6m x rộng 2.38m x cao 2.6m • Tuyến Bắc — Nam",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
  },
  {
    id: 3,
    category: "cau-tu-hanh",
    name: "Xe Cẩu Tự Hành 5T — 15T",
    badge: "8 Xe Bãi Nam",
    capacity: "Sức nâng cẩu: 5 — 15 Tấn",
    specs: "Cẩu lắp đặt máy móc CNC, cấu kiện thép, hạ hàng tận xưởng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
  },
  {
    id: 4,
    category: "chuyen-dung",
    name: "Xe Thùng Kín Khóa Niêm Phong",
    badge: "12 Xe Thùng Kín",
    capacity: "Tải trọng: 5T — 10T",
    specs: "Bửng nâng thủy lực, khóa seal chì chống nước tuyệt đối",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
  },
  {
    id: 5,
    category: "chuyen-dung",
    name: "Xe Đông Lạnh Thermo King",
    badge: "Kiểm Soát Nhiệt",
    capacity: "Dải nhiệt: -18°C ~ +10°C",
    specs: "Data Logger định kỳ xuất file nhiệt độ, thực phẩm & hóa chất",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnrXDdpPf_sU_P9FactYQKlcoubcLLieDwY5SGdkisvPIdq61R7_rf7xTxdq9r_RUj6Ah6sDWkczOQEnyEZxgVnxjJJImx8nqHAIv8bSubgYAtXjLjht6rvAB7dnkUCgQhD_p79AiTAKM9kM2U4UNPayuKynm8Slpo8eCY5N6u70ObZjSfjKLiaO6XK7FTnd-kXZMPcOhlHu365Fn-HVFRYwE-QdPdEPmQBDcbQkH6efQpBrWXEWtj0Q",
  },
  {
    id: 6,
    category: "container",
    name: "Moóc Lùn Quá Khổ Quá Tải",
    badge: "Siêu Trọng 50T",
    capacity: "Tải trọng: Lên đến 50 Tấn",
    specs: "Giấy phép lưu hành đặc biệt Cục Đường Bộ, xe dẫn đường",
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
    <div className="flex flex-col w-full">
      {/* ═══ SECTION 01: HERO CINEMATIC ═══ */}
      <section className="relative w-full bg-navy-950 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-orange-500/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Sẵn Sàng Điều Vận Ngay
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="material-symbols-outlined text-sm text-orange-400">pin_drop</span>
              Phủ sóng 63 Tỉnh Thành & Các KCN Trọng Điểm
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15]">
                Năng Lực Vận Tải Thực Tế
                <span className="block text-orange-500 mt-1">
                  Đội Xe Trực Tiếp Không Qua Trung Gian
                </span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                Chuyên vận tải hàng công nghiệp, máy móc siêu trọng & container. 100% định vị GPS giám sát trực tuyến 24/7, bảo hiểm trách nhiệm hàng hóa tới <strong>10 Tỷ VNĐ</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:0918456789"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-orange-500/25"
                >
                  <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                  Gọi Điều Phối 24/7
                </a>
                <a
                  href="#quote-calc"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all border border-navy-700"
                >
                  <span className="material-symbols-outlined text-lg">calculate</span>
                  Tính Giá Nhanh
                </a>
                <Link
                  href="/fleet"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-slate-300 hover:text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Xem Đội Xe
                  <span className="material-symbols-outlined text-base">east</span>
                </Link>
              </div>
            </div>

            {/* Live Telemetry Card */}
            <div className="lg:col-span-5 bg-navy-900/90 rounded-lg p-6 border border-navy-700 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-400 text-xl">radar</span>
                  <span className="font-heading font-bold text-sm uppercase text-white">
                    Giám Sát Trực Tuyến 24/7
                  </span>
                </div>
                <span className="font-heading font-bold text-[11px] text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded uppercase">
                  Telemetry Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-navy-950/60 p-4 rounded text-center border border-navy-800">
                  <span className="font-heading font-bold text-2xl md:text-3xl text-white block">52</span>
                  <span className="text-[10px] md:text-xs text-orange-400 uppercase font-heading font-semibold block mt-1">
                    Đầu Xe Trực Thuộc
                  </span>
                </div>
                <div className="bg-navy-950/60 p-4 rounded text-center border border-navy-800">
                  <span className="font-heading font-bold text-2xl md:text-3xl text-orange-400 block">≤30&apos;</span>
                  <span className="text-[10px] md:text-xs text-slate-300 uppercase font-heading font-semibold block mt-1">
                    Có Mặt Bốc Hàng
                  </span>
                </div>
                <div className="bg-navy-950/60 p-4 rounded text-center border border-navy-800">
                  <span className="font-heading font-bold text-2xl md:text-3xl text-white block">10 TỶ</span>
                  <span className="text-[10px] md:text-xs text-orange-400 uppercase font-heading font-semibold block mt-1">
                    Bảo Hiểm Hàng Hóa
                  </span>
                </div>
              </div>

              <div className="bg-navy-950/40 p-3 rounded text-xs text-slate-300 flex items-center gap-2 border border-navy-800/60">
                <span className="material-symbols-outlined text-green-400 text-base shrink-0">check_circle</span>
                <span>100% xe chuẩn Euro 5, camera cabin hai chiều & xuất hóa đơn VAT trong ngày.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 02: COMPANY SNAPSHOT & LEGAL TRANSPARENCY ═══ */}
      <section className="w-full bg-slate-50 py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Hồ Sơ Pháp Lý & Thẩm Định
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Năng Lực Doanh Nghiệp Minh Bạch
              </h2>
            </div>
            <Link
              href="/trust"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
            >
              Chi Tiết Giấy Phép & Bảo Hiểm
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-navy-900 uppercase">Pháp Nhân Chính Quy</h3>
                  <span className="text-xs text-slate-500">Sở GTVT TP.HCM cấp phép</span>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded text-xs space-y-2 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">Giấy Phép Số:</span>
                  <span className="font-bold text-navy-900">41-GPVT/SGTVT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Mã Số Thuế:</span>
                  <span className="font-bold text-navy-900">0314892039</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kinh Nghiệm:</span>
                  <span className="font-bold text-orange-600">Từ năm 2014 (10+ Năm)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">domain_verification</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-navy-900 uppercase">Quy Mô Hợp Tác B2B</h3>
                  <span className="text-xs text-slate-500">Phục vụ các KCN trọng điểm</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-100">
                  <span className="font-heading font-bold text-2xl text-navy-900 block">850+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-heading font-semibold">Khách Hàng FDI/B2B</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-100">
                  <span className="font-heading font-bold text-2xl text-orange-600 block">99.4%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-heading font-semibold">Giao Đúng Hạn</span>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 text-white p-6 rounded-lg shadow-sm flex flex-col justify-between gap-4 border border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-navy-800 text-orange-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base uppercase text-white">3 Trung Tâm Bãi Xe</h3>
                  <span className="text-xs text-slate-400">Tổng diện tích 15,000m²</span>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-400 text-base">check</span>
                  Bình Dương (Sóng Thần) • TP.HCM (Cát Lái)
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-400 text-base">check</span>
                  Đà Nẵng (KCN Hòa Cầm) trung chuyển Bắc - Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 03: FLEET SHOWCASE WITH INTERACTIVE TAB FILTER ═══ */}
      <section className="w-full bg-white py-16 md:py-20" id="fleet-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Danh Mục Phương Tiện
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Đội Xe Trực Tiếp — Đa Tải Trọng
              </h2>
            </div>
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-heading font-bold uppercase tracking-wider rounded transition-colors"
            >
              Xem Toàn Bộ 52 Xe & Thông Số
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Tất Cả Loại Xe" },
              { id: "container", label: "Đầu Kéo Container" },
              { id: "mui-bat", label: "Xe Tải Mui Bạt" },
              { id: "cau-tu-hanh", label: "Xe Cẩu Tự Hành" },
              { id: "chuyen-dung", label: "Xe Thùng Kín & Lạnh" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFleetFilter(tab.id)}
                className={`px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  fleetFilter === tab.id
                    ? "bg-navy-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFleet.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-400 transition-all group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-navy-900/90 text-white text-[11px] font-heading font-bold uppercase px-2.5 py-0.5 rounded shadow">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 font-semibold text-orange-600">
                      {item.capacity}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.specs}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href="tel:0918456789"
                      className="flex-1 py-2 bg-slate-100 hover:bg-orange-500 hover:text-white text-navy-900 text-xs font-heading font-bold uppercase tracking-wider text-center rounded transition-colors"
                    >
                      Điều Xe Nhanh
                    </a>
                    <Link
                      href="/contact"
                      className="px-3 py-2 border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-heading font-semibold uppercase rounded"
                    >
                      Báo Giá
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 04: CORE SERVICE PILLARS ═══ */}
      <section className="w-full bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Dịch Vụ Nòng Cốt
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                4 Trụ Cột Vận Tải Chính
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
            >
              Chi Tiết Quy Trình Vận Chuyển
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: "front_loader",
                title: "Bao Xe Nguyên Chuyến (FTL)",
                desc: "Niêm phong kẹp chì, bốc hàng sau 30 phút, tối ưu cho đơn hàng lớn cần bảo mật và bàn giao đúng giờ.",
                sub: "Cam kết giờ giao tận nơi 100%",
              },
              {
                num: "02",
                icon: "sync_alt",
                title: "Ghép Hàng Định Tuyến",
                desc: "Chạy cố định hàng ngày tuyến Nam — Trung — Bắc, nhận gom hàng từ 500kg đến 5 tấn với chi phí tối ưu.",
                sub: "Lịch xuất bến 2 chuyến/ngày",
              },
              {
                num: "03",
                icon: "precision_manufacturing",
                title: "Di Dời & Cẩu Hạ Máy",
                desc: "Trọn gói tháo dỡ, chằng buộc và đưa máy CNC, dây chuyền công nghiệp vào đúng vị trí móng xưởng mới.",
                sub: "Bảo hiểm máy móc 100%",
              },
              {
                num: "04",
                icon: "directions_boat",
                title: "Kéo Container Cảng / ICD",
                desc: "Kéo vỏ, rút ruột container tại Cát Lái, Cái Mép, ICD Sóng Thần, Long Bình 24/7 theo lịch trình tàu.",
                sub: "Bám sát cut-off time tàu",
              },
            ].map((srv) => (
              <div
                key={srv.num}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between gap-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-orange-500 text-3xl">
                      {srv.icon}
                    </span>
                    <span className="font-heading font-bold text-xl text-slate-300">
                      {srv.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-heading font-bold text-orange-600 uppercase tracking-wide">
                  {srv.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 05: CARGO MATRIX & SAFETY STANDARDS ═══ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Tiêu Chuẩn Xếp Dỡ Hàng Hóa
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Chủng Loại Hàng Hóa Vận Hành
              </h2>
            </div>
            <Link
              href="/cargo"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
            >
              Quy Chuẩn Chằng Buộc An Toàn
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "build",
                name: "Máy Móc & Thép Cuộn",
                rule: "Đệm gỗ, cáp xích tăng đơ 10T",
                vehicle: "Moóc lùn / Cẩu tự hành",
              },
              {
                icon: "memory",
                name: "Linh Kiện & Vi Mạch",
                rule: "Seal chì niêm phong, sàn chống sốc",
                vehicle: "Xe thùng kín chống nước",
              },
              {
                icon: "ac_unit",
                name: "Thực Phẩm & Nông Sản",
                rule: "Kiểm soát nhiệt, Data Logger real-time",
                vehicle: "Xe lạnh -18°C ~ +10°C",
              },
              {
                icon: "inventory_2",
                name: "Hàng Tiêu Dùng & Hạt Nhựa",
                rule: "Bạt 3 lớp kép, đai dù siết pallet",
                vehicle: "Xe mui bạt 9.6M cao",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3"
              >
                <div className="w-10 h-10 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-navy-900 uppercase">{c.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{c.rule}</p>
                </div>
                <span className="text-[11px] font-heading font-semibold text-orange-600">{c.vehicle}</span>
              </div>
            ))}
          </div>

          {/* Safety Rule Warning Banner */}
          <div className="bg-red-50 border border-red-200 text-red-900 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-600 text-2xl shrink-0">warning</span>
              <p className="text-xs md:text-sm">
                <strong>Quy tắc an toàn:</strong> Tiên Phong tuyệt đối từ chối vận chuyển hóa chất cấm, chất cháy nổ không phép và hàng hóa không rõ nguồn gốc hóa đơn chứng từ theo quy định pháp luật.
              </p>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-heading font-bold uppercase rounded self-start sm:self-center shrink-0">
              NĐ 10/2020/NĐ-CP
            </span>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 06: STRATEGIC CORRIDORS & NETWORK ═══ */}
      <section className="w-full bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Hành Lang Vận Tải Chiến Lược
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Tuyến Đường Huyết Mạch & Tiến Độ
              </h2>
            </div>
            <Link
              href="/routes"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
            >
              Tra Cứu 42 Cụm KCN Kết Nối
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col">
              <div className="p-3.5 bg-navy-900 text-white flex items-center justify-between text-xs">
                <span className="font-heading font-bold uppercase">Mạng Lưới Vận Tải Đông Nam Bộ & QL 1A</span>
                <span className="font-heading font-bold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded">GPS ACTIVE</span>
              </div>
              <div
                className="w-full h-72 md:h-84 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNZAm9gpv2a5PYc9loW7v1VAdpTkKEmM2w_fyW2CDKvx2SmfO_F4dZVzhn6_pZaLpiMVPFTn1tZyPa6vzzN8NFqmqv8A78PVRUgiWxJ_V7pKvBR4uEqppUzr2uO8KPAjmLYCb_mj3OAsfMxyNUiHxlPrKdoyDGMdOrJ2h27H-EqI1NH-6VvHWrtVcArsU8ClwMdc5GMpFvAmHkQJgyxxkAB8zEEG-nr2BQS5Gf2GkIJqc2WZpGQ5_kFQ')",
                }}
              />
              <div className="p-4 bg-slate-100 flex flex-wrap items-center justify-between text-xs text-navy-900 font-semibold gap-2 border-t border-slate-200">
                <span>• 3 Trạm Trung Chuyển</span>
                <span>• 4 Cụm Cảng Biển Quốc Tế</span>
                <span>• 42 KCN Vệ Tinh Phủ Sóng</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  title: "KCN Vành Đai Đông Nam Bộ",
                  time: "1.5H — 3H",
                  badgeClass: "bg-orange-500 text-white",
                  route: "TP.HCM ⇄ Bình Dương ⇄ Đồng Nai ⇄ Bà Rịa Vũng Tàu ⇄ Long An",
                },
                {
                  title: "Trục Huyết Mạch Bắc — Nam",
                  time: "48H CAM KẾT",
                  badgeClass: "bg-navy-900 text-white",
                  route: "TP.HCM (Sóng Thần) ⇄ Đà Nẵng ⇄ Nghệ An ⇄ Hà Nội ⇄ Hải Phòng",
                },
                {
                  title: "Duyên Hải Miền Trung",
                  time: "28H ĐẾN NƠI",
                  badgeClass: "bg-blue-600 text-white",
                  route: "TP.HCM ⇄ Bình Thuận ⇄ Khánh Hòa ⇄ Bình Định ⇄ Đà Nẵng",
                },
                {
                  title: "Cảng Biển Cát Lái & Cái Mép",
                  time: "TRỰC CHIẾN 24/7",
                  badgeClass: "bg-green-600 text-white",
                  route: "Hạ bãi, rút cont, kiểm hóa, bám sát cut-off time tàu biển quốc tế",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-1.5"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-heading font-bold text-sm text-navy-900 uppercase">{c.title}</h4>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-heading font-bold ${c.badgeClass}`}>
                      {c.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{c.route}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 07: OPERATIONAL REALITY & PHOTO GALLERY ═══ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Hình Ảnh Hoạt Động Thực Tế
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Minh Chứng Năng Lực Thực Địa
              </h2>
            </div>
            <Link
              href="/operations"
              className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase text-orange-600 hover:text-navy-900 transition-colors"
            >
              Xem Toàn Bộ Thư Viện Ảnh
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group rounded-lg overflow-hidden shadow-sm bg-slate-100 h-64 md:h-72">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA"
                alt="Bãi xe Sóng Thần"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-heading font-bold text-orange-400 uppercase tracking-wider">
                  BÃI TRUNG TÂM BÌNH DƯƠNG
                </span>
                <span className="font-heading font-bold text-sm text-white">
                  15,000m² — Sức chứa 120 đầu kéo & rơ moóc
                </span>
              </div>
            </div>

            <div className="relative group rounded-lg overflow-hidden shadow-sm bg-slate-100 h-64 md:h-72">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ"
                alt="Cẩu hạ máy CNC"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-heading font-bold text-orange-400 uppercase tracking-wider">
                  DI DỜI NHÀ XƯỞNG
                </span>
                <span className="font-heading font-bold text-sm text-white">
                  Cẩu máy CNC 14 Tấn tại KCN VSIP 2
                </span>
              </div>
            </div>

            <div className="relative group rounded-lg overflow-hidden shadow-sm bg-slate-100 h-64 md:h-72">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuqO2LBRff0Jkiuf-3movRgoEM7vSzRshIOA1f_niWEJykdc07tW-5TlElFimkAgzaiwtFEyt0l6191dfVmqgiBkvVm0ueoqhvHKOJLC_WkrbS4WufsAa3wQR9EVHR8iF1G4yEKQ8qJGtVMzX7StN7bUmOR0sSNBpCL3IaicnWUyJ0ijJgXEJHS3e7IJ_jIDGLD52-2B71owM9l045mX0l06VFpO5GJmTFznUlJPgj-ycmt-CWRxTz2w"
                alt="Phòng điều độ GPS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-heading font-bold text-orange-400 uppercase tracking-wider">
                  ĐIỀU HÀNH 24/7
                </span>
                <span className="font-heading font-bold text-sm text-white">
                  Giám sát tốc độ & góc quay camera cabin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 08: TRUST & COMMITMENT (4 GOLDEN PROMISES) ═══ */}
      <section className="w-full bg-navy-950 text-white py-16 md:py-20 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-widest block">
              Cam Kết Thương Hiệu
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
              4 Cam Kết Vàng Bảo Vệ Doanh Nghiệp
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "shield_with_heart",
                title: "Bồi Thường 100%",
                desc: "Đền bù 100% giá trị thị trường nếu hàng hóa hư hỏng, thiếu hụt hoặc thất lạc do lỗi vận chuyển theo hợp đồng PVI.",
              },
              {
                icon: "alarm_on",
                title: "Đúng Hạn Tuyệt Đối",
                desc: "Giao nhận đúng khung giờ cam kết. Bồi thường 500.000 VNĐ cho mỗi giờ trễ chuyến không do thiên tai bất khả kháng.",
              },
              {
                icon: "no_transfer",
                title: "Không Bán Lại Tải",
                desc: "100% xe chạy mang thương hiệu Tiên Phong chính chủ. Tuyệt đối không bán tải sang bên thứ 3 làm mất kiểm soát.",
              },
              {
                icon: "receipt_long",
                title: "Hóa Đơn Minh Bạch",
                desc: "Báo giá trọn gói 1 lần, không phụ phí phát sinh vô lý. Hóa đơn VAT điện tử gửi về email kế toán ngay trong ngày.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-navy-900/80 p-6 rounded-lg border border-navy-800 space-y-3"
              >
                <div className="w-12 h-12 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-base uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 09: ONLINE QUOTE CALCULATOR ═══ */}
      <section className="w-full bg-slate-100 py-16 md:py-20" id="quote-calc">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <QuoteCalculator />
        </div>
      </section>

      {/* ═══ SECTION 10: TESTIMONIALS & PARTNERS ═══ */}
      <section className="w-full bg-white py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Đánh Giá Từ Khách Hàng B2B
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 uppercase tracking-tight mt-1">
                Sự Tin Tưởng Của 850+ Đối Tác
              </h2>
            </div>
            <div className="flex items-center gap-1 text-orange-500 text-sm font-bold">
              <span className="material-symbols-outlined text-xl">star</span>
              <span className="material-symbols-outlined text-xl">star</span>
              <span className="material-symbols-outlined text-xl">star</span>
              <span className="material-symbols-outlined text-xl">star</span>
              <span className="material-symbols-outlined text-xl">star</span>
              <span className="text-slate-600 text-xs ml-1">4.9 / 5.0 (230+ Đánh giá)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Tiên Phong phụ trách chuyển linh kiện chính xác cho nhà máy chúng tôi tại VSIP 1 hơn 3 năm nay. Điểm ưng ý nhất là tài xế có chứng chỉ an toàn, đúng giờ và GPS cập nhật rất chuẩn xác.",
                name: "Ông Trần Minh Khang",
                role: "Giám Đốc Vận Hành — Công ty Linh Kiện Điện Tử Hàn Quốc",
              },
              {
                quote:
                  "Đợt chuyển xưởng sang Đồng Nai gồm 6 máy phay CNC siêu trọng. Đội xe cẩu của Tiên Phong phối hợp với kỹ sư tháo dỡ rất nhịp nhàng, 100% bàn giao móng xưởng an toàn tuyệt đối.",
                name: "Bà Lê Thu Hương",
                role: "Trưởng Phòng Mua Hàng — Cơ Khí Chính Xác Long Thành",
              },
              {
                quote:
                  "Điều xe rất nhanh. Nhiều khi cần cont gấp lúc 11h đêm để kịp giờ tàu Cát Lái, gọi hotline là có xe ngay sau 25 phút. Hóa đơn chứng từ xuất rất nhanh, kế toán rất thuận tiện.",
                name: "Ông Nguyễn Văn Dũng",
                role: "Chủ Quản Logistics — Xuất Nhập Khẩu Nông Sản Miền Đông",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-orange-500 text-3xl">format_quote</span>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <h4 className="font-heading font-bold text-xs uppercase text-navy-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11: FINAL CONVERSION CTA ═══ */}
      <section className="w-full bg-navy-900 text-white py-16 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-heading font-bold uppercase tracking-wider">
            Đáp Ứng Nhu Cầu Vận Tải Ngay Hôm Nay
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight leading-tight">
            Cần Điều Xe Khẩn Cấp Hoặc Nhận Báo Giá Hợp Đồng Dài Hạn?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Hơn 52 đầu xe tại các bãi Sóng Thần, Cát Lái và Đà Nẵng luôn túc trực. Đội ngũ điều phối viên sẵn sàng giải đáp thắc mắc và gửi báo giá trong vòng 15 phút.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:0918456789"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded transition-all shadow-xl shadow-orange-500/25"
            >
              <span className="material-symbols-outlined text-xl">phone_in_talk</span>
              Hotline 24/7: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-navy-900 font-heading font-bold text-sm uppercase tracking-wider rounded transition-all"
            >
              <span className="material-symbols-outlined text-xl">request_quote</span>
              Gửi Yêu Cầu Báo Giá 15 Phút
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
