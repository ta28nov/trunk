import Link from "next/link";
import QuoteCalculator from "../components/QuoteCalculator";

export const metadata = {
  title: "Bảng Giá Cước Vận Tải Minh Bạch | Vận Tải Tiên Phong",
  description:
    "Bảng giá cước khởi điểm theo cự ly và tải trọng xe: Xe tải 5T - 15T, đầu kéo container 40ft, xe cẩu tự hành. Báo giá trọn gói không phát sinh phụ phí.",
};

const PRICING_TABLE = [
  {
    type: "Xe Tải Thùng Kín 5 Tấn (25 m³)",
    under50: "1.200.000 — 1.500.000 đ",
    range150: "2.200.000 — 2.800.000 đ",
    central: "9.500.000 — 12.000.000 đ",
    northSouth: "18.000.000 — 22.000.000 đ",
  },
  {
    type: "Xe Tải Mui Bạt 8 Tấn (42 m³)",
    under50: "1.600.000 — 2.000.000 đ",
    range150: "3.000.000 — 3.800.000 đ",
    central: "13.000.000 — 16.000.000 đ",
    northSouth: "24.000.000 — 28.000.000 đ",
  },
  {
    type: "Xe Tải Mui Bạt 9.6M 15 Tấn (57 m³)",
    under50: "2.200.000 — 2.800.000 đ",
    range150: "4.200.000 — 5.200.000 đ",
    central: "18.000.000 — 22.000.000 đ",
    northSouth: "32.000.000 — 36.000.000 đ",
  },
  {
    type: "Đầu Kéo Container 40ft / 45ft (32 Tấn)",
    under50: "3.200.000 — 3.800.000 đ",
    range150: "5.500.000 — 6.800.000 đ",
    central: "22.000.000 — 26.000.000 đ",
    northSouth: "38.000.000 — 44.000.000 đ",
  },
  {
    type: "Xe Cẩu Tự Hành 10 Tấn (Chở 12 Tấn)",
    under50: "2.800.000 — 3.500.000 đ",
    range150: "5.200.000 — 6.500.000 đ",
    central: "Khảo sát thực tế",
    northSouth: "Khảo sát thực tế",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80"
          alt="Bảng giá cước vận tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            BẢNG GIÁ CƯỚC MINH BẠCH
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              CHÍNH SÁCH BÁO GIÁ TRỌN GÓI — KHÔNG PHÍ ẨN
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Chúng tôi cam kết báo giá trọn gói trực tiếp từ đội xe — tuyệt đối không phát sinh chi phí vô lý và luôn bảo đảm quyền lợi tối đa cho đối tác sản xuất.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="tel:0918456789"
              className="inline-flex items-center gap-2 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Hotline Báo Giá: 0918.456.789
            </a>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE CALCULATOR (Spacious White Section) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <QuoteCalculator />
      </section>

      {/* ═══ PRICING MATRIX TABLE (Clean White & Slate-50) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 w-full reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              KHUNG GIÁ CƯỚC NGUYÊN CHUYẾN (FTL)
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              *Đơn giá mang tính chất tham khảo. Đã bao gồm xăng dầu, tài xế và phí BOT cầu đường. Chưa bao gồm thuế VAT.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-base">
                <thead className="bg-slate-900 text-white uppercase font-heading font-bold text-xs tracking-wider">
                  <tr>
                    <th className="p-6 md:p-8">Chủng Loại Phương Tiện</th>
                    <th className="p-6 md:p-8">Nội Vùng (&lt; 50km)</th>
                    <th className="p-6 md:p-8">Liên Tỉnh (50 — 150km)</th>
                    <th className="p-6 md:p-8">Miền Trung (Đà Nẵng)</th>
                    <th className="p-6 md:p-8">Trục Bắc — Nam (Hà Nội)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PRICING_TABLE.map((row, idx) => (
                    <tr
                      key={row.type}
                      className={`hover:bg-orange-50/40 transition-colors ${
                        idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                      }`}
                    >
                      <td className="p-6 md:p-8 font-heading font-bold text-slate-900">
                        {row.type}
                      </td>
                      <td className="p-6 md:p-8 text-slate-700 font-semibold">{row.under50}</td>
                      <td className="p-6 md:p-8 text-slate-600">{row.range150}</td>
                      <td className="p-6 md:p-8 text-slate-600">{row.central}</td>
                      <td className="p-6 md:p-8 text-orange-600 font-bold">{row.northSouth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CALCULATION RULES (Clean White) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-16 reveal-on-scroll">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
            QUY TẮC TÍNH CƯỚC HÀNG HÓA
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Phương pháp phân loại hàng nặng và hàng cồng kềnh giúp tối ưu chi phí thùng xe cho chủ hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">fitness_center</span>
            </div>
            <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
              1. Hàng Nặng (Tính Theo Tấn)
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Áp dụng cho sắt thép, cuộn đồng, máy móc cơ khí, xi măng, gạch men. Đơn giá được tính trực tiếp trên số tấn thực tế cân tại trạm cân điện tử đạt chuẩn.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">aspect_ratio</span>
            </div>
            <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
              2. Hàng Cồng Kềnh (Tính Khối m³)
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Áp dụng cho hàng nhẹ nhưng chiếm thể tích lớn như thùng carton, hạt xốp, bao bì nhựa, bông sợi. Công thức: Dài × Rộng × Cao (mét) = Số m³.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">loyalty</span>
            </div>
            <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
              3. Chiết Khấu Hợp Đồng Tháng
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Doanh nghiệp ký hợp đồng dài hạn có sản lượng vận chuyển đều đặn được hưởng chiết khấu trực tiếp từ 5% đến 15% trừ vào quyết toán tháng.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-24 bg-slate-900 text-white reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
              CẦN BÁO GIÁ CHÍNH XÁC CHO LÔ HÀNG SẮP CHẠY?
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-light">
              Gửi ngay quy cách kiện hàng và địa điểm bốc - trả, điều hành viên sẽ liên hệ lại sau 15 phút.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:0918456789"
              className="px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/30 transition-all hover:scale-105"
            >
              Gọi Báo Giá: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-8 py-5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl border border-navy-700 transition-colors"
            >
              Điền Mẫu Khảo Sát
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
