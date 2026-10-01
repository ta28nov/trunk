"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    pickup: "",
    dropoff: "",
    truckType: "Xe 15T Mui Bạt",
    cargoNote: "",
    pickupDate: "",
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
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* ═══ CINEMATIC HERO BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-24 md:py-36 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
          alt="Tổng đài điều phối vận tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[1.08]">
            LIÊN HỆ ĐIỀU PHỐI XE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-2">
              TIẾP NHẬN BÁO GIÁ &amp; LÊN LỊCH BỐC HÀNG
            </span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
            Đội ngũ trực ban điều phối luôn thường trực 24/24 tất cả các ngày trong tuần. Cam kết phản hồi và gửi báo giá chi tiết trong vòng 15 phút.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="tel:0918456789"
              className="inline-flex items-center gap-2 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Hotline Khẩn Cấp: 0918.456.789
            </a>
            <a
              href="https://zalo.me/0918456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-blue-600/25 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Nhắn Tin Zalo OA
            </a>
          </div>
        </div>
      </section>

      {/* ═══ MAIN CONTACT & DISPATCH FORM (Clean White & Slate-50) ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-3">
              <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-slate-900 leading-tight">
                YÊU CẦU BÁO GIÁ TRONG 15 PHÚT
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light">
                Điền các thông tin cơ bản về kiện hàng để bộ phận điều vận sắp xếp xe gần nhất với giá cước tối ưu.
              </p>
            </div>

            {submitted ? (
              <div className="p-10 bg-green-50 border border-green-200 rounded-3xl text-center space-y-5">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/30">
                  <span className="material-symbols-outlined text-4xl">check</span>
                </div>
                <h3 className="font-heading font-black text-2xl text-green-950 uppercase">
                  ĐÃ GỬI YÊU CẦU THÀNH CÔNG!
                </h3>
                <p className="text-green-800 text-base leading-relaxed max-w-lg mx-auto font-light">
                  Cảm ơn Quý khách <strong className="text-green-950">{formData.name}</strong>. Bộ phận điều vận sẽ gọi lại theo số <strong className="text-orange-600">{formData.phone}</strong> trong vòng 15 phút để chốt lịch xe.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase rounded-2xl transition-all"
                >
                  Gửi Yêu Cầu Khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Họ Tên Người Liên Hệ *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Anh Nam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Số Điện Thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0918..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                    Tên Doanh Nghiệp / Công Ty (Nếu có)
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Công ty TNHH Cơ Khí Đại Dũng"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Điểm Bốc Hàng (Địa chỉ / KCN)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: KCN VSIP 1, Bình Dương"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Điểm Giao Hàng (Địa chỉ / Tỉnh)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Cảng Cát Lái / Hà Nội"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Loại Xe Cần Điều Động
                    </label>
                    <select
                      value={formData.truckType}
                      onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    >
                      <option>Xe Tải Thùng Kín 5 Tấn</option>
                      <option>Xe Tải Mui Bạt 8 Tấn</option>
                      <option>Xe Tải Mui Bạt 9.6M 15 Tấn</option>
                      <option>Đầu Kéo Container 40ft / 45ft</option>
                      <option>Xe Cẩu Tự Hành 5T — 15T</option>
                      <option>Xe Đông Lạnh Thermo King</option>
                      <option>Moóc Lùn Siêu Trọng 50T</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                      Thời Gian Dự Kiến Bốc Hàng
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Sáng mai lúc 8:00"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-slate-800 uppercase mb-2 text-xs">
                    Mô Tả Quy Cách Hàng &amp; Ghi Chú Đặc Biệt
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Quy cách kiện hàng, trọng lượng, yêu cầu bốc xếp, hạ bãi hay giấy tờ kiểm hóa..."
                    value={formData.cargoNote}
                    onChange={(e) => setFormData({ ...formData, cargoNote: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 transition-all text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider rounded-2xl transition-all text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.01]"
                >
                  Gửi Yêu Cầu Báo Giá Nhanh (15 Phút)
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Cards Side */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hotline Card */}
            <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl shadow-xl space-y-6">
              <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest block">
                Đường Dây Nóng Khẩn Cấp 24/7
              </span>

              <div className="space-y-6 pt-2">
                <div>
                  <span className="text-xs text-slate-400 block font-light">Trưởng Phòng Điều Hành Trực Ban:</span>
                  <a
                    href="tel:0918456789"
                    className="font-heading font-black text-3xl sm:text-4xl text-orange-400 hover:text-orange-300 transition-colors block mt-1"
                  >
                    0918.456.789
                  </a>
                  <span className="text-sm text-slate-300 font-light mt-1 block">Anh Thắng — Phụ trách điều phối đội xe chính</span>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block font-light">Tổng Đài Dự Phòng &amp; Kỹ Thuật:</span>
                  <a
                    href="tel:0903123456"
                    className="font-heading font-bold text-2xl text-white hover:text-orange-400 transition-colors block mt-1"
                  >
                    0903.123.456
                  </a>
                  <span className="text-sm text-slate-300 font-light mt-1 block">Hỗ trợ kỹ thuật &amp; sự cố đêm</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://zalo.me/0918456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded-2xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Chat Zalo OA
                </a>
                <a
                  href="tel:0918456789"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded-2xl transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  Gọi Ngay
                </a>
              </div>
            </div>

            {/* Yards Locations */}
            <div className="p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-heading font-black text-lg text-slate-900 uppercase tracking-tight">
                HỆ THỐNG BÃI XE &amp; VĂN PHÒNG:
              </h3>
              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-base block">Bãi Xe 1 (Trung Tâm 15.000m²):</strong>
                    <p className="text-slate-600 font-light mt-0.5">Đại lộ Độc Lập, KCN Sóng Thần, TP. Dĩ An, Tỉnh Bình Dương</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-base block">Bãi Xe 2 (Cảng Cát Lái):</strong>
                    <p className="text-slate-600 font-light mt-0.5">Đường Nguyễn Thị Định, Phường Cát Lái, TP. Thủ Đức, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-base block">Bãi Xe 3 (Miền Trung):</strong>
                    <p className="text-slate-600 font-light mt-0.5">KCN Hòa Cầm, Phường Hòa Thọ Tây, Quận Cẩm Lệ, TP. Đà Nẵng</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">business</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 font-heading text-base block">Văn Phòng Pháp Lý:</strong>
                    <p className="text-slate-600 font-light mt-0.5">Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
