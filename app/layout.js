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
  metadataBase: new URL("https://www.vantaihaunguyen.com"),
  alternates: {
    canonical: "https://www.vantaihaunguyen.com",
  },
  openGraph: {
    title: "Hậu Nguyễn – Vận Tải · Xây Dựng · Dịch Vụ | Thanh Hóa",
    description:
      "Công ty TNHH Xây Dựng và Dịch Vụ Vận Tải Hậu Nguyễn. Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn kết nối liên tỉnh phía Bắc và Tây Bắc. Hotline 0823 040 412.",
    url: "https://www.vantaihaunguyen.com",
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.vantaihaunguyen.com/#website",
                  "url": "https://www.vantaihaunguyen.com",
                  "name": "Vận Tải Hậu Nguyễn",
                  "alternateName": ["Hậu Nguyễn Transport", "vantaihaunguyen.com", "Vận Tải Thanh Hóa Hậu Nguyễn"],
                  "description": "Dịch vụ vận tải hàng hóa chuyên tuyến Bắc Trung Bộ kết nối các tỉnh phía Bắc và Tây Bắc.",
                  "inLanguage": "vi-VN"
                },
                {
                  "@type": ["LocalBusiness", "LogisticsService"],
                  "@id": "https://www.vantaihaunguyen.com/#organization",
                  "name": "CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN",
                  "alternateName": "Hậu Nguyễn Transport",
                  "url": "https://www.vantaihaunguyen.com",
                  "logo": "https://www.vantaihaunguyen.com/images/logo/logofinal-removebg.png",
                  "image": "https://www.vantaihaunguyen.com/images/hero/hau-nguyen-clean-full.png",
                  "telephone": "+84823040412",
                  "email": "nguyenhau1707hhh@gmail.com",
                  "taxID": "2803219353",
                  "priceRange": "$$",
                  "openingHours": "Mo-Su 00:00-24:00",
                  "sameAs": ["https://zalo.me/0823040412"],
                  "description":
                    "Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc và Tây Bắc.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "92 Đông Xuân",
                    "addressLocality": "Xã Trường Văn",
                    "addressRegion": "Thanh Hóa",
                    "addressCountry": "VN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+84823040412",
                    "contactType": "Điều xe trực ban 24/7",
                    "areaServed": "VN",
                    "availableLanguage": "Vietnamese"
                  },
                  "areaServed": [
                    "Hà Tĩnh",
                    "Nghệ An",
                    "Thanh Hóa",
                    "Hà Nội",
                    "Hải Phòng",
                    "Quảng Ninh",
                    "Bắc Ninh",
                    "Hưng Yên",
                    "Hải Dương",
                    "Hòa Bình",
                    "Sơn La",
                    "Điện Biên",
                    "Lai Châu",
                    "Lào Cai",
                    "Yên Bái"
                  ],
                  "knowsAbout": [
                    "Vận tải đường bộ",
                    "Vận chuyển hàng hóa Bắc Nam",
                    "Cho thuê xe tải 3.5 tấn",
                    "Cho thuê xe tải 8 tấn",
                    "Cho thuê xe tải 15 tấn",
                    "Vận chuyển vật liệu xây dựng",
                    "Logistics hàng hóa công nghiệp"
                  ]
                }
              ]
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
