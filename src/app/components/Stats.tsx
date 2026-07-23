"use client";
import { useEffect, useRef, useState } from "react";
import Anim from "./Anim";

function Counter({ target, decimal = 0, prefix = "" }: { target: number; decimal?: number; prefix?: string }) {
  const [val, setVal] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const dur = 1600, st = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - st) / dur, 1), ea = 1 - Math.pow(1 - p, 3);
        setVal((target * ea).toFixed(decimal));
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target % 1 === 0 && decimal === 0 ? String(target) : target.toFixed(decimal));
      };
      requestAnimationFrame(tick); io.unobserve(el);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, decimal]);
  return <span ref={ref}>{prefix}{val}</span>;
}

type S = { value: number; unit: string; label: string; prefix?: string; decimal?: number };

export default function Stats({ stats, title, em, eyebrow }: { stats: S[]; title?: string; em?: string; eyebrow?: string }) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <Anim className="text-center mb-10">
            {eyebrow && <p className="section-subtitle">{eyebrow}</p>}
            <h2 className="font-display text-2xl md:text-4xl font-bold">{title} <em className="font-light italic text-silver">{em}</em></h2>
          </Anim>
        )}
        <Anim type="scale">
          <div className={`grid grid-cols-2 ${stats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-px bg-light-gray rounded-xl overflow-hidden`}>
            {stats.map((s, i) => (
              <div key={i} className="bg-white p-6 md:p-10 text-center hover:bg-cultured transition-colors h-full flex flex-col justify-center">
                <div className="font-display text-3xl md:text-5xl font-bold text-oxford mb-2">
                  <Counter target={s.value} decimal={s.decimal} prefix={s.prefix} /><span className="text-royal">{s.unit}</span>
                </div>
                <p className="text-xs md:text-sm text-silver leading-snug max-w-[200px] mx-auto">{s.label}</p>
              </div>
            ))}
          </div>
        </Anim>
      </div>
    </section>
  );
}
