"use client";

export default function MarqueeTicker() {
  const items = [
    "52 ĐẦU XE CHÍNH CHỦ",
    "GPS GIÁM SÁT HÀNH TRÌNH 24/7",
    "BẢO HIỂM HÀNG HÓA PVI 10 TỶ VNĐ",
    "30 PHÚT CÓ MẶT BỐC HÀNG ĐÔNG NAM BỘ",
    "KÉO CONTAINER CÁT LÁI & CÁI MÉP TRỰC CHIẾN",
    "TRỤC BẮC — NAM 48H CAM KẾT",
    "CẨU HẠ MÁY CNC NHÀ XƯỞNG CHUYÊN DỤNG",
    "SỞ GTVT CẤP PHÉP 41-GPVT/SGTVT",
  ];

  return (
    <div className="w-full bg-[#070707] border-y border-[#1F1F1F] py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-xs font-heading font-bold uppercase tracking-widest text-[#A3A3A3] whitespace-nowrap"
          >
            <span className="text-[#FF6A00] font-black">—</span>
            <span>{text}</span>
            <span className="text-[#2A2A2A] ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
