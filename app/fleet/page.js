import company from "../data/company.json";
import fleetData from "../data/fleet.json";
import FleetPageClient from "./FleetPageClient";

export const metadata = {
  title: "Đội xe – Hino, Hyundai thùng kín & thùng bạt",
  description: `Đội xe tải Hino, Hyundai thùng kín và thùng bạt từ 3,5 đến 15 tấn. Bộ lọc theo loại thùng và hãng xe. Hotline ${company.hotline}.`,
};

export default function FleetPage() {
  return <FleetPageClient fleet={fleetData} company={company} />;
}
