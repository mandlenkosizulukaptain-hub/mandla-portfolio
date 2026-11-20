"use client";

import { useEffect } from "react";

const starColors = ["#ffffff", "#8bcaff", "#f7d77a"];

export default function LuckyCursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const trail = document.createElement("div");
    trail.className = "lucky-cursor-trail";
    trail.setAttribute("aria-hidden", "true");
    document.body.append(trail);

    let lastSpawnedAt = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const now = performance.now();
      if (now - lastSpawnedAt < 55) return;
      lastSpawnedAt = now;

      const star = document.createElement("span");
      star.className = "lucky-cursor-star";
      star.style.left = `${event.clientX}px`;
      star.style.top = `${event.clientY}px`;
      star.style.setProperty("--star-color", starColors[Math.floor(Math.random() * starColors.length)]);
      star.style.setProperty("--star-size", `${8 + Math.random() * 10}px`);
      star.style.setProperty("--star-drift-x", `${Math.random() * 36 - 18}px`);
      star.style.setProperty("--star-drift-y", `${-12 - Math.random() * 28}px`);
      star.style.setProperty("--star-rotation", `${Math.random() * 100 - 50}deg`);
      star.style.animationDuration = `${550 + Math.random() * 350}ms`;
      trail.append(star);
      star.addEventListener("animationend", () => star.remove(), { once: true });
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      trail.remove();
    };
  }, []);

  return null;
}
