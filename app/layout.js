import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import ScrollObserver from "./components/ScrollObserver";

export const metadata = {
  title: {
    default: "Hậu Nguyễn – Vận Tải · Xây Dựng · Dịch Vụ | Thanh Hóa",
    template: "%s | Hậu Nguyễn – Vận Tải · Xây Dựng · Dịch Vụ",
  },
  description:
    "Công ty TNHH Xây Dựng và Dịch Vụ Vận Tải Hậu Nguyễn. Đội xe Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn kết nối Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc. Hotline 0823 040 412.",
  keywords: [
    "vận tải Hậu Nguyễn",
    "xây dựng Hậu Nguyễn",
    "dịch vụ vận tải Hậu Nguyễn",
    "vận tải xây dựng dịch vụ",
    "xe tải thùng kín",
    "xe tải thùng bạt",
    "vận tải Thanh Hóa",
    "xe Hino",
    "xe Hyundai",
    "vận chuyển hàng hóa Bắc",
    "Hà Tĩnh Nghệ An",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://vantaihaunguyen.com"),
  alternates: {
    canonical: "https://vantaihaunguyen.com",
  },
  openGraph: {
    title: "Hậu Nguyễn – Vận Tải · Xây Dựng · Dịch Vụ",
    description:
      "Công ty TNHH Xây Dựng và Dịch Vụ Vận Tải Hậu Nguyễn. Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn kết nối liên tỉnh phía Bắc và Tây Bắc.",
    url: "https://vantaihaunguyen.com",
    siteName: "Hậu Nguyễn Transport",
    images: [
      {
        url: "/images/hero/hau-nguyen-clean-full.png",
        width: 1200,
        height: 630,
        alt: "Hậu Nguyễn Transport - Vận Tải Xây Dựng Dịch Vụ Thanh Hóa",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hậu Nguyễn Transport – Vận Tải Bắc Trung Bộ Đi Phía Bắc",
    description:
      "Đội xe chuyên dụng Hino, Hyundai 3.5T – 15T. Nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc.",
    images: ["/images/hero/hau-nguyen-clean-full.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "LogisticsService"],
              name: "CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN",
              alternateName: "Hậu Nguyễn Transport",
              url: "https://vantaihaunguyen.com",
              logo: "https://vantaihaunguyen.com/images/logo/logofinal-removebg.png",
              image: "https://vantaihaunguyen.com/images/hero/hau-nguyen-clean-full.png",
              telephone: "0823040412",
              email: "nguyenhau1707hhh@gmail.com",
              taxID: "2803219353",
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-24:00",
              sameAs: ["https://zalo.me/0823040412"],
              description:
                "Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "92 Đông Xuân",
                addressLocality: "Xã Trường Văn",
                addressRegion: "Thanh Hóa",
                addressCountry: "VN",
              },
              areaServed: [
                "Hà Tĩnh",
                "Nghệ An",
                "Thanh Hóa",
                "Hà Nội",
                "Hải Phòng",
                "Sơn La",
                "Lào Cai",
                "các tỉnh phía Bắc",
                "Tây Bắc",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ScrollObserver />
        <Header />
        <main style={{ paddingTop: "64px" }}>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
