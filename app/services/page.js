import Link from "next/link";

export const metadata = {
  title: "Dịch Vụ Vận Tải | Vận Tải Tiên Phong",
  description:
    "4 dịch vụ vận tải nòng cốt: Bao xe nguyên chuyến FTL, ghép hàng định tuyến Bắc - Nam, di dời & cẩu hạ máy móc xưởng, kéo container cảng Cát Lái & Cái Mép.",
};

const SERVICES = [
  {
    id: "ftl",
    title: "Bao Xe Nguyên Chuyến (Full Truckload — FTL)",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    desc: "Phương án vận chuyển tối ưu dành riêng cho các doanh nghiệp sản xuất cần giao nhận khối lượng lớn, yêu cầu bảo mật nghiêm ngặt và không muốn ghép chung với bất kỳ lô hàng nào khác.",
    features: [
      "Niêm phong kẹp chì seal điện tử / chì dây cáp trước khi xe rời cổng kho gửi.",
      "Xe có mặt tại điểm bốc hàng sau 30 phút nhận lệnh điều phối tại Bình Dương, TP.HCM, Đồng Nai.",
      "Lộ trình chạy thẳng không dừng đỗ trả hàng phụ, cam kết giờ giao nhận chính xác đến từng phút.",
      "Phù hợp với hàng nguyên vật liệu xuất nhập khẩu, dây chuyền thành phẩm, hàng siêu thị.",
    ],
    highlight: "Cam kết bồi thường 100% giá trị hàng hóa nếu xảy ra sự cố do vận chuyển.",
  },
  {
    id: "ltl",
    title: "Vận Tải Ghép Hàng Định Tuyến Bắc — Nam",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    desc: "Giải pháp tiết kiệm chi phí tối đa cho các đơn hàng từ 500kg đến 5 tấn với lịch trình xe xuất bến cố định 2 chuyến mỗi ngày dọc theo trục Quốc lộ 1A.",
    features: [
      "Kho gom và phân loại hàng hóa chuyên nghiệp tại KCN Sóng Thần và KCN Hòa Cầm (Đà Nẵng).",
      "Phân nhóm hàng khoa học: hàng nặng lót sàn, hàng nhẹ xếp trên bửng, không chèn ép va đập.",
      "Thời gian giao nhận tuyến TP.HCM — Đà Nẵng: 24 - 28 Giờ; TP.HCM — Hà Nội: 44 - 48 Giờ.",
      "Hỗ trợ giao hàng tận nơi (Door-to-Door) tại hơn 40 tỉnh thành trên tuyến đường.",
    ],
    highlight: "Lịch xuất bến cố định 12:00 trưa và 20:00 tối mỗi ngày, không phụ thuộc vào việc gom đủ xe.",
  },
  {
    id: "rigging",
    title: "Di Dời & Cẩu Hạ Máy Móc Nhà Xưởng",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
    desc: "Dịch vụ trọn gói từ khảo sát kết cấu nền móng nhà xưởng, lập phương án chằng buộc chịu lực đến bốc dỡ, vận chuyển và đưa máy móc CNC vào đúng vị trí lắp đặt.",
    features: [
      "Đội xe cẩu tự hành 5T — 15T cùng hệ thống rùa đẩy tải nặng, kích thủy lực 50T chuyên dụng.",
      "100% kỹ sư điều hành và tài xế cẩu có thẻ an toàn lao động nhóm 3 do Cục An Toàn Lao Động cấp.",
      "Chằng buộc máy móc bằng dây cáp xích tăng đơ chịu lực 10 Tấn cùng đệm gỗ chống trầy xước sơn.",
      "Bảo hiểm rủi ro máy móc thiết bị trị giá lên đến 10 Tỷ VNĐ cho mỗi dự án di dời xưởng.",
    ],
    highlight: "Đã thực hiện hơn 120 dự án di dời dây chuyền công nghiệp tại VSIP, Amata, Long Thành.",
  },
  {
    id: "container",
    title: "Vận Chuyển Container Cảng Biển & ICD (FCL)",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    desc: "Dịch vụ kéo vỏ container, rút ruột hàng hóa và giao hàng xuất nhập khẩu tại các cụm cảng quốc tế lớn nhất miền Nam.",
    features: [
      "Trực chiến liên tục tại Cảng Cát Lái, Cảng Quốc tế Cái Mép (CMIT, SSIT, TCIT) và ICD Sóng Thần.",
      "Theo dõi sát sao thời hạn Closing Time và Cut-off Time của từng hãng tàu biển quốc tế.",
      "Xử lý nhanh chóng các thủ tục mượn vỏ, hạ bãi, cân hàng VGM và kiểm hóa hải quan.",
      "Đội ngũ tài xế có đầy đủ thẻ ra vào cổng cảng, chứng chỉ bốc xếp hàng container an toàn.",
    ],
    highlight: "Không phát sinh chi phí lưu bãi container (Demurrage/Detention) do lỗi trễ xe của Tiên Phong.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tiếp Nhận & Báo Giá Trong 15 Phút",
    desc: "Tiếp nhận quy cách hàng, cự ly và khảo sát địa hình bốc trả để gửi báo giá trọn gói không phát sinh chi phí.",
  },
  {
    step: "02",
    title: "Điều Xe Trực Tiếp & Ký Hợp Đồng",
    desc: "Hệ thống điều phối xe gần nhất đến điểm hẹn, gửi biển số xe, thông tin tài xế và hợp đồng nguyên tắc.",
  },
  {
    step: "03",
    title: "Bốc Hàng & Chằng Buộc Chuyên Dụng",
    desc: "Tài xế có mặt đúng giờ, hỗ trợ kiểm đếm kiện hàng, chụp ảnh hiện trạng và chằng buộc bằng cáp siết tiêu chuẩn.",
  },
  {
    step: "04",
    title: "Giám Sát GPS & Cập Nhật Hành Trình",
    desc: "Hệ thống giám sát định vị 24/7, cập nhật lộ trình xe chạy liên tục qua Zalo cho bộ phận logistics của khách hàng.",
  },
  {
    step: "05",
    title: "Giao Hàng & Bàn Giao Biên Bản POD",
    desc: "Giao hàng an toàn tại kho nhận, ký biên bản nghiệm thu đầy đủ và gửi hóa đơn VAT điện tử trong ngày.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80"
          alt="Cảng biển logistics container"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            HỆ THỐNG DỊCH VỤ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              4 TRỤ CỘT VẬN TẢI DOANH NGHIỆP
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Bao xe nguyên chuyến FTL, ghép hàng định tuyến Bắc — Nam, di dời &amp; cẩu hạ máy móc xưởng, kéo container cảng Cát Lái &amp; Cái Mép. Cam kết SLA đền bù 100%.
          </p>
        </div>
      </section>

      {/* ═══ 4 MAIN SERVICES (Clean White, Split-Screen Alternating, Long Vertical Scroll) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-32">
        {SERVICES.map((srv, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={srv.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-on-scroll"
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover img-hover-zoom"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight leading-tight">
                  {srv.title}
                </h2>

                <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                  {srv.desc}
                </p>

                <div className="space-y-4 pt-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3.5 text-base md:text-lg text-slate-700 font-light">
                      <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-orange-50 rounded-2xl border border-orange-200 text-sm md:text-base text-orange-950 font-medium leading-relaxed">
                  {srv.highlight}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:0918456789"
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                    Tư Vấn Dịch Vụ Này
                  </a>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    Xem Bảng Giá Cước
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══ 5-STEP VERTICAL WORKFLOW (Spacious Vertical Process, Not Squeezed Horizontal) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              QUY TRÌNH GIAO NHẬN VẬN TẢI
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Kiểm soát chặt chẽ bằng phần mềm định vị GPS và biên bản bàn giao POD đầy đủ cho từng chuyến hàng.
            </p>
          </div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white font-heading font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                  {p.step}
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 uppercase">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SLA COMMITMENT BANNER (Clean Light Gray) ═══ */}
      <section className="py-24 bg-slate-100 border-t border-slate-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase text-slate-900 tracking-tight">
              Cam Kết SLA Bồi Thường Rõ Ràng Trong Hợp Đồng
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Trễ hạn giao hàng bồi thường 500.000 VNĐ/giờ • Hư hỏng hàng hóa đền bù 100% giá trị thị trường theo chính sách bảo hiểm PVI.
            </p>
          </div>
          <a
            href="tel:0918456789"
            className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 shrink-0 transition-all hover:scale-105"
          >
            Đăng Ký Vận Chuyển: 0918.456.789
          </a>
        </div>
      </section>
    </div>
  );
}
