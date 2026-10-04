import Link from "next/link";
import company from "./data/company.json";

export const metadata = {
  title: "404 - Không tìm thấy trang | Hậu Nguyễn Transport",
  description: "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1529",
        color: "#FFFFFF",
        padding: "clamp(4rem, 8vw, 6rem) 1.5rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Animated / Stylized Truck Icon */}
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: "rgba(217, 162, 27, 0.15)",
            border: "1.5px solid rgba(217, 162, 27, 0.4)",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold-400, #F2D27A)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        </div>

        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold-400, #F2D27A)",
          }}
        >
          LỖI 404 · KHÔNG TÌM THẤY TRANG
        </span>

        <h1
          style={{
            fontFamily: "var(--font-heading, 'Fraunces', serif)",
            fontSize: "clamp(2rem, 1.6rem + 2vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Chuyến hàng này... dường như đã lạc đường
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.78)",
            margin: 0,
            maxWidth: "480px",
          }}
        >
          Đường dẫn bạn vừa truy cập không tồn tại hoặc đã được điều chuyển sang lộ trình khác. Vui lòng quay lại trang chủ hoặc gọi hotline ban điều xe để được trợ giúp.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            style={{
              padding: "0.85rem 1.75rem",
              borderRadius: "999px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Về Trang Chủ
          </Link>

          <a
            href={company.hotlineTel}
            className="btn btn-secondary"
            style={{
              padding: "0.85rem 1.75rem",
              borderRadius: "999px",
              fontWeight: 700,
              textDecoration: "none",
              background: "transparent",
              color: "#FFFFFF",
              border: "1.5px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            Hotline: {company.hotline}
          </a>
        </div>
      </div>
    </div>
  );
}
