"use client";
import { useState } from "react";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "yard",
    title: "Bãi Xe Trung Tâm Sóng Thần (15.000m²)",
    desc: "Hình ảnh góc rộng bãi xe chính tại Dĩ An — Bình Dương, với khu đỗ đầu kéo container và xe tải mui bạt.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA",
    tag: "Bãi Xe",
  },
  {
    id: 2,
    category: "rigging",
    title: "Cẩu Hạ Máy CNC 14 Tấn Vào Xưởng KCN VSIP 2",
    desc: "Xe cẩu tự hành 15T phối hợp cùng đội rùa đẩy thủy lực đưa máy phay vào đúng vị trí bệ móng của khách hàng Nhật Bản.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ",
    tag: "Di Dời Máy",
  },
  {
    id: 3,
    category: "telemetry",
    title: "Phòng Điều Độ Giám Sát GPS & Camera Cabin 24/7",
    desc: "Hệ thống màn hình hiển thị trực tiếp tọa độ 52 xe, tốc độ chạy thực tế, cảnh báo tài xế buồn ngủ hoặc chạy quá tốc độ.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuqO2LBRff0Jkiuf-3movRgoEM7vSzRshIOA1f_niWEJykdc07tW-5TlElFimkAgzaiwtFEyt0l6191dfVmqgiBkvVm0ueoqhvHKOJLC_WkrbS4WufsAa3wQR9EVHR8iF1G4yEKQ8qJGtVMzX7StN7bUmOR0sSNBpCL3IaicnWUyJ0ijJgXEJHS3e7IJ_jIDGLD52-2B71owM9l045mX0l06VFpO5GJmTFznUlJPgj-ycmt-CWRxTz2w",
    tag: "Điều Độ GPS",
  },
  {
    id: 4,
    category: "night",
    title: "Xuất Bến Chuyến Đêm 02:00 Sáng Tuyến Bắc — Nam",
    desc: "Đội xe mui bạt 9.6M xuất phát trong đêm để tránh giờ cấm tải nội đô và kịp giao hàng tại Đà Nẵng vào chiều hôm sau.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
    tag: "Chuyến Đêm",
  },
  {
    id: 5,
    category: "port",
    title: "Kéo Container Tại Cảng Cát Lái Lúc Hoàng Hôn",
    desc: "Đầu kéo Hyundai Xcient bốc cont 40ft hàng may dệt may xuất khẩu sang Mỹ, bám sát giờ hạ bãi cut-off của hãng tàu Maersk.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
    tag: "Cảng Biển",
  },
  {
    id: 6,
    category: "yard",
    title: "Khu Vực Bảo Dưỡng Kỹ Thuật & Cân Tải Trọng Định Kỳ",
    desc: "Đội ngũ kỹ thuật cơ khí kiểm tra hệ thống phanh, bố thắng, lốp xe và thay dầu trước mỗi chuyến chạy đường dài.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    tag: "Kỹ Thuật",
  },
];

export default function OperationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2000&q=80"
          alt="Bãi xe và hoạt động thực địa Vận Tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Hình Ảnh Thực Tế 100% — Không Dùng Mockup
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            THƯ VIỆN THỰC ĐỊA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1">
              MINH CHỨNG NĂNG LỰC VẬN HÀNH 24/7
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Mọi hình ảnh tư liệu được ghi lại trực tiếp tại bãi xe trung tâm 15.000m², các cảng biển Cát Lái — Cái Mép và các nhà máy trong suốt 10+ năm phục vụ khách hàng doanh nghiệp.
          </p>
        </div>
      </section>

      {/* ═══ GALLERY SECTION WITH TABS ═══ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-sm w-fit">
            {[
              { id: "all", label: "Tất Cả Hình Ảnh" },
              { id: "yard", label: "Kho Bãi & Xưởng Bảo Dưỡng" },
              { id: "rigging", label: "Cẩu Hạ & Di Dời Máy" },
              { id: "telemetry", label: "Phòng Điều Độ GPS" },
              { id: "night", label: "Xuất Bến Ban Đêm" },
              { id: "port", label: "Cảng Biển Cát Lái" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-navy-950 text-white shadow"
                    : "text-slate-600 hover:text-navy-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bento-card group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover img-hover-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 bg-navy-950/90 text-white text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy-950 uppercase group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                    Ảnh thực tế • Tiên Phong
                  </span>
                  <span className="text-orange-600 font-semibold uppercase text-[10px] tracking-wider">
                    Lưu trữ hồ sơ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SAFETY & DRIVER STANDARDS ═══ */}
      <section className="py-14 bg-navy-950 border-t border-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bento-card-dark p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-navy-700/60">
            <div className="space-y-3">
              <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-widest block">
                Văn Hóa Lái Xe Chuyên Nghiệp &amp; An Toàn Tuyệt Đối
              </span>
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-white">
                100% Tài Xế Được Kiểm Tra Nồng Độ Cồn &amp; Thẻ An Toàn Trước Khi Lên Ca
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed font-light">
                Đội ngũ 70+ tài xế của Tiên Phong đều có thâm niên chạy đường dài từ 5 năm trở lên, có giấy phép lái xe hạng C, FC theo chuẩn quy định và thường xuyên được huấn luyện nghiệp vụ xếp dỡ hàng nguy hiểm.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:0918456789"
                className="w-full sm:w-auto px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
              >
                Hotline Giám Sát: 0918.456.789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
