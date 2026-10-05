"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const SELECTOR = ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale";

export default function ScrollObserver() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const showBackToTopRef = useRef(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Detect mobile touch device: on phones/tablets, native GPU scrolling is 120fps/60fps buttery-smooth.
    // Lenis should NOT intercept touch events to prevent input lag, stutter, or jank.
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth <= 768);

    let lenis = null;
    let rafId = null;

    const checkScrollPosition = (scrollY) => {
      // Only update back-to-top state when boolean flips (prevents continuous React re-renders)
      const shouldShow = scrollY > 380;
      if (shouldShow !== showBackToTopRef.current) {
        showBackToTopRef.current = shouldShow;
        setShowBackToTop(shouldShow);
      }
    };

    if (!isTouchDevice) {
      // Desktop: Ultra-smooth Lenis inertial gliding
      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 0,
        syncTouch: false,
      });
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      lenis.on("scroll", ({ scroll }) => {
        checkScrollPosition(scroll);
      });
    } else {
      // Mobile / Touch: Native hardware momentum scrolling (zero latency, zero jank)
      const onNativeScroll = () => {
        checkScrollPosition(window.scrollY);
      };
      window.addEventListener("scroll", onNativeScroll, { passive: true });
    }

    checkScrollPosition(window.scrollY || 0);

    // Passive Intersection Observer for reveals
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(SELECTOR);
    elements.forEach((el) => {
      if (!el.style.transitionDelay && el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay;
      }
      observer.observe(el);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        lenisRef.current = null;
      }
      observer.disconnect();
    };
  }, [pathname]);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    /* Floating Back to Top Button */
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top-btn ${showBackToTop ? "visible" : ""}`}
      aria-label="Cuộn lên đầu trang"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
