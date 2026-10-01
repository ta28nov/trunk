"use client";
import { useState, useEffect, useRef } from "react";

export default function CounterStat({ target, suffix = "", label, sublabel, accent = false }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200; // ms
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(target * easeOutProgress);

            setCount(currentVal);

            if (currentStep >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={domRef} className="space-y-1">
      <div className={`font-heading font-black text-2xl sm:text-4xl ${accent ? "text-[#FF6A00]" : "text-white"}`}>
        {hasAnimated ? count : target}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-[#A3A3A3] font-medium block">
        {label}
      </div>
      {sublabel && (
        <div className="text-[11px] text-[#737373] font-light">
          {sublabel}
        </div>
      )}
    </div>
  );
}
