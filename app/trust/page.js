import Link from "next/link";
import TrustAccordion from "../components/TrustAccordion";

export const metadata = {
  title: "Hồ Sơ Năng Lực Pháp Lý & Bảo Hiểm Hàng Hóa | Vận Tải Tiên Phong",
  description:
    "Hồ sơ pháp lý minh bạch: GPKD 0314892039, GPVT 41-GPVT/SGTVT, Hợp đồng bảo hiểm trách nhiệm hàng hóa PVI 10 Tỷ VNĐ và 6 cam kết an toàn không thỏa hiệp.",
};

const TESTIMONIALS = [
  {
    quote: "Tiên Phong là đối tác vận chuyển cuộn thép tôn mạ đáng tin cậy nhất của chúng tôi tại các nhà máy Bình Dương và Phú Mỹ. Xe luôn có sẵn đệm gỗ chữ V và xích siết tâm cuộn đạt chuẩn an toàn tuyệt đối.",
    author: "Anh Nguyễn Tuấn Anh",
    position: "Giám Đốc Chuỗi Cung Ứng — Tập Đoàn Tôn Thép",
  },
  {
    quote: "Chúng tôi yêu cầu nghiêm ngặt về thời gian hạ container bám sát giờ tàu chạy tại Cát Lái. Đội ngũ điều phối của Tiên Phong theo dõi sát sao, chưa từng để phát sinh bất kỳ chi phí lưu bãi container nào.",
    author: "Chị Trần Mai Lan",
    position: "Trưởng Phòng Xuất Nhập Khẩu — Doanh Nghiệp FDI Dệt May",
  },
  {
    quote: "Dự án di dời xưởng cơ khí của chúng tôi với hơn 18 cụm máy phay CNC đòi hỏi kỹ thuật cao. Đội xe cẩu tự hành và kỹ thuật viên Tiên Phong khảo sát rất kỹ lưỡng, thi công an toàn 100% đúng tiến độ cam kết.",
    author: "Bác Lê Hoàng Long",
    position: "Phó Tổng Giám Đốc Kỹ Thuật — Nhà Máy Cơ Khí Chính Xác",
  },
];

export default function TrustPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            HỒ SƠ NĂNG LỰC &amp; UY TÍN
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            MINH BẠCH
            <span className="block text-[#FF6A00]">PHÁP LÝ</span>
            <span className="block text-white">&amp; BẢO HIỂM PVI 10 TỶ.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Trong ngành vận tải đường bộ, niềm tin không đến từ lời nói suông. Chúng tôi cung cấp đầy đủ giấy phép chuyên ngành của Sở GTVT, hợp đồng bảo hiểm hàng hóa có giá trị pháp lý và các cam kết tài chính bồi hoàn rõ ràng.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-4">
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-xl sm:text-2xl text-[#FF6A00] block">41-GPVT</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Giấy Phép Sở GTVT</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-xl sm:text-2xl text-white block">10 TỶ VNĐ</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Hạn Mức Bảo Hiểm PVI</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-xl sm:text-2xl text-[#FF6A00] block">20 TỶ VNĐ</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Vốn Điều Lệ Thực Góp</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-xl sm:text-2xl text-white block">10 NĂM+</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Hoạt Động Từ 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE TRUST ACCORDION (§26, §27) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              CAM KẾT CỐT LÕI
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              6 NGUYÊN TẮC BẢO VỆ LỢI ÍCH KHÁCH HÀNG
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Nhấp vào từng cam kết để xem chi tiết điều khoản bồi thường, thời hạn thanh toán và quy trình xử lý sự cố độc lập.
            </p>
          </div>

          <TrustAccordion />
        </div>
      </section>

      {/* ═══ LEGAL CREDENTIALS DISPLAY ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              PHÁP NHÂN DOANH NGHIỆP
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              THÔNG TIN ĐĂNG KÝ DOANH NGHIỆP CHÍNH THỨC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-[#0B0B0B] border border-[#2A2A2A] space-y-4">
              <span className="text-xs font-mono uppercase text-[#FF6A00] block">
                CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP
              </span>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                CÔNG TY TNHH DỊCH VỤ VẬN TẢI TIÊN PHONG
              </h3>
              <div className="space-y-2 text-xs font-mono text-[#CCCCCC] pt-2">
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Mã số thuế:</span>
                  <span className="text-[#FF6A00] font-bold">0314892039</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Ngày cấp phép:</span>
                  <span>14/08/2014 (Sở KH&amp;ĐT TP.HCM cấp)</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Vốn điều lệ:</span>
                  <span className="text-white font-bold">20.000.000.000 VNĐ</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>Địa chỉ trụ sở:</span>
                  <span className="text-right max-w-xs">280/12 Quốc Lộ 1A, P. Tam Bình, TP. Thủ Đức, TP.HCM</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-[#0B0B0B] border border-[#2A2A2A] space-y-4">
              <span className="text-xs font-mono uppercase text-[#FF6A00] block">
                GIẤY PHÉP KINH DOANH VẬN TẢI ĐƯỜNG BỘ
              </span>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                SỞ GIAO THÔNG VẬN TẢI CẤP PHÉP
              </h3>
              <div className="space-y-2 text-xs font-mono text-[#CCCCCC] pt-2">
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Số giấy phép:</span>
                  <span className="text-[#FF6A00] font-bold">41-GPVT/SGTVT</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Loại hình vận tải:</span>
                  <span>Vận tải hàng hóa bằng xe ô tô &amp; Container</span>
                </div>
                <div className="py-2 border-b border-[#1F1F1F] flex justify-between">
                  <span>Hợp đồng bảo hiểm:</span>
                  <span className="text-white font-bold">Bảo hiểm PVI số HD-PVI-2024/TP</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span>Hạn mức bảo lãnh:</span>
                  <span className="text-[#FF6A00] font-bold">10.000.000.000 VNĐ / Vụ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS SLIDER / LIST (§28) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B] border-t border-[#DDD9CF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              ĐỐI TÁC NÓI GÌ
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#0B0B0B]">
              Ý KIẾN TỪ CÁC GIÁM ĐỐC CHUỖI CUNG ỨNG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[#DDD9CF] space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="font-heading font-black text-4xl text-[#FF6A00] block leading-none">
                    “
                  </span>
                  <p className="text-xs sm:text-sm text-[#262626] font-light leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE7DF] space-y-0.5">
                  <span className="font-heading font-bold text-sm text-[#0B0B0B] uppercase block">
                    {t.author}
                  </span>
                  <span className="text-xs text-[#737373] font-light block">
                    {t.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#070707] border-t border-[#1F1F1F] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
            HỢP TÁC B2B MINH BẠCH
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            SẴN SÀNG KÝ KẾT HỢP ĐỒNG NGUYÊN TẮC
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>YÊU CẦU DỰ THẢO HỢP ĐỒNG &amp; BÁO GIÁ</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
