import Link from "next/link";
import QuoteCalculator from "../components/QuoteCalculator";

export const metadata = {
  title: "Bảng Giá Cước Vận Tải & Pháp Lý Doanh Nghiệp | Vận Tải Tiên Phong",
  description:
    "Khung cước vận tải nguyên chuyến FTL theo cự ly và tải trọng xe. Chính sách bảo hiểm hàng hóa PVI 10 Tỷ VNĐ và công nợ B2B từ 30 đến 45 ngày.",
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
    central: "Khảo sát thực địa",
    northSouth: "Khảo sát thực địa",
  },
];

const LEGAL_CREDENTIALS = [
  { label: "Doanh Nghiệp Đăng Ký", val: "Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Tiên Phong" },
  { label: "Mã Số Doanh Nghiệp (MST)", val: "0314892039 do Sở KH&ĐT TP.HCM cấp" },
  { label: "Giấy Phép Kinh Doanh Vận Tải", val: "41-GPVT/SGTVT do Sở GTVT TP.HCM cấp" },
  { label: "Vốn Điều Lệ Thực Góp", val: "20.000.000.000 VNĐ (Hai mươi tỷ đồng)" },
  { label: "Bảo Hiểm Hàng Hóa Vận Chuyển", val: "Tổng Công Ty Bảo Hiểm PVI — 10 Tỷ VNĐ / Vụ" },
  { label: "Địa Chỉ Trụ Sở Đăng Ký", val: "Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM" },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            CHÍNH SÁCH BÁO GIÁ &amp; PHÁP LÝ
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            BẢNG GIÁ &amp; PHÁP LÝ
            <span className="block text-[#FF6A00]">MINH BẠCH CHI PHÍ.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Cam kết giá cước trọn gói trực tiếp từ đội xe chính chủ — tuyệt đối không phát sinh phụ phí vô lý. Hồ sơ pháp nhân đầy đủ và hợp đồng bảo hiểm hàng hóa PVI hạn mức 10 Tỷ VNĐ.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6">
            <a
              href="tel:0918456789"
              className="btn-arrow-hover px-8 py-4 sm:py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>HOTLINE BÁO GIÁ 15 PHÚT: 0918.456.789</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE CALCULATOR SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <QuoteCalculator />
        </div>
      </section>

      {/* ═══ PRICING MATRIX TABLE SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              KHUNG CƯỚC THAM KHẢO
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              BẢNG GIÁ CƯỚC NGUYÊN CHUYẾN (FTL)
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
              Đơn giá trọn gói đã bao gồm tài xế, nhiên liệu, vé BOT cầu đường và định vị GPS giám sát. Chưa bao gồm thuế VAT và phí nâng hạ 2 đầu kho.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0B0B0B] text-white border-b border-[#2A2A2A] font-heading text-xs uppercase tracking-wider">
                  <th className="py-4 px-6">Chủng Loại Xe</th>
                  <th className="py-4 px-6">Dưới 50km</th>
                  <th className="py-4 px-6">50 — 150km</th>
                  <th className="py-4 px-6">Miền Trung (Đà Nẵng)</th>
                  <th className="py-4 px-6">Trục Bắc — Nam (Hà Nội)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F] text-[#E5E5E5]">
                {PRICING_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-4 px-6 font-heading font-bold text-white">
                      {row.type}
                    </td>
                    <td className="py-4 px-6 text-[#A3A3A3]">{row.under50}</td>
                    <td className="py-4 px-6 text-[#A3A3A3]">{row.range150}</td>
                    <td className="py-4 px-6 text-[#A3A3A3]">{row.central}</td>
                    <td className="py-4 px-6 text-[#FF6A00] font-bold">{row.northSouth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ LEGAL CREDENTIALS & PVI INSURANCE ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#141414] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              BẢO TOÀN VỐN HÀNG HÓA
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              BẢO HIỂM PVI 10 TỶ &amp; PHÁP LÝ CHÍNH NGẠCH
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3] font-light leading-relaxed">
              Chúng tôi bảo vệ quyền lợi pháp lý và tài sản của bạn bằng hợp đồng bảo hiểm trách nhiệm dân sự vận chuyển chính ngạch và chính sách công nợ linh hoạt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0B0B0B] border border-[#2A2A2A] space-y-3">
              <span className="font-heading font-black text-2xl text-[#FF6A00] block">
                10 TỶ VNĐ
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Bảo Hiểm Hàng Hóa PVI
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                Toàn bộ lô hàng vận chuyển bởi Tiên Phong đều thuộc đối tượng bảo hiểm trách nhiệm người vận chuyển của Tổng Công Ty Bảo Hiểm PVI, bồi thường tối đa 10 tỷ đồng mỗi vụ.
              </p>
            </div>

            <div className="p-8 bg-[#0B0B0B] border border-[#2A2A2A] space-y-3">
              <span className="font-heading font-black text-2xl text-[#FF6A00] block">
                100% ĐỀN BÙ
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Cam Kết SLA Hợp Đồng
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                Trường hợp xảy ra hư hại, thiếu hụt hay thất lạc do lỗi vận chuyển của Tiên Phong, chúng tôi cam kết bồi hoàn 100% giá trị trong vòng 7 ngày làm việc.
              </p>
            </div>

            <div className="p-8 bg-[#0B0B0B] border border-[#2A2A2A] space-y-3">
              <span className="font-heading font-black text-2xl text-[#FF6A00] block">
                30 — 45 NGÀY
              </span>
              <h3 className="font-heading font-bold text-base text-white uppercase">
                Chính Sách Công Nợ B2B
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                Áp dụng chu kỳ công nợ 30 đến 45 ngày đối với doanh nghiệp ký hợp đồng nguyên tắc. Bàn giao đầy đủ chứng từ gốc biên bản POD và xuất hóa đơn VAT điện tử trong ngày.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-xs">
            {LEGAL_CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="p-6 bg-[#0B0B0B] border border-[#2A2A2A] space-y-1">
                <span className="text-[#737373] uppercase tracking-wider block">{cred.label}:</span>
                <span className="font-heading font-bold text-white block text-sm">{cred.val}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/contact"
              className="btn-arrow-hover inline-block px-10 py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>YÊU CẦU HỢP ĐỒNG NGUYÊN TẮC MẪU</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
