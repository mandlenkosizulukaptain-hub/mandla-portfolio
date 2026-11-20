"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressLine() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
            : 0;

        fillRef.current?.style.setProperty(
          "--scroll-progress",
          String(progress),
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-track" />
      <div className="scroll-progress-fill" ref={fillRef} />
    </div>
  );
}
