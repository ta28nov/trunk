import Link from "next/link";

export const metadata = {
  title: "Hồ Sơ Năng Lực Pháp Lý & Bảo Hiểm | Vận Tải Tiên Phong",
  description:
    "Pháp nhân chính quy Sở GTVT TP.HCM cấp phép 41-GPVT/SGTVT, MST: 0314892039. Hợp đồng bảo hiểm hàng hóa PVI hạn mức 10 Tỷ VNĐ. Tiêu chuẩn Euro 5.",
};

export default function TrustPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Pháp lý vận tải và bảo hiểm hàng hóa"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Sở GTVT Cấp Phép 41-GPVT/SGTVT • MST: 0314892039
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            NĂNG LỰC PHÁP LÝ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-200 mt-1">
              BẢO HIỂM HÀNG HÓA PVI 10 TỶ VNĐ
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Chúng tôi hiểu rằng đối với các tập đoàn đa quốc gia và doanh nghiệp sản xuất, tính hợp pháp và năng lực bảo toàn vốn tài sản là tiêu chí số 1 khi thẩm định nhà xe đối tác.
          </p>
        </div>
      </section>

      {/* ═══ LEGAL TRANSPARENCY ═══ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Tư Cách Pháp Nhân
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy-950 uppercase tracking-tight mt-1">
              HỒ SƠ ĐĂNG KÝ DOANH NGHIỆP CHÍNH THỨC
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bento-card space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-14 h-14 bg-navy-950 text-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-navy-950/20">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base md:text-lg text-navy-950 uppercase">
                    Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Tiên Phong
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Tên quốc tế: TIEN PHONG TRANSPORTATION TRADING SERVICES CO., LTD
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Mã Số Thuế Doanh Nghiệp:</span>
                  <span className="font-heading font-bold text-navy-950 text-base mt-1 block">0314892039</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Giấy Phép Kinh Doanh Vận Tải:</span>
                  <span className="font-heading font-bold text-orange-600 text-base mt-1 block">41-GPVT/SGTVT</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Cơ Quan Cấp Phép:</span>
                  <span className="font-semibold text-navy-950 mt-1 block">Sở Giao Thông Vận Tải TP.HCM</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Vốn Điều Lệ Đăng Ký:</span>
                  <span className="font-semibold text-navy-950 mt-1 block">20.000.000.000 VNĐ</span>
                </div>
                <div className="sm:col-span-2 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Trụ Sở Văn Phòng Chính:</span>
                  <span className="font-semibold text-navy-950 mt-1 block">Số 28 Đường số 8, Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            {/* Quick checklist */}
            <div className="lg:col-span-5 bento-card-dark p-8 rounded-2xl space-y-5 border-navy-700/60">
              <h3 className="font-heading font-bold text-base uppercase text-orange-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping"></span>
                Cam Kết Tuân Thủ Pháp Luật Tuyệt Đối:
              </h3>
              <div className="space-y-3.5 text-xs text-slate-300 font-light">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-400 text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>100% xe tải gắn phù hiệu &quot;XE TẢI&quot; hoặc &quot;XE ĐẦU KÉO&quot; do Sở GTVT cấp, còn hạn hiệu lực.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-400 text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>Thiết bị giám sát hành trình (hộp đen) truyền dữ liệu liên tục về hệ thống máy chủ của Cục Đường Bộ.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-400 text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>Tài xế có hợp đồng lao động chính thức, tham gia BHXH đầy đủ và khám sức khỏe định kỳ 6 tháng/lần.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-400 text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>Xuất hóa đơn giá trị gia tăng (VAT) điện tử hợp lệ gửi về hộp thư kế toán ngay trong ngày hoàn tất đơn hàng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INSURANCE POLICY ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Bảo Vệ Tài Sản Khách Hàng
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy-950 uppercase tracking-tight mt-1">
              CHÍNH SÁCH BẢO HIỂM HÀNG HÓA TOÀN DIỆN — 10 TỶ VNĐ / VỤ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-950 uppercase">
                Đối Tác Bảo Hiểm PVI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Hợp đồng bảo hiểm trách nhiệm dân sự của người vận chuyển được ký kết cùng Tổng Công ty Cổ phần Bảo hiểm Dầu khí Việt Nam (PVI), bảo vệ tối đa 10 Tỷ VNĐ cho mỗi vụ tổn thất.
              </p>
            </div>

            <div className="bento-card space-y-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">published_with_changes</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-950 uppercase">
                Giải Quyết Bồi Thường 7 Ngày
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Khi có sự cố xảy ra, biên bản giám định hiện trường độc lập được lập trong 24 giờ. Cam kết chi trả bồi thường 100% giá trị thiệt hại trong vòng 7 ngày làm việc.
              </p>
            </div>

            <div className="bento-card space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">contract</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-950 uppercase">
                Hợp Đồng Kinh Tế Chặt Chẽ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Điều khoản bồi thường thiệt hại và trách nhiệm bốc dỡ được ghi rõ ràng trong từng hợp đồng vận tải nguyên tắc hoặc đơn hàng lẻ, không dùng câu chữ mơ hồ trốn tránh trách nhiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ B2B PAYMENT TERMS ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Điều Kiện Thương Mại B2B
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy-950 uppercase tracking-tight mt-1">
              CHÍNH SÁCH THANH TOÁN &amp; HẠN MỨC CÔNG NỢ LINH HOẠT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="bento-card space-y-4">
              <h4 className="font-heading font-bold text-sm text-navy-950 uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500">domain</span>
                Dành Cho Doanh Nghiệp Ký Hợp Đồng Năm / Khách Hàng FDI:
              </h4>
              <ul className="space-y-3 text-slate-600 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Thời hạn công nợ thanh toán 30 đến 45 ngày sau khi nhận đầy đủ hóa đơn và biên bản POD.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Ưu đãi chiết khấu cước từ 5% đến 12% tính trên tổng doanh số vận chuyển hàng tháng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Bố trí đội xe chuyên trách và cấp tài khoản xem telemetry GPS riêng cho phòng Logistics.</span>
                </li>
              </ul>
            </div>

            <div className="bento-card space-y-4">
              <h4 className="font-heading font-bold text-sm text-navy-950 uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500">local_shipping</span>
                Dành Cho Đơn Hàng Theo Chuyến / Doanh Nghiệp Mới:
              </h4>
              <ul className="space-y-3 text-slate-600 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Đặt cọc 30% khi xe vào điểm bốc hàng, thanh toán 70% còn lại khi giao hàng và ký nhận POD.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Chấp nhận thanh toán bằng chuyển khoản tài khoản công ty hoặc tiền mặt có phiếu thu kèm theo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Hóa đơn VAT điện tử được gửi qua email ngay sau khi kế toán xác nhận số dư thanh toán.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
