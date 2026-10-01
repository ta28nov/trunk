import Link from "next/link";

export default function SectionHeader({ eyebrow, title, linkText, linkHref, centered, light }) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "md:flex-row md:items-end justify-between"} gap-3 mb-8 md:mb-10 reveal`}>
      <div>
        {eyebrow && (
          <span className={`font-heading font-bold text-xs uppercase tracking-widest block mb-1 ${light ? "text-orange-400" : "text-orange-500"}`}>
            {eyebrow}
          </span>
        )}
        <h2 className={`font-heading font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight leading-tight ${light ? "text-white" : "text-navy-900"}`}>
          {title}
        </h2>
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className={`inline-flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-wider transition-colors shrink-0 ${
            light ? "text-orange-400 hover:text-white" : "text-orange-500 hover:text-navy-900"
          }`}
        >
          {linkText}
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
