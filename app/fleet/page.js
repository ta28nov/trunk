import Link from "next/link";

export const metadata = {
  title: "Đội Xe Trực Chiến & Thông Số Kỹ Thuật | Vận Tải Tiên Phong",
  description:
    "Hệ thống 52 phương tiện vận tải chính chủ: Đầu kéo container 40ft, xe tải mui bạt 8T - 15T (9.6m), xe cẩu tự hành 10T, rơ-moóc lùn 50T. 100% chuẩn Euro 5.",
};

const VEHICLES = [
  {
    num: "01",
    name: "Đầu Kéo Container Hyundai Xcient 440HP / Hino 700",
    category: "Đầu Kéo & Rơ-Moóc",
    payload: "32 TẤN",
    volume: "Chở cont 20ft (2 cont) hoặc cont 40ft/45ft HQ",
    dimensions: "Moóc xương / Moóc sàn 40ft & 45ft chiều dài 12.4m",
    engine: "Động cơ D6HA 440 mã lực, tiêu chuẩn khí thải Euro 5",
    safety: "Phanh ABS/EBS, hệ thống giám sát hành trình GPS kết nối Tổng cục Đường bộ 24/7, camera cabin 2 góc ghi hình liên tục.",
    cargoSuitability: "Container hàng xuất nhập khẩu tại cảng, thép tấm, cấu kiện sắt thép công nghiệp nặng.",
    serviceSuitability: "Tuyến cảng biển Cát Lái, Cái Mép, ICD Sóng Thần, Long Bình và các KCN liên tỉnh toàn quốc.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK5xQ6jX_wwdHDs8aIaAoZOnW60QWnDbK6eMXaXzkuIzyXQBde8VNH9U2BckSlFSio-l6NIpBgxvhY6Q637SsUdR3n37KSyF01h_4O2HjiTsdjHjdnd2YKVUXfSV853YhvzbD52_WJcQGyRqlMFt9K5IsxnVdLI-45X1JVwpelHldlPyALL_F-uApJo9N_OoTd7VVycR7ruo6L-OC2KTypKCRuAtbtkjSPXPh8r6H18ZJIAPdOtN6aGA",
  },
  {
    num: "02",
    name: "Xe Tải Thùng Mui Bạt 9.6M — Hino 3 Chân (15 Tấn)",
    category: "Xe Tải Thùng Đường Dài",
    payload: "15 TẤN",
    volume: "57 — 60 m³",
    dimensions: "Dài 9.60m × Rộng 2.38m × Cao 2.60m",
    engine: "Động cơ Hino J08E, công suất 280 mã lực, Euro 5",
    safety: "Bạt phủ 3 lớp chống thấm dột tuyệt đối, bửng nhôm nâng hạ hàng, đai dù tăng đơ chằng siết pallet theo từng hàng.",
    cargoSuitability: "Hàng tiêu dùng, hạt nhựa nguyên sinh, bao bì carton, hàng may mặc đóng kiện, pallet tiêu chuẩn.",
    serviceSuitability: "Tuyến trục huyết mạch Bắc — Nam (TP.HCM — Đà Nẵng — Hà Nội) và liên tỉnh Đông Nam Bộ.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0rvOMRK47VMcz8ve8ixTyKIekrc3AqSXQ5KXj5-RqPLjBZXJ-xfixufp0x5VVX9ZewJh43nHYkIyu97wqrpHABQcGqDg3OhAfsc4mJSmtgGqUAmjlYNJH-nuogQegPXzl2GmkhXd7e_p9FLzanIuCAoGV9snfT9lV6wKrdJ5FxD8Ti_Y497zm-4UdzFOIAI4umWELRPxS2jbCl2N84qVIWZ7I4kRP-23jBynHjr2sDqkrZN4pKpuBlA",
  },
  {
    num: "03",
    name: "Xe Tải Thùng Mui Bạt 8 Tấn — Isuzu Forward",
    category: "Xe Tải Phân Phối Vùng",
    payload: "8 TẤN",
    volume: "47 m³",
    dimensions: "Dài 8.20m × Rộng 2.35m × Cao 2.45m",
    engine: "Động cơ Isuzu 4HK1-TCS Turbo Diesel Common Rail Euro 5",
    safety: "Hệ thống treo lá nhíp chịu tải nặng, sàn xe lót thép nhám chống trượt, bạt che phủ kín 100%.",
    cargoSuitability: "Nguyên vật liệu sản xuất công nghiệp, hóa chất đóng phi, sơn nước, linh kiện phụ trợ nhà xưởng.",
    serviceSuitability: "Giao nhận nội vùng TP.HCM, Bình Dương, Đồng Nai, Tây Ninh, Long An và Tiền Giang.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
  },
  {
    num: "04",
    name: "Xe Cẩu Tự Hành 10T Soosan — Nền Hyundai HD320",
    category: "Xe Cẩu Chuyên Dùng",
    payload: "CẨU 10 TẤN / CHỞ 12 TẤN",
    volume: "Thùng chở hàng dài 8.5m",
    dimensions: "Tầm vươn cần cẩu tối đa 20.5m • Tải cẩu tại chân cần 10 tấn",
    engine: "Động cơ D6CA 380 mã lực, 4 chân tú thủy lực chữ H chịu lực vững chắc",
    safety: "Cảm biến ngắt quá tải tự động, khóa hãm cáp an toàn, cáp xích tăng đơ chịu lực 10 tấn chuyên dụng.",
    cargoSuitability: "Cẩu lắp đặt máy móc cơ khí CNC, máy ép nhựa, cẩu sắt thép hình và lắp dựng kết cấu nhà tiền chế.",
    serviceSuitability: "Di dời nhà xưởng và phục vụ công trình xây dựng tại các KCN VSIP, Amata, Nhơn Trạch, Mỹ Phước.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDchGkaWR5gJFXRwQLvzNGy2HzUrLWJXVrSxpyO95ToXlqauFIo1OTr9UBZtOcUNGUeu2xaapG6r0hvF-4m--o9x3n7_XEreROPJsjwUo5S4rO_vre6dK2_diq-7LeLNWc_2loyGxaozUX_V-sci6dSh9hb1Y1XoQEEC2reVI7XXdaRvTvQfZsy48pddzBHG34oZLNdnySVg3PdYheJiqSggqfM7UimUZwsbrhzN1sah4YcyalTIBuvnw",
  },
  {
    num: "05",
    name: "Xe Thùng Kín Bửng Nâng Thủy Lực 5T — 10T",
    category: "Thùng Kín An Ninh Cao",
    payload: "5 TẤN — 10 TẤN",
    volume: "45 — 55 m³",
    dimensions: "Dài 7.5m — 9.5m × Rộng 2.35m × Cao 2.5m",
    engine: "Isuzu / Hino Euro 5, thùng inox 304 dập sóng kín nước 100%",
    safety: "Khóa seal chì niêm phong điện tử, sàn dán cao su kỹ thuật giảm xóc chấn động, bửng nâng tải trọng 1.5 tấn.",
    cargoSuitability: "Linh kiện điện tử bán dẫn, thiết bị y tế chính xác, hàng vi mạch, hàng có giá trị kinh tế cao.",
    serviceSuitability: "Chuyên tuyến giao nhận giữa các khu công nghệ cao TP.HCM, KCN VSIP và sân bay Tân Sơn Nhất.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbqZAiGg5xHKoF1KqtTUj1cxJYUjNvv2JRgntuXwRQ_AGbTXeRCSIzZyW9ve-z0A6Fgss2vUmZdCbGcDJqfQNpCC2TOd2GjPgbwpX2YKnDWKOjKa_HkXtv3DztLussXth9Ig61VZneQoXnjUIn_4ag6u-GOIiqqxGqM1fTCtjfeiOzKh1zPrAbaPch1YjajBEO-gc45bVZSQhbwYGtnQ75zplLi_4wdZxxEOQ3D0hL7NnYBnqX5Zo0A",
  },
  {
    num: "06",
    name: "Rơ-Moóc Lùn 3 Trục Chở Quá Khổ Quá Tải (50 Tấn)",
    category: "Siêu Trường Siêu Trọng",
    payload: "50 TẤN",
    volume: "Sàn lùn mở rộng chở hàng cồng kềnh",
    dimensions: "Mặt sàn cách mặt đất 0.85m, chiều dài sàn mở rộng tới 14m",
    engine: "Đầu kéo Man / Shacman 480 mã lực dẫn động 6x4 tải nặng",
    safety: "Giấy phép lưu hành đặc biệt của Cục Đường Bộ, xe hộ tống dẫn đường và đèn cảnh báo chớp nháy.",
    cargoSuitability: "Lò hơi công nghiệp, máy nghiền đá, máy đóng cọc, bồn áp lực và cấu kiện bê tông đúc sẵn.",
    serviceSuitability: "Vận chuyển dự án công trình năng lượng, thủy điện, trạm biến áp và nhà máy nhiệt điện.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnUtZ941yLn33tHkUUAGsDU1V-958h-SpPgeEqlZCeOi19Vk9jlD8s5VEs08PCqtZjoDjgM0OwdVEAlX5QVqrcAXKtYtxe-W3q0US5Mszt4CNrsN5dZn_zKxGAnRwccFHSMEurWyTdr8RFMIrqDRRLz3tKFWLJzEgtXogn2x39PO0fcePuRz_zzBC2GSoHRz4hswHDcHEMo8FWnb6vLsmen1iTDI68boZOIpotGleYfQQGzZPxcXt-cQ",
  },
];

const INSPECTION_STEPS = [
  { item: "Hệ Thống Phanh & Bình Khí Nén", desc: "Kiểm tra áp suất bình khí nén, đường ống dẫn hơi, độ dày má phanh và thử lực phanh khẩn cấp." },
  { item: "Lốp Xe & Áp Suất Bánh", desc: "Đo độ sâu gai lốp tối thiểu 3mm, siết chặt ốc tắc-kê bánh xe và kiểm tra lốp dự phòng." },
  { item: "Hệ Thống Đèn & Cảnh Báo", desc: "Kiểm tra đèn pha/cốt, đèn xi-nhan, đèn phanh, đèn sương mù và dải phản quang quanh thùng xe." },
  { item: "Khung Gầm & Nhíp Lá Chịu Lực", desc: "Kiểm tra rotuyn lái, thước lái trợ lực thủy lực, nhíp lá chịu tải và giảm chấn trước sau." },
  { item: "Thiết Bị Giám Sát Hành Trình", desc: "Xác nhận tín hiệu truyền dữ liệu GPS và camera cabin trực tiếp về Tổng cục Đường bộ." },
  { item: "Trang Bị Chằng Buộc Kỹ Thuật", desc: "Kiểm tra bạt phủ 3 lớp không rách, dây đai dù tăng đơ bản 50mm, xích siết 10T và đệm lót sàn." },
];

export default function FleetPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            HỒ SƠ PHƯƠNG TIỆN
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            ĐỘI XE TRỰC CHIẾN
            <span className="block text-[#FF6A00]">52 ĐẦU XE CHÍNH CHỦ.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            100% phương tiện vận tải thuộc sở hữu trực tiếp của Tiên Phong, đạt tiêu chuẩn khí thải Euro 5, kiểm định an toàn định kỳ và tích hợp thiết bị giám sát hành trình GPS kết nối vệ tinh 24/7.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-4">
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">52 XE</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Chính Chủ Đầu Tư</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">15.000M²</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Bãi Xe Sóng Thần</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">EURO 5</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Chuẩn Khí Thải</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">18 BƯỚC</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Kiểm Định An Toàn</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VEHICLES PRODUCT SHOWCASE ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-32 sm:space-y-44">
          {VEHICLES.map((v, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={v.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start reveal-on-scroll"
              >
                {/* Photo Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden h-80 sm:h-96 md:h-[480px] w-full border border-[#DDD9CF]">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover img-editorial"
                    />
                    <div className="absolute top-4 right-4 bg-[#0B0B0B] text-[#FF6A00] font-heading font-black text-xs uppercase px-3 py-1.5">
                      {v.payload}
                    </div>
                  </div>
                </div>

                {/* Specs Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-heading font-black text-5xl sm:text-6xl text-[#FF6A00] block">
                      {v.num}
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0B0B0B] uppercase leading-tight">
                      {v.name}
                    </h2>
                    <span className="text-xs uppercase tracking-wider text-[#737373] font-heading font-semibold block">
                      Phân loại: {v.category}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Kích Thước Thùng &amp; Thể Tích:
                      </strong>
                      <span className="text-[#525252] font-light">{v.dimensions} — {v.volume}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Động Cơ &amp; Tiêu Chuẩn Kỹ Thuật:
                      </strong>
                      <span className="text-[#525252] font-light">{v.engine}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Trang Bị An Toàn:
                      </strong>
                      <span className="text-[#525252] font-light">{v.safety}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Hàng Hóa &amp; Tuyến Chạy Phù Hợp:
                      </strong>
                      <span className="text-[#525252] font-light">{v.cargoSuitability}. {v.serviceSuitability}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="tel:0918456789"
                      className="btn-arrow-hover px-8 py-4 bg-[#0B0B0B] hover:bg-[#FF6A00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>ĐIỀU ĐỘNG PHƯƠNG TIỆN NÀY</span>
                      <span className="arrow-move ml-2 font-bold">→</span>
                    </a>
                    <Link
                      href="/pricing"
                      className="text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0B] hover:text-[#FF6A00] transition-colors"
                    >
                      Xem khung cước →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══ WORKSHOP & 18-STEP SAFETY SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              KIỂM ĐỊNH KỸ THUẬT NỘI BỘ
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              QUY TRÌNH KIỂM TRA 18 BƯỚC TRƯỚC KHI XUẤT BÃI
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
              Mỗi phương tiện đều được đội ngũ kỹ sư tại xưởng cơ khí Sóng Thần kiểm định toàn diện để loại bỏ triệt để rủi ro trên đường dài.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSPECTION_STEPS.map((step, idx) => {
              const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
              return (
                <div
                  key={idx}
                  className={`p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll card-hover ${delays[idx % delays.length]}`}
                >
                  <span className="font-heading font-black text-xl text-[#FF6A00] block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white uppercase">
                    {step.item}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-12 bg-[#141414] border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-heading font-bold text-xl text-white uppercase">
                BÃI XE TRUNG TÂM 15.000M² &amp; XƯỞNG CƠ KHÍ SÓNG THẦN
              </h3>
              <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                Trang bị trạm cân điện tử 80 tấn, hệ thống camera hồng ngoại 360 độ lưu trữ 90 ngày và kho phụ tùng chính hãng Hino, Hyundai, Isuzu luôn có sẵn.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
            >
              <span>ĐẶT LỊCH XE NGAY</span>
              <span className="arrow-move ml-1.5 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
