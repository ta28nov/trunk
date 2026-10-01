import Link from "next/link";

export const metadata = {
  title: "Về Vận Tải Tiên Phong | Lịch Sử Hình Thành & Năng Lực Pháp Lý",
  description:
    "Thành lập từ năm 2014, Vận Tải Tiên Phong sở hữu 52 đầu xe chính chủ, 3 cụm bãi xe 15.000m² tại Bình Dương, TP.HCM và Đà Nẵng. Giấy phép Sở GTVT 41-GPVT/SGTVT.",
};

const TIMELINE = [
  {
    year: "2014",
    title: "Thành Lập Doanh Nghiệp",
    desc: "Khởi đầu từ 5 đầu xe tải nhẹ chuyên tuyến TP.HCM — Bình Dương, phục vụ các nhà xưởng cơ khí và bao bì tại KCN Sóng Thần.",
  },
  {
    year: "2017",
    title: "Đầu Tư Đội Xe Đầu Kéo & Cẩu Tự Hành",
    desc: "Nâng quy mô đội xe lên 25 phương tiện, bổ sung đầu kéo container phục vụ Cảng Cát Lái và đội xe cẩu máy móc công nghiệp nặng.",
  },
  {
    year: "2020",
    title: "Xây Dựng Bãi Xe Trung Tâm 15.000m²",
    desc: "Đưa vào vận hành bãi xe chính quy và xưởng cơ khí nội bộ tại KCN Sóng Thần 1 (Dĩ An), tích hợp trạm cân điện tử 80 tấn.",
  },
  {
    year: "2024",
    title: "Mở Rộng Quy Mô 52 Xe & Số Hóa Lộ Trình",
    desc: "100% đầu xe đạt chuẩn khí thải Euro 5, phủ sóng vận tải 63 tỉnh thành, hợp tác chiến lược cùng hơn 850 doanh nghiệp sản xuất và tập đoàn FDI.",
  },
];

const VALUES = [
  {
    num: "01",
    title: "Tài Sản Thật — Năng Lực Thật",
    desc: "Không làm trung gian hay bán lại đơn hàng. 100% phương tiện đứng tên công ty, trực tiếp chịu trách nhiệm trước đối tác.",
  },
  {
    num: "02",
    title: "Kỷ Luật Giờ Giấc Tuyệt Đối",
    desc: "Hệ thống điều phối xe bám sát lịch sản xuất và giờ closing time của cảng biển, không để chậm trễ ảnh hưởng dây chuyền nhà máy.",
  },
  {
    num: "03",
    title: "An Toàn & Bảo Toàn Vốn Hàng Hóa",
    desc: "Quy chuẩn chằng buộc khắt khe và hợp đồng bảo hiểm hàng hóa PVI hạn mức 10 Tỷ VNĐ/vụ bồi thường 100% giá trị.",
  },
  {
    num: "04",
    title: "Minh Bạch Chi Phí & Chứng Từ",
    desc: "Báo giá trọn gói không phát sinh phụ phí vô lý. Hoàn trả biên bản giao nhận POD và xuất hóa đơn VAT điện tử trong 24 giờ.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0B0B] text-white">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
            CÂU CHUYỆN DOANH NGHIỆP
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] max-w-4xl text-white">
            CHÚNG TÔI KHÔNG CHỈ CHỞ HÀNG.
            <span className="block text-[#FF6A00]">CHÚNG TÔI VẬN HÀNH</span>
            <span className="block text-white">CHUỖI CUNG ỨNG.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-light leading-relaxed max-w-3xl">
            Hơn 10 năm kiên định xây dựng năng lực vận tải đường bộ dựa trên tài sản sở hữu thực tế, đội ngũ bác tài chính quy và kỷ luật thời gian khắt khe.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-4">
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">10+ NĂM</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Kinh Nghiệm Thực Chiến</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">52 XE</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Sở Hữu Trực Tiếp</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF6A00] block">15.000M²</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Bãi Xe Trung Tâm</span>
            </div>
            <div className="p-4 bg-[#141414] border border-[#2A2A2A]">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block">850+</span>
              <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 block">Đối Tác Doanh Nghiệp</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORY & MISSION SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F2F0EA] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              SỨ MỆNH VẬN HÀNH
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-[#0B0B0B]">
              LÀM CHỦ HẠ TẦNG ĐỂ LÀM CHỦ CHẤT LƯỢNG
            </h2>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Trong ngành logistics, sự chậm trễ hoặc hư hao hàng hóa có thể kéo theo thiệt hại hàng tỷ đồng cho một dây chuyền sản xuất. Thấu hiểu điều đó, Tiên Phong không chọn con đường làm trung gian điều xe ngoài. Chúng tôi đầu tư đồng bộ từ phương tiện, bãi đỗ đến xưởng bảo trì để kiểm soát 100% mọi chuyến đi.
            </p>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Mỗi tài xế Tiên Phong là một nhân sự biên chế chính thức, có thâm niên lái xe tải nặng tối thiểu 8 năm, có chứng chỉ an toàn lao động và được kiểm tra y tế định kỳ.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden h-80 sm:h-96 md:h-[480px] w-full border border-[#DDD9CF]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Đội ngũ vận tải Tiên Phong tại bãi xe trung tâm"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              TRIẾT LÝ VẬN HÀNH
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              4 NGUYÊN TẮC BẤT DI BẤT DỊCH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val) => (
              <div
                key={val.num}
                className="p-8 bg-[#141414] border border-[#2A2A2A] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-heading font-black text-4xl text-[#FF6A00] block">
                    {val.num}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE SECTION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#141414] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              CHẶNG ĐƯỜNG PHÁT TRIỂN
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              10 NĂM ĐỒNG HÀNH CÙNG DOANH NGHIỆP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="p-8 bg-[#0B0B0B] border border-[#2A2A2A] space-y-3"
              >
                <span className="font-heading font-black text-3xl text-[#FF6A00] block">
                  {t.year}
                </span>
                <h3 className="font-heading font-bold text-base text-white uppercase">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEGAL & LICENSING SPECIFICATION ═══ */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0B0B] border-t border-[#1F1F1F] reveal-on-scroll">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF6A00] font-heading font-bold block">
              PHÁP LÝ CHÍNH NGẠCH
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              HỒ SƠ NĂNG LỰC DOANH NGHIỆP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Tên Doanh Nghiệp:</span>
              <span className="font-heading font-bold text-base text-white block">Công Ty TNHH TM DV Vận Tải Tiên Phong</span>
            </div>

            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Mã Số Doanh Nghiệp (MST):</span>
              <span className="font-heading font-black text-lg text-[#FF6A00] block">0314892039</span>
            </div>

            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Giấy Phép Vận Tải Ô Tô:</span>
              <span className="font-heading font-bold text-base text-white block">41-GPVT/SGTVT (Sở GTVT TP.HCM)</span>
            </div>

            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Vốn Điều Lệ Thực Góp:</span>
              <span className="font-heading font-bold text-base text-white block">20.000.000.000 VNĐ</span>
            </div>

            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Hạn Mức Bảo Hiểm Hàng Hóa:</span>
              <span className="font-heading font-bold text-base text-[#FF6A00] block">10.000.000.000 VNĐ / Vụ (PVI)</span>
            </div>

            <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#737373]">Bãi Xe Trung Tâm:</span>
              <span className="font-heading font-bold text-base text-white block">KCN Sóng Thần 1, Dĩ An, Bình Dương</span>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/contact"
              className="btn-arrow-hover inline-block px-10 py-5 bg-[#FF6A00] hover:bg-[#E55F00] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>LIÊN HỆ HỢP TÁC VẬN TẢI</span>
              <span className="arrow-move ml-2 font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
