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
  { name: "Cảng sâu: TP.HCM ⇄ Cảng Cái Mép (Vũng Tàu)", distance: 85, time: "3 Giờ" },
  { name: "Miền Tây: TP.HCM ⇄ TP. Cần Thơ", distance: 175, time: "5 - 6 Giờ" },
  { name: "Miền Trung: TP.HCM ⇄ TP. Đà Nẵng", distance: 950, time: "24 - 28 Giờ" },
  { name: "Bắc — Nam: TP.HCM ⇄ Hà Nội / Hải Phòng", distance: 1750, time: "44 - 48 Giờ" },
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
    <div className={`bg-slate-50 rounded-3xl border border-slate-200 shadow-lg overflow-hidden ${compact ? "p-6" : "p-8 md:p-12"}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 gap-4">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Tính Nhanh Cước Vận Tải Tham Khảo
          </h3>
        </div>
        <div className="text-slate-500 text-base font-light">
          Báo giá trực tiếp từ đội xe • Không phí trung gian
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Vehicle Select */}
          <div>
            <strong className="block text-sm font-heading font-bold uppercase tracking-wider text-slate-900 mb-3">
              1. Chọn Loại Xe Vận Chuyển:
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VEHICLE_RATES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleId(v.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                    vehicleId === v.id
                      ? "border-orange-500 bg-orange-50/80 shadow-md ring-2 ring-orange-500"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="font-heading font-bold text-base text-slate-900">{v.name}</div>
                  <div className="text-sm text-slate-500 mt-1">{v.capacity}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Route Presets */}
          <div>
            <strong className="block text-sm font-heading font-bold uppercase tracking-wider text-slate-900 mb-3">
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
                  className={`text-left p-4 rounded-2xl border text-sm transition-all duration-300 ${
                    distance === r.distance && !customDistance
                      ? "border-slate-900 bg-slate-900 text-white font-bold shadow-md"
                      : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                  }`}
                >
                  <div className="truncate font-semibold">{r.name}</div>
                  <div className={`text-xs mt-1 ${distance === r.distance && !customDistance ? "text-slate-300" : "text-slate-500"}`}>
                    {r.distance} km • Dự kiến: {r.time}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-sm text-slate-600 whitespace-nowrap">Hoặc nhập cự ly riêng:</span>
              <div className="relative flex-1">
                <input
                  type="number"
                  placeholder="Nhập số km..."
                  value={customDistance}
                  onChange={(e) => setCustomDistance(e.target.value)}
                  className="w-full px-4 py-3 text-base bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-orange-500 text-slate-900 pr-12"
                />
                <span className="absolute right-4 top-3.5 text-sm text-slate-400 font-medium">km</span>
              </div>
            </div>
          </div>

          {/* Addons */}
          <div>
            <strong className="block text-sm font-heading font-bold uppercase tracking-wider text-slate-900 mb-3">
              3. Dịch Vụ Đi Kèm (Tùy Chọn):
            </strong>
            <div className="flex flex-wrap gap-5">
              <label className="inline-flex items-center gap-3 cursor-pointer text-base text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={hasLoading}
                  onChange={(e) => setHasLoading(e.target.checked)}
                  className="w-5 h-5 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>Hỗ trợ bốc xếp / Cẩu hạ 2 đầu (+800.000đ)</span>
              </label>
              <label className="inline-flex items-center gap-3 cursor-pointer text-base text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className="w-5 h-5 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>Hỏa tốc bốc ngay trong 30 phút (+15%)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-heading font-semibold">
                Ước Tính Cước Phí
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Chưa Gồm VAT
              </span>
            </div>

            <div className="my-8">
              <span className="text-sm text-slate-400 block mb-1">Giá cước trọn chuyến dự kiến:</span>
              <div className="text-4xl md:text-5xl font-heading font-black text-orange-400 tracking-tight">
                {formattedCost}
              </div>
              <p className="text-xs text-slate-400 mt-3 font-light leading-relaxed">
                *Đã bao gồm: Phí cầu đường (BOT), lái xe, xăng dầu, định vị GPS giám sát 24/7 &amp; bảo hiểm hàng hóa PVI.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-5 space-y-3 text-sm text-slate-300 border border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Phương tiện:</span>
                <span className="font-semibold text-white">{selectedVehicle.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cự ly tính cước:</span>
                <span className="font-semibold text-white">{activeDistance} km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Thời gian dự kiến:</span>
                <span className="font-semibold text-green-400">
                  {activeDistance <= 100 ? "1.5 - 3 Giờ" : activeDistance <= 900 ? "24 - 28 Giờ" : "44 - 48 Giờ"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hóa đơn VAT:</span>
                <span className="font-semibold text-white">Xuất trong ngày (+8%)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
            <a
              href="tel:0918456789"
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-2xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              Chốt Giá Nhanh: 0918.456.789
            </a>
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl text-center transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Gửi Thông Tin Báo Giá Qua Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
