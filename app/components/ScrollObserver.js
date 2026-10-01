"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            // When scrolling out of viewport, smoothly close/tuck away
            entry.target.classList.remove("is-revealed");
          }
        });
      },
      {
        threshold: 0.18, // ~20-30% of element inside viewport
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
