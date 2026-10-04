import PricingPageClient from "./PricingPageClient";

export const metadata = {
  title: "Bảng Giá Cước Vận Chuyển Xe Tải Hino & Hyundai",
  description:
    "Bảng giá cước vận tải minh bạch theo tải trọng 3.5 đến 15 tấn chuyên tuyến Bắc Trung Bộ đi các tỉnh phía Bắc. Cam kết trọn gói, xuất hóa đơn VAT đầy đủ. Hotline 0823 040 412.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
