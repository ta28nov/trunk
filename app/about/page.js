import Link from "next/link";

export const metadata = {
  title: "Giới Thiệu Doanh Nghiệp | Vận Tải Tiên Phong",
  description:
    "Hơn 10 năm kinh nghiệm trong ngành vận tải công nghiệp đường bộ. Sở hữu 52+ đầu xe trực tiếp, 3 trung tâm bãi xe 15.000m² tại Bình Dương, TP.HCM và Đà Nẵng.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
          alt="Tổng kho bãi xe Sóng Thần"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            VẬN TẢI TIÊN PHONG
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              KIẾN TẠO NĂNG LỰC THỰC TẾ TỪ NĂM 2014
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Khởi đầu từ 5 đầu xe tải nhẹ, đến nay Vận Tải Tiên Phong đã phát triển thành đơn vị vận tải đường bộ hàng đầu Đông Nam Bộ với đội xe 52 chiếc chính chủ, 3 cụm bãi xe 15.000m² phục vụ hơn 850 khách hàng B2B và FDI.
          </p>
        </div>
      </section>

      {/* ═══ KEY METRICS (Clean Light Gray) ═══ */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 text-slate-900 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-2 border-l-2 border-orange-500 pl-6">
              <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-orange-600 block">10+ Năm</span>
              <span className="text-base text-slate-600 font-light block">Kinh nghiệm thực chiến</span>
            </div>
            <div className="space-y-2 border-l-2 border-slate-300 pl-6">
              <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-slate-900 block">52+ Xe</span>
              <span className="text-base text-slate-600 font-light block">Chính chủ 100%</span>
            </div>
            <div className="space-y-2 border-l-2 border-slate-300 pl-6">
              <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-slate-900 block">15.000m²</span>
              <span className="text-base text-slate-600 font-light block">3 Bãi xe chiến lược</span>
            </div>
            <div className="space-y-2 border-l-2 border-orange-500 pl-6">
              <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-orange-600 block">99.4%</span>
              <span className="text-base text-slate-600 font-light block">Đúng giờ tuyệt đối</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORY & OPERATIONAL PHILOSOPHY (Clean White Split-Screen) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight leading-tight">
              LẤY XE THẬT — TUYẾN THẬT LÀM NỀN TẢNG UY TÍN
            </h2>
            <div className="space-y-4 text-base md:text-lg text-slate-600 font-light leading-relaxed">
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
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] w-full">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Tổng kho bãi xe Vận Tải Tiên Phong Sóng Thần"
                className="w-full h-full object-cover img-hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 STRATEGIC YARDS (Spacious Light Gray Section) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              HỆ THỐNG 3 TRUNG TÂM BÃI XE CHIẾN LƯỢC
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Các bãi xe được bố trí sát các trục giao thông huyết mạch và cảng biển quốc tế lớn nhất miền Nam và miền Trung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                Bãi Trung Tâm Sóng Thần (15.000m²)
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Sức chứa 120 đầu kéo &amp; rơ-moóc. Tọa lạc ngay ngã ba giao thông huyết mạch giữa TP.HCM, Bình Dương và Đồng Nai. Trực tiếp điều xe đến các KCN VSIP 1-2, Sóng Thần 1-2-3, Nam Tân Uyên chỉ mất 20–30 phút.
              </p>
              <div className="pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                Đại lộ Độc Lập, KCN Sóng Thần, Dĩ An, Bình Dương
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                Bãi Cảng Biển Cát Lái (6.000m²)
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Chuyên dụng cho xe đầu kéo container và moóc lùn. Vị trí cách cổng Cảng Cát Lái chỉ 2km, phục vụ kéo vỏ, rút ruột container và giải phóng hàng hóa 24/7 theo giờ tàu biển quốc tế.
              </p>
              <div className="pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                Đường Nguyễn Thị Định, Phường Cát Lái, TP. Thủ Đức, TP.HCM
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                Bãi Trung Chuyển Miền Trung
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Trạm dừng chân và đổi tài xế tại KCN Hòa Cầm (Đà Nẵng), đảm bảo an toàn tuyệt đối cho các chuyến chạy đường dài trục Bắc — Nam, luân chuyển hàng hóa hai chiều không bị ngắt quãng.
              </p>
              <div className="pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                KCN Hòa Cầm, Phường Hòa Thọ Tây, Cẩm Lệ, TP. Đà Nẵng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-24 bg-slate-900 text-white reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Tham Quan Thực Tế Bãi Xe Hoặc Nhận Báo Giá
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-light">
              Chúng tôi luôn hoan nghênh quý khách hàng và các chủ quản logistics ghé thăm trực tiếp bãi xe.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:0918456789"
              className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
            >
              Gọi: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-8 py-5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl border border-navy-700 transition-colors"
            >
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
