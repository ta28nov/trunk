import Link from "next/link";

export const metadata = {
  title: "Dịch Vụ Vận Tải Đường Bộ | Vận Tải Tiên Phong",
  description:
    "Hệ thống dịch vụ vận tải chuyên biệt cho doanh nghiệp sản xuất: Bao xe nguyên chuyến FTL, ghép hàng Bắc Nam, di dời máy móc nhà xưởng, kéo container cảng Cát Lái & Cái Mép.",
};

const SERVICES_DETAILED = [
  {
    num: "01",
    id: "ftl",
    title: "Bao Xe Nguyên Chuyến (Full Truckload — FTL)",
    tagline: "Toàn quyền sử dụng tải trọng thùng xe • Tuyến chạy trực tiếp không dừng",
    desc: "Phương án vận chuyển tối ưu dành riêng cho các doanh nghiệp sản xuất cần giao nhận khối lượng lớn, yêu cầu bảo mật cao và không muốn ghép chung với bất kỳ lô hàng nào khác. Phương tiện được điều động riêng cho bạn, niêm phong kẹp chì seal điện tử tại cổng xuất và chạy thẳng đến điểm đích mà không dừng đỗ trả hàng phụ.",
    suitableCargo: "Thành phẩm xuất nhập khẩu, hạt nhựa bao bì, dây chuyền máy móc cơ khí, tôn thép cuộn, hàng may mặc đóng kiện.",
    vehicleType: "Xe tải mui bạt 8T, 15T (9.6m), Đầu kéo container 40ft/45ft hoặc xe thùng kín chuyên dụng.",
    coverage: "Tất cả các tỉnh thành Đông Nam Bộ, Miền Tây, Tây Nguyên và trục xuyên suốt Bắc — Nam.",
    process: "Tiếp nhận yêu cầu → Điều xe sau 30 phút → Bấm seal niêm phong → Giao hàng nguyên đai nguyên kiện và bàn giao biên bản POD.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    id: "ltl",
    title: "Vận Tải Ghép Hàng Định Tuyến Bắc — Nam",
    tagline: "Lịch xuất bến cố định 2 chuyến mỗi ngày • Tiết kiệm 30% chi phí",
    desc: "Giải pháp vận chuyển kinh tế cho các đơn hàng từ 500kg đến 5 tấn dọc theo trục Quốc lộ 1A. Chúng tôi gom hàng tại tổng kho Sóng Thần (Bình Dương) và phân loại khoa học: hàng nặng lót sàn, hàng nhẹ xếp tầng trên nhằm triệt tiêu tối đa rủi ro chèn ép móp méo.",
    suitableCargo: "Hàng tiêu dùng nhanh, vật liệu phụ trợ đóng thùng, máy móc cơ khí cỡ nhỏ, hàng phụ tùng linh kiện.",
    vehicleType: "Xe tải thùng mui bạt 9.6M 15 Tấn có bửng nâng và bạt phủ 3 lớp chống thấm dột tuyệt đối.",
    coverage: "Xuất phát từ TP.HCM / Bình Dương giao dọc tuyến đến Đà Nẵng, Huế, Hà Tĩnh, Nghệ An, Thanh Hóa, Hà Nội, Hải Phòng.",
    process: "Giao nhận tại kho gom hoặc tận nơi → Phân nhóm hàng hóa → Xuất bến 12:00 & 20:00 hàng ngày → Bàn giao hàng tận kho nhận.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    id: "machinery",
    title: "Di Dời & Cẩu Hạ Máy Móc Nhà Xưởng",
    tagline: "Khảo sát kết cấu móng • Cáp xích tăng đơ 10 tấn • Bảo hiểm rủi ro 10 tỷ VNĐ",
    desc: "Dịch vụ trọn gói từ khâu khảo sát tải trọng nền xưởng, tính toán tâm tải trọng, lập phương án chằng buộc đến bốc dỡ và đưa thiết bị vào đúng bệ móng. Đội ngũ kỹ thuật viên điều khiển cẩu được đào tạo bài bản và sở hữu chứng chỉ an toàn lao động nhóm 3 do Cục An Toàn cấp.",
    suitableCargo: "Máy phay tiện CNC, máy ép nhựa, máy dập tôn, máy cắt laser, dây chuyền sản xuất công nghiệp nặng.",
    vehicleType: "Đội xe cẩu tự hành 5T — 15T Soosan/Unic, rùa đẩy thủy lực tải nặng 50T, pa-lăng xích và đệm cao su giảm chấn.",
    coverage: "Các khu công nghiệp trọng điểm tại Bình Dương (VSIP, Sóng Thần, Mỹ Phước), Đồng Nai (Amata, Nhơn Trạch) và TP.HCM.",
    process: "Khảo sát thực địa nhà xưởng → Lập bản vẽ biện pháp an toàn → Tiến hành cẩu hạ định vị → Nghiệm thu bàn giao thiết bị.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "04",
    id: "container",
    title: "Vận Chuyển Container Cảng Biển & ICD (FCL)",
    tagline: "Trực chiến Cát Lái & Cái Mép 24/7 • Không trễ hạn Closing Time",
    desc: "Chuyên kéo vỏ cont rỗng, hạ bãi cont hàng tại Cảng Tân Cảng — Cát Lái, Cụm Cảng Quốc Tế Cái Mép (CMIT, TCIT, SSIT) và các cảng cạn ICD Sóng Thần, Long Bình. Chúng tôi theo dõi sát sao thời hạn Cut-off Time của từng hãng tàu biển quốc tế, xử lý nhanh chóng các thủ tục mượn vỏ và kiểm hóa hải quan.",
    suitableCargo: "Container khô tiêu chuẩn 20ft, 40ft, 45ft HQ và container hàng may mặc treo (GOH).",
    vehicleType: "Đầu kéo Hyundai Xcient 440 mã lực và Hino 700 trang bị moóc xương / moóc sàn 40ft.",
    coverage: "Kết nối trực tiếp giữa các cảng biển lớn và hơn 42 khu công nghiệp trên toàn vùng kinh tế trọng điểm phía Nam.",
    process: "Tiếp nhận booking hãng tàu → Rút ruột hoặc hạ bãi → Bấm seal hải quan → Bàn giao phiếu giao nhận container (EIR).",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "05",
    id: "local",
    title: "Vận Tải Nội Vùng Đông Nam Bộ & Các KCN Vệ Tinh",
    tagline: "Đội xe túc trực sẵn sàng lăn bánh sau 30 phút nhận lệnh",
    desc: "Đáp ứng nhu cầu luân chuyển nguyên vật liệu bán thành phẩm giữa các nhà máy vệ tinh, kho gia công và tổng kho phân phối tại TP.HCM, Bình Dương, Đồng Nai, Tây Ninh và Long An. Cam kết giao nhận trong ngày với chi phí cước tối ưu.",
    suitableCargo: "Nguyên phụ liệu sản xuất, phụ tùng gia công cơ khí, bao bì carton, hàng tiêu dùng phục vụ siêu thị.",
    vehicleType: "Xe tải mui bạt 8 Tấn, 15 Tấn và xe thùng kín bửng nâng hạ thủy lực.",
    coverage: "Nội vùng bán kính 150km từ bãi xe trung tâm KCN Sóng Thần.",
    process: "Đặt xe trực tiếp qua tổng đài 0918.456.789 → Xe có mặt nhận hàng → Giao hàng và nhận lại biên bản ký nhận trong ngày.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION (Editorial Layout) ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            HỆ THỐNG DỊCH VỤ VẬN TẢI
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            VẬN CHUYỂN
            <span className="block text-[#FF6A00]">ĐƯỢC THIẾT KẾ RIÊNG</span>
            <span className="block text-white">CHO LÔ HÀNG CỦA BẠN.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Từ các lô hàng container xuất nhập khẩu đòi hỏi bấm seal hải quan đúng giờ tàu chạy đến các dự án di dời dây chuyền máy công nghiệp nặng. Chúng tôi cung cấp các giải pháp vận tải đường bộ chuẩn xác, an toàn và minh bạch chi phí.
          </p>
        </div>
      </section>

      {/* ═══ SERVICES DETAILED EDITORIAL SECTIONS ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-32 sm:space-y-44">
          {SERVICES_DETAILED.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={srv.id}
                id={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start reveal-on-scroll"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden h-80 sm:h-96 md:h-[500px] w-full border border-[#DDD9CF]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover img-editorial"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-heading font-black text-5xl sm:text-6xl text-[#FF6A00] block">
                      {srv.num}
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#0B0B0B] uppercase leading-tight">
                      {srv.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#737373]">
                      {srv.tagline}
                    </p>
                  </div>

                  <p className="text-base text-[#525252] font-light leading-relaxed">
                    {srv.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Loại Hàng Thích Hợp:
                      </strong>
                      <span className="text-[#525252] font-light">{srv.suitableCargo}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Phương Tiện Điều Động:
                      </strong>
                      <span className="text-[#525252] font-light">{srv.vehicleType}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Tuyến Đường Hoạt Động:
                      </strong>
                      <span className="text-[#525252] font-light">{srv.coverage}</span>
                    </div>

                    <div className="p-4 bg-white border border-[#DDD9CF]">
                      <strong className="text-[#0B0B0B] font-semibold block uppercase mb-1">
                        Quy Trình Thực Hiện:
                      </strong>
                      <span className="text-[#525252] font-light">{srv.process}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="btn-arrow-hover px-8 py-4 bg-[#0B0B0B] hover:bg-[#FF6A00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>YÊU CẦU BÁO GIÁ DỊCH VỤ NÀY</span>
                      <span className="arrow-move ml-2 font-bold">→</span>
                    </Link>

                    <a
                      href="tel:0918456789"
                      className="px-6 py-4 bg-transparent border border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white text-[#0B0B0B] font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Hotline: 0918.456.789
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══ BOTTOM CTA BANNER ═══ */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] text-center reveal-on-scroll">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            TƯ VẤN PHƯƠNG ÁN
          </span>
          <h3 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CHƯA CHẮC CHẮN LOẠI PHƯƠNG TIỆN PHÙ HỢP?
          </h3>
          <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed max-w-2xl mx-auto">
            Gửi quy cách kiện hàng và địa chỉ bốc trả hàng. Chuyên viên kỹ thuật điều vận của chúng tôi sẽ tính toán phương án xe tối ưu tải trọng và tiết kiệm chi phí nhất cho bạn.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-arrow-hover inline-block px-10 py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>NHẬN TƯ VẤN KỸ THUẬT 15 PHÚT</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
