import Link from "next/link";

export const metadata = {
  title: "Danh Mục Hàng Hóa & Tiêu Chuẩn An Toàn | Vận Tải Tiên Phong",
  description:
    "Quy chuẩn chằng buộc an toàn cho từng nhóm hàng công nghiệp: máy móc CNC, thép cuộn, linh kiện điện tử, thực phẩm đông lạnh. Danh mục hàng từ chối theo NĐ 10/2020.",
};

const CARGO_GROUPS = [
  {
    id: "machinery",
    icon: "precision_manufacturing",
    name: "Máy Móc Công Nghiệp & Máy Phay CNC",
    suitableTruck: "Xe Cẩu Tự Hành 10T — 15T / Moóc Lùn 50T",
    standards: [
      "Kê đệm gỗ dăm dày tối thiểu 10cm tại các điểm tiếp xúc móng máy để triệt tiêu ma sát rung lắc.",
      "Sử dụng cáp xích chuyên dụng kèm tăng đơ siết lực kéo tối thiểu 10 Tấn ở 4 góc đối xứng.",
      "Bọc màng co nilon công nghiệp chống nước mưa, bụi cát và trầy xước nước sơn cơ khí.",
      "Đo đạc chính xác chiều cao tổng thể để đảm bảo tĩnh không an toàn khi qua các hầm và trạm thu phí.",
    ],
  },
  {
    id: "steel",
    icon: "construction",
    name: "Thép Cuộn, Thép Hình & Cấu Kiện Xây Dựng",
    suitableTruck: "Đầu Kéo Moóc Sàn 40ft / Xe Tải 15 Tấn Mui Bạt",
    standards: [
      "Thép cuộn bắt buộc phải đặt trên máng gỗ chuyên dụng hình chữ V để cố định tâm cuộn thép.",
      "Siết xích chịu lực luồn qua lõi cuộn thép và tăng đơ trực tiếp xuống khung sàn rơ-moóc.",
      "Phân bố tải trọng đều trên các trục xe, không vượt quá tải trọng trục cho phép của Cục Đăng Kiểm.",
      "Trang bị góc nhựa / cao su bảo vệ để tránh sắc cạnh của thép cắt đứt dây chằng buộc.",
    ],
  },
  {
    id: "electronics",
    icon: "memory",
    name: "Linh Kiện Điện Tử & Thiết Bị Vi Mạch Chính Xác",
    suitableTruck: "Xe Thùng Kín Bửng Nâng 5T — 10T Khóa Seal Chì",
    standards: [
      "Thùng xe bằng inox kín 100%, có gioăng cao su kép chống thấm nước tuyệt đối kể cả mưa bão lớn.",
      "Sàn xe lót thảm cao su kỹ thuật giảm rung xóc bảo vệ các linh kiện bán dẫn siêu nhỏ.",
      "Bấm seal chì niêm phong tại cửa kho người gửi, người nhận trực tiếp kiểm tra mã số seal trước khi mở.",
      "Bửng nâng thủy lực hỗ trợ xếp dỡ xe nâng tay, tuyệt đối không quăng ném hay dồn đè hàng hóa.",
    ],
  },
  {
    id: "cold",
    icon: "ac_unit",
    name: "Thực Phẩm Chế Biến, Dược Phẩm & Hàng Đông Lạnh",
    suitableTruck: "Xe Đông Lạnh Thermo King Dải Nhiệt -18°C ~ +10°C",
    standards: [
      "Làm lạnh thùng xe trước khi bốc hàng từ 30 — 45 phút để đạt nhiệt độ yêu cầu bảo quản.",
      "Thiết bị Data Logger tự động ghi lại biểu đồ nhiệt độ liên tục mỗi 15 phút một lần.",
      "Vách thùng cách nhiệt dày 80mm bằng vật liệu composite Foam PU cao cấp giữ nhiệt ổn định.",
      "Xuất file nhật ký nhiệt độ bàn giao cho bộ phận QA/QC của nhà máy khi giao nhận hàng.",
    ],
  },
  {
    id: "fmcg",
    icon: "inventory_2",
    name: "Hàng Tiêu Dùng, Hạt Nhựa & Bao Bì Đóng Kiện",
    suitableTruck: "Xe Tải Mui Bạt 9.6M Thể Tích Lớn (57 — 60 m³)",
    standards: [
      "Phủ bạt 3 lớp kép chống thấm dột tuyệt đối, bạt trùm kín các mép thùng xe khi di chuyển.",
      "Sử dụng đai dù bản 50mm có tăng đơ siết chặt từng hàng pallet, ngăn ngừa xô lệch khi vào cua.",
      "Phân tầng hàng khoa học: kiện nặng đặt ở tầng dưới, hàng nhẹ/thùng carton xếp tầng trên.",
      "Tài xế kiểm tra độ căng của dây chằng buộc sau mỗi 100km hành trình tại các trạm dừng chân.",
    ],
  },
];

export default function CargoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=2000&q=80"
          alt="Quy chuẩn chằng buộc hàng hóa cơ khí"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Tiêu Chuẩn Xếp Dỡ & Chằng Buộc An Toàn
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            QUY CHUẨN HÀNG HÓA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1">
              CHẰNG BUỘC KỸ THUẬT & AN TOÀN TUYỆT ĐỐI
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Máy móc CNC, thép cuộn, linh kiện điện tử, hàng lạnh. Áp dụng đệm gỗ, cáp xích tăng đơ 10T và tuân thủ tuyệt đối Nghị định 10/2020/NĐ-CP.
          </p>
        </div>
      </section>

      {/* ═══ CARGO GROUPS DETAIL ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Quy Trình Chuyên Biệt Theo Nhóm Hàng
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              5 Nhóm Hàng Hóa Trọng Tâm & Quy Chuẩn Bảo Vệ
            </h2>
          </div>

          <div className="space-y-8">
            {CARGO_GROUPS.map((grp) => (
              <div
                key={grp.id}
                className="bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-6 lg:items-center justify-between"
              >
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">{grp.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg md:text-xl text-navy-900 uppercase">
                        {grp.name}
                      </h3>
                      <span className="text-xs text-orange-600 font-semibold">
                        Phương tiện phù hợp: {grp.suitableTruck}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {grp.standards.map((std, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-3 rounded border border-slate-200">
                        <span className="material-symbols-outlined text-green-600 text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-48 shrink-0 flex flex-col gap-2">
                  <a
                    href="tel:0918456789"
                    className="w-full py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded transition-colors"
                  >
                    Tư Vấn Chở Hàng Này
                  </a>
                  <Link
                    href="/pricing"
                    className="w-full py-2.5 border border-slate-300 hover:border-slate-400 text-navy-900 text-xs font-heading font-semibold uppercase tracking-wider text-center rounded transition-colors"
                  >
                    Xem Cước Phí
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROHIBITED CARGO WARNING (CRITICAL FOR TRUST) ═══ */}
      <section className="py-14 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-red-600 text-3xl">dangerous</span>
            <div>
              <span className="text-xs font-heading font-bold text-red-700 uppercase tracking-widest block">
                Chính Sách Tuân Thủ Pháp Luật
              </span>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-red-950 uppercase tracking-tight">
                Danh Mục Hàng Hóa Tuyệt Đối Từ Chối Vận Chuyển
              </h2>
            </div>
          </div>

          <p className="text-xs md:text-sm text-red-900 leading-relaxed">
            Thực hiện nghiêm chỉnh Nghị định 10/2020/NĐ-CP và các quy định của Bộ GTVT, Vận Tải Tiên Phong <strong>tuyệt đối không nhận vận chuyển</strong> các mặt hàng sau trong bất kỳ trường hợp nào:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-red-900">
            <div className="bg-white p-4 rounded border border-red-200 space-y-1">
              <span className="font-heading font-bold uppercase text-red-600 block">1. Chất Cháy Nổ & Pháo:</span>
              <p>Thuốc nổ, kíp nổ, pháo hoa, pháo nổ các loại, vũ khí quân dụng, đạn dược và vật liệu có nguy cơ kích nổ cao.</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200 space-y-1">
              <span className="font-heading font-bold uppercase text-red-600 block">2. Hóa Chất Độc Hại Trái Phép:</span>
              <p>Hóa chất bảng cấm, chất phóng xạ, chất ăn mòn cực mạnh không có giấy phép vận chuyển của cơ quan có thẩm quyền.</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200 space-y-1">
              <span className="font-heading font-bold uppercase text-red-600 block">3. Hàng Lậu & Không Hóa Đơn:</span>
              <p>Hàng hóa nhập lậu, hàng không có tem nhãn phụ, hàng không có hóa đơn GTGT hoặc chứng từ chứng minh nguồn gốc xuất xứ.</p>
            </div>
          </div>

          <div className="p-3 bg-red-100 rounded text-xs text-red-950 flex items-center justify-between">
            <span>
              *Tài xế có quyền kiểm tra tính hợp pháp của hàng hóa trước khi ký biên bản bốc xe.
            </span>
            <span className="font-bold uppercase tracking-wider text-[11px]">
              Quy Định An Toàn 100%
            </span>
          </div>
        </div>
      </section>

      {/* ═══ CARGO PREPARATION TIPS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div>
            <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
              Khuyến Nghị Dành Cho Chủ Hàng
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
              Hướng Dẫn Chuẩn Bị Hàng Trước Khi Xe Đến
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-heading font-bold text-sm text-navy-900 uppercase block">1. Đóng Kiện & Pallet</span>
              <p className="text-slate-600">Đóng gói hàng trên pallet chuẩn kích thước 1m × 1.2m hoặc 1.1m × 1.1m để tối ưu diện tích lòng xe.</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-heading font-bold text-sm text-navy-900 uppercase block">2. Dán Tem Nhãn Hướng Dẫn</span>
              <p className="text-slate-600">Đánh dấu rõ chiều đặt hàng (mũi tên hướng lên), hàng dễ vỡ, không chèn đè để tài xế bố trí đúng vị trí.</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-heading font-bold text-sm text-navy-900 uppercase block">3. Chuẩn Bị Chứng Từ</span>
              <p className="text-slate-600">Phiếu xuất kho kiêm vận chuyển nội bộ hoặc Hóa đơn VAT bản điện tử/bản in kèm theo xe lưu thông.</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-heading font-bold text-sm text-navy-900 uppercase block">4. Thông Báo Giờ Cấm Tải</span>
              <p className="text-slate-600">Thông báo trước khung giờ cấm xe tải của khu vực kho giao hàng để điều phối sắp xếp giờ chạy phù hợp.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
