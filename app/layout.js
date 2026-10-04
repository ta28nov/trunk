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
  openGraph: {
    title: "Hậu Nguyễn – Vận Tải · Xây Dựng · Dịch Vụ",
    description:
      "Công ty TNHH Xây Dựng và Dịch Vụ Vận Tải Hậu Nguyễn. Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn kết nối liên tỉnh phía Bắc và Tây Bắc.",
    locale: "vi_VN",
    type: "website",
    siteName: "Hậu Nguyễn Transport",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
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
              url: "https://haunguyen.vn",
              logo: "https://haunguyen.vn/images/logo/logofinal-removebg.png",
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
