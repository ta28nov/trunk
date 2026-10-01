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
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${compact ? "p-4" : "p-6 md:p-8"}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-3">
        <div>
          <span className="font-heading text-xs font-bold text-orange-500 uppercase tracking-widest block">
            Công Cụ Trực Tuyến
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-navy-900 uppercase tracking-tight mt-0.5">
            Tính Nhanh Cước Vận Tải Tham Khảo
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-heading font-semibold rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Giá Trực Tiếp Đội Xe — Không Phí Trung Gian
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Vehicle Select */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Chọn Loại Xe Vận Chuyển:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {VEHICLE_RATES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleId(v.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                    vehicleId === v.id
                      ? "border-orange-500 bg-orange-50/70 shadow-sm ring-1 ring-orange-500 -translate-y-0.5"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white"
                  }`}
                >
                  <div className="font-heading font-bold text-sm text-navy-900">{v.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{v.capacity}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Route Presets */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Chọn Tuyến Đường Mẫu Hoặc Nhập Số Km:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {ROUTE_PRESETS.map((r) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => {
                    setDistance(r.distance);
                    setCustomDistance("");
                  }}
                  className={`text-left p-3 rounded-xl border text-xs transition-all duration-200 ${
                    distance === r.distance && !customDistance
                      ? "border-navy-900 bg-navy-900 text-white font-medium shadow -translate-y-0.5"
                      : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <div className="truncate font-semibold">{r.name}</div>
                  <div className={`text-[11px] mt-0.5 ${distance === r.distance && !customDistance ? "text-slate-300" : "text-slate-500"}`}>
                    {r.distance} km • Dự kiến: {r.time}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 whitespace-nowrap">Hoặc nhập cự ly riêng:</span>
              <div className="relative flex-1">
                <input
                  type="number"
                  placeholder="Nhập số km..."
                  value={customDistance}
                  onChange={(e) => setCustomDistance(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:border-orange-500 pr-12"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">km</span>
              </div>
            </div>
          </div>

          {/* Addons */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Dịch Vụ Đi Kèm (Tùy Chọn):
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={hasLoading}
                  onChange={(e) => setHasLoading(e.target.checked)}
                  className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>Hỗ trợ bốc xếp / Cẩu hạ 2 đầu (+800.000đ)</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                />
                <span>Hỏa tốc bốc ngay trong 30 phút (+15%)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-navy-950 text-white rounded-lg p-6 border border-navy-800">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-navy-800">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-heading">
                Ước Tính Cước Phí
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400">
                Chưa Gồm VAT
              </span>
            </div>

            <div className="my-6">
              <span className="text-xs text-slate-400 block mb-1">Giá cước trọn chuyến dự kiến:</span>
              <div className="text-3xl md:text-4xl font-heading font-bold text-orange-500 tracking-tight">
                {formattedCost}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Đã bao gồm: Phí cầu đường (BOT), lái xe, xăng dầu, định vị GPS giám sát 24/7 & bảo hiểm hàng hóa PVI.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded p-4 space-y-2 text-xs text-slate-300 border border-navy-800">
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

          <div className="mt-6 pt-6 border-t border-navy-800 space-y-3">
            <a
              href="tel:0918456789"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              Chốt Giá Nhanh: 0918.456.789
            </a>
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-xs uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Gửi Thông Tin Báo Giá Qua Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
