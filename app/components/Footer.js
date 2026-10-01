import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Dịch Vụ Vận Tải",
    links: [
      { href: "/services", label: "Bao Xe Nguyên Chuyến (FTL)" },
      { href: "/services", label: "Ghép Hàng Định Tuyến Bắc — Nam" },
      { href: "/services", label: "Di Dời & Cẩu Hạ Máy Xưởng" },
      { href: "/services", label: "Kéo Container Cảng Biển & ICD" },
      { href: "/services", label: "Vận Tải Vùng Đông Nam Bộ" },
    ],
  },
  {
    title: "Đội Xe & Năng Lực",
    links: [
      { href: "/fleet", label: "Đầu Kéo Container 40ft & 45ft" },
      { href: "/fleet", label: "Xe Tải Thùng Mui Bạt 15 Tấn" },
      { href: "/fleet", label: "Xe Tải Thùng Mui Bạt 8 Tấn" },
      { href: "/fleet", label: "Xe Cẩu Tự Hành 10 Tấn" },
      { href: "/fleet", label: "Bãi Xe 15.000m² Sóng Thần" },
    ],
  },
  {
    title: "Mạng Lưới & Pháp Lý",
    links: [
      { href: "/coverage", label: "Mạng Lưới Tuyến Đường" },
      { href: "/coverage", label: "42+ Khu Công Nghiệp Trọng Điểm" },
      { href: "/pricing", label: "Bảng Giá Cước Minh Bạch" },
      { href: "/pricing", label: "Bảo Hiểm Hàng Hóa PVI 10 Tỷ" },
      { href: "/about", label: "Năng Lực & Giấy Phép Sở GTVT" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#1F1F1F]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="font-heading font-black text-2xl tracking-tight text-white block">
                TIÊN PHONG
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#737373] font-semibold block mt-1">
                VẬN TẢI THƯƠNG MẠI &amp; CÔNG NGHIỆP ĐƯỜNG BỘ
              </span>
            </div>

            <p className="text-sm text-[#A3A3A3] font-light leading-relaxed max-w-sm">
              Đơn vị vận tải chính ngạch sở hữu 52 đầu xe chính chủ, bãi xe trung tâm 15.000m² tại Dĩ An — Bình Dương. Đáp ứng các tiêu chuẩn khắt khe nhất của doanh nghiệp FDI và nhà máy sản xuất.
            </p>

            <div className="space-y-2 text-xs text-[#737373] pt-2 border-t border-[#1F1F1F]">
              <div>
                <strong className="text-[#A3A3A3] font-medium">Trụ sở:</strong> Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM
              </div>
              <div>
                <strong className="text-[#A3A3A3] font-medium">Bãi xe trung tâm:</strong> KCN Sóng Thần 1, TP. Dĩ An, Tỉnh Bình Dương
              </div>
              <div>
                <strong className="text-[#A3A3A3] font-medium">Mã số thuế:</strong> 0314892039 — GP Vận tải: 41-GPVT/SGTVT
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:0918456789"
                className="inline-block font-heading font-black text-xl text-[#FF6A00] hover:underline"
              >
                0918.456.789 — Điều Vận 24/7
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white border-b border-[#1F1F1F] pb-3">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#A3A3A3] hover:text-white transition-colors duration-150 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="border-t border-[#1F1F1F] bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © 2024 Vận Tải Tiên Phong. Tất cả các quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6">
            <span>Bảo hiểm PVI 10 Tỷ VNĐ</span>
            <span>•</span>
            <span>Chuẩn Euro 5</span>
            <span>•</span>
            <span>Giám sát GPS 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
