"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Trang Chủ" },
  { href: "/services", label: "Dịch Vụ" },
  { href: "/fleet", label: "Đội Xe" },
  { href: "/coverage", label: "Mạng Lưới" },
  { href: "/pricing", label: "Bảng Giá" },
  { href: "/about", label: "Giới Thiệu" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 8) {
              setVisible(false);
            } else if (lastScrollY.current - currentScrollY > 8) {
              setVisible(true);
            }
          } else {
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col group shrink-0">
            <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-[#FF6A00] transition-colors">
              TIÊN PHONG
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#737373] font-medium">
              VẬN TẢI ĐƯỜNG BỘ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[#FF6A00]"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Hotline & CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0918456789"
              className="hidden md:flex flex-col text-right leading-tight pr-3 border-r border-[#2A2A2A]"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#737373]">
                Hotline Điều Vận
              </span>
              <span className="font-heading font-bold text-xs text-white hover:text-[#FF6A00] transition-colors">
                0918.456.789
              </span>
            </a>

            <Link
              href="/contact"
              className="btn-arrow-hover px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>YÊU CẦU BÁO GIÁ</span>
              <span className="arrow-move ml-1.5 font-bold">→</span>
            </Link>

            {/* Mobile Menu Toggle Button (No Icons) */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden px-3 py-2 border border-[#2A2A2A] hover:border-[#FF6A00] text-xs font-heading font-bold uppercase tracking-wider text-white transition-colors"
              aria-label="Chuyển đổi menu di động"
            >
              {mobileOpen ? "ĐÓNG [×]" : "MENU [=]"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-t border-[#1F1F1F] px-6 py-8 space-y-4">
            <div className="space-y-1 divide-y divide-[#1F1F1F]">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-4 font-heading font-black text-lg uppercase tracking-tight transition-colors ${
                      isActive ? "text-[#FF6A00]" : "text-white hover:text-[#FF6A00]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[#737373] font-normal">
                      0{idx + 1} →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#1F1F1F] space-y-3">
              <div className="text-xs text-[#737373] uppercase tracking-wider">
                Trực ban điều phối 24/7
              </div>
              <a
                href="tel:0918456789"
                className="block font-heading font-black text-xl text-[#FF6A00]"
              >
                0918.456.789 — Anh Thắng
              </a>
              <p className="text-xs text-[#A3A3A3] font-light">
                Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM
              </p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
