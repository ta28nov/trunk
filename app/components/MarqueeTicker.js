"use client";

export default function MarqueeTicker() {
  const items = [
    { icon: "local_shipping", text: "52 ĐẦU XE CHÍNH CHỦ" },
    { icon: "radar", text: "GPS GIÁM SÁT 24/7" },
    { icon: "shield", text: "BẢO HIỂM HÀNG HÓA 10 TỶ VNĐ" },
    { icon: "timer", text: "30 PHÚT CÓ MẶT BỐC HÀNG" },
    { icon: "directions_boat", text: "KÉO CONTAINER CÁT LÁI & CÁI MÉP" },
    { icon: "alt_route", text: "TRỤC BẮC — NAM 48H CAM KẾT" },
    { icon: "precision_manufacturing", text: "CẨU HẠ MÁY CNC NHÀ XƯỞNG" },
    { icon: "verified", text: "SỞ GTVT CẤP PHÉP 41-GPVT/SGTVT" },
  ];

  return (
    <div className="w-full bg-navy-950 border-y border-navy-800/80 py-2.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-slate-300 whitespace-nowrap">
            <span className="material-symbols-outlined text-orange-500 text-sm">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-navy-700 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
