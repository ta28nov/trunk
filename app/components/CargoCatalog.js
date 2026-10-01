"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  { id: "all", label: "TẤT CẢ HÀNG HÓA" },
  { id: "machinery", label: "MÁY MÓC & CNC" },
  { id: "steel", label: "THÉP CUỘN & VLXD" },
  { id: "fmcg", label: "PALLET & TIÊU DÙNG" },
  { id: "electronics", label: "VI MẠCH & BÁN DẪN" },
  { id: "container", label: "CONTAINER XNK" },
  { id: "oversized", label: "SIÊU TRƯỜNG SIÊU TRỌNG" },
];

const CARGO_ITEMS = [
  {
    id: "cnc-machine",
    category: "machinery",
    name: "Máy Phay Tiện CNC & Dây Chuyền Cơ Khí",
    categoryLabel: "Máy Móc & Thiết Bị",
    desc: "Thiết bị chính xác cao, nhạy cảm với rung chấn và độ ẩm. Đòi hỏi bốc dỡ bằng xe cẩu tự hành và rùa thủy lực.",
    strapping: "Kê đệm gỗ dăm dày 50mm, lót cao su chống trượt và chằng siết bằng 4 bộ xích tăng đơ chịu lực 10 tấn.",
    recVehicle: "Xe Cẩu Tự Hành 10T Soosan hoặc Xe Tải Sàn Thấp",
    recService: "Di Dời & Cẩu Hạ Máy Móc Nhà Xưởng",
    recRoute: "KCN Sóng Thần ↔ KCN VSIP 1, 2 / KCN Amata",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "steel-coil",
    category: "steel",
    name: "Thép Cuộn Mạ Kẽm & Dầm Thép Định Hình",
    categoryLabel: "Thép Cuộn & VLXD",
    desc: "Khối lượng cực lớn tập trung tại tâm. Nguy cơ lăn trượt cao nếu không có bệ đỡ chuyên dụng.",
    strapping: "Đặt trên máng gỗ chữ V chuyên dụng khoét rãnh chống lăn, siết xích xuyên tâm cuộn cố định vào sàn moóc.",
    recVehicle: "Đầu Kéo Rơ-Moóc Sàn 3 Trục Chịu Tải 32 Tấn",
    recService: "Bao Xe Nguyên Chuyến FTL",
    recRoute: "KCN Phú Mỹ (Bà Rịa) ↔ Các KCN Bình Dương / Đồng Nai",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fmcg-pallets",
    category: "fmcg",
    name: "Hàng Pallet Tiêu Dùng, Hạt Nhựa & Bao Bì",
    categoryLabel: "Hàng Pallet & FMCG",
    desc: "Quy cách đóng thùng carton hoặc bao 25kg xếp trên pallet tiêu chuẩn 1.1m x 1.1m. Yêu cầu chống thấm dột tuyệt đối.",
    strapping: "Đai dù tăng đơ bản 50mm chằng siết từng hàng pallet, phủ bạt dù 3 lớp kín nước 100% khi đi đường dài.",
    recVehicle: "Xe Tải Thùng Mui Bạt 9.6M 15 Tấn (Thể tích 60 m³)",
    recService: "Bao Xe FTL hoặc Ghép Hàng Định Tuyến Bắc Nam",
    recRoute: "Tổng Kho Sóng Thần ↔ Đà Nẵng / Hà Nội / Hải Phòng",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "electronics",
    category: "electronics",
    name: "Linh Kiện Bán Dẫn & Thiết Bị Vi Điện Tử",
    categoryLabel: "Vi Mạch Điện Tử",
    desc: "Giá trị lô hàng cao, nhạy cảm với tĩnh điện, độ ẩm và bụi bẩn. Bắt buộc thùng kín kiểm soát nhiệt độ môi trường.",
    strapping: "Vận chuyển bằng xe thùng kín bửng nâng hạ thủy lực, lót đệm xốp khí EVA và niêm phong kẹp chì seal điện tử.",
    recVehicle: "Xe Tải Thùng Kín Bửng Nâng 8 Tấn — 15 Tấn",
    recService: "Bao Xe Nguyên Chuyến FTL Niêm Phong Seal",
    recRoute: "Khu Công Nghệ Cao TP.HCM (SHTP) ↔ Sân Bay Tân Sơn Nhất / Nội Bài",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fcl-container",
    category: "container",
    name: "Container Hàng May Mặc, Gỗ Xuất Nhập Khẩu",
    categoryLabel: "Container Cảng Biển",
    desc: "Container khô 20ft, 40ft, 45ft đóng hàng xuất khẩu theo lịch tàu biển quốc tế hoặc cont nguyên seal nhập khẩu.",
    strapping: "Khóa gù twistlock 4 góc moóc xương tiêu chuẩn ISO, kiểm tra chốt an toàn và đối chiếu số seal hải quan.",
    recVehicle: "Đầu Kéo Hyundai Xcient 440HP + Moóc Xương 40ft",
    recService: "Vận Chuyển Container Cảng Biển (FCL)",
    recRoute: "Cảng Tân Cảng Cát Lái / Cái Mép ↔ Các KCN Bình Dương / Long An",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "transformer-boiler",
    category: "oversized",
    name: "Biến Áp Trạm Điện, Lò Hơi & Bồn Áp Lực",
    categoryLabel: "Siêu Trường Siêu Trọng",
    desc: "Kiện hàng nguyên khối vượt khổ hoặc quá tải trọng đường bộ thông thường. Bắt buộc có giấy phép lưu hành đặc biệt.",
    strapping: "Chằng buộc bằng cáp xích chịu lực 15T—20T, tăng đơ ren cỡ lớn và bố trí xe bán tải dẫn đường cảnh báo an toàn.",
    recVehicle: "Sơ-Mi Rơ-Moóc Lùn (Fooc Lùn) 3—4 Trục Thủy Lực",
    recService: "Vận Chuyển Thiết Bị Dự Án Siêu Trường Siêu Trọng",
    recRoute: "Cảng Biển Nhập Khẩu ↔ Công Trường Nhà Máy Điện / Lọc Dầu",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CargoCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(CARGO_ITEMS[0]);

  const filteredItems =
    activeCategory === "all"
      ? CARGO_ITEMS
      : CARGO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* ─── CATEGORY FILTER PILLS (No page reload - §17) ─── */}
      <div className="flex flex-wrap items-center gap-2 select-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
                isActive
                  ? "bg-[#FF6A00] text-white shadow-md"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white border border-[#2A2A2A] hover:border-[#FF6A00]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ─── CARGO TO VEHICLE RECOMMENDATION ENGINE (§18) ─── */}
      {selectedItem && (
        <div className="p-6 sm:p-8 bg-[#141414] border-2 border-[#FF6A00] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6A00] block">
                CHUỖI LIÊN KẾT GIẢI PHÁP ĐỀ XUẤT CHO MẶT HÀNG ĐANG CHỌN
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase mt-1">
                {selectedItem.name}
              </h3>
            </div>
            <Link
              href="/contact"
              className="btn-arrow-hover px-6 py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider self-start sm:self-auto transition-colors whitespace-nowrap"
            >
              <span>NHẬN BÁO GIÁ CHO MẶT HÀNG NÀY</span>
              <span className="arrow-move ml-1.5 font-bold">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-[#0B0B0B] border border-[#2A2A2A] space-y-1">
              <span className="text-[10px] font-mono text-[#737373] uppercase block">
                01. DÒNG XE KHUYẾN NGHỊ
              </span>
              <span className="font-heading font-bold text-white block text-sm">
                {selectedItem.recVehicle}
              </span>
            </div>

            <div className="p-4 bg-[#0B0B0B] border border-[#2A2A2A] space-y-1">
              <span className="text-[10px] font-mono text-[#737373] uppercase block">
                02. PHƯƠNG ÁN DỊCH VỤ
              </span>
              <span className="font-heading font-bold text-[#FF6A00] block text-sm">
                {selectedItem.recService}
              </span>
            </div>

            <div className="p-4 bg-[#0B0B0B] border border-[#2A2A2A] space-y-1">
              <span className="text-[10px] font-mono text-[#737373] uppercase block">
                03. HÀNH LANG TỐI ƯU
              </span>
              <span className="font-heading font-bold text-white block text-sm">
                {selectedItem.recRoute}
              </span>
            </div>

            <div className="p-4 bg-[#0B0B0B] border border-[#2A2A2A] space-y-1">
              <span className="text-[10px] font-mono text-[#737373] uppercase block">
                04. BẢO HIỂM ÁP DỤNG
              </span>
              <span className="font-heading font-bold text-white block text-sm">
                PVI 10 Tỷ VNĐ / Vụ
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ─── CARGO GRID DISPLAY ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => {
          const isSelected = selectedItem?.id === item.id;
          const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`cursor-pointer bg-[#141414] border flex flex-col justify-between reveal-on-scroll card-hover ${delays[idx % delays.length]} ${
                isSelected
                  ? "!border-[#FF6A00] shadow-2xl scale-[1.01]"
                  : "border-[#2A2A2A]"
              }`}
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-[#2A2A2A]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover img-editorial"
                />
                <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 border border-[#2A2A2A] px-2.5 py-1 text-[10px] font-heading font-bold text-[#FF6A00] uppercase tracking-wider">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-base text-white uppercase leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1F1F1F] space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#737373] block mb-0.5">
                      TIÊU CHUẨN CHẰNG BUỘC KỸ THUẬT:
                    </span>
                    <span className="text-[11px] text-[#E5E5E5] font-light leading-snug block">
                      {item.strapping}
                    </span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[#FF6A00] font-heading font-bold uppercase tracking-wider">
                      {isSelected ? "[ ĐANG CHỌN ]" : "Bấm để xem khuyến nghị xe →"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
