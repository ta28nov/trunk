"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import company from "../data/company.json";

const NAV_ITEMS = [
  { href: "/", label: "Trang Chủ" },
  { href: "/fleet", label: "Đội Xe" },
  { href: "/pricing", label: "Bảng Giá" },
  { href: "/routes", label: "Tuyến Đường" },
  { href: "/about", label: "Giới Thiệu" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY > 80) {
        if (currentY > lastScrollY.current && currentY - lastScrollY.current > 8) {
          setVisible(false);
        } else if (lastScrollY.current - currentY > 8) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div
        className={`header ${scrolled ? "scrolled" : ""} ${!visible && !mobileOpen ? "hidden-up" : ""}`}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <img
              src="/images/logo/logo-hn.svg"
              alt="Logo Hậu Nguyễn"
              style={{ height: "40px", width: "auto" }}
              width={120}
              height={40}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--navy-700)", letterSpacing: "-0.02em" }}>
                HẬU NGUYỄN
              </span>
              <span style={{ fontSize: "0.625rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                {company.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: isActive ? "var(--gold-600)" : "var(--text-muted)",
                    transition: "color .2s",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: hotline + CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Hotline - desktop only */}
            <a
              href={company.hotlineTel}
              className="desktop-only"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
                lineHeight: 1.3,
                paddingRight: "0.75rem",
                borderRight: "1px solid var(--cream-200)",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>
                Hotline
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--navy-700)" }}>
                {company.hotline}
              </span>
            </a>

            {/* CTA Button */}
            <a
              href={company.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary desktop-only"
              style={{ fontSize: "0.8125rem", padding: "0 1.25rem", minHeight: "42px" }}
            >
              Nhận báo giá
            </a>

            {/* Hamburger - mobile only */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-only"
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: mobileOpen ? "0" : "5px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                position: "relative",
                zIndex: 51,
              }}
            >
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy-700)",
                borderRadius: "1px",
                transition: "transform .3s, opacity .3s",
                transform: mobileOpen ? "rotate(45deg) translateY(0px)" : "none",
                position: mobileOpen ? "absolute" : "relative",
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy-700)",
                borderRadius: "1px",
                transition: "opacity .3s",
                opacity: mobileOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy-700)",
                borderRadius: "1px",
                transition: "transform .3s, opacity .3s",
                transform: mobileOpen ? "rotate(-45deg) translateY(0px)" : "none",
                position: mobileOpen ? "absolute" : "relative",
              }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", paddingTop: "4rem" }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cream-200)" }}>
          <a href={company.hotlineTel} style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold-600)", display: "block", marginBottom: "0.5rem" }}>
            {company.hotline}
          </a>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            {company.address}
          </p>
        </div>
      </div>

    </>
  );
}
