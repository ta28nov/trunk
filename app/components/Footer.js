import Link from "next/link";

const FOOTER_NAV = [
  { title: "Dịch Vụ Vận Tải", links: [
    { href: "/services", label: "Bao Xe Nguyên Chuyến (FTL)" },
    { href: "/services", label: "Ghép Hàng Bắc — Nam" },
    { href: "/services", label: "Di Dời & Cẩu Hạ Máy" },
    { href: "/services", label: "Kéo Container Cảng/ICD" },
  ]},
  { title: "Hệ Thống Đội Xe", links: [
    { href: "/fleet", label: "Đầu Kéo Container 40ft" },
    { href: "/fleet", label: "Xe Tải Mui Bạt 8T–15T" },
    { href: "/fleet", label: "Xe Cẩu Tự Hành 5T–15T" },
    { href: "/fleet", label: "Xe Thùng Kín & Lạnh" },
  ]},
  { title: "Liên Hệ & Hỗ Trợ 24/7", links: [
    { href: "/contact", label: "Tổng Đài Điều Xe" },
    { href: "/pricing", label: "Nhận Báo Giá 15 Phút" },
    { href: "/routes", label: "Tra Cứu Tuyến Đường" },
    { href: "/trust", label: "Chứng Chỉ & Pháp Lý" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">
                  local_shipping
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base uppercase tracking-tight">
                  Vận Tải Tiên Phong
                </h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  TNHH TM DV Vận Tải
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-orange-500 text-base mt-0.5">location_on</span>
                Số 28 Đường số 8, P. Linh Trung, TP. Thủ Đức, TP.HCM
              </p>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-orange-500 text-base mt-0.5">badge</span>
                MST: 0314892039
              </p>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-orange-500 text-base mt-0.5">verified</span>
                GP Vận Tải: 41-GPVT/SGTVT
              </p>
            </div>
            {/* Hotlines */}
            <div className="mt-4 pt-4 border-t border-navy-700 space-y-1.5">
              <a href="tel:0918456789" className="flex items-center gap-2 text-orange-500 font-heading font-bold hover:text-orange-400 transition-colors">
                <span className="material-symbols-outlined text-base">phone</span>
                0918.456.789 — Anh Thắng
              </a>
              <a href="tel:0903123456" className="flex items-center gap-2 text-orange-400 font-heading font-semibold hover:text-orange-300 transition-colors text-sm">
                <span className="material-symbols-outlined text-base">phone</span>
                0903.123.456 — Điều Hành
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-orange-500 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white hover:pl-1 transition-all duration-200"
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

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2024 Vận Tải Tiên Phong. Bản quyền thuộc về Công ty TNHH Vận Tải Tiên Phong.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-green-500 text-sm">shield</span>
              Bảo Hiểm PVI — 10 Tỷ VNĐ
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-blue-500 text-sm">gps_fixed</span>
              GPS Giám Sát 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-950/95 backdrop-blur-sm border-t border-navy-700 px-2 py-2 flex items-center gap-2 safe-area-bottom">
        <a
          href="tel:0918456789"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-orange-500 text-white font-heading font-bold text-xs uppercase rounded-sm"
        >
          <span className="material-symbols-outlined text-base">call</span>
          Gọi Điện
        </a>
        <a
          href="https://zalo.me/0918456789"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-blue-500 text-white font-heading font-bold text-xs uppercase rounded-sm"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Zalo
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-navy-700 text-white font-heading font-bold text-xs uppercase rounded-sm"
        >
          <span className="material-symbols-outlined text-base">calendar_month</span>
          Đặt Lịch
        </Link>
      </div>
    </footer>
  );
}
