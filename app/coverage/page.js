import Link from "next/link";

export const metadata = {
  title: "Mạng Lưới Tuyến Đường & 42+ KCN Trọng Điểm | Vận Tải Tiên Phong",
  description:
    "Hành lang vận tải kết nối thông suốt Đông Nam Bộ (1.5H - 3H), trục Bắc - Nam (48H cam kết), các cảng biển Cát Lái, Cái Mép và 42 khu công nghiệp lớn nhất cả nước.",
};

const CORRIDORS = [
  {
    num: "01",
    title: "Hành Lang Đông Nam Bộ & Các KCN Vệ Tinh",
    transit: "1.5 GIỜ — 3.5 GIỜ",
    desc: "Tâm điểm hoạt động với bãi xe trung tâm 15.000m² tại KCN Sóng Thần 1 (Dĩ An). Đội xe túc trực 24/7, kết nối liên tục giữa tam giác công nghiệp TP.HCM — Bình Dương — Đồng Nai — Bà Rịa Vũng Tàu và Long An.",
    routes: [
      { from: "KCN Sóng Thần (Bình Dương)", to: "KCN VSIP 1 & 2 / Mỹ Phước", dist: "25 — 45 km", eta: "1 — 1.5 Giờ" },
      { from: "TP.HCM / Thủ Đức", to: "KCN Amata / Biên Hòa 2 / Nhơn Trạch", dist: "35 — 55 km", eta: "1.5 — 2 Giờ" },
      { from: "Bình Dương / TP.HCM", to: "Cụm Cảng Quốc Tế Cái Mép — Thị Vải", dist: "75 — 90 km", eta: "2.5 — 3 Giờ" },
      { from: "Bình Dương", to: "KCN Đức Hòa / Bến Lức / Long Hậu (Long An)", dist: "60 — 80 km", eta: "2 — 2.5 Giờ" },
    ],
  },
  {
    num: "02",
    title: "Trục Huyết Mạch Quốc Lộ 1A: Tuyến Bắc — Nam",
    transit: "44 GIỜ — 48 GIỜ CAM KẾT",
    desc: "Đội xe mui bạt 9.6M và đầu kéo container chạy xoay vòng liên tục giữa hai đầu đất nước. Bố trí 2 tài xế luân phiên lái an toàn và có trạm trung chuyển đổi ca kiểm tra kỹ thuật tại KCN Hòa Cầm (Đà Nẵng).",
    routes: [
      { from: "Tổng kho Sóng Thần (TP.HCM)", to: "KCN Hòa Cầm / Liên Chiểu (Đà Nẵng)", dist: "950 km", eta: "24 — 28 Giờ" },
      { from: "Tổng kho Sóng Thần", to: "Kho Giáp Bát / Gia Lâm (Hà Nội)", dist: "1.720 km", eta: "44 — 48 Giờ" },
      { from: "TP.HCM / Bình Dương", to: "KCN Đình Vũ / Tràng Duệ (Hải Phòng)", dist: "1.790 km", eta: "46 — 50 Giờ" },
      { from: "TP.HCM / Bình Dương", to: "KCN VSIP Bắc Ninh / Yên Phong", dist: "1.760 km", eta: "46 — 50 Giờ" },
    ],
  },
  {
    num: "03",
    title: "Duyên Hải Miền Trung & Vùng Tây Nguyên",
    transit: "18 GIỜ — 28 GIỜ",
    desc: "Chuyên vận chuyển thiết bị công trình năng lượng điện gió, mặt trời, hạt nhựa, phân bón và hàng tiêu dùng nhanh tiếp vận các tỉnh Nam Trung Bộ và các tỉnh Tây Nguyên theo Quốc lộ 14 và Quốc lộ 20.",
    routes: [
      { from: "TP.HCM / Bình Dương", to: "Phan Thiết / Hàm Tân (Bình Thuận)", dist: "180 km", eta: "4 — 5 Giờ" },
      { from: "TP.HCM / Bình Dương", to: "Cam Ranh / Nha Trang (Khánh Hòa)", dist: "420 km", eta: "9 — 10 Giờ" },
      { from: "TP.HCM / Bình Dương", to: "Quy Nhơn (Bình Định) / KCN Nhơn Hội", dist: "650 km", eta: "16 — 18 Giờ" },
      { from: "TP.HCM / Bình Dương", to: "Buôn Ma Thuột (Đắk Lắk) / Pleiku (Gia Lai)", dist: "350 — 520 km", eta: "9 — 14 Giờ" },
    ],
  },
  {
    num: "04",
    title: "Tuyến Cảng Biển Quốc Tế & Cảng Cạn (ICD)",
    transit: "TRỰC CHIẾN 24/7",
    desc: "Chuyên kéo vỏ cont, hạ bãi Cát Lái, Cái Mép, rút ruột container, kiểm hóa hải quan và bám sát giờ closing time của hãng tàu, đảm bảo không phát sinh chi phí lưu bãi lưu container (Demurrage/Detention).",
    routes: [
      { from: "Bãi Cát Lái", to: "Cảng Tân Cảng — Cát Lái (Cổng A/B/C/D)", dist: "2 — 5 km", eta: "15 — 30 Phút" },
      { from: "KCN Sóng Thần / VSIP", to: "ICD Sóng Thần / ICD Phước Long / Long Bình", dist: "10 — 25 km", eta: "30 — 45 Phút" },
      { from: "KCN Amata / Nhơn Trạch", to: "Cụm Cảng Quốc Tế Cái Mép (TCIT, CMIT)", dist: "45 — 65 km", eta: "1.5 — 2 Giờ" },
      { from: "TP.HCM / Long An", to: "Cảng Quốc Tế Hiệp Phước (Nhà Bè)", dist: "30 — 50 km", eta: "1 — 1.5 Giờ" },
    ],
  },
];

const INDUSTRIAL_PARKS = [
  { province: "Bình Dương (12 KCN)", list: "VSIP 1, VSIP 2, Sóng Thần 1-2-3, Mỹ Phước 1-2-3, Nam Tân Uyên, Bàu Bàng, Tân Đông Hiệp, Rạch Bắp." },
  { province: "Đồng Nai (10 KCN)", list: "Amata, Biên Hòa 1-2, Nhơn Trạch 1-6, KCN Long Đức, Giang Điền, Long Thành, Lộc An — Bình Sơn." },
  { province: "TP. Hồ Chí Minh (8 KCN/KCX)", list: "KCX Tân Thuận, KCX Linh Trung 1-2, KCN Hiệp Phước, Tân Bình, Vĩnh Lộc, Tây Bắc Củ Chi, Lê Minh Xuân." },
  { province: "Bà Rịa — Vũng Tàu (5 KCN)", list: "Phú Mỹ 1-2-3, KCN Cái Mép, KCN Đông Xuyên, KCN Đất Đỏ, KCN Châu Đức Sonadezi." },
  { province: "Long An & Miền Tây (7 KCN)", list: "Thuận Đạo, Long Hậu, Đức Hòa 1-3, Tân Đức, Hải Sơn, KCN Trà Nóc (Cần Thơ)." },
];

export default function CoveragePage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            MẠNG LƯỚI VẬN HÀNH
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            NƠI CHÚNG TÔI
            <span className="block text-[#FF6A00]">VẬN HÀNH.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Vành đai sản xuất Đông Nam Bộ trong ngày, trục vận tải xuyên suốt Bắc — Nam cam kết 48 giờ và mạng lưới phục vụ trực tiếp hơn 42 khu công nghiệp trọng điểm phía Nam.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-4">
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">42+ KCN</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Kết Nối Trực Tiếp</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">1.720 KM</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Trục Bắc — Nam</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">1.5 GIỜ</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Nội Vùng Đông Nam Bộ</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">24/7</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Cảng Cát Lái — Cái Mép</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4 CORRIDORS SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              HÀNH LANG VẬN TẢI
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-[#0B0B0B]">
              4 HÀNH LANG VẬN HÀNH TRỌNG ĐIỂM
            </h2>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Mọi tuyến chạy đều được thiết lập trạm dừng chân an toàn, bố trí tài xế kép cho chặng đường dài và theo dõi lộ trình thời gian thực qua vệ tinh.
            </p>
          </div>

          <div className="space-y-16">
            {CORRIDORS.map((c) => (
              <div
                key={c.num}
                className="p-8 sm:p-12 bg-white border border-[#DDD9CF] space-y-6 reveal-on-scroll"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#DDD9CF] pb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-[#FF6A00]">
                      {c.num}
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-3xl text-[#0B0B0B] uppercase">
                      {c.title}
                    </h3>
                  </div>
                  <span className="text-xs font-heading font-bold text-[#FF6A00] uppercase tracking-wider">
                    {c.transit}
                  </span>
                </div>

                <p className="text-base text-[#525252] font-light leading-relaxed">
                  {c.desc}
                </p>

                {/* Sub-routes table */}
                <div className="space-y-2 pt-2 text-xs sm:text-sm">
                  {c.routes.map((rt, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 bg-[#F2F0EA] border border-[#DDD9CF] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <span className="font-medium text-[#0B0B0B]">
                        {rt.from} <strong className="text-[#FF6A00]">→</strong> {rt.to}
                      </span>
                      <span className="text-xs text-[#737373]">
                        {rt.dist} • <strong className="text-[#0B0B0B]">{rt.eta}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 42+ INDUSTRIAL PARKS NETWORK ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              ĐỊA BÀN PHỤC VỤ
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              DANH SÁCH 42+ KHU CÔNG NGHIỆP TRỌNG ĐIỂM
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
              Phương tiện của Tiên Phong lưu thông hàng ngày tại các KCN, thông thạo cổng ra vào, giờ cấm tải nội đô và quy định an toàn của từng ban quản lý KCN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIAL_PARKS.map((ip, idx) => {
              const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
              return (
                <div
                  key={idx}
                  className={`p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll card-hover ${delays[idx % delays.length]}`}
                >
                  <h3 className="font-heading font-bold text-base text-[#FF6A00] uppercase">
                    {ip.province}
                  </h3>
                  <p className="text-sm text-[#E5E5E5] font-light leading-relaxed">
                    {ip.list}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-12 bg-[#141414] border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-heading font-bold text-xl text-white uppercase">
                BẠN CẦN VẬN CHUYỂN TỚI TUYẾN ĐƯỜNG KHÁC?
              </h3>
              <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                Chúng tôi cung cấp phương án giao hàng Door-to-Door tận nơi tại 63 tỉnh thành theo yêu cầu hợp đồng nguyên tắc B2B.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
            >
              <span>YÊU CẦU BÁO GIÁ TUYẾN</span>
              <span className="arrow-move ml-1.5 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
