import Link from "next/link";
import CargoCatalog from "../components/CargoCatalog";

export const metadata = {
  title: "Danh Mục Hàng Hóa & Quy Chuẩn Chằng Buộc | Vận Tải Tiên Phong",
  description:
    "Quy chuẩn chằng buộc an toàn, phân bổ phương tiện chuyên biệt cho từng loại hàng hóa: Máy móc CNC, thép cuộn, hàng pallet, vi mạch điện tử và container xuất nhập khẩu.",
};

export default function CargoPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            NĂNG LỰC CHUYÊN CHỞ ĐẶC THÙ
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            DANH MỤC
            <span className="block text-[#FF6A00]">HÀNG HÓA</span>
            <span className="block text-white">&amp; QUY CHUẨN AN TOÀN.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Không có hai chuyến hàng nào hoàn toàn giống nhau. Chúng tôi nghiên cứu đặc tính vật lý của từng mặt hàng công nghiệp để thiết lập phương án chằng buộc chịu lực và phân bổ dòng xe phù hợp.
          </p>
        </div>
      </section>

      {/* ═══ INTERACTIVE CARGO CATALOG WITH FILTERING & RECOMMENDATIONS (§17, §18) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TRA CỨU &amp; KHUYẾN NGHỊ XE
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CHỌN MẶT HÀNG ĐỂ XEM DÒNG XE TƯƠNG THÍCH
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
              Lọc theo từng nhóm hàng hóa để tra cứu tiêu chuẩn chằng buộc kỹ thuật, loại xe khuyến nghị và mức bảo hiểm trách nhiệm tương ứng.
            </p>
          </div>

          <CargoCatalog />
        </div>
      </section>

      {/* ═══ STRAPPING SAFETY STANDARDS (§24) ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B] border-t border-[#DDD9CF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TIÊU CHUẨN KỸ THUẬT
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#0B0B0B]">
              4 NGUYÊN TẮC CHẰNG BUỘC KHÔNG THỎA HIỆP
            </h2>
            <p className="text-sm sm:text-base text-[#525252] font-light leading-relaxed">
              Mọi tài xế của Tiên Phong đều trải qua đào tạo định kỳ về tính toán lực quán tính khi phanh gấp và kỹ thuật cố định trọng tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white border border-[#DDD9CF] space-y-3 reveal-on-scroll delay-75 card-hover-light">
              <span className="font-heading font-black text-3xl text-[#FF6A00] block">01</span>
              <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase">
                Phân Bổ Tải Trọng Đều Trục
              </h3>
              <p className="text-xs text-[#525252] font-light leading-relaxed">
                Trọng tâm lô hàng đặt đúng giữa trục xe, tránh lệch tải gây nguy cơ lật xe khi vào cua góc hẹp hoặc chạy đường đèo dốc.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#DDD9CF] space-y-3 reveal-on-scroll delay-150 card-hover-light">
              <span className="font-heading font-black text-3xl text-[#FF6A00] block">02</span>
              <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase">
                Chằng Buộc Đa Điểm Chịu Lực
              </h3>
              <p className="text-xs text-[#525252] font-light leading-relaxed">
                Tối thiểu 4 điểm neo giằng chéo góc bằng dây cáp vải bản 50mm hoặc xích tăng đơ đúc chịu lực thử tải 10 tấn.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#DDD9CF] space-y-3 reveal-on-scroll delay-200 card-hover-light">
              <span className="font-heading font-black text-3xl text-[#FF6A00] block">03</span>
              <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase">
                Lót Đệm Chống Ma Sát Trượt
              </h3>
              <p className="text-xs text-[#525252] font-light leading-relaxed">
                100% các mặt hàng máy móc và cuộn thép được kê đệm gỗ dăm dày 50mm và thảm cao su nhằm tăng hệ số ma sát bề mặt sàn xe.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#DDD9CF] space-y-3 reveal-on-scroll delay-250 card-hover-light">
              <span className="font-heading font-black text-3xl text-[#FF6A00] block">04</span>
              <h3 className="font-heading font-bold text-base text-[#0B0B0B] uppercase">
                Kiểm Tra Lại Sau 20KM Đầu
              </h3>
              <p className="text-xs text-[#525252] font-light leading-relaxed">
                Tài xế bắt buộc dừng xe kiểm tra lại độ căng của xích và dây đai sau 20km đầu tiên để siết thêm nếu hàng hóa bị dằn xóc lún.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM QUOTE CTA ═══ */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#070707] border-t border-[#1F1F1F] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-heading font-bold block">
            CẦN XE VẬN CHUYỂN NGAY?
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            BÁO GIÁ THEO ĐÚNG ĐẶC TÍNH KIỆN HÀNG CỦA BẠN
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow-hover px-8 py-4 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>GỬI THÔNG SỐ KIỆN HÀNG ĐỂ TÍNH GIÁ</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
