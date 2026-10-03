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
      {/* Background Video — Stone Viaduct & Stagecoach */}
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

      {/* Content Block */}
      <div className="footer__content">
        {/* (a) Official Hậu Nguyễn Logo */}
        <Link href="/" aria-label="Trang chủ Hậu Nguyễn">
          <img
            src="/images/logo/logo-brand.png"
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

        {/* (c) Tagline */}
        <p className="footer__tagline">
          Hàng đi đúng đường, đến đúng nơi. Chuyên tuyến Bắc Trung Bộ vươn khắp các tỉnh phía Bắc.
        </p>

        {/* (d) 8 Navigation Links with drawing underline animation */}
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
              <Link href="/contact">Bản Đồ</Link>
            </li>
            <li>
              <Link href="/contact">Liên Hệ</Link>
            </li>
          </ul>
        </nav>

        {/* (e) Copyright with white and gold highlights */}
        <p className="footer__copy">
          © {new Date().getFullYear()} <strong>Hậu Nguyễn Transport</strong> · MST: <span>{company.taxCode}</span> · Hotline: <span>{company.hotline}</span>
        </p>
      </div>
    </footer>
  );
}
