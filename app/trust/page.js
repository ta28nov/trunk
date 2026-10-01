import Link from "next/link";

export const metadata = {
  title: "Hồ Sơ Năng Lực Pháp Lý & Bảo Hiểm | Vận Tải Tiên Phong",
  description:
    "Pháp nhân chính quy Sở GTVT TP.HCM cấp phép 41-GPVT/SGTVT, MST: 0314892039. Hợp đồng bảo hiểm hàng hóa PVI hạn mức 10 Tỷ VNĐ. Tiêu chuẩn Euro 5.",
};

export default function TrustPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ═══ HEADER BANNER ═══ */}
      <section className="bg-navy-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
            Minh Bạch & Pháp Lý
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Hồ Sơ Năng Lực Pháp Lý & Bảo Hiểm Hàng Hóa 10 Tỷ VNĐ
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Chúng tôi hiểu rằng đối với các tập đoàn đa quốc gia và doanh nghiệp sản xuất, tính hợp pháp và khả năng bảo toàn vốn tài sản là điều kiện tiên quyết khi lựa chọn nhà cung cấp vận tải.
          </p>
        </div>
      </section>

      {/* ═══ LEGAL TRANSPARENCY ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Tư Cách Pháp Nhân
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Thông Tin Đăng Ký Doanh Nghiệp Chính Thức
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-navy-900 text-orange-500 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-navy-900 uppercase">
                    Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Tiên Phong
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Tên quốc tế: TIEN PHONG TRANSPORTATION TRADING SERVICES CO., LTD
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Mã Số Thuế Doanh Nghiệp:</span>
                  <span className="font-heading font-bold text-navy-900 text-sm mt-0.5 block">0314892039</span>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Giấy Phép Kinh Doanh Vận Tải:</span>
                  <span className="font-heading font-bold text-orange-600 text-sm mt-0.5 block">41-GPVT/SGTVT</span>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Cơ Quan Cấp Phép:</span>
                  <span className="font-medium text-navy-900 mt-0.5 block">Sở Giao Thông Vận Tải TP.HCM</span>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Vốn Điều Lệ Đăng Ký:</span>
                  <span className="font-medium text-navy-900 mt-0.5 block">20.000.000.000 VNĐ</span>
                </div>
                <div className="sm:col-span-2 p-3 bg-white rounded border border-slate-200">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Trụ Sở Văn Phòng Chính:</span>
                  <span className="font-medium text-navy-900 mt-0.5 block">Số 28 Đường số 8, Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            {/* Quick checklist */}
            <div className="lg:col-span-5 bg-navy-900 text-white p-6 md:p-8 rounded-lg space-y-4">
              <h3 className="font-heading font-bold text-base uppercase text-orange-400">
                Cam Kết Tuân Thủ Pháp Luật:
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-green-400 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>100% xe tải gắn phù hiệu &quot;XE TẢI&quot; hoặc &quot;XE ĐẦU KÉO&quot; do Sở GTVT cấp, còn hạn hiệu lực.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-green-400 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Thiết bị giám sát hành trình (hộp đen) truyền dữ liệu liên tục về hệ thống máy chủ của Cục Đường Bộ.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-green-400 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Tài xế có hợp đồng lao động chính thức, tham gia BHXH đầy đủ và khám sức khỏe định kỳ 6 tháng/lần.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-green-400 text-base shrink-0 mt-0.5">check_circle</span>
                  <span>Xuất hóa đơn giá trị gia tăng (VAT) điện tử hợp lệ gửi về hộp thư kế toán ngay trong ngày hoàn tất đơn hàng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INSURANCE POLICY ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Bảo Vệ Tài Sản Khách Hàng
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Chính Sách Bảo Hiểm Hàng Hóa Toàn Diện — Hạn Mức 10 Tỷ VNĐ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                Đối Tác Bảo Hiểm PVI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hợp đồng bảo hiểm trách nhiệm dân sự của người vận chuyển được ký kết cùng Tổng Công ty Cổ phần Bảo hiểm Dầu khí Việt Nam (PVI), bảo vệ tối đa 10 Tỷ VNĐ cho mỗi vụ tổn thất.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">published_with_changes</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                Giải Quyết Bồi Thường 7 Ngày
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khi có sự cố xảy ra, biên bản giám định hiện trường độc lập được lập trong 24 giờ. Cam kết chi trả bồi thường 100% giá trị thiệt hại trong vòng 7 ngày làm việc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">contract</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 uppercase">
                Hợp Đồng Kinh Tế Chặt Chẽ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Điều khoản bồi thường thiệt hại và trách nhiệm bốc dỡ được ghi rõ ràng trong từng hợp đồng vận tải nguyên tắc hoặc đơn hàng lẻ, không dùng câu chữ mơ hồ trốn tránh trách nhiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ B2B PAYMENT TERMS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Điều Kiện Thương Mại B2B
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Chính Sách Thanh Toán & Hạn Mức Công Nợ Linh Hoạt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-heading font-bold text-sm text-navy-900 uppercase">
                Dành Cho Doanh Nghiệp Ký Hợp Đồng Năm / Khách Hàng FDI:
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Thời hạn công nợ thanh toán 30 đến 45 ngày sau khi nhận đầy đủ hóa đơn và biên bản POD.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Ưu đãi chiết khấu cước từ 5% đến 12% tính trên tổng doanh số vận chuyển hàng tháng.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Bố trí đội xe chuyên trách và cấp tài khoản xem telemetry GPS riêng cho phòng Logistics.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-heading font-bold text-sm text-navy-900 uppercase">
                Dành Cho Đơn Hàng Theo Chuyến / Doanh Nghiệp Mới:
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Đặt cọc 30% khi xe vào điểm bốc hàng, thanh toán 70% còn lại khi giao hàng và ký nhận POD.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Chấp nhận thanh toán bằng chuyển khoản tài khoản công ty hoặc tiền mặt có phiếu thu kèm theo.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-base">check</span>
                  Hóa đơn VAT điện tử được gửi qua email ngay sau khi kế toán xác nhận số dư thanh toán.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
