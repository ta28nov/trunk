"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Kích hoạt ngay các phần tử đã nằm trong tầm nhìn khi tải trang
    const checkInitialInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const elements = document.querySelectorAll(SELECTOR);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92) {
          el.classList.add("is-revealed");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            // Khi phần tử trượt ra khỏi đáy màn hình (người dùng cuộn ngược lên trên)
            // Thu hồi trạng thái để khi cuộn xuống sẽ kích hoạt lại chuyển động
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove("is-revealed");
            }
          }
        });
      },
      {
        threshold: [0, 0.12],
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(SELECTOR);
      elements.forEach((el) => {
        observer.observe(el);
      });
      checkInitialInView();
    };

    // Chạy ngay lập tức
    observeAll();

    // Chạy bổ sung sau các nhịp hydrate của React / Next.js
    const timer1 = setTimeout(observeAll, 80);
    const timer2 = setTimeout(observeAll, 250);
    const timer3 = setTimeout(observeAll, 600);

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}


