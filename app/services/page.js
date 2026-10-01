import Link from "next/link";

export const metadata = {
  title: "Dịch Vụ Vận Tải | Vận Tải Tiên Phong",
  description:
    "4 dịch vụ vận tải nòng cốt: Bao xe nguyên chuyến FTL, ghép hàng định tuyến Bắc - Nam, di dời & cẩu hạ máy móc xưởng, kéo container cảng Cát Lái & Cái Mép.",
};

const SERVICES = [
  {
    id: "ftl",
    icon: "front_loader",
    title: "Bao Xe Nguyên Chuyến (Full Truckload — FTL)",
    badge: "Dịch Vụ Chủ Lực",
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
    icon: "sync_alt",
    title: "Vận Tải Ghép Hàng Định Tuyến Bắc — Nam",
    badge: "Lịch Chạy Hàng Ngày",
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
    icon: "precision_manufacturing",
    title: "Di Dời & Cẩu Hạ Máy Móc Nhà Xưởng",
    badge: "Kỹ Thuật Cao",
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
    icon: "directions_boat",
    title: "Vận Chuyển Container Cảng Biển & ICD (FCL)",
    badge: "Trực Chiến 24/7",
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
    title: "Tiếp Nhận & Khảo Sát",
    desc: "Chủ hàng gọi hotline hoặc điền form. Điều phối viên tiếp nhận quy cách hàng, cự ly và gửi báo giá chính xác trong 15 phút.",
  },
  {
    step: "02",
    title: "Điều Xe & Ký Hợp Đồng",
    desc: "Hệ thống phát lệnh điều xe gần nhất qua app điều vận nội bộ. Gửi thông tin biển số xe, số điện thoại tài xế và hợp đồng ký số.",
  },
  {
    step: "03",
    title: "Bốc Hàng & Chằng Buộc",
    desc: "Tài xế có mặt đúng giờ, hỗ trợ kiểm đếm số lượng, chụp ảnh hiện trạng hàng và chằng buộc chắc chắn theo đúng quy chuẩn an toàn.",
  },
  {
    step: "04",
    title: "Giám Sát Hành Trình",
    desc: "Hệ thống gửi link định vị GPS cho khách hàng theo dõi trực tiếp vị trí xe, tốc độ di chuyển và thời gian dự kiến đến nơi 24/7.",
  },
  {
    step: "05",
    title: "Giao Hàng & Nghiệm Thu",
    desc: "Bàn giao tận nơi, ký biên bản giao nhận (POD) đầy đủ. Xuất hóa đơn VAT điện tử và đối soát công nợ rõ ràng.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Cảng biển logistics container"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Dịch Vụ Vận Tải Toàn Diện & Hậu Cần
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            HỆ THỐNG DỊCH VỤ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1">
              4 TRỤ CỘT VẬN TẢI CHUYÊN NGHIỆP
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Bao xe nguyên chuyến FTL, ghép hàng định tuyến Bắc — Nam, di dời & cẩu hạ máy móc xưởng, kéo container cảng Cát Lái & Cái Mép. Cam kết SLA đền bù 100%.
          </p>
        </div>
      </section>

      {/* ═══ 4 MAIN SERVICES DETAIL ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className={`bento-card p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start group ${
                index % 2 === 1 ? "lg:flex-row-reverse bg-slate-50/50" : ""
              }`}
            >
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                  </div>
                  <div>
                    <span className="badge-pill bg-orange-50 text-orange-600 border border-orange-200">
                      {srv.badge}
                    </span>
                    <h2 className="font-heading font-bold text-xl md:text-2xl text-navy-900 uppercase mt-1">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>

                <div className="space-y-2 pt-2">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="material-symbols-outlined text-green-600 text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-orange-50/80 rounded-xl border border-orange-200/80 text-xs text-orange-950 font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-600 text-lg shrink-0">
                    verified
                  </span>
                  <span>{srv.highlight}</span>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="tel:0918456789"
                    className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow hover:shadow-orange-500/25"
                  >
                    Tư Vấn Điều Xe
                  </a>
                  <Link
                    href="/pricing"
                    className="px-5 py-2.5 border border-slate-300 hover:border-slate-400 text-navy-900 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Xem Bảng Giá
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full bg-slate-50 p-6 rounded-xl border border-slate-200/80 shadow-inner space-y-4">
                <h3 className="font-heading font-bold text-xs text-navy-900 uppercase tracking-wider">
                  Tiêu Chuẩn Thực Thi Dịch Vụ:
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-slate-400 uppercase font-semibold block text-[10px]">Thời Gian Tiếp Nhận:</span>
                    <span className="font-bold text-navy-900 mt-1 block">Dưới 15 Phút</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-slate-400 uppercase font-semibold block text-[10px]">Phương Tiện Thực Hiện:</span>
                    <span className="font-bold text-navy-900 mt-1 block">Xe Chính Chủ 100%</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-slate-400 uppercase font-semibold block text-[10px]">Bảo Hiểm Hàng Hóa:</span>
                    <span className="font-bold text-orange-600 mt-1 block">Tối đa 10 Tỷ VNĐ</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="text-slate-400 uppercase font-semibold block text-[10px]">Hóa Đơn Chứng Từ:</span>
                    <span className="font-bold text-navy-900 mt-1 block">Xuất Trong 24 Giờ</span>
                  </div>
                </div>

                <div className="p-3 bg-navy-900 text-white rounded-lg text-xs flex items-center justify-between">
                  <span className="text-slate-300">Cần giải pháp riêng cho dự án lớn?</span>
                  <a href="tel:0903123456" className="text-orange-400 font-bold hover:underline">
                    Gọi Điều Hành
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 5-STEP PROCESS ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Chuẩn Hóa Chất Lượng
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
              Quy Trình Giao Nhận Vận Tải 5 Bước
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              Kiểm soát chặt chẽ bằng phần mềm telemetry và biên bản nghiệm thu POD vật lý.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="bento-card p-5 flex flex-col justify-between gap-4 group"
              >
                <div>
                  <span className="font-heading font-bold text-2xl text-orange-500 block mb-1 group-hover:scale-110 transition-transform origin-left">
                    {p.step}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-navy-900 uppercase">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-1/3 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMITMENT BAR ═══ */}
      <section className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl uppercase">
              Cam Kết SLA Bồi Thường Rõ Ràng Trong Hợp Đồng
            </h3>
            <p className="text-xs text-slate-300">
              Trễ hạn giao hàng bồi thường 500.000 VNĐ/giờ • Hư hỏng hàng hóa đền bù 100% giá trị thị trường.
            </p>
          </div>
          <a
            href="tel:0918456789"
            className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0"
          >
            Đăng Ký Vận Chuyển: 0918.456.789
          </a>
        </div>
      </section>
    </div>
  );
}
