"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      const reveals = el.querySelectorAll(".reveal");
      reveals.forEach((r) => observer.observe(r));
      return () => reveals.forEach((r) => observer.unobserve(r));
    }
  }, []);

  return ref;
}

export function useCounterAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const prefix = el.dataset.prefix || "";
            const duration = 1500;
            const start = performance.now();

            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);
              el.textContent = prefix + current.toLocaleString("vi-VN") + suffix;
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) {
      const counters = el.querySelectorAll("[data-counter]");
      counters.forEach((c) => observer.observe(c));
      return () => counters.forEach((c) => observer.unobserve(c));
    }
  }, []);

  return ref;
}
