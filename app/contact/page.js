"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    cargoType: "",
    pickup: "",
    dropoff: "",
    truckType: "Xe Tải Mui Bạt 15 Tấn (9.6M)",
    weight: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền họ tên và số điện thoại liên lạc!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            TIẾP NHẬN YÊU CẦU ĐIỀU VẬN 24/7
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            CÙNG NHAU VẬN HÀNH
            <span className="block text-[#FF6A00]">LÔ HÀNG CỦA BẠN.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Điền thông tin lô hàng hoặc liên hệ trực tiếp với bộ phận trực ban điều vận. Chúng tôi cam kết phản hồi phương án điều xe và báo giá chuẩn xác trong vòng 15 phút.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6">
            <a
              href="tel:0918456789"
              className="btn-arrow-hover px-8 py-4 sm:py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>GỌI ĐIỀU PHỐI: 0918.456.789</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>

            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow-hover px-8 py-4 sm:py-5 bg-[#141414] hover:bg-[#1F1F1F] text-white border border-[#2A2A2A] font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>CHAT ZALO TRỰC BAN</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FORM & DIRECT CONTACT DETAILS ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white border border-[#DDD9CF] space-y-8 reveal-left card-hover-light">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
                BÁO GIÁ TRỰC TUYẾN
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B0B0B] uppercase">
                YÊU CẦU BÁO GIÁ TRONG 15 PHÚT
              </h2>
              <p className="text-sm text-[#525252] font-light">
                Cung cấp các thông số cơ bản về lô hàng để chúng tôi bố trí xe phù hợp nhất.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#F2F0EA] border border-[#DDD9CF] text-center space-y-4">
                <span className="font-heading font-black text-4xl text-[#FF6A00] block">
                  ĐÃ TIẾP NHẬN THÀNH CÔNG
                </span>
                <p className="text-base text-[#262626] font-light leading-relaxed">
                  Cảm ơn Quý khách <strong>{formData.name}</strong>. Bộ phận điều vận sẽ liên hệ lại theo số <strong>{formData.phone}</strong> trong vòng 15 phút để chốt phương án xe và chi phí cước.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#0B0B0B] text-white font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    GỬI YÊU CẦU KHÁC
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Họ Tên Người Liên Hệ (Bắt buộc)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Anh Nam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Số Điện Thoại / Zalo (Bắt buộc)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0918..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Tên Doanh Nghiệp (Nếu có)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Công ty Cơ Khí Đại Dũng"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Chủng Loại Hàng Hóa
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Thép cuộn / Máy CNC / Pallet"
                      value={formData.cargoType}
                      onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Điểm Bốc Hàng (Địa chỉ / KCN)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: KCN VSIP 1, Bình Dương"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Điểm Giao Hàng (Địa chỉ / Tỉnh)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Cảng Cát Lái / Hà Nội"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Loại Xe Yêu Cầu
                    </label>
                    <select
                      value={formData.truckType}
                      onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    >
                      <option>Xe Tải Mui Bạt 8 Tấn</option>
                      <option>Xe Tải Mui Bạt 15 Tấn (9.6M)</option>
                      <option>Đầu Kéo Container 40ft / 45ft</option>
                      <option>Xe Cẩu Tự Hành 10 Tấn</option>
                      <option>Xe Thùng Kín Bửng Nâng 5T — 10T</option>
                      <option>Rơ-Moóc Lùn Siêu Trọng 50T</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                      Khối Lượng / Trọng Lượng Ước Tính
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: 12 Tấn / 45 m³"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-heading font-bold text-xs uppercase text-[#262626] block">
                    Ghi Chú Yêu Cầu Kỹ Thuật (Nếu có)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Quy cách đóng gói, yêu cầu xe nâng bốc dỡ, hạn giờ giao hàng hay thủ tục hải quan..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F2F0EA] border border-[#DDD9CF] focus:outline-none focus:border-[#FF6A00] text-[#0B0B0B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-arrow-hover w-full py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>GỬI YÊU CẦU BÁO GIÁ NGAY</span>
                    <span className="arrow-move ml-2 font-bold">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Details Side */}
          <div className="lg:col-span-5 space-y-8 reveal-right">
            <div className="p-8 bg-[#0B0B0B] text-white border border-[#2A2A2A] space-y-6 card-hover">
              <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
                TRỰC BAN ĐIỀU VẬN 24/7
              </span>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#737373] uppercase tracking-wider block">Trực Ban Điều Xe:</span>
                  <a
                    href="tel:0918456789"
                    className="font-heading font-black text-2xl text-[#FF6A00] hover:underline"
                  >
                    0918.456.789 — Anh Thắng
                  </a>
                </div>

                <div>
                  <span className="text-xs text-[#737373] uppercase tracking-wider block">Điều Hành Kỹ Thuật:</span>
                  <a
                    href="tel:0903123456"
                    className="font-heading font-bold text-xl text-white hover:underline"
                  >
                    0903.123.456 — Phòng Điều Độ
                  </a>
                </div>

                <div>
                  <span className="text-xs text-[#737373] uppercase tracking-wider block">Thư Điện Tử Báo Giá B2B:</span>
                  <span className="text-sm font-mono text-[#E5E5E5] block">vantaitienphong.vn@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#DDD9CF] space-y-6 card-hover-light">
              <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase border-b border-[#DDD9CF] pb-3">
                HỆ THỐNG TRỤ SỞ &amp; BÃI XE
              </h3>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <strong className="text-[#0B0B0B] font-semibold block uppercase">Trụ Sở Văn Phòng Chính:</strong>
                  <p className="text-[#525252] font-light">Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM</p>
                </div>

                <div className="space-y-1">
                  <strong className="text-[#0B0B0B] font-semibold block uppercase">Bãi Xe Trung Tâm 15.000m²:</strong>
                  <p className="text-[#525252] font-light">KCN Sóng Thần 1, TP. Dĩ An, Tỉnh Bình Dương</p>
                </div>

                <div className="space-y-1">
                  <strong className="text-[#0B0B0B] font-semibold block uppercase">Trạm Trung Chuyển Miền Trung:</strong>
                  <p className="text-[#525252] font-light">KCN Hòa Cầm, Quận Cẩm Lệ, TP. Đà Nẵng</p>
                </div>

                <div className="space-y-1">
                  <strong className="text-[#0B0B0B] font-semibold block uppercase">Chi Nhánh Cảng Biển Phía Bắc:</strong>
                  <p className="text-[#525252] font-light">KCN Đình Vũ, Quận Hải An, TP. Hải Phòng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4 reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              HỎI ĐÁP DOANH NGHIỆP
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              CÂU HỎI THƯỜNG GẶP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll delay-75 card-hover">
              <h3 className="font-heading font-bold text-base text-[#FF6A00] uppercase">
                Thời gian điều xe sau khi xác nhận là bao lâu?
              </h3>
              <p className="text-[#A3A3A3] font-light leading-relaxed">
                Tại các tỉnh Đông Nam Bộ (Bình Dương, Đồng Nai, TP.HCM, Long An), xe có mặt tại kho bốc sau 30 đến 45 phút kể từ khi chốt lệnh điều phối từ bãi xe Sóng Thần.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll delay-150 card-hover">
              <h3 className="font-heading font-bold text-base text-[#FF6A00] uppercase">
                Chính sách bảo hiểm và bồi thường thiệt hại như thế nào?
              </h3>
              <p className="text-[#A3A3A3] font-light leading-relaxed">
                100% hàng hóa được bảo vệ theo Hợp đồng bảo hiểm trách nhiệm dân sự vận chuyển PVI hạn mức 10 Tỷ VNĐ/vụ. Cam kết đền bù 100% giá trị hợp đồng trong 7 ngày làm việc nếu xảy ra lỗi do vận chuyển.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll delay-200 card-hover">
              <h3 className="font-heading font-bold text-base text-[#FF6A00] uppercase">
                Doanh nghiệp có được áp dụng chính sách công nợ không?
              </h3>
              <p className="text-[#A3A3A3] font-light leading-relaxed">
                Tiên Phong áp dụng chu kỳ công nợ linh hoạt từ 30 đến 45 ngày đối với các doanh nghiệp ký kết hợp đồng nguyên tắc năm, có bàn giao đầy đủ biên bản POD và hóa đơn VAT điện tử.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-[#2A2A2A] space-y-3 reveal-on-scroll delay-250 card-hover">
              <h3 className="font-heading font-bold text-base text-[#FF6A00] uppercase">
                Khách hàng có theo dõi được vị trí xe thời gian thực không?
              </h3>
              <p className="text-[#A3A3A3] font-light leading-relaxed">
                Có. Chúng tôi cung cấp đường link định vị GPS trực tiếp hoặc cập nhật tự động tọa độ và tiến độ chạy xe qua nhóm Zalo điều phối cho bộ phận logistics của khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
