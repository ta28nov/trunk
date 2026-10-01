import Link from "next/link";
import RouteStoryteller from "../components/RouteStoryteller";

export const metadata = {
  title: "Mạng Lưới Tuyến Đường & Hành Lang Trọng Điểm | Vận Tải Tiên Phong",
  description:
    "Sơ đồ trực quan hành lang vận tải đường bộ: Đông Nam Bộ 1.5H - 3.5H, trục Bắc - Nam 48H cam kết, cụm cảng Cát Lái & Cái Mép và hơn 42 khu công nghiệp trọng điểm.",
};

const INDUSTRIAL_PARKS = [
  {
    province: "Bình Dương (12 KCN)",
    list: "VSIP 1, VSIP 2, Sóng Thần 1-2-3, Mỹ Phước 1-2-3, Nam Tân Uyên, Bàu Bàng, Tân Đông Hiệp, Rạch Bắp.",
  },
  {
    province: "Đồng Nai (10 KCN)",
    list: "Amata, Biên Hòa 1-2, Nhơn Trạch 1-6, KCN Long Đức, Giang Điền, Long Thành, Lộc An — Bình Sơn.",
  },
  {
    province: "TP. Hồ Chí Minh (8 KCN/KCX)",
    list: "KCX Tân Thuận, KCX Linh Trung 1-2, KCN Hiệp Phước, Tân Bình, Vĩnh Lộc, Tây Bắc Củ Chi, Lê Minh Xuân.",
  },
  {
    province: "Bà Rịa — Vũng Tàu (5 KCN)",
    list: "Phú Mỹ 1-2-3, KCN Cái Mép, KCN Đông Xuyên, KCN Đất Đỏ, KCN Châu Đức Sonadezi.",
  },
  {
    province: "Long An & Miền Tây (7 KCN)",
    list: "Thuận Đạo, Long Hậu, Đức Hòa 1-3, Tân Đức, Hải Sơn, KCN Trà Nóc (Cần Thơ).",
  },
];

export default function RoutesPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            HÀNH LANG VẬN TẢI CHIẾN LƯỢC
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            MẠNG LƯỚI
            <span className="block text-[#FF6A00]">TUYẾN ĐƯỜNG</span>
            <span className="block text-white">&amp; TIẾN TRÌNH VẬN HÀNH.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Sơ đồ trực quan hóa lộ trình các chuyến hàng công nghiệp. Theo dõi thời gian thực, cam kết ETA đúng hẹn và mạng lưới kết nối trực tiếp hơn 42 khu công nghiệp trọng điểm phía Nam.
          </p>
        </div>
      </section>

      {/* ═══ INTERACTIVE ROUTE STORYTELLER (§20, §21) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TRỰC QUAN HÓA TIẾN TRÌNH CHUYẾN ĐI
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CÁC MỐC TRẠM TRÊN TỪNG HÀNH LANG
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Chọn từng hành lang để khám phá lộ trình chi tiết từ khâu xuất bến, kiểm định tải trọng đến bàn giao chứng từ POD tận kho nhận.
            </p>
          </div>

          <RouteStoryteller />
        </div>
      </section>

      {/* ═══ 42+ INDUSTRIAL PARKS DIRECTORY ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              ĐỊA BÀN PHỤC VỤ TRỰC TIẾP
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              KẾT NỐI 42+ KHU CÔNG NGHIỆP TRỌNG ĐIỂM
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Tài xế của Tiên Phong thuộc lòng cung đường ra vào, cổng kiểm soát an ninh và quy định giờ cấm tải tại các KCN lớn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIAL_PARKS.map((kcn, idx) => {
              const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300"];
              return (
                <div
                  key={idx}
                  className={`p-8 bg-[#0B0B0B] border border-[#2A2A2A] space-y-4 reveal-on-scroll card-hover ${delays[idx % delays.length]}`}
                >
                  <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-3">
                    <h3 className="font-heading font-bold text-base text-white uppercase">
                      {kcn.province}
                    </h3>
                    <span className="text-[10px] font-mono text-[#FF6A00]">
                      Trực chiến
                    </span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                    {kcn.list}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#070707] border-t border-[#1F1F1F] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
            CẦN XE THEO TUYẾN RIÊNG?
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            TƯ VẤN LỘ TRÌNH VÀ BÁO GIÁ CƯỚC TỐT NHẤT
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>YÊU CẦU ĐIỀU XE THEO TUYẾN</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
