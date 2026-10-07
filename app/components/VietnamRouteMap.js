"use client";
import React, { useState } from "react";

// 15 Serviced Provinces with accurate geographic layout on a 540x820 canvas
export const SERVICED_HUBS = {
  // 3 Điểm xuất phát / gom hàng (Bắc Trung Bộ)
  "Thanh Hóa": {
    x: 215,
    y: 220,
    region: "origin",
    isMainHub: true,
    name: "Thanh Hóa",
    role: "Kho Tổng & Trung Tâm Điều Phối 24/7",
    route: "Cao tốc Mai Sơn – QL45 & Trục Quốc lộ 1A",
    time: "Kho tổng trực chiến 24/7",
    dx: 18,
    dy: -12,
  },
  "Nghệ An": {
    x: 205,
    y: 272,
    region: "origin",
    name: "Nghệ An",
    role: "Điểm Nhận Hàng & Gom Chuyến",
    route: "Cao tốc Diễn Châu – Bãi Vọt & QL1A",
    time: "Khoảng 2.0 – 2.5 giờ",
    dx: -92,
    dy: 4,
  },
  "Hà Tĩnh": {
    x: 225,
    y: 320,
    region: "origin",
    name: "Hà Tĩnh",
    role: "Điểm Xuất Phát Liên Tỉnh",
    route: "Trục QL1A & Cao tốc Bãi Vọt – Hàm Nghi",
    time: "Khoảng 3.0 – 3.5 giờ",
    dx: 16,
    dy: 4,
  },

  // Phía Bắc & Đồng Bằng Sông Hồng
  "Hà Nội": {
    x: 232,
    y: 145,
    region: "north",
    name: "Hà Nội",
    role: "Thủ Đô & Vùng Tiêu Thụ Trọng Điểm",
    route: "Cao tốc Mai Sơn – Pháp Vân Cầu Giẽ",
    time: "Khoảng 2.5 – 3.5 giờ",
    dx: -72,
    dy: -10,
  },
  "Bắc Ninh": {
    x: 248,
    y: 126,
    region: "north",
    name: "Bắc Ninh",
    role: "KCN Quế Võ, Yên Phong, Tiên Sơn",
    route: "Cao tốc Hà Nội – Bắc Giang",
    time: "Khoảng 3.0 – 4.0 giờ",
    dx: 14,
    dy: -8,
  },
  "Hưng Yên": {
    x: 242,
    y: 162,
    region: "north",
    name: "Hưng Yên",
    role: "KCN Phố Nối & Vùng Phụ Cận",
    route: "Trục QL39 & Cao tốc HN – Hải Phòng",
    time: "Khoảng 2.5 – 3.5 giờ",
    dx: 14,
    dy: 4,
  },
  "Hải Dương": {
    x: 260,
    y: 148,
    region: "north",
    name: "Hải Dương",
    role: "KCN Đại An, Nam Sách, Tân Trường",
    route: "QL5A & Cao tốc HN – Hải Phòng",
    time: "Khoảng 3.0 – 4.0 giờ",
    dx: 14,
    dy: -4,
  },
  "Hải Phòng": {
    x: 284,
    y: 154,
    region: "north",
    name: "Hải Phòng",
    role: "Cảng Đình Vũ, Lạch Huyện & Cụm Logistics",
    route: "Cao tốc Hà Nội – Hải Phòng",
    time: "Khoảng 3.5 – 4.5 giờ",
    dx: 14,
    dy: 14,
  },
  "Quảng Ninh": {
    x: 318,
    y: 132,
    region: "north",
    name: "Quảng Ninh",
    role: "Hạ Long, Cẩm Phả & Cửa Khẩu Móng Cái",
    route: "Cao tốc Hải Phòng – Hạ Long – Vân Đồn",
    time: "Khoảng 4.5 – 5.5 giờ",
    dx: 14,
    dy: -6,
  },

  // Tây Bắc & Vùng Cao
  "Hòa Bình": {
    x: 196,
    y: 170,
    region: "northwest",
    name: "Hòa Bình",
    role: "Cửa Ngõ Vận Tải Tây Bắc",
    route: "Đường Hồ Chí Minh & QL6",
    time: "Khoảng 3.5 – 4.5 giờ",
    dx: -74,
    dy: 12,
  },
  "Sơn La": {
    x: 142,
    y: 152,
    region: "northwest",
    name: "Sơn La",
    role: "Mộc Châu, Mai Sơn & Trung Tâm Sơn La",
    route: "Quốc lộ 6 vượt đèo dốc núi cao",
    time: "Khoảng 7.0 – 9.0 giờ",
    dx: -62,
    dy: -6,
  },
  "Điện Biên": {
    x: 104,
    y: 130,
    region: "northwest",
    name: "Điện Biên",
    role: "Thành Phố Điện Biên Phủ & Cửa Khẩu",
    route: "QL279 & QL6 vượt đèo Pha Đin",
    time: "Khoảng 11 – 13 giờ",
    dx: -76,
    dy: -6,
  },
  "Lai Châu": {
    x: 128,
    y: 88,
    region: "northwest",
    name: "Lai Châu",
    role: "TP Lai Châu & Các Huyện Vùng Cao",
    route: "Cao tốc Nội Bài – LC ➔ QL4D Đèo Ô Quy Hồ",
    time: "Khoảng 12 – 14 giờ",
    dx: -72,
    dy: -8,
  },
  "Lào Cai": {
    x: 166,
    y: 76,
    region: "northwest",
    name: "Lào Cai",
    role: "Cửa Khẩu Quốc Tế Kim Thành & Sa Pa",
    route: "Cao tốc Nội Bài – Lào Cai xuyên suốt",
    time: "Khoảng 6.0 – 7.5 giờ",
    dx: 14,
    dy: -6,
  },
  "Yên Bái": {
    x: 186,
    y: 108,
    region: "northwest",
    name: "Yên Bái",
    role: "Văn Chấn, Lục Yên & TP Yên Bái",
    route: "Cao tốc Nội Bài – Lào Cai (IC12)",
    time: "Khoảng 5.0 – 6.0 giờ",
    dx: 14,
    dy: 8,
  },

  // Tuyến Xuyên Việt & Mạng Lưới Phía Nam
  "Đà Nẵng": {
    x: 275,
    y: 390,
    region: "south",
    name: "Đà Nẵng",
    role: "Cảng Biển Tiên Sa & Vùng Kinh Tế Miền Trung",
    route: "Trục Cao Tốc Bắc – Nam & Quốc Lộ 1A",
    time: "Khoảng 8.0 – 10 giờ",
    dx: 14,
    dy: 4,
  },
  "Khánh Hòa": {
    x: 335,
    y: 535,
    region: "south",
    name: "Khánh Hòa",
    role: "Nha Trang, Cam Ranh & Nam Trung Bộ",
    route: "Cao tốc Nha Trang – Cam Lâm & QL1A",
    time: "Khoảng 16 – 20 giờ",
    dx: 14,
    dy: 4,
  },
  "Đồng Nai": {
    x: 260,
    y: 635,
    region: "south",
    name: "Đồng Nai",
    role: "KCN Biên Hòa, Long Thành & Nhơn Trạch",
    route: "Cao tốc Phan Thiết – Dầu Giây & Long Thành",
    time: "Khoảng 26 – 30 giờ",
    dx: 14,
    dy: -4,
  },
  "TP. Hồ Chí Minh": {
    x: 235,
    y: 655,
    region: "south",
    name: "TP. Hồ Chí Minh",
    role: "Trung Tâm Kinh Tế & Cảng Biển Phía Nam",
    route: "Trục Cao Tốc Bắc – Nam Xuyên Suốt",
    time: "Khoảng 28 – 34 giờ",
    dx: -110,
    dy: 4,
  },
  "Cần Thơ": {
    x: 195,
    y: 705,
    region: "south",
    name: "Cần Thơ",
    role: "Trung Tâm Logistics Đồng Bằng Sông Cửu Long",
    route: "Cao tốc Trung Lương – Mỹ Thuận – Cần Thơ",
    time: "Khoảng 32 – 38 giờ",
    dx: -80,
    dy: 14,
  },
};

export default function VietnamRouteMap({ activeDest, onSelectDest }) {
  const [hoveredHub, setHoveredHub] = useState(null);

  const selectedName = hoveredHub || activeDest || "Thanh Hóa";
  const selectedInfo = SERVICED_HUBS[selectedName] || SERVICED_HUBS["Thanh Hóa"];

  return (
    <div className="vnl-network-card">
      {/* Network Header */}
      <div className="vnl-header">
        <div className="vnl-title-group">
          <span className="vnl-sub-badge">VIETNAM LOGISTICS NETWORK</span>
          <h3 className="vnl-card-title">Mạng Lưới Vận Tải Chuyên Tuyến</h3>
        </div>

        {/* Legend */}
        <div className="vnl-legend-bar">
          <span className="vnl-legend-item">
            <span className="vnl-legend-dot vnl-legend-origin" />
            <span>3 Điểm xuất phát (Bắc Trung Bộ)</span>
          </span>
          <span className="vnl-legend-item">
            <span className="vnl-legend-dot vnl-legend-dest" />
            <span>Mạng lưới toàn quốc (Bắc · Trung · Nam)</span>
          </span>
          <span className="vnl-legend-item">
            <span className="vnl-legend-line" />
            <span>Trục hành lang</span>
          </span>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="vnl-svg-container">
        <svg
          viewBox="0 0 540 820"
          className="vnl-map-svg"
          aria-label="Bản đồ mạng lưới vận tải Việt Nam của Hậu Nguyễn Transport"
        >
          <defs>
            {/* Background delicate coordinate grid */}
            <pattern id="vnlGrid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path
                d="M 36 0 L 0 0 0 36"
                fill="none"
                stroke="rgba(111, 169, 232, 0.08)"
                strokeWidth="0.75"
              />
            </pattern>

            {/* Glowing filter for nodes */}
            <filter id="vnlGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Cyan route line shadow */}
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Coordinate Grid Background */}
          <rect width="100%" height="100%" fill="url(#vnlGrid)" />

          {/* ═════════════════════════════════════════════════════════════
              VIETNAM BASE MAP SILHOUETTE (FULL S-SHAPED GEOGRAPHY)
              Palette: Map base #31558A, Border #6FA9E8, Secondary #41699F
             ═════════════════════════════════════════════════════════════ */}

          {/* 1. Southern & South Central Vietnam (Non-serviced provinces in secondary blue #41699F with subtle opacity) */}
          <path
            className="vnl-map-base-south"
            d="
              M 225,320
              L 254,358 L 282,392 L 302,428 L 322,464 L 338,510
              L 352,562 L 336,604 L 306,626 L 274,642 L 250,668
              L 226,694 L 186,740 L 158,725 L 164,696 L 188,662
              L 218,628 L 244,594 L 256,548 L 264,496 L 258,444
              L 236,402 L 205,356 Z
            "
          />

          {/* 2. Northern & North-Central Corridor (Served region in Map base #31558A + Border #6FA9E8) */}
          <path
            className="vnl-map-base-north"
            d="
              M 104,130
              L 128,88 L 166,76 L 210,52 L 248,60 L 280,84
              L 318,114 L 338,136 L 316,150 L 280,170 L 248,190
              L 228,212 L 215,250 L 225,320
              L 205,356 L 176,312 L 158,266 L 168,202 L 140,168 Z
            "
          />

          {/* Province Internal Division Accents (Delicate borders #6FA9E8) */}
          <g className="vnl-province-boundaries" stroke="#6FA9E8" strokeWidth="0.85" opacity="0.32" fill="none">
            {/* Red River Delta internal boundaries */}
            <path d="M 216,136 L 248,144 L 276,150" />
            <path d="M 232,145 L 248,126 L 260,148" />
            <path d="M 242,162 L 260,148 L 284,154" />
            {/* Northwest internal boundaries */}
            <path d="M 166,76 L 186,108 L 196,170" />
            <path d="M 128,88 L 142,152 L 196,170" />
            <path d="M 104,130 L 142,152" />
            {/* Thanh Hóa - Nghệ An - Hà Tĩnh separation */}
            <path d="M 168,202 L 215,220 L 236,222" />
            <path d="M 158,266 L 205,272 L 244,268" />
            <path d="M 176,312 L 225,320 L 252,334" />
          </g>

          {/* ═════════════════════════════════════════════════════════════
              QUẦN ĐẢO HOÀNG SA & TRƯỜNG SA (VIỆT NAM)
             ═════════════════════════════════════════════════════════════ */}
          {/* Quần đảo Hoàng Sa */}
          <g className="vnl-archipelago">
            <rect x="388" y="350" width="86" height="56" rx="4" className="vnl-island-box" />
            <circle cx="410" cy="370" r="3" className="vnl-island-dot" />
            <circle cx="424" cy="376" r="2.5" className="vnl-island-dot" />
            <circle cx="438" cy="364" r="2" className="vnl-island-dot" />
            <circle cx="448" cy="380" r="2" className="vnl-island-dot" />
            <circle cx="422" cy="390" r="3" className="vnl-island-dot" />
            <text x="394" y="418" className="vnl-island-label">Hoàng Sa (Việt Nam)</text>
          </g>

          {/* Quần đảo Trường Sa */}
          <g className="vnl-archipelago">
            <rect x="375" y="600" width="94" height="102" rx="4" className="vnl-island-box" />
            <circle cx="395" cy="620" r="2.5" className="vnl-island-dot" />
            <circle cx="415" cy="632" r="3" className="vnl-island-dot" />
            <circle cx="435" cy="648" r="2.5" className="vnl-island-dot" />
            <circle cx="392" cy="658" r="3" className="vnl-island-dot" />
            <circle cx="424" cy="672" r="2" className="vnl-island-dot" />
            <circle cx="444" cy="684" r="2.5" className="vnl-island-dot" />
            <text x="380" y="714" className="vnl-island-label">Trường Sa (Việt Nam)</text>
          </g>

          {/* Đảo Phú Quốc */}
          <g className="vnl-archipelago">
            <ellipse cx="140" cy="695" rx="7" ry="14" className="vnl-island-dot" />
            <text x="118" y="722" className="vnl-island-label" style={{ fontSize: "9px" }}>Phú Quốc</text>
          </g>

          {/* ═════════════════════════════════════════════════════════════
              CYAN LOGISTICS ROUTE LINES (#6FCBFF) — NETWORK CORRIDOR
             ═════════════════════════════════════════════════════════════ */}

          {/* Main Trunk Artery 1: Hà Tĩnh ➔ Nghệ An ➔ Thanh Hóa (Kho tổng) ➔ Hà Nội */}
          <path
            d="M 225,320 L 205,272 L 215,220 L 232,145"
            className="vnl-cyan-route-line"
          />

          {/* Main Trunk Artery 2: Hà Nội ➔ Hưng Yên ➔ Hải Dương ➔ Hải Phòng ➔ Quảng Ninh */}
          <path
            d="M 232,145 L 242,162 L 260,148 L 284,154 L 318,132"
            className="vnl-cyan-route-line"
          />

          {/* Main Trunk Artery 3: Hà Nội ➔ Bắc Ninh */}
          <path
            d="M 232,145 L 248,126"
            className="vnl-cyan-route-line"
          />

          {/* Northwest Branch 4: Thanh Hóa ➔ Hòa Bình ➔ Sơn La ➔ Điện Biên ➔ Lai Châu */}
          <path
            d="M 215,220 L 196,170 L 142,152 L 104,130 L 128,88"
            className="vnl-cyan-route-line vnl-route-dashed"
          />

          {/* Northwest Branch 5: Hà Nội ➔ Yên Bái ➔ Lào Cai */}
          <path
            d="M 232,145 L 186,108 L 166,76"
            className="vnl-cyan-route-line vnl-route-dashed"
          />

          {/* Southbound Artery 6: Hà Tĩnh ➔ Đà Nẵng ➔ Khánh Hòa ➔ Đồng Nai ➔ TP. Hồ Chí Minh ➔ Cần Thơ */}
          <path
            d="M 225,320 L 275,390 L 335,535 L 260,635 L 235,655 L 195,705"
            className="vnl-cyan-route-line"
          />

          {/* Active direct focus line to currently selected hub */}
          {selectedInfo && selectedName !== "Thanh Hóa" && (
            <line
              x1={SERVICED_HUBS["Thanh Hóa"].x}
              y1={SERVICED_HUBS["Thanh Hóa"].y}
              x2={selectedInfo.x}
              y2={selectedInfo.y}
              className="vnl-focus-beam"
            />
          )}

          {/* ═════════════════════════════════════════════════════════════
              LOGISTICS NODES & MARKERS
              ● Gold marker (#FFD45A) with navy inner center (#14264A)
              · · · · ·
            ·    ◉    ·  Orbital dotted pulse ring
              · · · · ·
             ═════════════════════════════════════════════════════════════ */}

          {Object.entries(SERVICED_HUBS).map(([key, hub]) => {
            const isSelected = selectedName === key;
            const isMainHub = hub.isMainHub;

            return (
              <g
                key={key}
                className={`vnl-node-group ${isSelected ? "is-selected" : ""} ${isMainHub ? "is-main-hub" : ""}`}
                onClick={() => onSelectDest(key)}
                onMouseEnter={() => setHoveredHub(key)}
                onMouseLeave={() => setHoveredHub(null)}
              >
                {/* Dotted orbital ring */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isMainHub ? 18 : 13}
                  className="vnl-orbital-ring"
                />

                {/* Gentle pulse halo for active/main hub */}
                {(isSelected || isMainHub) && (
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={isMainHub ? 24 : 18}
                    className="vnl-halo-pulse"
                  />
                )}

                {/* Outer Gold Marker */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isMainHub ? 7.5 : 5}
                  className="vnl-marker-outer"
                />

                {/* Inner Navy Center Point */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isMainHub ? 3.2 : 2.2}
                  className="vnl-marker-inner"
                />

                {/* City Label */}
                <text
                  x={hub.x + hub.dx}
                  y={hub.y + hub.dy}
                  className={`vnl-city-text ${isSelected ? "is-active-text" : ""} ${hub.region === "origin" ? "is-origin-text" : ""}`}
                >
                  {hub.name}
                  {isMainHub && " ★"}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Dynamic Floating Tooltip Card over Map on Hover/Select */}
        <div className="vnl-live-popover">
          <div className="vnl-popover-header">
            <span className="vnl-popover-tag">
              {selectedInfo.region === "origin"
                ? "ĐIỂM XUẤT PHÁT / GOM HÀNG"
                : selectedInfo.region === "south"
                ? "ĐIỂM GIAO NHẬN XUYÊN VIỆT PHÍA NAM"
                : "ĐIỂM TRẢ HÀNG PHÍA BẮC & TÂY BẮC"}
            </span>
            <span className="vnl-popover-name">{selectedInfo.name}</span>
          </div>
          <div className="vnl-popover-body">
            <div className="vnl-popover-row">
              <span className="vnl-popover-label">Tính chất:</span>
              <span className="vnl-popover-val">{selectedInfo.role}</span>
            </div>
            <div className="vnl-popover-row">
              <span className="vnl-popover-label">Tuyến kết nối:</span>
              <span className="vnl-popover-val">{selectedInfo.route}</span>
            </div>
            <div className="vnl-popover-row">
              <span className="vnl-popover-label">Thời gian dự kiến:</span>
              <span className="vnl-popover-val vnl-time-val">{selectedInfo.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
