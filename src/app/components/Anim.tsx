"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function Anim({
  children,
  type = "up",
  delay = "",
  className = "",
}: {
  children: ReactNode;
  type?: "up" | "left" | "right" | "scale";
  delay?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const hiddenClass =
      type === "left"
        ? "anim-hidden-left"
        : type === "right"
          ? "anim-hidden-right"
          : type === "scale"
            ? "anim-hidden-scale"
            : "anim-hidden";

    // Content stays visible during SSR and without JavaScript. Hide it only
    // after hydration, immediately before IntersectionObserver takes over.
    el.classList.add(hiddenClass);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("anim-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    const frame = requestAnimationFrame(() => io.observe(el));
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [type]);

  return (
    <div ref={ref} className={`anim ${delay} ${className}`}>
      {children}
    </div>
  );
}
