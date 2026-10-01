import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingZalo from "./components/FloatingZalo";
import MobileBottomBar from "./components/MobileBottomBar";
import ScrollObserver from "./components/ScrollObserver";

export const metadata = {
  title: {
    default: "Vận Tải Tiên Phong | Dịch Vụ Vận Tải Đường Bộ & Đội Xe Trực Chiến",
    template: "%s | Vận Tải Tiên Phong",
  },
  description:
    "Công ty vận tải hàng hóa thương mại và công nghiệp đường bộ hàng đầu Đông Nam Bộ. Đội xe 52 phương tiện chính chủ, bãi xe 15.000m² tại KCN Sóng Thần, bảo hiểm PVI 10 tỷ VNĐ.",
  keywords: [
    "vận tải đường bộ",
    "xe tải chở hàng",
    "đầu kéo container",
    "vận chuyển hàng công nghiệp",
    "vận tải Bắc Nam",
    "KCN Sóng Thần",
    "bãi xe Bình Dương",
    "vận tải Tiên Phong",
  ],
  openGraph: {
    title: "Vận Tải Tiên Phong | Hồ Sơ Năng Lực Vận Tải Trực Tuyến",
    description: "Vận chuyển những điều quan trọng. 52 phương tiện chính chủ, an toàn tuyệt đối.",
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0B0B0B] text-white antialiased selection:bg-[#FF6A00] selection:text-white overflow-x-hidden pb-mobile-dock">
        <ScrollObserver />
        <Header />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
        <FloatingZalo />
        <MobileBottomBar />
      </body>
    </html>
  );
}

