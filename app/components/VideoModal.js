"use client";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#141414] border border-[#2A2A2A] shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A] bg-[#0B0B0B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF6A00]" />
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Phim Tư Liệu Thực Địa — Đội Xe Vận Tải Tiên Phong
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#A3A3A3] hover:text-white font-mono"
            aria-label="Đóng"
          >
            [ĐÓNG ×]
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            autoPlay
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
            Trình duyệt không hỗ trợ thẻ video.
          </video>
        </div>

        {/* Modal Footer Info */}
        <div className="p-4 bg-[#0B0B0B] flex flex-wrap items-center justify-between gap-3 text-xs text-[#737373]">
          <div>
            Ghi hình thực địa bãi xe trung tâm Sóng Thần &amp; Cảng Cát Lái
          </div>
          <a
            href="tel:0918456789"
            className="text-[#FF6A00] font-heading font-bold uppercase hover:underline"
          >
            Liên hệ điều xe: 0918.456.789 →
          </a>
        </div>
      </div>
    </div>
  );
}
