import Link from "next/link";

export const metadata = {
  title: "Danh Mục Hàng Hóa & Tiêu Chuẩn An Toàn | Vận Tải Tiên Phong",
  description:
    "Quy chuẩn chằng buộc an toàn cho từng nhóm hàng công nghiệp: máy móc CNC, thép cuộn, linh kiện điện tử, thực phẩm đông lạnh. Danh mục hàng từ chối theo NĐ 10/2020.",
};

const CARGO_GROUPS = [
  {
    id: "machinery",
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
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=2400&q=80"
          alt="Quy chuẩn chằng buộc hàng hóa cơ khí"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            QUY CHUẨN HÀNG HÓA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              CHẰNG BUỘC KỸ THUẬT &amp; AN TOÀN TUYỆT ĐỐI
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Máy móc CNC, thép cuộn, linh kiện điện tử, hàng lạnh. Áp dụng đệm gỗ, cáp xích tăng đơ 10T và tuân thủ tuyệt đối Nghị định 10/2020/NĐ-CP.
          </p>
        </div>
      </section>

      {/* ═══ 5 CARGO GROUPS (Spacious Vertical Layout, Clean White) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full space-y-24 md:space-y-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
            5 NHÓM HÀNG HÓA &amp; QUY TRÌNH BẢO VỆ
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Mỗi loại hàng hóa có đặc thù vận chuyển riêng biệt, đòi hỏi quy chuẩn bốc xếp và trang thiết bị chằng buộc chuyên dụng.
          </p>
        </div>

        <div className="space-y-16">
          {CARGO_GROUPS.map((grp) => (
            <div
              key={grp.id}
              className="p-8 sm:p-12 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-8 reveal-on-scroll"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase">
                    {grp.name}
                  </h3>
                  <span className="text-base text-orange-600 font-semibold block">
                    Phương tiện phù hợp: {grp.suitableTruck}
                  </span>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <a
                    href="tel:0918456789"
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
                  >
                    Tư Vấn Chở Hàng Này
                  </a>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    Xem Cước Phí
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {grp.standards.map((std, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 text-base text-slate-700 font-light"
                  >
                    <span className="material-symbols-outlined text-green-600 text-xl shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROHIBITED CARGO WARNING (Clean Light Red Warning) ═══ */}
      <section className="py-24 bg-red-50/60 border-t border-red-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase text-red-950 tracking-tight">
              Danh Mục Hàng Hóa Tuyệt Đối Từ Chối Vận Chuyển
            </h2>
            <p className="text-base md:text-lg text-red-900 font-light leading-relaxed">
              Thực hiện nghiêm chỉnh Nghị định 10/2020/NĐ-CP và các quy định an toàn của Bộ GTVT, Vận Tải Tiên Phong tuyệt đối không nhận vận chuyển các mặt hàng sau:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-red-900">
            <div className="bg-white p-6 rounded-2xl border border-red-200 space-y-2">
              <strong className="font-heading font-bold uppercase text-red-600 block text-base">1. Chất Cháy Nổ &amp; Pháo:</strong>
              <p className="font-light">Thuốc nổ, kíp nổ, pháo hoa, pháo nổ các loại, vũ khí quân dụng, đạn dược và vật liệu có nguy cơ kích nổ cao.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-red-200 space-y-2">
              <strong className="font-heading font-bold uppercase text-red-600 block text-base">2. Hóa Chất Độc Hại Trái Phép:</strong>
              <p className="font-light">Hóa chất bảng cấm, chất phóng xạ, chất ăn mòn cực mạnh không có giấy phép vận chuyển của cơ quan có thẩm quyền.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-red-200 space-y-2">
              <strong className="font-heading font-bold uppercase text-red-600 block text-base">3. Hàng Lậu &amp; Không Hóa Đơn:</strong>
              <p className="font-light">Hàng hóa nhập lậu, hàng không có tem nhãn phụ, hàng không có hóa đơn GTGT hoặc chứng từ chứng minh nguồn gốc xuất xứ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CARGO PREPARATION TIPS (Clean Slate-50) ═══ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              Hướng Dẫn Chuẩn Bị Hàng Trước Khi Xe Đến
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-light">
              4 bước cơ bản giúp quá trình xếp dỡ diễn ra nhanh chóng và an toàn tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <strong className="font-heading font-bold text-base text-slate-900 uppercase block">1. Đóng Kiện &amp; Pallet</strong>
              <p className="text-slate-600 font-light">Đóng gói hàng trên pallet chuẩn kích thước 1m × 1.2m hoặc 1.1m × 1.1m để tối ưu diện tích lòng xe.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <strong className="font-heading font-bold text-base text-slate-900 uppercase block">2. Dán Tem Nhãn Hướng Dẫn</strong>
              <p className="text-slate-600 font-light">Đánh dấu rõ chiều đặt hàng (mũi tên hướng lên), hàng dễ vỡ, không chèn đè để tài xế bố trí đúng vị trí.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <strong className="font-heading font-bold text-base text-slate-900 uppercase block">3. Chuẩn Bị Chứng Từ</strong>
              <p className="text-slate-600 font-light">Phiếu xuất kho kiêm vận chuyển nội bộ hoặc Hóa đơn VAT bản điện tử/bản in kèm theo xe lưu thông.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <strong className="font-heading font-bold text-base text-slate-900 uppercase block">4. Thông Báo Giờ Cấm Tải</strong>
              <p className="text-slate-600 font-light">Thông báo trước khung giờ cấm xe tải của khu vực kho giao hàng để điều phối sắp xếp giờ chạy phù hợp.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
