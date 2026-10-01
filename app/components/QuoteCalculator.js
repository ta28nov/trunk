"use client";
import { useState, useMemo } from "react";

const VEHICLE_RATES = [
  { id: "truck-5t", name: "Xe Tải Thùng Kín 5T", baseRate: 18000, minPrice: 1200000, capacity: "5 Tấn / 25 m³" },
  { id: "truck-8t", name: "Xe Tải Mui Bạt 8T", baseRate: 22000, minPrice: 1600000, capacity: "8 Tấn / 42 m³" },
  { id: "truck-15t", name: "Xe Tải Mui Bạt 9.6M (15T)", baseRate: 28000, minPrice: 2200000, capacity: "15 Tấn / 57 m³" },
  { id: "container-40ft", name: "Đầu Kéo Container 40ft/45ft", baseRate: 35000, minPrice: 3200000, capacity: "32 Tấn / Chuẩn ISO" },
  { id: "crane-10t", name: "Xe Cẩu Tự Hành 10T", baseRate: 32000, minPrice: 2800000, capacity: "Cẩu 10T / Chở 12T" },
  { id: "reefer-8t", name: "Xe Đông Lạnh Thermo King 8T", baseRate: 26000, minPrice: 2400000, capacity: "8 Tấn / -18°C ~ +10°C" },
];

const ROUTE_PRESETS = [
  { name: "Nội vùng: Sóng Thần ⇄ KCN VSIP 1 & 2", distance: 35, time: "1.5 Giờ" },
  { name: "Cảng biển: KCN Sóng Thần ⇄ Cảng Cát Lái", distance: 45, time: "2 Giờ" },
  { name: "Cảng sâu: TP.HCM ⇄ Cảng Cái Mép", distance: 85, time: "3 Giờ" },
  { name: "Miền Tây: TP.HCM ⇄ TP. Cần Thơ", distance: 175, time: "5 — 6 Giờ" },
  { name: "Miền Trung: TP.HCM ⇄ TP. Đà Nẵng", distance: 950, time: "24 — 28 Giờ" },
  { name: "Bắc — Nam: TP.HCM ⇄ Hà Nội", distance: 1750, time: "44 — 48 Giờ" },
];

export default function QuoteCalculator({ compact = false }) {
  const [vehicleId, setVehicleId] = useState("truck-15t");
  const [distance, setDistance] = useState(85);
  const [hasLoading, setHasLoading] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [customDistance, setCustomDistance] = useState("");

  const selectedVehicle = useMemo(() => {
    return VEHICLE_RATES.find((v) => v.id === vehicleId) || VEHICLE_RATES[0];
  }, [vehicleId]);

  const activeDistance = customDistance ? Math.max(1, Number(customDistance)) : distance;

  const estimatedCost = useMemo(() => {
    let cost = 0;
    if (activeDistance <= 50) {
      cost = activeDistance * selectedVehicle.baseRate * 1.25;
    } else if (activeDistance <= 200) {
      cost = activeDistance * selectedVehicle.baseRate * 1.1;
    } else if (activeDistance <= 800) {
      cost = activeDistance * selectedVehicle.baseRate * 0.9;
    } else {
      cost = activeDistance * selectedVehicle.baseRate * 0.72;
    }

    cost = Math.max(cost, selectedVehicle.minPrice);

    if (hasLoading) cost += 800000;
    if (isUrgent) cost *= 1.15;

    return Math.round(cost / 50000) * 50000;
  }, [activeDistance, selectedVehicle, hasLoading, isUrgent]);

  const formattedCost = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(estimatedCost);

  return (
    <div className={`bg-white border border-[#DDD9CF] ${compact ? "p-6" : "p-8 md:p-12"}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#DDD9CF] gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block mb-1">
            CÔNG CỤ TÍNH CƯỚC TRỰC TUYẾN
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0B0B0B] uppercase tracking-tight">
            ƯỚC TÍNH CƯỚC VẬN TẢI THAM KHẢO
          </h3>
        </div>
        <div className="text-[#737373] text-xs font-heading uppercase tracking-wider">
          Báo giá trực tiếp từ đội xe • Không phí trung gian
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Vehicle Select */}
          <div className="space-y-3">
            <strong className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0B]">
              1. Chọn Loại Xe Vận Chuyển:
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VEHICLE_RATES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleId(v.id)}
                  className={`text-left p-4 border transition-colors ${
                    vehicleId === v.id
                      ? "border-[#FF6A00] bg-[#FFF3EB]"
                      : "border-[#DDD9CF] hover:border-[#0B0B0B] bg-[#F2F0EA]"
                  }`}
                >
                  <div className="font-heading font-bold text-sm text-[#0B0B0B]">{v.name}</div>
                  <div className="text-xs text-[#737373] mt-1">{v.capacity}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Route Presets */}
          <div className="space-y-3">
            <strong className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0B]">
              2. Chọn Tuyến Đường Mẫu Hoặc Nhập Số Km:
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {ROUTE_PRESETS.map((r) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => {
                    setDistance(r.distance);
                    setCustomDistance("");
                  }}
                  className={`text-left p-3.5 border text-xs transition-colors ${
                    distance === r.distance && !customDistance
                      ? "border-[#0B0B0B] bg-[#0B0B0B] text-white font-bold"
                      : "border-[#DDD9CF] hover:border-[#0B0B0B] text-[#262626] bg-[#F2F0EA]"
                  }`}
                >
                  <div className="truncate font-semibold">{r.name}</div>
                  <div className={`text-[11px] mt-1 ${distance === r.distance && !customDistance ? "text-[#FF6A00]" : "text-[#737373]"}`}>
                    {r.distance} km • Thời gian: {r.time}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs text-[#525252] uppercase font-heading font-semibold whitespace-nowrap">
                Hoặc nhập cự ly riêng:
              </span>
              <div className="relative flex-1">
                <input
                  type="number"
                  placeholder="Nhập số km..."
                  value={customDistance}
                  onChange={(e) => setCustomDistance(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B] pr-12"
                />
                <span className="absolute right-4 top-2.5 text-xs text-[#737373] font-medium">km</span>
              </div>
            </div>
          </div>

          {/* Addons */}
          <div className="space-y-3">
            <strong className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0B]">
              3. Tùy Chọn Bổ Sung:
            </strong>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs text-[#262626] select-none">
                <input
                  type="checkbox"
                  checked={hasLoading}
                  onChange={(e) => setHasLoading(e.target.checked)}
                  className="w-4 h-4 text-[#FF6A00] accent-[#FF6A00]"
                />
                <span>Hỗ trợ bốc xếp / cẩu hạ 2 đầu (+800.000đ)</span>
              </label>
              <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs text-[#262626] select-none">
                <input
                  type="checkbox"
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className="w-4 h-4 text-[#FF6A00] accent-[#FF6A00]"
                />
                <span>Hỏa tốc bốc hàng sau 30 phút (+15%)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B0B0B] text-white p-8 sm:p-10 border border-[#2A2A2A]">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1F1F1F]">
              <span className="text-xs uppercase tracking-widest text-[#737373] font-heading font-semibold">
                Ước Tính Cước Phí
              </span>
              <span className="text-xs font-semibold text-[#FF6A00]">
                Chưa Gồm VAT
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#737373] uppercase tracking-wider block">
                Giá cước dự kiến:
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#FF6A00] tracking-tight">
                {formattedCost}
              </div>
              <p className="text-xs text-[#737373] font-light leading-relaxed pt-1">
                Chi phí đã bao gồm: Lái xe, xăng dầu, vé cầu đường BOT, định vị GPS giám sát và bảo hiểm hàng hóa PVI.
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-[#2A2A2A] space-y-2.5 text-xs text-[#A3A3A3]">
              <div className="flex justify-between">
                <span>Phương tiện:</span>
                <span className="font-semibold text-white">{selectedVehicle.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Cự ly tính cước:</span>
                <span className="font-semibold text-white">{activeDistance} km</span>
              </div>
              <div className="flex justify-between">
                <span>Thời gian dự kiến:</span>
                <span className="font-semibold text-white">
                  {activeDistance <= 100 ? "1.5 — 3 Giờ" : activeDistance <= 900 ? "24 — 28 Giờ" : "44 — 48 Giờ"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hóa đơn VAT:</span>
                <span className="font-semibold text-white">Xuất trong ngày (+8%)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1F1F1F] space-y-3">
            <a
              href="tel:0918456789"
              className="btn-arrow-hover block w-full py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              <span>CHỐT GIÁ NHANH: 0918.456.789</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow-hover block w-full py-3.5 bg-[#141414] hover:bg-[#1F1F1F] text-white border border-[#2A2A2A] font-heading font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              <span>GỬI YÊU CẦU QUA ZALO</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
