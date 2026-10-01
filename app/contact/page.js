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
      {/* ═══ HEADER BANNER ═══ */}
      <section className="bg-navy-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d6e3fe_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-navy-700 rounded text-orange-400 text-xs font-heading font-semibold uppercase tracking-wider">
            Tổng Đài 24/7
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Liên Hệ Điều Xe & Tiếp Nhận Báo Giá Khẩn Cấp
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Đội ngũ trực ban điều phối luôn thường trực 24/24 tất cả các ngày trong tuần. Cam kết phản hồi và gửi báo giá chi tiết trong vòng 15 phút.
          </p>
        </div>
      </section>

      {/* ═══ MAIN CONTACT & DISPATCH FORM ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-heading font-bold text-orange-600 uppercase tracking-widest block">
                  Biểu Mẫu Điều Xe Trực Tuyến
                </span>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy-900 uppercase tracking-tight mt-1">
                  Yêu Cầu Báo Giá Trong 15 Phút
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Điền các thông tin cơ bản về lô hàng để chúng tôi sắp xếp xe gần nhất với giá cước tối ưu.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-3">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-green-900 uppercase">
                    Đã Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-xs text-green-800 leading-relaxed max-w-md mx-auto">
                    Cảm ơn Quý khách <strong>{formData.name}</strong>. Bộ phận điều vận của <strong>Anh Thắng</strong> sẽ gọi lại theo số <strong>{formData.phone}</strong> trong vòng 15 phút để chốt lịch xe.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-navy-900 text-white text-xs font-heading font-semibold uppercase rounded mt-2"
                  >
                    Gửi Yêu Cầu Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Họ Tên Người Liên Hệ *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Anh Nam"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Số Điện Thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ví dụ: 0918..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                      Tên Doanh Nghiệp / Công Ty (Nếu có)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Công ty TNHH Cơ Khí Đại Dũng"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Điểm Bốc Hàng (Địa chỉ / KCN)
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: KCN VSIP 1, Bình Dương"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Điểm Giao Hàng (Địa chỉ / Tỉnh)
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Cảng Cát Lái / Hà Nội"
                        value={formData.dropoff}
                        onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Loại Xe Cần Điều Động
                      </label>
                      <select
                        value={formData.truckType}
                        onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
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
                      <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                        Thời Gian Dự Kiến Bốc Hàng
                      </label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Sáng mai lúc 8:00"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-slate-700 uppercase mb-1">
                      Mô Tả Quy Cách Hàng & Ghi Chú Đặc Biệt
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Quy cách kiện hàng, trọng lượng, yêu cầu bốc xếp, hạ bãi hay giấy tờ kiểm hóa..."
                      value={formData.cargoNote}
                      onChange={(e) => setFormData({ ...formData, cargoNote: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider rounded transition-colors text-sm shadow-md"
                  >
                    Gửi Yêu Cầu Báo Giá Nhanh
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Hotline Card */}
              <div className="bg-navy-900 text-white p-6 rounded-lg shadow-sm border border-navy-800 space-y-4">
                <div className="flex items-center gap-2 text-orange-400 font-heading font-bold text-xs uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Đường Dây Nóng Khẩn Cấp 24/7
                </div>
                <div className="space-y-3 pt-1">
                  <div>
                    <span className="text-xs text-slate-400 block">Trưởng Phòng Điều Hành:</span>
                    <a
                      href="tel:0918456789"
                      className="font-heading font-bold text-2xl text-orange-500 hover:text-orange-400 transition-colors block"
                    >
                      0918.456.789
                    </a>
                    <span className="text-xs text-slate-300">Anh Thắng — Phụ trách điều phối đội xe chính</span>
                  </div>
                  <div className="pt-2 border-t border-navy-800">
                    <span className="text-xs text-slate-400 block">Tổng Đài Dự Phòng:</span>
                    <a
                      href="tel:0903123456"
                      className="font-heading font-bold text-xl text-white hover:text-orange-400 transition-colors block"
                    >
                      0903.123.456
                    </a>
                    <span className="text-xs text-slate-300">Hỗ trợ kỹ thuật & xử lý sự cố ban đêm</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://zalo.me/0918456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Chat Zalo OA
                  </a>
                  <a
                    href="tel:0918456789"
                    className="flex-1 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-heading font-bold uppercase tracking-wider text-center rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    Gọi Ngay
                  </a>
                </div>
              </div>

              {/* Yards Locations */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4 text-xs">
                <h3 className="font-heading font-bold text-sm text-navy-900 uppercase">
                  Địa Chỉ Hệ Thống Bãi Xe & Trụ Sở:
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">location_on</span>
                    <div>
                      <strong>Bãi Xe 1 (Trung Tâm 15.000m²):</strong>
                      <p className="text-slate-500">Đại lộ Độc Lập, KCN Sóng Thần, TP. Dĩ An, Tỉnh Bình Dương</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">location_on</span>
                    <div>
                      <strong>Bãi Xe 2 (Cảng Biển Cát Lái):</strong>
                      <p className="text-slate-500">Đường Nguyễn Thị Định, Phường Cát Lái, TP. Thủ Đức, TP.HCM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">location_on</span>
                    <div>
                      <strong>Bãi Xe 3 (Miền Trung):</strong>
                      <p className="text-slate-500">KCN Hòa Cầm, Phường Hòa Thọ Tây, Quận Cẩm Lệ, TP. Đà Nẵng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-orange-500 text-base shrink-0 mt-0.5">business</span>
                    <div>
                      <strong>Văn Phòng Pháp Lý:</strong>
                      <p className="text-slate-500">Số 28 Đường số 8, Phường Linh Trung, TP. Thủ Đức, TP.HCM</p>
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
