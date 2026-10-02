import Link from "next/link";
import company from "../data/company.json";

const FOOTER_LINKS = [
  {
    title: "Dịch Vụ",
    links: [
      { href: "/fleet", label: "Đội xe thùng kín" },
      { href: "/fleet", label: "Đội xe thùng bạt" },
      { href: "/pricing", label: "Bảng giá cước" },
      { href: "/routes", label: "Tuyến đường" },
    ],
  },
  {
    title: "Công Ty",
    links: [
      { href: "/about", label: "Giới thiệu" },
      { href: "/contact", label: "Liên hệ" },
      { href: "/fleet", label: "Đội xe" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Desktop grid */}
          <div className="footer-grid" style={{ display: "grid", gap: "3rem" }}>
            {/* Brand column */}
            <div style={{ maxWidth: "420px" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--text-on-dark)", display: "block", letterSpacing: "-0.02em" }}>
                  HẬU NGUYỄN
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--gold-300)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginTop: "0.25rem" }}>
                  {company.slogan}
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,252,245,.6)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {company.name}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.8125rem", color: "rgba(255,252,245,.5)" }}>
                <div>
                  <strong style={{ color: "rgba(255,252,245,.7)", fontWeight: 500 }}>Địa chỉ:</strong>{" "}
                  {company.address}
                </div>
                <div>
                  <strong style={{ color: "rgba(255,252,245,.7)", fontWeight: 500 }}>MST:</strong>{" "}
                  {company.taxCode}
                </div>
                <div>
                  <strong style={{ color: "rgba(255,252,245,.7)", fontWeight: 500 }}>Email:</strong>{" "}
                  <a href={`mailto:${company.email}`} style={{ color: "var(--gold-300)" }}>{company.email}</a>
                </div>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={company.hotlineTel}
                  style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--gold-300)", display: "inline-block" }}
                >
                  {company.hotline}
                </a>
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx}>
                <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,252,245,.1)" }}>
                  {col.title}
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        style={{ fontSize: "0.8125rem", color: "rgba(255,252,245,.5)", transition: "color .2s" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div>
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,252,245,.1)" }}>
                Liên Hệ Nhanh
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href={company.hotlineTel}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", background: "rgba(255,252,245,.08)", borderRadius: "var(--radius-sm)", fontSize: "0.875rem", fontWeight: 700, color: "var(--text-on-dark)", transition: "background .2s" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Gọi ngay
                </a>
                <a
                  href={company.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", background: "var(--gold-500)", borderRadius: "var(--radius-sm)", fontSize: "0.875rem", fontWeight: 700, color: "var(--navy-900)", transition: "background .2s" }}
                >
                  Zalo báo giá
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.75rem", color: "rgba(255,252,245,.35)" }}>
          <span>© 2026 {company.shortName}. Tất cả các quyền được bảo lưu.</span>
          <span>MST: {company.taxCode}</span>
        </div>
      </div>

    </footer>
  );
}
