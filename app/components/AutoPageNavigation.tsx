
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const pages = ["/", "/about", "/skills", "/projects", "/connect"];

export default function AutoPageNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const navigating = useRef(false);

  useEffect(() => {
    navigating.current = false;

    const currentIndex = pages.indexOf(pathname);
    const nextPage = pages[currentIndex + 1];

    if (!nextPage) return;

    let animationFrame = 0;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;

        const scrollPosition =
          window.scrollY + window.innerHeight;

        const pageHeight =
          document.documentElement.scrollHeight;

        const reachedBottom =
          scrollPosition >= pageHeight - 30;

        if (reachedBottom && !navigating.current) {
          navigating.current = true;
          router.push(nextPage);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname, router]);

  return null;
}
