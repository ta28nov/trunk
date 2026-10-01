"use client";
import { useState } from "react";
import Link from "next/link";
import QuoteCalculator from "./components/QuoteCalculator";
import MarqueeTicker from "./components/MarqueeTicker";
import VideoModal from "./components/VideoModal";

const FLEET_SHOWCASE = [
  {
    id: "cont-40",
    name: "Đầu Kéo Container 40ft / 45ft",
    badge: "14 Đầu Kéo",
    payload: "32.0 Tấn",
    specs: "Kéo cont Cát Lái, Cái Mép & liên tỉnh",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    route: "Cát Lái ⇄ KCN Đông Nam Bộ",
  },
  {
    id: "truck-15t",
    name: "Xe Tải Mui Bạt 9.6M (15 Tấn)",
    badge: "18 Xe Chạy Bắc — Nam",
    payload: "15 Tấn (57 m³)",
    specs: "Thùng dài 9.6m • 2 chuyến xuất bến / ngày",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    route: "TP.HCM ⇄ Đà Nẵng ⇄ Hà Nội (48H)",
  },
  {
    id: "crane-10t",
    name: "Xe Cẩu Tự Hành 5T — 15T",
    badge: "8 Xe Bãi Nam",
    payload: "Sức nâng 10 Tấn",
    specs: "Cẩu hạ máy CNC, di dời nhà xưởng",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
    route: "KCN VSIP, Amata, Sóng Thần",
  },
  {
    id: "box-seal",
    name: "Xe Thùng Kín Khóa Seal Chì",
    badge: "12 Xe Thùng Kín",
    payload: "5T — 10 Tấn",
    specs: "Bửng nâng thủy lực, chống nước 100%",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    route: "Linh kiện điện tử & hàng giá trị cao",
  },
  {
    id: "reefer-tk",
    name: "Xe Đông Lạnh Thermo King",
    badge: "Kiểm Soát Nhiệt",
    payload: "-18°C ~ +10°C",
    specs: "Data Logger tự động xuất file nhiệt độ",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    route: "Thực phẩm đông lạnh, nông sản xuất khẩu",
  },
  {
    id: "lowbed-50t",
    name: "Moóc Lùn Siêu Trọng 50T",
    badge: "Quá Khổ Quá Tải",
    payload: "50.0 Tấn",
    specs: "Giấy phép lưu hành Cục Đường Bộ, xe hộ tống",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
    route: "Máy công trình, cấu kiện điện gió",
  },
];

export default function Home() {
  const [fleetFilter, setFleetFilter] = useState("all");
  const [videoOpen, setVideoOpen] = useState(false);

  const filteredFleet = FLEET_SHOWCASE.filter((item) => {
    if (fleetFilter === "all") return true;
    if (fleetFilter === "container") return item.id === "cont-40" || item.id === "lowbed-50t";
    if (fleetFilter === "mui-bat") return item.id === "truck-15t";
    if (fleetFilter === "cau-tu-hanh") return item.id === "crane-10t";
    if (fleetFilter === "chuyen-dung") return item.id === "box-seal" || item.id === "reefer-tk";
    return true;
  });

  return (
    <div className="flex flex-col w-full bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      {/* ════════════════════════════════════════════════════════════════
          AWWWARDS HERO SECTION (Cinematic, Video Trigger, Living UI)
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-between pt-8 md:pt-14 pb-12 px-4 md:px-8 overflow-hidden bg-navy-950">
        {/* Background Ambient Imagery & Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85"
            alt="Đội xe vận tải đường cao tốc"
            className="w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105 animate-pulse-dot"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Top Badges */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-navy-700/80 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-orange-400">
              48/52 Xe Đang Lăn Bánh
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-300 font-medium">
              Giám Sát GPS 24/7 Toàn Quốc
            </span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/60 border border-navy-800 text-xs text-slate-400">
            <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
            <span>Bảo Hiểm Hàng Hóa PVI 10 Tỷ VNĐ</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 md:py-20">
          <div className="max-w-4xl space-y-6">
            <span className="badge-pill bg-orange-500/20 text-orange-400 border border-orange-500/30">
              Hồ Sơ Năng Lực Trực Tuyến • B2B Logistics
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight leading-[1.05] text-white">
              VẬN TẢI TIÊN PHONG
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1 md:mt-2">
                ĐỘI XE TRỰC TIẾP 100%
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-xl font-body leading-relaxed max-w-2xl font-light">
              Chuyên vận tải hàng công nghiệp, máy móc cơ khí & container cảng biển. Sở hữu 52 đầu xe chính chủ, 3 bãi xe 15.000m² tại Bình Dương, Cát Lái và Đà Nẵng.
            </p>

            {/* CTAs + Video Trigger */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="tel:0918456789"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                Gọi Điều Phối: 0918.456.789
              </a>

              {/* Video Play Button */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="px-6 py-4 bg-navy-900/80 hover:bg-navy-800 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-navy-700/80 hover:border-slate-500 transition-all hover:-translate-y-1 flex items-center gap-3 backdrop-blur-md group"
              >
                <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-base">play_arrow</span>
                </span>
                <span>Xem Phim Thực Địa (1:30)</span>
              </button>

              <Link
                href="#fleet-section"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors ml-2"
              >
                Khám Phá Đội Xe
                <span className="material-symbols-outlined text-sm">south</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom 3 Highlight Metrics */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-navy-800/80 pt-6">
          <div className="flex items-center gap-4 p-3 bg-navy-900/40 rounded-xl border border-navy-800/60 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-3xl md:text-4xl text-white">52+</span>
            <div className="text-xs">
              <span className="font-heading font-bold text-orange-400 uppercase block">Đầu Xe Trực Thuộc</span>
              <span className="text-slate-400">Không bán lại tải trung gian</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 bg-navy-900/40 rounded-xl border border-navy-800/60 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-3xl md:text-4xl text-orange-500">≤30&apos;</span>
            <div className="text-xs">
              <span className="font-heading font-bold text-white uppercase block">Có Mặt Bốc Hàng</span>
              <span className="text-slate-400">Tại Bình Dương, TP.HCM, Đồng Nai</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 bg-navy-900/40 rounded-xl border border-navy-800/60 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-3xl md:text-4xl text-white">10 TỶ</span>
            <div className="text-xs">
              <span className="font-heading font-bold text-green-400 uppercase block">Bảo Hiểm Hàng Hóa PVI</span>
              <span className="text-slate-400">Bồi thường 100% nếu có sự cố</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LIVE MARQUEE TICKER ═══ */}
      <MarqueeTicker />

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION: VISUAL OPERATIONS DOCUMENTARY (Photos & Video)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="text-xs font-heading font-bold text-orange-500 uppercase tracking-widest block">
              Minh Chứng Năng Lực Thực Tế
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              Thư Viện Thực Địa — Người Thật, Xe Thật
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">play_circle</span>
            Phát Video Toàn Cảnh
          </button>
        </div>

        {/* Bento Grid with 5 Visual Photo Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Bento 1: Large Yard Photo (8 Cols) */}
          <div className="md:col-span-8 bento-card-dark p-0 min-h-[320px] md:min-h-[400px] relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Kho bãi trung tâm logistics Sóng Thần"
              className="w-full h-full object-cover img-hover-zoom absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span className="badge-pill bg-orange-500 text-white w-fit mb-2">
                15.000m² Kho Bãi
              </span>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white uppercase">
                Tổng Kho Bãi Xe Trung Tâm Sóng Thần
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-xl">
                Sức chứa 120 đầu kéo & rơ-moóc tại Dĩ An — Bình Dương. Có xưởng bảo dưỡng cơ khí riêng kiểm định xe trước mỗi ca chạy.
              </p>
            </div>
          </div>

          {/* Bento 2: GPS Control Room Photo (4 Cols) */}
          <div className="md:col-span-4 bento-card-dark p-0 min-h-[320px] md:min-h-[400px] relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80"
              alt="Phòng điều độ trung tâm GPS"
              className="w-full h-full object-cover img-hover-zoom absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-6 flex flex-col justify-end">
              <span className="badge-pill bg-green-500 text-white w-fit mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live Telemetry 24/7
              </span>
              <h3 className="font-heading font-bold text-base md:text-lg text-white uppercase">
                Phòng Điều Độ Giám Sát Hành Trình
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Theo dõi tọa độ thực tế, cảnh báo tốc độ và góc quay camera cabin truyền về Tổng cục Đường bộ.
              </p>
            </div>
          </div>

          {/* Bento 3: Crane Rigging CNC (4 Cols) */}
          <div className="md:col-span-4 bento-card-dark p-0 min-h-[260px] relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1000&q=80"
              alt="Cẩu hạ máy CNC công nghiệp"
              className="w-full h-full object-cover img-hover-zoom absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent p-6 flex flex-col justify-end">
              <span className="badge-pill bg-navy-900 text-orange-400 border border-navy-700 w-fit mb-1">
                Di Dời Nhà Xưởng
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Cẩu Máy CNC 14 Tấn Vào Xưởng VSIP 2
              </h3>
            </div>
          </div>

          {/* Bento 4: Container Port Operations (4 Cols) */}
          <div className="md:col-span-4 bento-card-dark p-0 min-h-[260px] relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
              alt="Kéo container tại Cảng Cát Lái"
              className="w-full h-full object-cover img-hover-zoom absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent p-6 flex flex-col justify-end">
              <span className="badge-pill bg-navy-900 text-orange-400 border border-navy-700 w-fit mb-1">
                Cảng Biển Quốc Tế
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Kéo Container Cát Lái & Cái Mép 24/7
              </h3>
            </div>
          </div>

          {/* Bento 5: Night Expressway Transit (4 Cols) */}
          <div className="md:col-span-4 bento-card-dark p-0 min-h-[260px] relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1000&q=80"
              alt="Chuyến xe đêm Bắc Nam"
              className="w-full h-full object-cover img-hover-zoom absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent p-6 flex flex-col justify-end">
              <span className="badge-pill bg-navy-900 text-orange-400 border border-navy-700 w-fit mb-1">
                Xuất Bến Ban Đêm
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Chuyến Xuất Bến 02:00 Sáng Tuyến Bắc — Nam
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION: INTERACTIVE FLEET SHOWCASE (6 Fleet Cards)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-navy-800" id="fleet-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="text-xs font-heading font-bold text-orange-500 uppercase tracking-widest block">
              Hệ Thống Phương Tiện Chính Chủ
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              Đội Xe Trực Chiến — Đa Tải Trọng
            </h2>
          </div>

          {/* Filter Pills with Micro-animation */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "Tất Cả 52 Xe" },
              { id: "container", label: "Đầu Kéo Container" },
              { id: "mui-bat", label: "Xe Mui Bạt 9.6M" },
              { id: "cau-tu-hanh", label: "Xe Cẩu Tự Hành" },
              { id: "chuyen-dung", label: "Thùng Kín & Lạnh" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFleetFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                  fleetFilter === tab.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                    : "bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-700/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Visual Fleet Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              className="bento-card-dark p-0 flex flex-col group overflow-hidden border border-navy-800 hover:border-slate-600 transition-all"
            >
              <div className="relative h-56 w-full overflow-hidden bg-navy-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover img-hover-zoom"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="badge-pill bg-navy-950/90 text-orange-400 border border-navy-700 backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="badge-pill bg-orange-500 text-white font-bold shadow-md">
                    {item.payload}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-base md:text-lg text-white uppercase group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.specs}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">route</span>
                    <span>{item.route}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800 flex items-center gap-2">
                  <a
                    href="tel:0918456789"
                    className="flex-1 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider text-center rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    Điều Xe Này
                  </a>
                  <Link
                    href="/fleet"
                    className="px-3.5 py-2.5 bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700 text-xs font-heading font-semibold uppercase rounded-lg transition-colors"
                  >
                    Thông Số
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION: 4 CORE SERVICE PILLARS
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-navy-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="text-xs font-heading font-bold text-orange-500 uppercase tracking-widest block">
              Dịch Vụ Vận Tải Chuyên Nghiệp
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              4 Trụ Cột Vận Hành Toàn Diện
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-orange-400 hover:text-white transition-colors"
          >
            Chi Tiết Quy Trình Vận Chuyển
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              icon: "front_loader",
              title: "Bao Xe Nguyên Chuyến (FTL)",
              desc: "Niêm phong kẹp chì, xe có mặt sau 30 phút, chạy thẳng không ghép hàng.",
              tag: "Cam kết giờ giao",
            },
            {
              num: "02",
              icon: "sync_alt",
              title: "Ghép Hàng Định Tuyến",
              desc: "2 chuyến xuất bến mỗi ngày, nhận gom từ 500kg đến 5 tấn dọc Quốc lộ 1A.",
              tag: "Lịch chạy cố định",
            },
            {
              num: "03",
              icon: "precision_manufacturing",
              title: "Di Dời & Cẩu Hạ Máy",
              desc: "Xe cẩu 5T—15T, tháo dỡ, chằng buộc và đưa máy CNC vào đúng vị trí móng xưởng.",
              tag: "Bảo hiểm máy 100%",
            },
            {
              num: "04",
              icon: "directions_boat",
              title: "Kéo Container Cảng / ICD",
              desc: "Kéo vỏ, rút ruột tại Cát Lái, Cái Mép, ICD Sóng Thần bám sát giờ tàu.",
              tag: "Trực chiến 24/7",
            },
          ].map((srv) => (
            <div
              key={srv.num}
              className="bento-card-dark p-6 md:p-8 flex flex-col justify-between group border border-navy-800 hover:border-slate-600 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-navy-700 group-hover:text-slate-500 transition-colors">
                    {srv.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg text-white uppercase group-hover:text-orange-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-navy-800 flex items-center justify-between">
                <span className="text-[11px] font-heading font-semibold text-orange-400 uppercase tracking-wide">
                  {srv.tag}
                </span>
                <span className="material-symbols-outlined text-sm text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION: 4 GOLDEN PROMISES & LEGAL TRANSPARENCY
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-navy-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-widest block">
              Bảo Vệ Quyền Lợi Khách Hàng
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              4 Cam Kết Vàng Bảo Vệ Doanh Nghiệp
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mọi cam kết đều được đưa trực tiếp vào điều khoản hợp đồng kinh tế. Chúng tôi chịu trách nhiệm bằng uy tín thương hiệu và nguồn vốn doanh nghiệp.
            </p>

            <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-white font-heading font-bold uppercase">
                <span className="material-symbols-outlined text-green-400">verified</span>
                Giấy phép kinh doanh vận tải số 41-GPVT/SGTVT
              </div>
              <p className="text-slate-400">Sở GTVT TP.HCM cấp phép • Mã số thuế: 0314892039</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "shield_with_heart",
                title: "Bồi Thường 100%",
                desc: "Đền bù 100% giá trị thị trường nếu hàng hóa hư hỏng, thiếu hụt theo hợp đồng bảo hiểm PVI 10 Tỷ VNĐ.",
              },
              {
                icon: "alarm_on",
                title: "Đúng Hạn Tuyệt Đối",
                desc: "Cam kết giờ giao nhận. Bồi thường 500.000đ cho mỗi giờ trễ chuyến không do thiên tai bất khả kháng.",
              },
              {
                icon: "no_transfer",
                title: "Không Bán Lại Tải",
                desc: "100% xe chính chủ thương hiệu Tiên Phong. Tuyệt đối không bán tải sang bên thứ 3 làm mất kiểm soát.",
              },
              {
                icon: "receipt_long",
                title: "Hóa Đơn Minh Bạch",
                desc: "Báo giá trọn gói không phát sinh phụ phí vô lý. Hóa đơn VAT điện tử gửi kế toán ngay trong ngày.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-navy-900/50 p-6 rounded-2xl border border-navy-800 hover:border-slate-600 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-white uppercase">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENTO SECTION: ONLINE QUOTE CALCULATOR (Light Contrast Bento)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-navy-800" id="quote-calc">
        <QuoteCalculator />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          AWWWARDS CALL-TO-ACTION BANNER (High Impact Conversion)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="bento-card-dark p-8 md:p-14 text-center relative overflow-hidden border border-navy-700 shadow-2xl">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fe6b00_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="badge-pill bg-orange-500/20 text-orange-400 border border-orange-500/30">
              Trực Ban 24/7/365
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              CẦN ĐIỀU XE GẤP HOẶC BÁO GIÁ HỢP ĐỒNG THÁNG?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Hơn 52 đầu xe tại Sóng Thần, Cát Lái và Đà Nẵng luôn túc trực nhận lệnh. Nhận báo giá chính xác trong vòng 15 phút.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="tel:0918456789"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                Hotline 24/7: 0918.456.789
              </a>
              <a
                href="https://zalo.me/0918456789"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Chat Zalo Với Điều Hành
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-navy-700 transition-all hover:-translate-y-1"
              >
                Điền Form Báo Giá
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
