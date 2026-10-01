"use client";
import { useState } from "react";
import Link from "next/link";
import QuoteCalculator from "./components/QuoteCalculator";
import MarqueeTicker from "./components/MarqueeTicker";
import VideoModal from "./components/VideoModal";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* ════════════════════════════════════════════════════════════════
          1. CINEMATIC HERO BANNER (First Screen Banner)
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85"
            alt="Đoàn xe vận tải cao tốc"
            className="w-full h-full object-cover opacity-30 filter contrast-125 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 md:space-y-10">
          <div className="space-y-6">
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[1.05] text-white">
              VẬN TẢI TIÊN PHONG
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2 md:mt-4">
                ĐỘI XE TRỰC TIẾP 100%
              </span>
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Chuyên vận chuyển hàng công nghiệp, máy móc cơ khí &amp; container cảng biển. Hệ thống 52 đầu phương tiện chính chủ, chủ động điều phối và cam kết không bán lại tải trung gian.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-5">
            <a
              href="tel:0918456789"
              className="px-9 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-orange-500/30 hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Gọi Điều Vận: 0918.456.789
            </a>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl border border-white/20 transition-all hover:-translate-y-1 flex items-center gap-3 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-2xl text-orange-400">play_circle</span>
              <span>Xem Video Thực Địa Đội Xe</span>
            </button>

            <Link
              href="#quote-calc"
              className="px-8 py-5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl border border-white/15 transition-all hover:-translate-y-1"
            >
              Báo Giá Nhanh 15 Phút
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LIVE MARQUEE TICKER ═══ */}
      <MarqueeTicker />

      {/* ════════════════════════════════════════════════════════════════
          2. SECTION 1: KHO BÃI 15.000M² (Clean White Background, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              HẠ TẦNG KHO BÃI 15.000M² TẠI BÌNH DƯƠNG
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Vận Tải Tiên Phong chủ động 100% bến bãi đỗ xe và xưởng kỹ thuật tại Đại lộ Độc Lập — KCN Sóng Thần (Dĩ An) cùng bãi đệm gần Cảng Cát Lái (Thủ Đức). Mọi phương tiện đều được kỹ thuật viên kiểm tra phanh, áp suất lốp và cân tải trọng trước mỗi hành trình liên tỉnh.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                  15.000<span className="text-orange-500 text-3xl">m²</span>
                </span>
                <span className="text-base text-slate-500 font-light block">
                  Diện tích bãi xe trung tâm
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                  120<span className="text-orange-500 text-3xl">+</span>
                </span>
                <span className="text-base text-slate-500 font-light block">
                  Sức chứa đầu kéo &amp; rơ-moóc
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/operations"
                className="inline-flex items-center gap-3 text-base font-heading font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Khám Phá Hình Ảnh Thực Địa Bãi Xe</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Image Frame Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] lg:h-[540px] w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5naNc8Em_jejTjZx0Z3746BIdzpHGW6Xw0DyX-3IWF3sX-zvLQ6odL0Cgrs4i75iXwS3t8PoeUNr9WPD-OxhzE-bqbGsEo3H8smJFGnKSgFEhTXc8FC3dVbhhPXUDGnRNCHsyv4_3UEfTUvbhtppD_2zoLo59KF2NbcmnXVW-MDu8fSKuhq2OfJ-Ueyr439kE0xVZ9jDbEng6HoMPU5bgM-ZN0xGdviNV5wAuaev6vtw2n2Oz22OhBA"
                alt="Góc chụp rộng bãi xe 15.000m² tại Bình Dương"
                className="w-full h-full object-cover img-hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. SECTION 2: HỆ THỐNG 52 ĐẦU XE (Clean Slate-50 Background, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-y border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Frame Column Left (7 Cols) */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] lg:h-[540px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
                  alt="Đội xe tải mui bạt và container Tiên Phong"
                  className="w-full h-full object-cover img-hover-zoom"
                />
              </div>
            </div>

            {/* Text Column Right (5 Cols) */}
            <div className="lg:col-span-5 lg:order-2 space-y-8">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
                HỆ THỐNG 52 ĐẦU XE CHÍNH CHỦ
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                Hệ thống đa dạng chủng loại tải trọng từ xe mui bạt 9.6M (15 tấn) chuyên tuyến Bắc — Nam, đầu kéo container Hyundai Xcient kéo cont 40ft/45ft cảng biển, đến xe thùng kín khóa chì và rơ-moóc lùn 50 tấn chở thiết bị siêu trọng. Cam kết 100% xe đứng tên doanh nghiệp, luôn sẵn sàng xuất bến.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                    52<span className="text-orange-500 text-3xl">+</span>
                  </span>
                  <span className="text-base text-slate-500 font-light block">
                    Đầu xe chính chủ sẵn sàng
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                    30<span className="text-orange-500 text-3xl">&apos;</span>
                  </span>
                  <span className="text-base text-slate-500 font-light block">
                    Có mặt tại các KCN vệ tinh
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/fleet"
                  className="inline-flex items-center gap-3 text-base font-heading font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Xem Chi Tiết Quy Cách 52 Đầu Xe</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. SECTION 3: CẨU HẠ VÀ DI DỜI THIẾT BỊ (Clean White Background, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              CẨU HẠ &amp; DI DỜI THIẾT BỊ NHÀ XƯỞNG
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Giải pháp trọn gói từ vận chuyển thiết bị siêu trường, siêu trọng đến cẩu hạ và định vị máy móc vào vị trí móng xưởng bằng thiết bị rùa đẩy thủy lực chuyên dụng. Đã hoàn thành hơn 450+ dự án di dời dây chuyền sản xuất cho các đối tác FDI Nhật Bản, Hàn Quốc và Đài Loan.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                  50<span className="text-orange-500 text-3xl">T</span>
                </span>
                <span className="text-base text-slate-500 font-light block">
                  Tải trọng cẩu hạ &amp; moóc lùn
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                  450<span className="text-orange-500 text-3xl">+</span>
                </span>
                <span className="text-base text-slate-500 font-light block">
                  Dự án nhà xưởng an toàn tuyệt đối
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-base font-heading font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Xem Dịch Vụ Cẩu &amp; Di Dời Thiết Bị</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Image Frame Column Right (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] lg:h-[540px] w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgaFYzPqsKnoR2eVTM1_EovKh7xltl8LBOzfa1ehpn8yNv36ZWDY07tmcb7YmXdLiU2fsabLtq7t6BTiFGmgXJF2Ya7-fcSkYQTC9pj5Md1jER3DcTDwNztGRxlJHNh8bHWAAINWegKwjKN2WF0qv2kM50GWyaUbmtUnG4RLRHBNLbCYfnMCQDuWZideeitnEomFJdD9J_5wDAz-jgMcUTun7zYqv9s3xFkVcVL9nuL0fuJceuRLqHQ"
                alt="Xe cẩu tự hành 15T cẩu hạ máy móc công nghiệp"
                className="w-full h-full object-cover img-hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. SECTION 4: GIÁM SÁT GPS & BẢO HIỂM PVI (Clean Slate-50 Background, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-y border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Frame Column Left (7 Cols) */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 md:h-[480px] lg:h-[540px] w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuqO2LBRff0Jkiuf-3movRgoEM7vSzRshIOA1f_niWEJykdc07tW-5TlElFimkAgzaiwtFEyt0l6191dfVmqgiBkvVm0ueoqhvHKOJLC_WkrbS4WufsAa3wQR9EVHR8iF1G4yEKQ8qJGtVMzX7StN7bUmOR0sSNBpCL3IaicnWUyJ0ijJgXEJHS3e7IJ_jIDGLD52-2B71owM9l045mX0l06VFpO5GJmTFznUlJPgj-ycmt-CWRxTz2w"
                  alt="Phòng điều độ giám sát GPS telemetry 24/7"
                  className="w-full h-full object-cover img-hover-zoom"
                />
              </div>
            </div>

            {/* Text Column Right (5 Cols) */}
            <div className="lg:col-span-5 lg:order-2 space-y-8">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
                GIÁM SÁT GPS &amp; BẢO HIỂM PVI 10 TỶ VNĐ
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                100% đoàn xe trang bị hộp đen chuẩn Cục Đường Bộ, camera cabin kép và cảm biến giám sát hành trình. Khách hàng doanh nghiệp được cung cấp tài khoản kiểm tra tọa độ xe theo thời gian thực. Hợp đồng bảo hiểm trách nhiệm hàng hóa PVI bảo đảm bồi thường 100% khi có sự cố.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                    10<span className="text-green-600 text-3xl"> Tỷ</span>
                  </span>
                  <span className="text-base text-slate-500 font-light block">
                    Hạn mức bảo hiểm PVI / vụ
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900 block">
                    24<span className="text-orange-500 text-3xl">/7</span>
                  </span>
                  <span className="text-base text-slate-500 font-light block">
                    Điều phối trực ban liên tục
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/trust"
                  className="inline-flex items-center gap-3 text-base font-heading font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Xem Hồ Sơ Pháp Lý &amp; Bảo Hiểm PVI</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6. SECTION 5: ESTIMATE CALCULATOR (Clean White Background, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll" id="quote-calc">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-slate-900 leading-tight">
            ƯỚC TÍNH CƯỚC VẬN TẢI TRỌN GÓI
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Chọn điểm bốc hàng, điểm giao hàng và chủng loại phương tiện để nhận ước lượng chi phí và thời gian chạy dự kiến ngay tức thì.
          </p>
        </div>

        <QuoteCalculator />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          7. SECTION 6: HIGH-CONVERSION CTA (Clean Modern Finish, Scroll Reveal)
         ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-900 text-white w-full reveal-on-scroll">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            SẴN SÀNG ĐIỀU ĐỘNG XE TRONG 15 PHÚT
          </h2>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Đội xe trực ban tại các bãi xe Sóng Thần, Cát Lái và Đà Nẵng luôn thường trực. Hãy gọi trực tiếp hoặc gửi thông tin lô hàng để nhận lịch điều xe sớm nhất.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <a
              href="tel:0918456789"
              className="px-9 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-orange-500/30 hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Hotline Trực Ban: 0918.456.789
            </a>

            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              Chat Zalo Với Điều Hành
            </a>

            <Link
              href="/contact"
              className="px-9 py-5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-2xl border border-white/15 transition-all hover:-translate-y-1"
            >
              Điền Mẫu Khảo Sát
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
