import Link from "next/link";
import ProcessStorytelling from "../components/ProcessStorytelling";

export const metadata = {
  title: "Năng Lực Vận Hành & Bãi Xe 15.000M² | Vận Tải Tiên Phong",
  description:
    "Hạ tầng bãi xe 15.000m² tại KCN Sóng Thần 1, xưởng bảo dưỡng cơ khí nội bộ, quy trình kiểm định an toàn 18 hạng mục và phòng điều phối vệ tinh 24/7.",
};

const CHECKLIST_ITEMS = [
  { num: "01", name: "Áp Suất & Độ Mòn Hoa Lốp", desc: "Đo độ sâu gai lốp tối thiểu 3.0mm, kiểm tra áp suất bánh đôi chịu tải cao." },
  { num: "02", name: "Hệ Thống Phanh Hơi Lốc Kê", desc: "Xả nước bình khí nén, kiểm tra má phanh, độ kín cuppen và đường ống dẫn khí." },
  { num: "03", name: "Hệ Thống Đèn Chiếu Sáng & Xi-Nhan", desc: "Kiểm tra toàn bộ đèn pha, đèn gầm, đèn hậu và đèn cảnh báo sườn xe ban đêm." },
  { num: "04", name: "Độ Kín Nước Của Bạt Phủ & Thùng Xe", desc: "Soi kiểm tra lỗ mọt bạt phủ 3 lớp, bảo đảm kín nước tuyệt đối khi gặp mưa lớn." },
  { num: "05", name: "Thiết Bị Giám Sát Hành Trình & Camera Nghị Định 10", desc: "Kiểm tra tín hiệu GPS vệ tinh, camera ghi hình khoang lái truyền dữ liệu về Tổng Cục." },
  { num: "06", name: "Đo Nồng Độ Cồn & Sức Khỏe Lái Xe", desc: "100% tài xế thổi nồng độ cồn bằng máy chuyên dụng đạt chỉ số 0.00mg/L trước khi nhận chìa khóa." },
];

export default function OperationsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            HẠ TẦNG &amp; NĂNG LỰC VẬN HÀNH
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            BÃI XE 15.000M²
            <span className="block text-[#FF6A00]">&amp; QUY TRÌNH</span>
            <span className="block text-white">VẬN HÀNH CHÍNH QUY.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Sức mạnh thực sự của Tiên Phong nằm ở tài sản thật: bãi đỗ xe trung tâm 15.000m² tại ngã ba công nghiệp Dĩ An, xưởng bảo dưỡng cơ khí tại chỗ và quy trình kiểm tra an toàn 18 hạng mục trước mỗi ca xuất bến.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-4">
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">15.000 M²</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Bãi Xe Sóng Thần 1</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">18 MỤC</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Kiểm Tra An Toàn</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">24/7</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Phòng Giám Sát GPS</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">100%</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Xe Đứng Tên Công Ty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 15.000M2 DEPOT SHOWCASE (§24) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 reveal-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TÂM ĐIỂM ĐIỀU PHỐI VẬN TẢI
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              BÃI XE TRUNG TÂM TẠI KCN SÓNG THẦN 1
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Tọa lạc tại vị trí chiến lược ngã ba giao cắt giữa Quốc Lộ 1K, Quốc Lộ 1A và đường vành đai Mỹ Phước — Tân Vạn. Bãi xe của Tiên Phong có sức chứa đồng thời trên 60 phương tiện hạng nặng, bãi tập kết container rỗng và trạm tiếp nhiên liệu riêng.
            </p>
            <div className="space-y-3 text-xs font-mono text-[#E5E5E5] pt-2">
              <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                <span>Vị trí:</span>
                <span className="text-white">Đại lộ Độc Lập, KCN Sóng Thần 1, Dĩ An, Bình Dương</span>
              </div>
              <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                <span>Trạm cơ khí bảo dưỡng:</span>
                <span className="text-[#FF6A00]">3 Cầu nâng thủy lực &amp; 8 thợ máy chính</span>
              </div>
              <div className="py-2 flex justify-between">
                <span>Hạ tầng kho bãi gom hàng:</span>
                <span className="text-white">3.000m² kho có mái che &amp; bến xe nâng</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal-right">
            <div className="relative overflow-hidden h-80 sm:h-96 md:h-[480px] w-full border border-[#2A2A2A] bg-[#141414] card-hover">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Bãi xe trung tâm 15.000m² Vận Tải Tiên Phong"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 18-STEP PRE-TRIP INSPECTION CHECKLIST ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B] border-t border-[#DDD9CF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              KIỂM ĐỊNH KỸ THUẬT
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#0B0B0B]">
              QUY CHUẨN KIỂM TRA 18 HẠNG MỤC TRƯỚC XUẤT BẾN
            </h2>
            <p className="text-sm sm:text-base text-[#525252] font-light leading-relaxed">
              Mỗi phương tiện đều có nhật trình ký xác nhận của Đội trưởng Cơ khí và Lái xe trước khi bảo vệ mở barie xuất bến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHECKLIST_ITEMS.map((item, idx) => {
              const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
              return (
                <div
                  key={item.num}
                  className={`p-8 bg-white border border-[#DDD9CF] space-y-3 reveal-on-scroll card-hover-light ${delays[idx % delays.length]}`}
                >
                  <div className="flex items-center justify-between border-b border-[#EAE7DF] pb-3">
                    <span className="font-heading font-black text-2xl text-[#FF6A00]">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#737373] uppercase">
                      Bắt buộc 100%
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#525252] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS STORYTELLING SECTION (§22, §23) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TIẾN TRÌNH VẬN HÀNH
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CƠ CHẾ ĐIỀU PHỐI 6 BƯỚC KHÉP KÍN
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Trực ban giám sát và điều động phương tiện linh hoạt, xử lý tức thì mọi sự cố phát sinh trên đường thiên lý.
            </p>
          </div>

          <ProcessStorytelling />
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#070707] border-t border-[#1F1F1F] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
            THAM QUAN BÃI XE HOẶC KHẢO SÁT
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CHÚNG TÔI MỜI DOANH NGHIỆP TRỰC TIẾP ĐÁNH GIÁ NĂNG LỰC
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>ĐẶT LỊCH KHẢO SÁT &amp; BÁO GIÁ DỰ ÁN</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
