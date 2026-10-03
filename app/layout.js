import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import ScrollObserver from "./components/ScrollObserver";

export const metadata = {
  title: {
    default: "Hậu Nguyễn – Vận tải xe Hino, Hyundai thùng kín, thùng bạt | Thanh Hóa",
    template: "%s | Hậu Nguyễn Transport",
  },
  description:
    "Xe tải Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Chạy Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc. Hotline 0823 040 412.",
  keywords: [
    "vận tải Hậu Nguyễn",
    "xe tải thùng kín",
    "xe tải thùng bạt",
    "vận tải Thanh Hóa",
    "xe Hino",
    "xe Hyundai",
    "vận chuyển hàng hóa Bắc",
    "Hà Tĩnh Nghệ An",
  ],
  openGraph: {
    title: "Hậu Nguyễn – Vận tải xe Hino, Hyundai thùng kín, thùng bạt",
    description:
      "Đội xe chuyên dụng Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Nhận hàng từ Hà Tĩnh, Nghệ An, Thanh Hóa đi các tỉnh phía Bắc, Tây Bắc.",
    locale: "vi_VN",
    type: "website",
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
              "@type": "LocalBusiness",
              name: "CÔNG TY TNHH XÂY DỰNG VÀ DỊCH VỤ VẬN TẢI HẬU NGUYỄN",
              alternateName: "Hậu Nguyễn Transport",
              telephone: "0823040412",
              email: "nguyenhau1707hhh@gmail.com",
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
