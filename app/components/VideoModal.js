"use client";
import { useState } from "react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fade-up">
      <div className="relative w-full max-w-4xl bg-navy-900 rounded-2xl overflow-hidden border border-navy-700 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-800 bg-navy-950">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Phim Thực Địa — Đội Xe Vận Tải Tiên Phong (Full HD)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
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
        <div className="p-4 bg-navy-950 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>📍 Bãi xe trung tâm Sóng Thần & Cát Lái</span>
            <span>⏱️ Ghi hình thực tế tháng 08/2024</span>
          </div>
          <a
            href="tel:0918456789"
            className="text-orange-400 font-heading font-bold uppercase hover:underline flex items-center gap-1"
          >
            <span>Liên hệ điều xe ngay: 0918.456.789</span>
            <span className="material-symbols-outlined text-sm">east</span>
          </a>
        </div>
      </div>
    </div>
  );
}
