import Anim from "./Anim";

export default function CTA({
  eyebrow = "Let's look at your practice",
  title, em, text,
  btn1 = "Book a Dental Support Call",
  btn2 = "Request a Free Workflow Review",
}: {
  eyebrow?: string; title: string; em: string; text: string; btn1?: string; btn2?: string;
}) {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-32 bg-oxford">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 30% 20%, rgba(65,105,225,0.2), transparent), radial-gradient(ellipse 50% 60% at 70% 80%, rgba(12,140,233,0.15), transparent)" }} />
      <Anim className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-royal-light font-display font-bold text-sm uppercase tracking-widest mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">{title} <em className="font-light italic text-white/40">{em}</em></h2>
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-9">{text}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#" className="btn-white">{btn1} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
          <a href="#" className="btn-outline-blue !border-white/25 !text-white hover:!bg-white hover:!text-oxford">{btn2}</a>
        </div>
        <p className="mt-7 text-[11px] uppercase tracking-[0.2em] text-white/25">HIPAA · BAA on every engagement · No long-term contract</p>
      </Anim>
    </section>
  );
}
