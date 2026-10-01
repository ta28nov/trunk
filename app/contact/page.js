"use client";
import { useState } from "react";

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
    <div className="flex flex-col w-full">
      {/* ═══ CINEMATIC HEADER BANNER ═══ */}
      <section className="relative bg-navy-950 text-white py-20 md:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
          alt="Tổng đài điều phối vận tải Tiên Phong"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
            Trực Ban 24/7 • Sắp Xếp Xe Trong 15 Phút
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
            LIÊN HỆ ĐIỀU PHỐI XE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 mt-1">
              TIẾP NHẬN BÁO GIÁ &amp; LÊN LỊCH BỐC HÀNG
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Đội ngũ trực ban điều phối luôn thường trực 24/24 tất cả các ngày trong tuần. Cam kết phản hồi và gửi báo giá chi tiết trong vòng 15 phút.
          </p>
        </div>
      </section>

      {/* ═══ MAIN CONTACT & DISPATCH FORM ═══ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bento-card space-y-6">
              <div>
                <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                  Biểu Mẫu Điều Xe Trực Tuyến
                </span>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy-950 uppercase tracking-tight mt-1">
                  YÊU CẦU BÁO GIÁ TRONG 15 PHÚT
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-light">
                  Điền các thông tin cơ bản về lô hàng để chúng tôi sắp xếp xe gần nhất với giá cước tối ưu.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center space-y-4">
                  <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/20">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-green-900 uppercase">
                    ĐÃ GỬI YÊU CẦU THÀNH CÔNG!
                  </h3>
                  <p className="text-xs text-green-800 leading-relaxed max-w-md mx-auto font-light">
                    Cảm ơn Quý khách <strong>{formData.name}</strong>. Bộ phận điều vận của <strong>Anh Thắng</strong> sẽ gọi lại theo số <strong>{formData.phone}</strong> trong vòng 15 phút để chốt lịch xe.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-navy-950 hover:bg-navy-900 text-white text-xs font-heading font-semibold uppercase rounded-xl mt-2 transition-colors"
                  >
                    Gửi Yêu Cầu Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Họ Tên Người Liên Hệ *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Anh Nam"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Số Điện Thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ví dụ: 0918..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                      Tên Doanh Nghiệp / Công Ty (Nếu có)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Công ty TNHH Cơ Khí Đại Dũng"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Điểm Bốc Hàng (Địa chỉ / KCN)
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: KCN VSIP 1, Bình Dương"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Điểm Giao Hàng (Địa chỉ / Tỉnh)
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Cảng Cát Lái / Hà Nội"
                        value={formData.dropoff}
                        onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Loại Xe Cần Điều Động
                      </label>
                      <select
                        value={formData.truckType}
                        onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
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
                      <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                        Thời Gian Dự Kiến Bốc Hàng
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Sáng mai lúc 8:00"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-navy-950 uppercase mb-1.5">
                      Mô Tả Quy Cách Hàng &amp; Ghi Chú Đặc Biệt
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Quy cách kiện hàng, trọng lượng, yêu cầu bốc xếp, hạ bãi hay giấy tờ kiểm hóa..."
                      value={formData.cargoNote}
                      onChange={(e) => setFormData({ ...formData, cargoNote: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider rounded-xl transition-all text-xs shadow-lg shadow-orange-500/25 hover:scale-[1.01]"
                  >
                    Gửi Yêu Cầu Báo Giá Nhanh (15 Phút)
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Hotline Card */}
              <div className="bento-card-dark p-7 rounded-2xl shadow-xl space-y-5 border-navy-700/60">
                <div className="flex items-center gap-2 text-orange-400 font-heading font-bold text-xs uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  Đường Dây Nóng Khẩn Cấp 24/7
                </div>
                <div className="space-y-4 pt-1">
                  <div>
                    <span className="text-xs text-slate-400 block font-light">Trưởng Phòng Điều Hành Trực Ban:</span>
                    <a
                      href="tel:0918456789"
                      className="font-heading font-extrabold text-3xl text-orange-500 hover:text-orange-400 transition-colors block mt-1"
                    >
                      0918.456.789
                    </a>
                    <span className="text-xs text-slate-300 font-light mt-0.5 block">Anh Thắng — Phụ trách điều phối đội xe chính</span>
                  </div>
                  <div className="pt-3 border-t border-navy-800">
                    <span className="text-xs text-slate-400 block font-light">Tổng Đài Dự Phòng &amp; Kỹ Thuật:</span>
                    <a
                      href="tel:0903123456"
                      className="font-heading font-bold text-2xl text-white hover:text-orange-400 transition-colors block mt-1"
                    >
                      0903.123.456
                    </a>
                    <span className="text-xs text-slate-300 font-light mt-0.5 block">Hỗ trợ kỹ thuật &amp; xử lý sự cố ban đêm</span>
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <a
                    href="https://zalo.me/0918456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Chat Zalo OA
                  </a>
                  <a
                    href="tel:0918456789"
                    className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    Gọi Ngay
                  </a>
                </div>
              </div>

              {/* Yards Locations */}
              <div className="bento-card space-y-4 text-xs">
                <h3 className="font-heading font-extrabold text-sm text-navy-950 uppercase tracking-tight">
                  ĐỊA CHỈ HỆ THỐNG BÃI XE &amp; TRỤ SỞ:
                </h3>
                <div className="space-y-3.5 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">location_on</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 font-heading">Bãi Xe 1 (Trung Tâm 15.000m²):</strong>
                      <p className="text-slate-500 font-light mt-0.5">Đại lộ Độc Lập, KCN Sóng Thần, TP. Dĩ An, Tỉnh Bình Dương</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">location_on</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 font-heading">Bãi Xe 2 (Cảng Biển Cát Lái):</strong>
                      <p className="text-slate-500 font-light mt-0.5">Đường Nguyễn Thị Định, Phường Cát Lái, TP. Thủ Đức, TP.HCM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">location_on</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 font-heading">Bãi Xe 3 (Miền Trung):</strong>
                      <p className="text-slate-500 font-light mt-0.5">KCN Hòa Cầm, Phường Hòa Thọ Tây, Quận Cẩm Lệ, TP. Đà Nẵng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-950 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">business</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 font-heading">Văn Phòng Pháp Lý:</strong>
                      <p className="text-slate-500 font-light mt-0.5">Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM</p>
                    </div>
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
