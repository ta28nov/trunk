import Link from "next/link";

export default function SectionHeader({ eyebrow, title, linkText, linkHref, centered, light }) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "md:flex-row md:items-end justify-between"} gap-4 mb-8 md:mb-12`}>
      <div className="space-y-2">
        {eyebrow && (
          <span className={`font-heading font-bold text-xs uppercase tracking-[0.25em] block ${light ? "text-[#FF6A00]" : "text-[#FF6A00]"}`}>
            {eyebrow}
          </span>
        )}
        <h2 className={`font-heading font-black text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight leading-tight ${light ? "text-white" : "text-[#0B0B0B]"}`}>
          {title}
        </h2>
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className={`btn-arrow-hover inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider transition-colors shrink-0 ${
            light ? "text-[#FF6A00] hover:text-white" : "text-[#0B0B0B] hover:text-[#FF6A00]"
          }`}
        >
          <span>{linkText}</span>
          <span className="arrow-move font-bold">→</span>
        </Link>
      )}
    </div>
  );
}
