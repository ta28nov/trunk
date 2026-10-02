"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(SELECTOR);
      elements.forEach((el, i) => {
        if (!el.style.transitionDelay && el.dataset.delay) {
          el.style.transitionDelay = el.dataset.delay;
        }
        observer.observe(el);
      });

      // Initial check for elements already in view
      const vh = window.innerHeight;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92) {
          el.classList.add("in");
          observer.unobserve(el);
        }
      });
    };

    observeAll();
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
