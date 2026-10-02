"use client";

export default function MarqueeTicker() {
  const items = [
    "HINO",
    "HYUNDAI",
    "THÙNG KÍN",
    "THÙNG BẠT",
    "HÀ TĨNH",
    "NGHỆ AN",
    "THANH HOÁ",
    "BẮC",
    "TÂY BẮC",
    "3,5 TẤN",
    "6 TẤN",
    "8 TẤN",
    "10 TẤN",
    "15 TẤN",
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="marquee-item">
            <span className="dot" aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
