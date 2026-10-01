"use client";
import { useState } from "react";
import Link from "next/link";

const FLEET_DATA = [
  {
    id: "cont-40",
    category: "container",
    name: "Đầu Kéo Container Hyundai Xcient 440HP / Hino 700",
    count: 14,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
    payload: "32.0 Tấn",
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
    count: 12,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
    payload: "15.0 Tấn",
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
    count: 6,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    payload: "8.0 Tấn",
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
    count: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
    payload: "Chở: 12 Tấn • Sức cẩu: 10 Tấn (tại tầm với 3m)",
    length: "Thùng dài 8.5m • Tầm với cần cẩu tối đa 20.5m",
    volume: "Phù hợp chở máy móc công nghiệp cồng kềnh",
    engine: "Động cơ D6CA 380HP, chân tú thủy lực chữ H trước sau",
    safety: "Cảm biến quá tải cẩu, khóa hãm cần tự động, cáp xích tăng đơ xịn",
    usage: "Cẩu lắp đặt máy móc CNC, di dời thiết bị nhà xưởng tại các KCN",
  },
  {
    id: "crane-5t",
    category: "cau-tu-hanh",
    name: "Xe Cẩu Tự Hành 5T Unic URV550 — Nền Xe Hino 500",
    count: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ",
    payload: "Chở: 6.5 Tấn • Sức cẩu: 5 Tấn",
    length: "Thùng dài 6.2m • Tầm với cần 13.5m",
    volume: "Linh hoạt di chuyển trong các nhà xưởng trần thấp",
    engine: "Động cơ Hino Euro 5, hệ thống chân tú phụ trợ",
    safety: "Kiểm định định kỳ bởi Trung Tâm Kiểm Định An Toàn Khu Vực II",
    usage: "Cẩu cọc bê tông, sắt thép xây dựng, máy ép nhựa mini",
  },
  {
    id: "box-lift",
    category: "chuyen-dung",
    name: "Xe Thùng Kín Bửng Nâng Thủy Lực 5T — 10T",
    count: 8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
    payload: "5T — 10T • Bửng nâng sức nâng 1.5 Tấn",
    length: "Dài 7.5m — 9.5m × Rộng 2.35m × Cao 2.5m",
    volume: "45 — 55 m³",
    engine: "Isuzu / Hino Euro 5, thùng inox dập sóng kín nước 100%",
    safety: "Khóa chốt seal chì chống mở trộm, sàn lót đệm cao su giảm chấn",
    usage: "Linh kiện điện tử bán dẫn, thiết bị y tế, hàng có giá trị cao",
  },
  {
    id: "reefer-tk",
    category: "chuyen-dung",
    name: "Xe Đông Lạnh Thermo King SLX / T1000",
    count: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnrXDdpPf_sU_P9FactYQKlcoubcLLieDwY5SGdkisvPIdq61R7_rf7xTxdq9r_RUj6Ah6sDWkczOQEnyEZxgVnxjJJImx8nqHAIv8bSubgYAtXjLjht6rvAB7dnkUCgQhD_p79AiTAKM9kM2U4UNPayuKynm8Slpo8eCY5N6u70ObZjSfjKLiaO6XK7FTnd-kXZMPcOhlHu365Fn-HVFRYwE-QdPdEPmQBDcbQkH6efQpBrWXEWtj0Q",
    payload: "8.5 Tấn",
    length: "Dài 7.8m × Rộng 2.25m × Cao 2.35m",
    volume: "41 m³",
    engine: "Máy lạnh Thermo King độc lập, hoạt động ngay cả khi xe tắt máy",
    safety: "Bộ ghi nhiệt Data Logger tự động xuất file Excel khi bàn giao",
    usage: "Thực phẩm đông lạnh, dược phẩm, nguyên liệu hóa mỹ phẩm",
  },
  {
    id: "lowbed-50t",
    category: "container",
    name: "Rơ-Moóc Lùn 3 Trục Chở Quá Khổ Quá Tải (50 Tấn)",
    count: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnUtZ941yLn33tHkUUAGsDU1V-958h-SpPgeEqlZCeOi19Vk9jlD8s5VEs08PCqtZjoDjgM0OwdVEAlX5QVqrcAXKtYtxe-W3q0US5Mszt4CNrsN5dZn_zKxGAnRwccFHSMEurWyTdr8RFMIrqDRRLz3tKFWLJzEgtXogn2x39PO0fcePuRz_zzBC2GSoHRz4hswHDcHEMo8FWnb6vLsmen1iTDI68boZOIpotGleYfQQGzZPxcXt-cQ",
    payload: "50.0 Tấn",
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
    <div className="flex flex-col w-full">
      {/* ═══ HEADER BANNER ═══ */}
      <section className="bg-navy-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
            Năng Lực Đội Xe Thực Tế
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Đội Phương Tiện & Thông Số Kỹ Thuật Chi Tiết
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Hệ thống 52+ đầu xe đa tải trọng từ 5 tấn đến 50 tấn, 100% sở hữu chính chủ, đăng kiểm Euro 5 và lắp đặt thiết bị giám sát hành trình GPS hợp chuẩn Bộ GTVT.
          </p>
        </div>
      </section>

      {/* ═══ SUMMARY STATS ═══ */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border border-slate-200 text-center">
              <span className="font-heading font-bold text-2xl text-navy-900 block">14 Đầu Kéo</span>
              <span className="text-[11px] text-slate-500 uppercase font-semibold">Container 40ft / 45ft</span>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-center">
              <span className="font-heading font-bold text-2xl text-navy-900 block">18 Xe Mui Bạt</span>
              <span className="text-[11px] text-slate-500 uppercase font-semibold">Thùng 8.2m — 9.6m</span>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-center">
              <span className="font-heading font-bold text-2xl text-navy-900 block">8 Xe Cẩu</span>
              <span className="text-[11px] text-slate-500 uppercase font-semibold">Cẩu Tự Hành 5T — 15T</span>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-center">
              <span className="font-heading font-bold text-2xl text-orange-600 block">12 Thùng Kín & Lạnh</span>
              <span className="text-[11px] text-slate-500 uppercase font-semibold">Bửng Nâng / Thermo King</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAIN FLEET LISTING WITH TABS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Tất Cả (52 Xe)" },
              { id: "container", label: "Đầu Kéo & Rơ-Moóc (16 Xe)" },
              { id: "mui-bat", label: "Xe Tải Mui Bạt (18 Xe)" },
              { id: "cau-tu-hanh", label: "Xe Cẩu Tự Hành (8 Xe)" },
              { id: "chuyen-dung", label: "Thùng Kín & Lạnh (12 Xe)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2.5 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? "bg-navy-900 text-white shadow"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:border-slate-400 transition-all"
              >
                <div className="lg:w-80 h-56 lg:h-auto bg-slate-100 shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-navy-900/90 text-white text-[11px] font-heading font-bold uppercase px-2.5 py-0.5 rounded">
                    {item.count} Xe Đang Hoạt Động
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-navy-900 uppercase">
                        {item.name}
                      </h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 font-heading font-bold text-xs uppercase rounded">
                        {item.payload}
                      </span>
                    </div>

                    {/* Specs Table */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-slate-400 font-heading font-semibold uppercase block">Kích Thước Thùng:</span>
                        <span className="text-navy-900 font-semibold mt-0.5 block">{item.length}</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-slate-400 font-heading font-semibold uppercase block">Thể Tích / Khả Năng Chứa:</span>
                        <span className="text-navy-900 font-semibold mt-0.5 block">{item.volume}</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-slate-400 font-heading font-semibold uppercase block">Hệ Thống An Toàn:</span>
                        <span className="text-navy-900 font-semibold mt-0.5 block">{item.safety}</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-slate-400 font-heading font-semibold uppercase block">Tuyến Đường Tối Ưu:</span>
                        <span className="text-navy-900 font-semibold mt-0.5 block">{item.usage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500">
                      *Tất cả phương tiện đều có tem kiểm định an toàn kỹ thuật & camera truyền dữ liệu về Tổng cục Đường bộ.
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:0918456789"
                        className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-base">call</span>
                        Điều Xe Này
                      </a>
                      <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors"
                      >
                        Nhận Báo Giá
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAINTENANCE & SAFETY BANNER ═══ */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-navy-900 text-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-widest block">
                Tiêu Chuẩn Vận Hành Đội Xe
              </span>
              <h3 className="font-heading font-bold text-xl md:text-2xl uppercase">
                Quy Trình Bảo Dưỡng Kỹ Thuật Định Kỳ & Xưởng Cơ Khí Riêng
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
                100% đầu xe được kiểm tra phanh, lốp, dầu máy và thiết bị chằng buộc trước khi xuất bãi mỗi ca chạy. Đảm bảo tỷ lệ hỏng hóc dọc đường dưới 0.1%.
              </p>
            </div>
            <a
              href="tel:0918456789"
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded shrink-0 shadow-lg"
            >
              Hotline Kỹ Thuật: 0918.456.789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
