"use client";
import { useState } from "react";
import Link from "next/link";
import HeroVideo from "./components/HeroVideo";
import VideoModal from "./components/VideoModal";
import InteractiveServices from "./components/InteractiveServices";
import ProcessStorytelling from "./components/ProcessStorytelling";
import CounterStat from "./components/CounterStat";

const CARGO_CATEGORIES = [
  {
    name: "Máy Móc & Cơ Khí Chính Xác",
    desc: "Máy phay CNC, máy dập, dây chuyền lắp ráp tự động. Kê đệm gỗ dăm và xích tăng đơ chịu lực 10 tấn.",
  },
  {
    name: "Thép Cuộn & Cấu Kiện Xây Dựng",
    desc: "Thép cuộn mạ kẽm, dầm thép định hình. Máng gỗ chữ V chuyên dụng chống lăn và xích siết tâm cuộn.",
  },
  {
    name: "Hàng Pallet & Hàng Tiêu Dùng",
    desc: "Bao bì, hạt nhựa, thực phẩm đóng gói. Đai dù bản 50mm chằng siết pallet và bạt phủ 3 lớp kín nước 100%.",
  },
  {
    name: "Linh Kiện Điện Tử Vi Mạch",
    desc: "Thiết bị bán dẫn, bảng mạch vi điện tử. Xe thùng kín bửng nâng, đệm sàn cao su giảm chấn và khóa seal chì.",
  },
  {
    name: "Hàng Hóa Xuất Nhập Khẩu",
    desc: "Container hàng may mặc, đồ gỗ xuất khẩu và nguyên phụ liệu nhập khẩu hạ bãi bám sát lịch tàu biển.",
  },
  {
    name: "Thiết Bị Siêu Trường Siêu Trọng",
    desc: "Biến áp trạm điện, lò hơi công nghiệp, bồn áp lực. Vận chuyển bằng rơ-moóc lùn 3 trục có xe dẫn đường.",
  },
];

const FLEET_HIGHLIGHTS = [
  {
    name: "Đầu Kéo Container Hyundai Xcient 440HP",
    payload: "32 TẤN",
    capacity: "Moóc xương & sàn 40ft / 45ft",
    usage: "Kéo container Cát Lái, Cái Mép, ICD Sóng Thần và KCN liên tỉnh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
  },
  {
    name: "Xe Tải Thùng Mui Bạt 9.6M Hino 15T",
    payload: "15 TẤN",
    capacity: "Thùng dài 9.6m • Thể tích 60 m³",
    usage: "Tuyến trục Bắc — Nam, chở hàng tiêu dùng, hạt nhựa, bao bì đóng kiện",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
  },
  {
    name: "Xe Cẩu Tự Hành 10T Soosan / Unic",
    payload: "CẨU 10T / CHỞ 12T",
    capacity: "Cần vươn 20.5m • Thùng xe dài 8.5m",
    usage: "Cẩu lắp đặt máy móc CNC, di dời thiết bị nhà xưởng tại các KCN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
  },
];

const CLIENTS = [
  { name: "Tập Đoàn Hoa Sen", field: "Tôn & Thép Cuộn Công Nghiệp" },
  { name: "Thép Pomina", field: "Sắt Thép & Kết Cấu Xây Dựng" },
  { name: "Vinamilk", field: "Hàng Tiêu Dùng & Nguyên Liệu" },
  { name: "Nhựa Bình Minh", field: "Ống Nhựa & Phụ Kiện Vật Tư" },
  { name: "KCN VSIP 1 & 2", field: "Doanh Nghiệp FDI Sản Xuất" },
  { name: "Cảng Tân Cảng — Cát Lái", field: "Container Xuất Nhập Khẩu" },
];

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white overflow-hidden">
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 01: HERO WITH AMBIENT VIDEO & CHOREOGRAPHED ENTRANCE (§07, §08)
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Real-world Motion Video Background */}
        <HeroVideo onOpenDoc={() => setVideoOpen(true)} />

        {/* Hero Choreographed Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block hero-animate-1">
              VẬN TẢI THƯƠNG MẠI &amp; CÔNG NGHIỆP ĐƯỜNG BỘ
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.95] max-w-5xl hero-animate-2">
              VẬN CHUYỂN
              <span className="block text-white">NHỮNG ĐIỀU</span>
              <span className="block text-[#FF6A00]">QUAN TRỌNG.</span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-[#E5E5E5] font-light leading-relaxed max-w-2xl hero-animate-3">
            Vận chuyển hàng hóa công nghiệp an toàn và chuẩn xác. 52 phương tiện chính chủ, bãi xe trung tâm 15.000m² tại Sóng Thần và bảo hiểm hàng hóa PVI 10 tỷ VNĐ.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 hero-animate-4">
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 sm:py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>YÊU CẦU BÁO GIÁ TRONG 15 PHÚT</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="btn-arrow-hover px-8 py-4 sm:py-5 bg-transparent hover:bg-white/10 text-white border border-[#2A2A2A] hover:border-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>XEM PHIM TƯ LIỆU ĐỘI XE [ ▶ ]</span>
            </button>
          </div>

          {/* Quick Metrics Strip with Animated Number Counters (§10) */}
          <div className="pt-12 border-t border-[#1F1F1F] grid grid-cols-2 md:grid-cols-4 gap-6 text-left hero-animate-4">
            <CounterStat
              target={52}
              suffix=" XE"
              label="Chính Chủ 100%"
              sublabel="Không bán thầu trung gian"
              accent={true}
            />
            <CounterStat
              target={15000}
              suffix=" M²"
              label="Bãi Xe Sóng Thần"
              sublabel="KCN Sóng Thần 1, Dĩ An"
              accent={false}
            />
            <CounterStat
              target={10}
              suffix=" TỶ VNĐ"
              label="Bảo Hiểm Hàng Hóa PVI"
              sublabel="Bảo lãnh mọi chuyến đi"
              accent={true}
            />
            <CounterStat
              target={48}
              suffix=" GIỜ"
              label="Cam Kết Bắc — Nam"
              sublabel="2 tài xế luân phiên"
              accent={false}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 02: INTRODUCTION (Large Editorial Typography)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-6 reveal-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              NĂNG LỰC CỐT LÕI
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.05] text-white">
              CHÚNG TÔI VẬN CHUYỂN HÀNG HÓA XUYÊN SUỐT MỌI CỰ LY.
            </h2>
            <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
              Từ các chuyến hàng container xuất nhập khẩu tại Cảng Cát Lái và Cái Mép đến các dự án di dời dây chuyền máy móc xưởng tại các KCN Bình Dương, Đồng Nai, Tiên Phong làm chủ hạ tầng bãi xe, thợ máy và công nghệ giám sát lộ trình để đảm bảo chuỗi cung ứng của bạn không bao giờ bị đứt đoạn.
            </p>
          </div>

          <div className="lg:col-span-4 p-8 bg-[#141414] border border-[#2A2A2A] space-y-6 reveal-right card-hover">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#737373] font-heading font-semibold block">
                Giấy Phép Sở GTVT
              </span>
              <span className="font-heading font-black text-xl text-white block">
                41-GPVT/SGTVT
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#737373] font-heading font-semibold block">
                Mã Số Doanh Nghiệp
              </span>
              <span className="font-heading font-black text-xl text-[#FF6A00] block">
                0314892039
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#737373] font-heading font-semibold block">
                Vốn Điều Lệ Thực Góp
              </span>
              <span className="font-heading font-bold text-base text-white block">
                20.000.000.000 VNĐ
              </span>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="btn-arrow-hover text-xs font-heading font-bold uppercase tracking-wider text-[#FF6A00] hover:underline block"
              >
                <span>XEM HỒ SƠ DOANH NGHIỆP</span>
                <span className="arrow-move ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 03: INTERACTIVE SERVICES SHOWCASE (§14, §15)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B] border-t border-[#DDD9CF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              DỊCH VỤ TRỌNG TÂM
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight text-[#0B0B0B]">
              GIẢI PHÁP VẬN TẢI THIẾT KẾ CHO DOANH NGHIỆP
            </h2>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Nhấp vào từng dịch vụ để mở rộng thông số kỹ thuật, phương tiện phù hợp, phạm vi vận hành và quy trình an toàn.
            </p>
          </div>

          {/* Interactive Expandable Services Accordion with Scroll Reveal */}
          <div className="reveal-on-scroll delay-150">
            <InteractiveServices />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 04: OPERATIONAL VIDEO FEATURE (§24, §25)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#070707] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F1F1F] pb-8 reveal-on-scroll">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
                BẰNG CHỨNG THỰC ĐỊA
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                PHIM TƯ LIỆU ĐỘI XE &amp; BÃI XE SÓNG THẦN
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                Ghi hình chân thực hoạt động xếp dỡ máy móc, điều hành bãi xe 15.000m² và vận hành kéo container tại Cảng Cát Lái.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="btn-arrow-hover px-6 py-3.5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
            >
              <span>MỞ PHIM TOÀN MÀN HÌNH [ ▶ ]</span>
              <span className="arrow-move ml-1.5 font-bold">→</span>
            </button>
          </div>

          {/* Embedded Industrial Video Showcase */}
          <div className="relative aspect-video w-full bg-[#141414] border border-[#2A2A2A] overflow-hidden group shadow-2xl reveal-scale delay-200 card-hover">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover filter brightness-90 img-editorial"
            >
              <source src="/videos/traffic-hero.webm" type="video/webm" />
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/transcoded/9/90/Jane_M._Byrne_Interchange_Traffic.webm/Jane_M._Byrne_Interchange_Traffic.webm.720p.vp9.webm"
                type="video/webm"
              />
            </video>

            {/* Video Technical Telemetry Overlay */}
            <div className="absolute top-4 left-4 bg-[#0B0B0B]/85 border border-[#2A2A2A] px-3 py-1.5 text-[11px] font-mono text-white backdrop-blur-sm">
              <span className="text-[#FF6A00] font-bold">● TRỰC TIẾP:</span> BÃI XE TRUNG TÂM SÓNG THẦN 1
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#0B0B0B]/90 border border-[#2A2A2A] backdrop-blur-md text-xs">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-[#737373] uppercase block font-mono">CHỦNG LOẠI:</span>
                  <span className="text-white font-bold">52 Đầu kéo &amp; Tải nặng</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#737373] uppercase block font-mono">ĐỊA BÀN:</span>
                  <span className="text-white font-bold">Đông Nam Bộ &amp; Bắc Nam</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#737373] uppercase block font-mono">GIÁM SÁT:</span>
                  <span className="text-[#FF6A00] font-bold">GPS Vệ Tinh 24/7</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="text-[#FF6A00] font-heading font-bold uppercase hover:underline"
              >
                Xem đầy đủ có âm thanh →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 05: CARGO / CAPABILITIES (What We Move)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
                DANH MỤC HÀNG HÓA
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight text-white">
                CHÚNG TÔI CHUYÊN CHỞ NHỮNG GÌ
              </h2>
              <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
                Mọi nhóm hàng hóa được phân bổ phương tiện chuyên biệt, dụng cụ chằng buộc kỹ thuật và giải pháp bảo hiểm tối đa trên đường dài.
              </p>
            </div>

            <Link
              href="/cargo"
              className="btn-arrow-hover text-xs font-heading font-bold uppercase tracking-wider text-[#FF6A00] hover:underline whitespace-nowrap"
            >
              <span>Xem bảng tra cứu &amp; đề xuất xe</span>
              <span className="arrow-move ml-1">→</span>
            </Link>
          </div>

          {/* Cards with Staggered Scroll Animations and Hover Lifts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARGO_CATEGORIES.map((cargo, idx) => {
              const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
              return (
                <div
                  key={idx}
                  className={`p-8 bg-[#141414] border border-[#2A2A2A] space-y-4 reveal-on-scroll card-hover ${delays[idx % delays.length]}`}
                >
                  <span className="font-heading font-black text-xl text-[#FF6A00] block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    {cargo.name}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    {cargo.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 06: COVERAGE / ROUTES (Network Visualization)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              MẠNG LƯỚI TUYẾN ĐƯỜNG
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight text-white">
              HÀNH LANG VẬN HÀNH TRỌNG ĐIỂM
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
              Lộ trình được số hóa và giám sát hành trình GPS liên tục, bảo đảm thời gian chạy xe bám sát cam kết hợp đồng.
            </p>
          </div>

          {/* Interactive Route Corridor Cards with Hover Lift */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-[#0B0B0B] border border-[#2A2A2A] space-y-6 reveal-left card-hover">
              <div className="flex items-baseline justify-between border-b border-[#1F1F1F] pb-4">
                <h3 className="font-heading font-black text-xl text-white uppercase">
                  Hành Lang Vùng Đông Nam Bộ
                </h3>
                <span className="text-xs font-heading font-bold text-[#FF6A00] uppercase">
                  1.5H — 3.5H
                </span>
              </div>
              <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                Tâm điểm hoạt động với bãi xe 15.000m² tại KCN Sóng Thần (Dĩ An). Điều xe sau 30 phút, kết nối thông suốt giữa TP.HCM, Bình Dương, Đồng Nai, Bà Rịa Vũng Tàu và Long An.
              </p>
              <div className="space-y-2 text-xs font-mono text-[#E5E5E5]">
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>KCN Sóng Thần → KCN VSIP 1 &amp; 2</span>
                  <span className="text-[#FF6A00]">1 — 1.5 Giờ</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>TP.HCM → KCN Amata / Biên Hòa 2</span>
                  <span className="text-[#FF6A00]">1.5 — 2 Giờ</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>Bình Dương → Cảng Quốc Tế Cái Mép</span>
                  <span className="text-[#FF6A00]">2.5 — 3 Giờ</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-[#0B0B0B] border border-[#2A2A2A] space-y-6 reveal-right card-hover">
              <div className="flex items-baseline justify-between border-b border-[#1F1F1F] pb-4">
                <h3 className="font-heading font-black text-xl text-white uppercase">
                  Trục Huyết Mạch Quốc Lộ 1A: Bắc — Nam
                </h3>
                <span className="text-xs font-heading font-bold text-[#FF6A00] uppercase">
                  44H — 48H CAM KẾT
                </span>
              </div>
              <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                Chạy xoay vòng liên tục giữa hai đầu đất nước. Bố trí 2 tài xế thay phiên lái an toàn và có trạm trung chuyển đổi ca tại KCN Hòa Cầm (Đà Nẵng).
              </p>
              <div className="space-y-2 text-xs font-mono text-[#E5E5E5]">
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>TP.HCM → Đà Nẵng (950 km)</span>
                  <span className="text-[#FF6A00]">24 — 28 Giờ</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>TP.HCM → Hà Nội (1.720 km)</span>
                  <span className="text-[#FF6A00]">44 — 48 Giờ</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>TP.HCM → Hải Phòng / Bắc Ninh (1.780 km)</span>
                  <span className="text-[#FF6A00]">46 — 50 Giờ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center reveal-on-scroll delay-200">
            <Link
              href="/routes"
              className="btn-arrow-hover inline-block px-8 py-4 bg-transparent hover:bg-white text-white hover:text-black border border-[#2A2A2A] hover:border-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>XEM SƠ ĐỒ TRỰC QUAN HÀNH TRÌNH CHI TIẾT</span>
              <span className="arrow-move ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 07: FLEET HIGHLIGHTS WITH STAGGERED REVEALS & HOVER LIFT
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
                HỆ THỐNG PHƯƠNG TIỆN
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight text-white">
                ĐỘI XE TRỰC CHIẾN
              </h2>
            </div>
            <Link
              href="/fleet"
              className="btn-arrow-hover text-xs font-heading font-bold uppercase tracking-wider text-[#FF6A00] hover:underline"
            >
              <span>XEM TOÀN BỘ 52 ĐẦU XE</span>
              <span className="arrow-move ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET_HIGHLIGHTS.map((truck, idx) => {
              const delays = ["delay-100", "delay-200", "delay-300"];
              return (
                <div
                  key={idx}
                  className={`bg-[#141414] border border-[#2A2A2A] overflow-hidden flex flex-col justify-between reveal-on-scroll card-hover ${delays[idx]}`}
                >
                  <div className="relative h-64 w-full overflow-hidden border-b border-[#2A2A2A]">
                    <img
                      src={truck.image}
                      alt={truck.name}
                      className="w-full h-full object-cover img-editorial"
                    />
                    <div className="absolute top-4 right-4 bg-[#0B0B0B] border border-[#2A2A2A] px-3 py-1.5 font-heading font-black text-xs text-[#FF6A00]">
                      {truck.payload}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-white uppercase">
                        {truck.name}
                      </h3>
                      <p className="text-xs text-[#FF6A00] font-medium">
                        {truck.capacity}
                      </p>
                      <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                        {truck.usage}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1F1F1F]">
                      <Link
                        href="/fleet"
                        className="btn-arrow-hover text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-[#FF6A00] transition-colors block"
                      >
                        <span>Thông số kỹ thuật chi tiết</span>
                        <span className="arrow-move ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 08: PROCESS STORYTELLING WITH STICKY VISUAL (§22, §23)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B] border-t border-[#DDD9CF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              QUY TRÌNH VẬN HÀNH
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight text-[#0B0B0B]">
              CÁCH CHÚNG TÔI HOẠT ĐỘNG
            </h2>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Quy trình 6 bước khép kín từ lúc nhận yêu cầu đến khi bàn giao biên bản POD và xuất hóa đơn điện tử cho doanh nghiệp.
            </p>
          </div>

          <div className="reveal-on-scroll delay-150">
            <ProcessStorytelling />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 09: ABOUT & ENTERPRISE PARTNERS (§08, §09)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 reveal-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
                HỒ SƠ NĂNG LỰC THỰC TẾ
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
                CHÚNG TÔI KHÔNG CHỈ CHỞ HÀNG. CHÚNG TÔI ĐỒNG HÀNH CÙNG CHUỖI CUNG ỨNG.
              </h2>
              <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
                Thành lập từ năm 2014, Tiên Phong kiên định chiến lược đầu tư tài sản thật: 100% xe đứng tên công ty, xây dựng bãi xe chính quy 15.000m² tại trung tâm công nghiệp Dĩ An và duy trì xưởng cơ khí nội bộ nhằm triệt tiêu tối đa rủi ro hỏng hóc dọc đường.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors inline-block"
                >
                  <span>XEM CHI TIẾT VỀ TIÊN PHONG</span>
                  <span className="arrow-move ml-1.5 font-bold">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 reveal-right">
              <div className="relative overflow-hidden h-80 sm:h-96 md:h-[480px] w-full border border-[#2A2A2A] card-hover">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Tổng kho và bãi xe Sóng Thần Vận Tải Tiên Phong"
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
            </div>
          </div>

          {/* Enterprise Partners Grid with Staggered Scale Reveals */}
          <div className="pt-16 border-t border-[#1F1F1F] space-y-8">
            <div className="text-center space-y-2 reveal-on-scroll">
              <span className="text-xs uppercase tracking-[0.25em] text-[#737373] font-heading font-semibold block">
                ĐỐI TÁC SẢN XUẤT DOANH NGHIỆP
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
                ĐỒNG HÀNH CÙNG 850+ NHÀ MÁY &amp; TẬP ĐOÀN CÔNG NGHIỆP
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {CLIENTS.map((client, idx) => {
                const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
                return (
                  <div
                    key={idx}
                    className={`p-6 bg-[#141414] border border-[#2A2A2A] space-y-1.5 reveal-scale card-hover ${delays[idx]}`}
                  >
                    <span className="font-heading font-bold text-sm text-white uppercase block">
                      {client.name}
                    </span>
                    <span className="text-[11px] text-[#737373] font-light block">
                      {client.field}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 10: FINAL CTA (Visually Strongest Conversion Moment)
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 sm:py-44 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#070707] border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 reveal-scale">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF6A00] font-heading font-bold block">
            BẮT ĐẦU VẬN HÀNH
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.95] text-white">
            SẴN SÀNG
            <span className="block text-[#FF6A00]">VẬN CHUYỂN?</span>
          </h2>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-2xl mx-auto">
            Hãy cho chúng tôi biết chủng loại kiện hàng, trọng lượng và cung đường của bạn. Phòng điều phối sẽ gửi phương án xe và báo giá chuẩn xác trong 15 phút.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow-hover w-full sm:w-auto px-10 py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>YÊU CẦU BÁO GIÁ TRONG 15 PHÚT</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>

            <a
              href="tel:0918456789"
              className="btn-arrow-hover w-full sm:w-auto px-10 py-5 bg-[#141414] hover:bg-[#1F1F1F] text-white border border-[#2A2A2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>GỌI ĐIỀU PHỐI: 0918.456.789</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
