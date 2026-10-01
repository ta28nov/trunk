"use client";
import { useState } from "react";
import Link from "next/link";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "yard",
    title: "Bãi Xe Trung Tâm Sóng Thần (15.000m²)",
    subtitle: "Dĩ An — Bình Dương",
    desc: "Hình ảnh góc rộng bãi xe chính với sức chứa hơn 60 đầu xe cùng lúc, phân khu rõ ràng giữa đầu kéo container và xe tải mui bạt đường dài.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA",
    details: ["Hạ tầng tráng bê tông chịu tải 50T", "Hệ thống camera giám sát 360 độ", "Trạm bảo trì & thay dầu tại chỗ"],
  },
  {
    id: 2,
    category: "rigging",
    title: "Cẩu Hạ Máy CNC 14 Tấn Vào Xưởng KCN VSIP 2",
    subtitle: "Dự Án Doanh Nghiệp FDI Nhật Bản",
    desc: "Xe cẩu tự hành 15T phối hợp cùng đội ngũ kỹ thuật rùa đẩy thủy lực đưa máy phay vào đúng vị trí bệ móng nhà xưởng an toàn tuyệt đối.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ",
    details: ["Khảo sát tải trọng nền xưởng trước khi cẩu", "Sử dụng cáp vải chuyên dụng không trầy sơn", "Bảo hiểm lắp đặt trọn gói"],
  },
  {
    id: 3,
    category: "telemetry",
    title: "Phòng Điều Độ Giám Sát GPS & Camera Cabin 24/7",
    subtitle: "Trung Tâm Chỉ Huy Vận Hành",
    desc: "Màn hình giám sát tọa độ thời gian thực của 52 phương tiện, tốc độ di chuyển, nhiệt độ thùng lạnh và cảnh báo tài xế mất tập trung hoặc quá tốc độ.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuqO2LBRff0Jkiuf-3movRgoEM7vSzRshIOA1f_niWEJykdc07tW-5TlElFimkAgzaiwtFEyt0l6191dfVmqgiBkvVm0ueoqhvHKOJLC_WkrbS4WufsAa3wQR9EVHR8iF1G4yEKQ8qJGtVMzX7StN7bUmOR0sSNBpCL3IaicnWUyJ0ijJgXEJHS3e7IJ_jIDGLD52-2B71owM9l045mX0l06VFpO5GJmTFznUlJPgj-ycmt-CWRxTz2w",
    details: ["Cập nhật vị trí mỗi 10 giây", "Truyền trực tiếp về máy chủ Cục Đường Bộ", "Cấp tài khoản giám sát riêng cho khách"],
  },
  {
    id: 4,
    category: "night",
    title: "Xuất Bến Chuyến Đêm 02:00 Sáng Tuyến Bắc — Nam",
    subtitle: "Trục Huyết Mạch Quốc Lộ 1A",
    desc: "Đội xe mui bạt 9.6M xuất phát trong khung giờ vắng để tránh ùn tắc nội đô và kịp giao hàng tại Đà Nẵng vào chiều hôm sau theo đúng thỏa thuận hợp đồng.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
    details: ["2 tài xế luân phiên có kinh nghiệm 8+ năm", "Niêm phong chì thùng xe trước khi lăn bánh", "Báo cáo vị trí qua Zalo mỗi chặng 100km"],
  },
  {
    id: 5,
    category: "port",
    title: "Kéo Container Tại Cảng Cát Lái Lúc Hoàng Hôn",
    subtitle: "Cảng Tân Cảng — Cát Lái (TP. Thủ Đức)",
    desc: "Đầu kéo Hyundai Xcient tiếp nhận cont 40ft hàng dệt may xuất khẩu, bám sát giờ hạ bãi cut-off của hãng tàu quốc tế, bảo đảm không lỡ chuyến hải trình.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
    details: ["Đội tài xế có thẻ ra vào cổng tự động", "Bấm seal kiểm hóa hải quan ngay tại bãi", "Hỗ trợ làm thủ tục hải quan khẩn cấp"],
  },
  {
    id: 6,
    category: "yard",
    title: "Khu Vực Bảo Dưỡng Kỹ Thuật & Cân Tải Trọng Định Kỳ",
    subtitle: "Xưởng Cơ Khí Nội Bộ",
    desc: "Đội ngũ kỹ thuật cơ khí kiểm tra toàn diện hệ thống phanh khí nén, bố thắng, lốp xe và thay dầu động cơ trước mỗi chuyến hành trình đường dài.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    details: ["Trạm cân tải trọng 80T kiểm tra trước khi rời bãi", "Phụ tùng chính hãng Hyundai & Isuzu", "Quy trình kiểm tra 18 bước an toàn kỹ thuật"],
  },
];

export default function OperationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2400&q=80"
          alt="Bãi xe và hoạt động thực địa Vận Tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            THƯ VIỆN THỰC ĐỊA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              MINH CHỨNG NĂNG LỰC VẬN HÀNH 24/7
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Mọi hình ảnh tư liệu được ghi lại trực tiếp tại bãi xe trung tâm 15.000m², các cảng biển Cát Lái — Cái Mép và các nhà máy trong suốt 10+ năm phục vụ khách hàng doanh nghiệp.
          </p>

          {/* Filter Categories */}
          <div className="pt-6 flex flex-wrap items-center gap-3">
            {[
              { id: "all", label: "Tất Cả Hoạt Động" },
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
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
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

      {/* ═══ EXPANSIVE VERTICAL SHOWCASE (Clean White, Split-Screen Alternating) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-32">
        {filteredItems.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-on-scroll"
            >
              {/* Photo Side */}
              <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-hover-zoom"
                  />
                </div>
              </div>

              {/* Narrative Side */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="space-y-2">
                  <span className="font-heading font-bold text-base text-orange-600 uppercase block">
                    {item.subtitle}
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase leading-tight">
                    {item.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                  {item.desc}
                </p>

                {/* Details */}
                <div className="space-y-3.5 pt-2">
                  {item.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3.5 text-base md:text-lg text-slate-700 font-light">
                      <span className="material-symbols-outlined text-green-600 text-xl shrink-0">check_circle</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="tel:0918456789"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                    Liên Hệ Trực Tiếp: 0918.456.789
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ SAFETY & DRIVER STANDARDS (Clean Light Gray) ═══ */}
      <section className="py-24 bg-slate-100 border-t border-slate-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase text-slate-900 tracking-tight">
              100% Tài Xế Được Kiểm Tra Nồng Độ Cồn Trước Khi Lên Ca
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Đội ngũ 70+ tài xế của Tiên Phong đều có thâm niên chạy đường dài từ 5 năm trở lên, có giấy phép lái xe hạng C, FC theo chuẩn quy định và thường xuyên được huấn luyện nghiệp vụ xếp dỡ an toàn.
            </p>
          </div>
          <a
            href="tel:0918456789"
            className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 shrink-0 transition-all hover:scale-105"
          >
            Hotline Giám Sát: 0918.456.789
          </a>
        </div>
      </section>
    </div>
  );
}
