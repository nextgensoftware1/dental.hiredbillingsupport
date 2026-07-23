"use client";
import { useState } from "react";
import Anim from "./Anim";

export default function FAQ({ title, em, items }: { title: string; em: string; items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
      <div className="max-w-3xl mx-auto">
        <Anim className="text-center mb-10">
          <p className="section-subtitle">Common Questions</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold">{title} <em className="font-light italic text-silver">{em}</em></h2>
        </Anim>
        <div>
          {items.map((it, i) => (
            <div key={i} className="border-b border-light-gray">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
                <span className="font-display text-[15px] md:text-lg font-semibold text-oxford group-hover:text-royal transition-colors">{it.q}</span>
                <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 ${open === i ? "bg-royal border-royal text-white rotate-45" : "border-light-gray text-silver"}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60 pb-5" : "max-h-0"}`}>
                <p className="text-silver leading-relaxed text-[15px]">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
