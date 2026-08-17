"use client";

import { useEffect, useRef } from "react";
import { IconVinyl } from "./icons";

export default function ScrollVinyl() {
  const discRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const update = () => {
      ticking.current = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (discRef.current) {
        const rotation = reduceMotion ? 0 : progress * 1440;
        discRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      if (armRef.current) {
        const armAngle = -22 + progress * 30;
        armRef.current.style.transform = `rotate(${armAngle}deg)`;
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-5 right-5 z-30 hidden h-16 w-16 items-center justify-center sm:flex md:h-20 md:w-20"
    >
      <div
        ref={discRef}
        className="vinyl-spin h-full w-full text-brass drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        style={{ transition: "transform 120ms linear" }}
      >
        <IconVinyl className="h-full w-full" />
      </div>
      <div
        ref={armRef}
        className="absolute right-1 top-1 h-7 w-[3px] origin-top rounded-full bg-parchment/70 md:h-9"
        style={{ transition: "transform 200ms ease-out" }}
      />
    </div>
  );
}
