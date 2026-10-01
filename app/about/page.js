import Link from "next/link";

export const metadata = {
  title: "Giới Thiệu Doanh Nghiệp | Vận Tải Tiên Phong",
  description:
    "Hơn 10 năm kinh nghiệm trong ngành vận tải công nghiệp đường bộ. Sở hữu 52+ đầu xe trực tiếp, 3 trung tâm bãi xe 15.000m² tại Bình Dương, TP.HCM và Đà Nẵng.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
          alt="Tổng kho bãi xe Sóng Thần"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Hồ Sơ Doanh Nghiệp • 10+ Năm Kinh Nghiệm
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            VẬN TẢI TIÊN PHONG
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1">
              KIẾN TẠO NĂNG LỰC THỰC TẾ TỪ NĂM 2014
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Khởi đầu từ 5 đầu xe tải nhẹ, đến nay Vận Tải Tiên Phong đã phát triển thành đơn vị vận tải đường bộ hàng đầu Đông Nam Bộ với đội xe 52 chiếc chính chủ, 3 cụm bãi xe 15.000m² phục vụ hơn 850 khách hàng B2B và FDI.
          </p>
        </div>
      </section>

      {/* ═══ KEY METRICS ═══ */}
      <section className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-center">
              <span className="font-heading font-bold text-3xl md:text-4xl text-orange-600 block">10+ Năm</span>
              <span className="text-xs text-slate-500 uppercase font-heading font-semibold mt-1 block">Kinh Nghiệm Thực Chiến</span>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-center">
              <span className="font-heading font-bold text-3xl md:text-4xl text-navy-900 block">52+ Đầu Xe</span>
              <span className="text-xs text-slate-500 uppercase font-heading font-semibold mt-1 block">Chính Chủ Không Trung Gian</span>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-center">
              <span className="font-heading font-bold text-3xl md:text-4xl text-navy-900 block">15.000m²</span>
              <span className="text-xs text-slate-500 uppercase font-heading font-semibold mt-1 block">3 Trung Tâm Bãi Xe</span>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-center">
              <span className="font-heading font-bold text-3xl md:text-4xl text-orange-600 block">99.4%</span>
              <span className="text-xs text-slate-500 uppercase font-heading font-semibold mt-1 block">Tỷ Lệ Giao Hàng Đúng Giờ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORY & LEADERSHIP ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                Triết Lý Vận Hành
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
                Lấy Xe Thật — Tuyến Thật Làm Nền Tảng Uy Tín
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Trong ngành vận tải đường bộ Việt Nam, nhiều đơn vị trung gian chỉ làm môi giới chuyển tải, dẫn đến rủi ro đứt gãy thông tin, tài xế không quen thuộc quy định nhà máy và khó quy trách nhiệm khi xảy ra sự cố.
                </p>
                <p>
                  <strong>Vận Tải Tiên Phong</strong> chọn hướng đi khác biệt ngay từ ngày đầu thành lập: đầu tư 100% phương tiện trực thuộc công ty, trực tiếp tuyển dụng và đào tạo đội ngũ 70+ tài xế có chứng chỉ an toàn lao động, kiểm định kỹ thuật nghiêm ngặt định kỳ và trang bị telemetry GPS 24/7 trên từng phương tiện.
                </p>
                <p>
                  Chủ hàng khi làm việc với Tiên Phong sẽ luôn biết chính xác số xe nào bốc hàng, vị trí xe đang chạy ở đâu trên bản đồ và số điện thoại tài xế đang cầm lái.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-navy-900">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="material-symbols-outlined text-orange-500">verified</span>
                  Giấy phép GPVT: 41-GPVT/SGTVT
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="material-symbols-outlined text-orange-500">security</span>
                  Bảo hiểm hàng hóa PVI 10 Tỷ VNĐ
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="material-symbols-outlined text-orange-500">pin_drop</span>
                  Kho bãi trung tâm KCN Sóng Thần
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="material-symbols-outlined text-orange-500">badge</span>
                  100% tài xế bằng FC / C chuyên nghiệp
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA"
                  alt="Tổng kho bãi xe Vận Tải Tiên Phong Sóng Thần"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 text-center italic">
                Tổng kho bãi xe trung tâm tại Sóng Thần (Bình Dương) — diện tích 15,000m² với xưởng bảo dưỡng riêng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 STRATEGIC YARDS ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Hạ Tầng Kho Bãi
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Hệ Thống 3 Trung Tâm Bãi Xe Chiến Lược
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <div className="h-10 w-10 bg-orange-100 text-orange-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">location_city</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-900 uppercase">
                Bãi Trung Tâm Bình Dương (Sóng Thần)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diện tích 15.000m², sức chứa 120 đầu kéo & rơ-moóc. Tọa lạc ngay ngã ba giao thông huyết mạch giữa TP.HCM, Bình Dương và Đồng Nai. Trực tiếp điều xe đến các KCN VSIP 1-2, Sóng Thần 1-2-3, Nam Tân Uyên chỉ mất 20–30 phút.
              </p>
              <div className="pt-2 text-xs font-semibold text-orange-600 border-t border-slate-100">
                Địa chỉ: Đại lộ Độc Lập, KCN Sóng Thần, Dĩ An, Bình Dương
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <div className="h-10 w-10 bg-orange-100 text-orange-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">directions_boat</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-900 uppercase">
                Bãi Cảng Cát Lái (TP.HCM)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diện tích 6.000m² chuyên dụng cho xe đầu kéo container và moóc lùn. Vị trí cách cổng Cảng Cát Lái chỉ 2km, phục vụ kéo vỏ, rút ruột container và giải phóng hàng hóa 24/7 theo giờ tàu biển quốc tế.
              </p>
              <div className="pt-2 text-xs font-semibold text-orange-600 border-t border-slate-100">
                Địa chỉ: Đường Nguyễn Thị Định, Phường Cát Lái, TP. Thủ Đức, TP.HCM
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <div className="h-10 w-10 bg-orange-100 text-orange-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-900 uppercase">
                Trạm Trung Chuyển Đà Nẵng (Hòa Cầm)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Điểm dừng kỹ thuật và kho trung chuyển hàng Bắc — Nam. Đảm bảo hoán đổi lái xe, kiểm tra an toàn phanh lốp và ghép hàng cho toàn bộ hành lang Duyên hải Miền Trung.
              </p>
              <div className="pt-2 text-xs font-semibold text-orange-600 border-t border-slate-100">
                Địa chỉ: KCN Hòa Cầm, Phường Hòa Thọ Tây, Quận Cẩm Lệ, TP. Đà Nẵng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-navy-900 text-white py-12 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl md:text-2xl uppercase">
              Tham Quan Thực Tế Bãi Xe Hoặc Nhận Báo Giá Doanh Nghiệp
            </h3>
            <p className="text-xs md:text-sm text-slate-300 mt-1">
              Chúng tôi luôn hoan nghênh quý khách hàng và các chủ quản logistics ghé thăm trực tiếp bãi xe.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0918456789"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Gọi: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded border border-navy-700 transition-colors"
            >
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
