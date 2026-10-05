"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import company from "../data/company.json";

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current.removeAttribute("autoplay");
      videoRef.current.pause();
      return;
    }
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play().catch(() => { });
            } else {
              videoRef.current?.pause();
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <footer className="footer footer--meridian" id="footer">
      {/* Content Block */}
      <div className="footer__content">
        {/* (a) Official Hậu Nguyễn Logo */}
        <Link href="/" aria-label="Trang chủ Hậu Nguyễn" className="footer__mark-link">
          <img
            src="/images/logo/logofinal-removebg.png"
            alt="Logo Hậu Nguyễn Transport"
            className="footer__mark"
          />
        </Link>

        {/* (b) Wordmark in Fraunces serif */}
        <p className="footer__brand">
          <Link href="/" aria-label="Trang chủ Hậu Nguyễn">
            HẬU NGUYỄN
          </Link>
        </p>

        {/* Caption */}
        <p
          style={{
            color: "var(--gold-400, #F2D27A)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0.4rem 0 0.25rem",
          }}
        >
          Vận Tải — Xây Dựng — Dịch Vụ
        </p>

        {/* (c) Tagline */}
        <p className="footer__tagline">
          Hàng đi đúng đường, đến đúng nơi. Chuyên tuyến Bắc Trung Bộ kết nối các tỉnh phía Bắc và Tây Bắc.
        </p>

        {/* (d) Navigation Links with drawing underline animation */}
        <nav className="footer__nav" aria-label="Footer">
          <ul>
            <li>
              <Link href="/">Trang Chủ</Link>
            </li>
            <li>
              <Link href="/fleet">Đội Xe</Link>
            </li>
            <li>
              <Link href="/pricing">Bảng Giá</Link>
            </li>
            <li>
              <Link href="/routes">Tuyến Đường</Link>
            </li>
            <li>
              <Link href="/about">Quy Trình</Link>
            </li>
            <li>
              <Link href="/about">Giới Thiệu</Link>
            </li>
            <li>
              <Link href="/privacy">Bảo Mật</Link>
            </li>
            <li>
              <Link href="/terms">Quy Chế Vận Chuyển</Link>
            </li>
            <li>
              <Link href="/contact">Liên Hệ</Link>
            </li>
          </ul>
        </nav>

        {/* (e) Bộ Công Thương Regulatory & Compliance Block */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href="http://online.gov.vn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Đã thông báo Bộ Công Thương"
            style={{ display: "inline-block", transition: "transform 0.2s ease" }}
          >
            <img
              src="/images/logo-da-thong-bao-bo-cong-thuong.svg"
              alt="Đã thông báo Bộ Công Thương - Cổng thông tin Quản lý hoạt động TMĐT"
              style={{ height: "46px", width: "auto", display: "block" }}
            />
          </a>

          <div style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.72)", lineHeight: "1.65", maxWidth: "800px" }}>
            <p style={{ margin: "0 0 0.35rem" }}>
              <strong>{company.name}</strong> · Người đại diện theo pháp luật: <strong>Nguyễn Hậu</strong>
            </p>
            <p style={{ margin: "0 0 0.35rem" }}>
              Giấy chứng nhận đăng ký kinh doanh số: <strong>{company.taxCode}</strong> do Sở Kế hoạch và Đầu tư Tỉnh Thanh Hóa cấp ngày 13/03/2026.
            </p>
            <p style={{ margin: 0 }}>
              Trụ sở &amp; Bãi xe: {company.address} · Hotline 24/7: <strong>{company.hotline}</strong> · Email: {company.email}
            </p>
          </div>
        </div>

        {/* (f) Copyright */}
        <p className="footer__copy" style={{ marginTop: "1rem", opacity: 0.85 }}>
          © {new Date().getFullYear()} <strong>Hậu Nguyễn Transport</strong> · vantaihaunguyen.com. Bảo lưu mọi quyền theo quy định của pháp luật.
        </p>
      </div>

      {/* Background Video — Placed at the very bottom */}
      <div className="footer__video-bottom">
        <video
          ref={videoRef}
          className="footer__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
        >
          <source src="/videos/meridian-footer.mp4" type="video/mp4" />
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260928_144832_2b6b23aa-4416-4fcb-9df4-132349c59edc.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </footer>
  );
}
