"use client";
import { useState } from "react";
import Link from "next/link";

const FLEET_DATA = [
  {
    id: "cont-40",
    category: "container",
    name: "Đầu Kéo Container Hyundai Xcient 440HP / Hino 700",
    payload: "32 Tấn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
    length: "Moóc xương / Moóc sàn 40ft & 45ft",
    volume: "Chở cont 20ft (2 cont) hoặc cont 40ft/45ft HQ",
    engine: "Động cơ D6HA 440 mã lực, tiêu chuẩn khí thải Euro 5",
    safety: "Phanh ABS/EBS, GPS giám sát hành trình 24/7, Camera cabin 2 góc",
    usage: "Kéo container Cát Lái, Cái Mép, ICD Sóng Thần, Long Bình và các KCN liên tỉnh",
  },
  {
    id: "truck-15t",
    category: "mui-bat",
    name: "Xe Tải Thùng Mui Bạt 9.6M — Hino 3 Chân (15 Tấn)",
    payload: "15 Tấn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
    length: "Dài 9.60m × Rộng 2.38m × Cao 2.60m",
    volume: "57 - 60 m³",
    engine: "Động cơ Hino J08E, 280 mã lực, Euro 5",
    safety: "Bạt 3 lớp kép chống thấm, bửng nhôm nâng hạ, đai chằng siết pallet",
    usage: "Tuyến trục Bắc — Nam, chở hàng tiêu dùng, hạt nhựa, bao bì, may mặc",
  },
  {
    id: "truck-8t",
    category: "mui-bat",
    name: "Xe Tải Thùng Mui Bạt 8 Tấn — Isuzu Forward",
    payload: "8 Tấn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    length: "Dài 8.20m × Rộng 2.35m × Cao 2.45m",
    volume: "47 m³",
    engine: "Động cơ Isuzu 4HK1-TCS Turbo Diesel",
    safety: "Hệ thống treo lá nhíp chịu tải nặng, bạt che phủ kín 100%",
    usage: "Giao hàng nội vùng Đông Nam Bộ & các KCN lân cận TP.HCM",
  },
  {
    id: "crane-10t",
    category: "cau-tu-hanh",
    name: "Xe Cẩu Tự Hành 10T Soosan / Unic — Đóng Trên Nền Hyundai HD320",
    payload: "Cẩu 10T / Chở 12T",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
    length: "Thùng dài 8.5m • Tầm với cần cẩu tối đa 20.5m",
    volume: "Phù hợp chở máy móc công nghiệp cồng kềnh",
    engine: "Động cơ D6CA 380HP, chân tú thủy lực chữ H trước sau",
    safety: "Cảm biến quá tải cẩu, khóa hãm cần tự động, cáp xích tăng đơ",
    usage: "Cẩu lắp đặt máy móc CNC, di dời thiết bị nhà xưởng tại các KCN",
  },
  {
    id: "box-lift",
    category: "chuyen-dung",
    name: "Xe Thùng Kín Bửng Nâng Thủy Lực 5T — 10T",
    payload: "5T — 10T",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    length: "Dài 7.5m — 9.5m × Rộng 2.35m × Cao 2.5m",
    volume: "45 — 55 m³",
    engine: "Isuzu / Hino Euro 5, thùng inox dập sóng kín nước 100%",
    safety: "Khóa chốt seal chì chống mở trộm, sàn lót đệm cao su giảm chấn",
    usage: "Linh kiện điện tử bán dẫn, thiết bị y tế, hàng có giá trị cao",
  },
  {
    id: "lowbed-50t",
    category: "container",
    name: "Rơ-Moóc Lùn 3 Trục Chở Quá Khổ Quá Tải (50 Tấn)",
    payload: "50 Tấn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnUtZ941yLn33tHkUUAGsDU1V-958h-SpPgeEqlZCeOi19Vk9jlD8s5VEs08PCqtZjoDjgM0OwdVEAlX5QVqrcAXKtYtxe-W3q0US5Mszt4CNrsN5dZn_zKxGAnRwccFHSMEurWyTdr8RFMIrqDRRLz3tKFWLJzEgtXogn2x39PO0fcePuRz_zzBC2GSoHRz4hswHDcHEMo8FWnb6vLsmen1iTDI68boZOIpotGleYfQQGzZPxcXt-cQ",
    length: "Sàn lùn cao cách mặt đất 0.85m, chiều dài sàn mở rộng tới 14m",
    volume: "Chuyên chở hàng siêu trường siêu trọng không thể tháo rời",
    engine: "Kéo bởi đầu kéo Man / Shacman 480HP dẫn động 6x4",
    safety: "Giấy phép lưu hành đặc biệt của Cục Đường Bộ, xe dẫn đường cảnh báo",
    usage: "Vận chuyển máy nghiền đá, lò hơi công nghiệp, biến áp trạm điện",
  },
];

export default function FleetPage() {
  const [filter, setFilter] = useState("all");

  const filtered = FLEET_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
          alt="Đội xe tải Vận Tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            ĐỘI XE TRỰC CHIẾN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              THÔNG SỐ KỸ THUẬT &amp; TẢI TRỌNG THỰC TẾ
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Hệ thống 52 phương tiện chính chủ đa tải trọng từ 5 tấn đến 50 tấn, 100% đạt chuẩn khí thải Euro 5, kiểm định an toàn định kỳ và tích hợp định vị GPS kết nối máy chủ Cục Đường Bộ 24/7.
          </p>

          {/* Clean Category Filters */}
          <div className="pt-6 flex flex-wrap items-center gap-3">
            {[
              { id: "all", label: "Tất Cả Phương Tiện" },
              { id: "container", label: "Đầu Kéo Container" },
              { id: "mui-bat", label: "Xe Tải Mui Bạt" },
              { id: "cau-tu-hanh", label: "Xe Cẩu Tự Hành" },
              { id: "chuyen-dung", label: "Thùng Kín & Chuyên Dùng" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-105"
                    : "bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPANSIVE VERTICAL FLEET SHOWCASE (Clean White, Split-Screen Alternating) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-32">
        {filtered.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-on-scroll"
            >
              {/* Photo Side */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-hover-zoom"
                  />
                </div>
              </div>

              {/* Narrative & Specs Side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="space-y-2">
                  <span className="font-heading font-black text-2xl text-orange-600 block">
                    {item.payload}
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase leading-tight">
                    {item.name}
                  </h2>
                </div>

                <div className="space-y-4 pt-2 text-base text-slate-600 font-light">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <strong className="text-slate-900 font-semibold block text-sm">Kích Thước Thùng Xe:</strong>
                    <span className="mt-1 block">{item.length} • Thể tích: {item.volume}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <strong className="text-slate-900 font-semibold block text-sm">Động Cơ &amp; Tiêu Chuẩn:</strong>
                    <span className="mt-1 block">{item.engine}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <strong className="text-slate-900 font-semibold block text-sm">Trang Bị An Toàn:</strong>
                    <span className="mt-1 block">{item.safety}</span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <strong className="text-slate-900 font-semibold block text-sm">Tuyến Đường Thích Hợp:</strong>
                    <span className="mt-1 block">{item.usage}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:0918456789"
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                    Điều Xe Này: 0918.456.789
                  </a>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    Báo Giá Nhanh
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ SAFETY & WORKSHOP BANNER (Clean Light Gray) ═══ */}
      <section className="py-24 bg-slate-100 border-t border-slate-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase text-slate-900 tracking-tight">
              Quy Trình Kiểm Tra Kỹ Thuật Trước Mỗi Chuyến Xe
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              100% đầu xe được kiểm tra hệ thống phanh khí nén, áp suất lốp, dầu máy và chằng buộc bạt che trước khi xuất bãi mỗi ca chạy, đảm bảo tỷ lệ sự cố dọc đường luôn dưới 0.1%.
            </p>
          </div>
          <a
            href="tel:0918456789"
            className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 shrink-0 transition-all hover:scale-105"
          >
            Hotline Kỹ Thuật: 0918.456.789
          </a>
        </div>
      </section>
    </div>
  );
}
