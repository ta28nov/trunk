import Link from "next/link";

export const metadata = {
  title: "Hồ Sơ Năng Lực Pháp Lý & Bảo Hiểm | Vận Tải Tiên Phong",
  description:
    "Pháp nhân chính quy Sở GTVT TP.HCM cấp phép 41-GPVT/SGTVT, MST: 0314892039. Hợp đồng bảo hiểm hàng hóa PVI hạn mức 10 Tỷ VNĐ. Tiêu chuẩn Euro 5.",
};

export default function TrustPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80"
          alt="Pháp lý vận tải và bảo hiểm hàng hóa PVI"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            NĂNG LỰC PHÁP LÝ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              BẢO HIỂM HÀNG HÓA PVI 10 TỶ VNĐ
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Chúng tôi hiểu rằng đối với các tập đoàn FDI và doanh nghiệp sản xuất quy mô lớn, tính minh bạch pháp nhân và năng lực bảo toàn vốn tài sản là tiêu chí số 1 khi thẩm định đối tác vận tải.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="tel:0918456789"
              className="inline-flex items-center gap-2 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Tư Vấn Hợp Đồng: 0918.456.789
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors"
            >
              Xem Chính Sách Công Nợ B2B
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 1: LEGAL CORPORATE IDENTITY (Clean White, Split-Screen) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              ĐĂNG KÝ DOANH NGHIỆP &amp; GIẤY PHÉP VẬN TẢI
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Doanh nghiệp vận tải hoạt động chính quy dưới sự cấp phép trực tiếp của Sở Giao Thông Vận Tải TP. Hồ Chí Minh. Toàn bộ thông tin đăng ký minh bạch, sẵn sàng cung cấp trích lục hồ sơ năng lực đầy đủ phục vụ công tác đấu thầu.
            </p>

            {/* Legal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-slate-500 font-medium block text-xs uppercase">Mã Số Thuế:</span>
                <span className="font-heading font-black text-slate-900 text-2xl mt-1 block">0314892039</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-slate-500 font-medium block text-xs uppercase">Giấy Phép Vận Tải:</span>
                <span className="font-heading font-black text-orange-600 text-2xl mt-1 block">41-GPVT/SGTVT</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-slate-500 font-medium block text-xs uppercase">Cơ Quan Quản Lý:</span>
                <span className="font-semibold text-slate-900 text-base mt-1 block">Sở GTVT TP. Hồ Chí Minh</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-slate-500 font-medium block text-xs uppercase">Vốn Điều Lệ Thực Góp:</span>
                <span className="font-semibold text-slate-900 text-base mt-1 block">20.000.000.000 VNĐ</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-slate-500 font-medium block text-xs uppercase">Trụ Sở Văn Phòng Chính:</span>
              <span className="text-slate-900 text-base mt-1 block">Số 28 Đường số 8, Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh</span>
            </div>
          </div>

          {/* Right Photo Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Tổng kho và văn phòng điều vận Vận Tải Tiên Phong"
                className="w-full h-full object-cover img-hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: PVI 10 BILLION INSURANCE POLICY (Clean Slate-50, Split-Screen) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Frame */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80"
                  alt="Bảo hiểm trách nhiệm vận chuyển hàng hóa PVI 10 Tỷ VNĐ"
                  className="w-full h-full object-cover img-hover-zoom"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 lg:order-2 space-y-8">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
                CHÍNH SÁCH BẢO HIỂM HÀNG HÓA PVI 10 TỶ VNĐ / VỤ
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                Mọi chuyến hàng do Tiên Phong đảm nhiệm đều được bảo hiểm trách nhiệm dân sự của người vận chuyển ký kết cùng Tổng Công ty Bảo hiểm PVI, bảo vệ tối đa 10 Tỷ VNĐ cho mỗi vụ tổn thất.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-2xl">verified</span>
                    Giải Quyết Bồi Thường Trong 7 Ngày Làm Việc
                  </h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    Khi xảy ra sự cố phát sinh ngoài ý muốn trên đường, biên bản giám định hiện trường độc lập được lập trong 24 giờ. Cam kết chi trả 100% giá trị thiệt hại trong 7 ngày.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-2xl">verified</span>
                    Điều Khoản Hợp Đồng Kinh Tế Minh Bạch
                  </h3>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    Trách nhiệm bảo quản hàng, hạ tải và ràng buộc bồi thường được ghi rõ ràng trong từng hợp đồng nguyên tắc, bảo vệ quyền lợi tối đa cho doanh nghiệp đối tác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: COMMERCIAL TERMS & B2B CREDIT (Clean White) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-16 reveal-on-scroll">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
            CHÍNH SÁCH CÔNG NỢ &amp; HỢP ĐỒNG NĂM
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Chúng tôi cung cấp chính sách thanh toán linh hoạt, hỗ trợ tối đa dòng tiền lưu động cho các nhà máy và công ty xuất nhập khẩu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-heading font-black text-2xl text-slate-900 uppercase flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-orange-600">domain</span>
              Doanh Nghiệp Hợp Đồng Năm / FDI
            </h3>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-light">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Thời hạn công nợ thanh toán từ 30 đến 45 ngày sau khi nhận đầy đủ bộ chứng từ và hóa đơn VAT.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Ưu đãi chiết khấu cước từ 5% đến 12% tính trên tổng doanh số vận chuyển lũy kế hàng tháng.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Bố trí đội xe và tài xế chuyên trách phục vụ riêng cho các nhà máy của Quý khách.</span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-heading font-black text-2xl text-slate-900 uppercase flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-orange-600">local_shipping</span>
              Đơn Hàng Theo Chuyến / Ngắn Hạn
            </h3>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-light">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Đặt cọc 30% khi xe vào điểm bốc hàng, thanh toán 70% còn lại khi giao hàng và ký nhận POD.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Chấp nhận thanh toán bằng chuyển khoản tài khoản công ty hoặc tiền mặt có phiếu thu kèm theo.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">check_circle</span>
                <span>Hóa đơn VAT điện tử được gửi qua email ngay sau khi kế toán xác nhận số dư thanh toán.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-24 bg-slate-900 text-white reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Yêu Cầu Cung Cấp Bộ Hồ Sơ Năng Lực Pháp Lý?
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-light">
              Chúng tôi sẽ gửi hồ sơ năng lực bản PDF hoàn chỉnh kèm bản sao công chứng giấy phép kinh doanh trong vòng 15 phút.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:0918456789"
              className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/30 transition-all hover:scale-105"
            >
              Hotline Pháp Lý: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-8 py-5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl border border-navy-700 transition-colors"
            >
              Liên Hệ Bộ Phận Thầu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
