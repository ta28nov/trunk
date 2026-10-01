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
    <div className="flex flex-col w-full">
      {/* ═══ HEADER BANNER ═══ */}
      <section className="bg-navy-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
            Chính Sách Cước Rõ Ràng
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Bảng Giá Cước Khởi Điểm & Chính Sách Minh Bạch
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Chúng tôi cam kết báo giá trọn gói trực tiếp từ đội xe — tuyệt đối không phát sinh chi phí vô lý và luôn bảo đảm quyền lợi tối đa cho đối tác sản xuất.
          </p>
        </div>
      </section>

      {/* ═══ INTERACTIVE CALCULATOR ═══ */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <QuoteCalculator />
        </div>
      </section>

      {/* ═══ REFERENCE PRICING MATRIX TABLE ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Bảng Tham Khảo Tuyến Điển Hình
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Khung Giá Cước Vận Chuyển Nguyên Chuyến (FTL)
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              *Đơn giá mang tính chất tham khảo tại thời điểm hiện tại. Đã bao gồm xăng dầu, tài xế và phí BOT cầu đường. Chưa bao gồm thuế VAT 8%.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-900 text-white uppercase font-heading font-bold">
                <tr>
                  <th className="p-4">Chủng Loại Phương Tiện</th>
                  <th className="p-4">Nội Vùng (Dưới 50km)</th>
                  <th className="p-4">Liên Tỉnh (50 — 150km)</th>
                  <th className="p-4">Miền Trung (Đà Nẵng)</th>
                  <th className="p-4">Trục Bắc — Nam (Hà Nội)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PRICING_TABLE.map((row, idx) => (
                  <tr
                    key={row.type}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 font-heading font-bold text-navy-900">
                      {row.type}
                    </td>
                    <td className="p-4 text-slate-700 font-semibold">{row.under50}</td>
                    <td className="p-4 text-slate-700">{row.range150}</td>
                    <td className="p-4 text-slate-700">{row.central}</td>
                    <td className="p-4 text-orange-600 font-bold">{row.northSouth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CALCULATION RULES & VOLUME CONVERSION ═══ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Nguyên Tắc Định Giá Chuẩn
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Quy Tắc Tính Cước Hàng Nặng & Hàng Cồng Kềnh
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-900 font-heading font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-orange-500">fitness_center</span>
                1. Hàng Nặng (Tính Theo Tấn)
              </div>
              <p className="text-slate-600 leading-relaxed">
                Áp dụng cho các mặt hàng có tỷ trọng lớn nhưng chiếm ít diện tích như sắt thép, cuộn đồng, máy móc cơ khí, xi măng, gạch men. Đơn giá được tính trực tiếp trên số tấn thực tế cân tại trạm.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-900 font-heading font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-orange-500">aspect_ratio</span>
                2. Hàng Cồng Kềnh (Tính Theo Khối m³)
              </div>
              <p className="text-slate-600 leading-relaxed">
                Áp dụng cho hàng nhẹ nhưng chiếm nhiều thể tích lòng thùng xe như thùng carton, hạt xốp, bao bì nhựa, bông vải sợi. Công thức tính thể tích: <strong>Dài × Rộng × Cao (mét) = Số m³</strong>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-900 font-heading font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-orange-500">loyalty</span>
                3. Chiết Khấu Hợp Đồng Tháng
              </div>
              <p className="text-slate-600 leading-relaxed">
                Doanh nghiệp ký kết hợp đồng dài hạn có sản lượng đều đặn được hưởng chính sách chiết khấu trực tiếp từ <strong>5% đến 15%</strong> trừ vào bảng kê quyết toán hàng tháng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl uppercase">
              Cần Báo Giá Chính Xác Tuyệt Đối Cho Lô Hàng Sắp Chạy?
            </h3>
            <p className="text-xs text-slate-300">
              Gửi ngay quy cách kiện hàng và địa điểm bốc - trả, điều hành viên sẽ liên hệ lại sau 15 phút.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0918456789"
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Gọi Báo Giá: 0918.456.789
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded border border-navy-700 transition-colors"
            >
              Điền Mẫu Khảo Sát
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
