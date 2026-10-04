import ContactPageClient from "./ContactPageClient";
import company from "../data/company.json";

export const metadata = {
  title: "Liên Hệ Ban Điều Xe 24/7",
  description: `Liên hệ đặt lịch xe tải Hino & Hyundai tại Hậu Nguyễn Transport. Hotline trực ban 24/7: ${company.hotline}, Chat Zalo, bản đồ bãi xe tại 92 Đông Xuân, Xã Trường Văn, Thanh Hóa.`,
};

export default function ContactPage() {
  return <ContactPageClient />;
}
