import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingZalo from "./components/FloatingZalo";
import ScrollObserver from "./components/ScrollObserver";

export const metadata = {
  title: {
    default: "Vận Tải Tiên Phong | Đội Xe Trực Tiếp — Không Qua Trung Gian",
    template: "%s | Vận Tải Tiên Phong",
  },
  description:
    "Chuyên vận tải hàng công nghiệp, container, máy móc siêu trọng. 52+ đầu xe chính chủ, GPS 24/7, bảo hiểm hàng hóa 10 tỷ VNĐ. Phủ sóng 63 tỉnh thành & KCN trọng điểm.",
  keywords: [
    "vận tải",
    "xe tải",
    "đầu kéo container",
    "vận chuyển hàng hóa",
    "xe cẩu tự hành",
    "logistics Việt Nam",
    "KCN Bình Dương",
    "vận tải Bắc Nam",
  ],
  openGraph: {
    title: "Vận Tải Tiên Phong | Hồ Sơ Năng Lực Trực Tuyến",
    description: "52+ đầu xe trực tiếp, GPS 24/7, bảo hiểm 10 tỷ VNĐ",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white pb-14 md:pb-0 overflow-x-hidden">
        <ScrollObserver />
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
        <FloatingZalo />
      </body>
    </html>
  );
}
