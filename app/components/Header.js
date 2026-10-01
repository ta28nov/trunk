"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Trang Chủ" },
  { href: "/about", label: "Giới Thiệu" },
  { href: "/fleet", label: "Đội Xe" },
  { href: "/services", label: "Dịch Vụ" },
  { href: "/cargo", label: "Loại Hàng" },
  { href: "/routes", label: "Tuyến Đường" },
  { href: "/operations", label: "Thực Địa" },
  { href: "/trust", label: "Uy Tín" },
  { href: "/pricing", label: "Bảng Giá" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ═══ TOPBAR ═══ */}
      <div className="bg-navy-950 text-white text-xs md:text-sm border-b border-navy-900/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-light text-xs">
              Vận Tải Tiên Phong • Hạ Tầng &amp; Đội Xe Doanh Nghiệp Toàn Quốc
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400 font-light text-xs">
              Trực Ban Điều Vận:
            </span>
            <a
              href="tel:0918456789"
              className="font-heading font-bold text-orange-400 hover:text-orange-300 transition-colors text-xs sm:text-sm"
            >
              0918.456.789
            </a>
            <span className="text-slate-600">—</span>
            <a
              href="tel:0903123456"
              className="font-heading font-bold text-slate-200 hover:text-orange-400 transition-colors text-xs sm:text-sm"
            >
              0903.123.456
            </a>
          </div>
        </div>
      </div>

      {/* ═══ MAIN HEADER ═══ */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-slate-200/60" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-navy-900 rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-orange-500 text-xl md:text-2xl">
                local_shipping
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm md:text-base text-navy-900 uppercase tracking-tight leading-tight">
                Vận Tải Tiên Phong
              </span>
              <span className="font-heading text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest leading-tight">
                Hồ Sơ Năng Lực Trực Tuyến
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide transition-colors rounded-sm ${
                    isActive
                      ? "bg-navy-900 text-white"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="tel:0918456789"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-navy-900 font-heading font-semibold text-xs uppercase tracking-wide rounded-sm transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span className="hidden md:inline">Gọi Ngay</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 md:px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wide rounded-sm transition-colors shadow-sm shadow-orange-500/25"
            >
              <span className="material-symbols-outlined text-base">
                request_quote
              </span>
              <span className="hidden sm:inline">Báo Giá 15 Phút</span>
              <span className="sm:hidden">Báo Giá</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-sm hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-2xl text-navy-900">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2.5 font-heading font-semibold text-sm uppercase tracking-wide rounded-sm transition-colors ${
                      isActive
                        ? "bg-navy-900 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
