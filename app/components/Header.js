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

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isDarkHeader = pathname === "/" && !scrolled;

  return (
    <>
      <div
        className={`header ${scrolled ? "scrolled" : ""} ${!visible && !mobileOpen ? "hidden-up" : ""}`}
        style={{
          background: isDarkHeader
            ? "linear-gradient(180deg, rgba(10, 14, 23, 0.85) 0%, rgba(10, 14, 23, 0) 100%)"
            : undefined,
          borderBottom: isDarkHeader
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : undefined,
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>
          {/* Logo - pure logo without text */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0.25rem 0",
            }}
          >
            <img
              src="/images/logo/logofinal-removebg.png"
              alt="Logo Hậu Nguyễn Transport"
              style={{
                height: "44px",
                width: "auto",
                maxHeight: "44px",
                objectFit: "contain",
                display: "block",
                filter: isDarkHeader
                  ? "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 10px rgba(242, 210, 122, 0.45))"
                  : "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15))",
                transition: "filter 0.3s ease, transform 0.3s ease",
              }}
              height={44}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const linkColor = isActive
                ? "var(--gold-500)"
                : isDarkHeader
                ? "rgba(255, 255, 255, 0.85)"
                : "var(--text-muted)";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: linkColor,
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
            <div
              className="desktop-only"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
                lineHeight: 1.25,
                paddingRight: "0.75rem",
                borderRight: isDarkHeader ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid var(--cream-200)",
                transition: "border-color .3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", justifyContent: "flex-end" }}>
                <span style={{
                  fontSize: "0.625rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: isDarkHeader ? "rgba(255, 255, 255, 0.6)" : "var(--text-muted)",
                  fontWeight: 600,
                }}>
                  Hotline chính:
                </span>
                <a
                  href={company.hotlineTel}
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: isDarkHeader ? "var(--gold-300)" : "var(--navy-900)",
                    textDecoration: "none",
                  }}
                  title="Nguyễn Hậu - Điều hành bãi xe 24/7"
                >
                  {company.hotline} <span style={{ fontSize: "0.6875rem", fontWeight: 600, opacity: 0.85 }}>(A. Hậu)</span>
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", justifyContent: "flex-end", marginTop: "1px" }}>
                <span style={{
                  fontSize: "0.625rem",
                  color: isDarkHeader ? "rgba(255, 255, 255, 0.5)" : "var(--text-muted)",
                  fontWeight: 500,
                }}>
                  Hotline 2:
                </span>
                <a
                  href={company.hotline2Tel}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: isDarkHeader ? "rgba(255, 255, 255, 0.8)" : "var(--navy-700)",
                    textDecoration: "none",
                  }}
                  title="Nguyễn Hữu Phúc - Đại diện kinh doanh & Điều phối"
                >
                  {company.hotline2} <span style={{ fontSize: "0.6875rem", fontWeight: 500, opacity: 0.85 }}>(A. Phúc)</span>
                </a>
              </div>
            </div>

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
                background: isDarkHeader && !mobileOpen ? "#FFFFFF" : "var(--navy-700)",
                borderRadius: "1px",
                transition: "transform .3s, opacity .3s, background .3s",
                transform: mobileOpen ? "rotate(45deg) translateY(0px)" : "none",
                position: mobileOpen ? "absolute" : "relative",
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: isDarkHeader && !mobileOpen ? "#FFFFFF" : "var(--navy-700)",
                borderRadius: "1px",
                transition: "opacity .3s, background .3s",
                opacity: mobileOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: isDarkHeader && !mobileOpen ? "#FFFFFF" : "var(--navy-700)",
                borderRadius: "1px",
                transition: "transform .3s, opacity .3s, background .3s",
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
          <p style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-600)", margin: "0 0 0.75rem" }}>
            HOTLINE &amp; ZALO ĐIỀU XE 24/7
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <a href={company.hotlineTel} style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--navy-900)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" }}>
              <span>{company.hotline}</span>
              <span style={{ fontSize: "0.8125rem", color: "var(--gold-600)", fontWeight: 700 }}>A. Hậu (Chính)</span>
            </a>
            <a href={company.hotline2Tel} style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" }}>
              <span>{company.hotline2}</span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>A. Phúc (Số 2)</span>
            </a>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
            {company.address}
          </p>
        </div>
      </div>

    </>
  );
}
