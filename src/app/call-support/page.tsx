import { Metadata } from "next";
import Anim from "../components/Anim";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

import ResponsiveImage from "../components/ResponsiveImage";
import { FiArrowRight, FiCheck, FiBarChart2, FiBell, FiCornerUpRight, FiFileText } from "react-icons/fi";

export const metadata: Metadata = { title: "Dental Call Support" };

const IMG = {
  hero: "/assets/call_hero.webp",
  inbound: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=700&q=80",
};

export default function CallSupport() {
  return (
    <>
      {/* HERO */}
   <section
  className="relative overflow-hidden hero-bg min-h-[680px] md:min-h-[720px]"
  style={{
    backgroundImage: `url(${IMG.hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div className="absolute inset-0 bg-oxford/10" />
  <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-royal pointer-events-none" />
  <div className="absolute bottom-[-80px] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[90px] bg-carolina pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    <div>
      <p className="section-subtitle text-sm mb-3">
        Patient Call Operations
      </p>

      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford leading-[1.1] mb-5">
        A missed call isn't a missed call.<span className="text-royal">It's a missed new patient.</span>
       
        
      </h1>

      <p className="text-base md:text-lg text-black leading-relaxed max-w-lg mb-7">
        Inbound and outbound, handled by a dental-trained team on your lines 
        so no new patient reaches voicemail and no recall list goes cold.
      </p>

      <div className="flex flex-wrap gap-3">
        <a href="#cta" className="btn-gradient">
          Free Front-Desk Call-Flow Review
          <FiArrowRight aria-hidden="true" />
        </a>

       
      </div>
    </div>
  </div>
</section>

      {/* IMPACT */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-10">
            <p className="section-subtitle">The Cost of Voicemail</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Every Missed Call Has a <em className="font-light italic text-silver">Price Tag.</em></h2>
          </Anim>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{n:"$800+",t:"Lifetime value of a new patient lost to one missed call"},{n:"35%",t:"Of callers won't leave a voicemail — they call the next practice"},{n:"$4-8k",t:"Monthly production lost to missed calls in a 4-op practice"}].map((c,i)=>(
              <Anim key={i} delay={`d${i+1}`}>
                <div className="bg-white border border-light-gray rounded-xl p-8 text-center h-full flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-danger/30 transition-all">
                  <div className="font-display text-4xl md:text-5xl font-bold text-danger mb-3">{c.n}</div>
                  <p className="text-silver text-sm leading-relaxed flex-1">{c.t}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Top Note */}
    <div className="mb-12 border-l-4 border-carolina pl-5">
      <p className="text-sm text-silver leading-relaxed">
        <span className="font-semibold uppercase tracking-wider text-carolina">
          What changed · Service clarity
        </span>{" "}
        This page splits the old single "front desk relief" row into two
        clearly-explained columns — Inbound and Outbound — the exact structure
        the brief asked for.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Inbound */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          Inbound call support
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>New-patient calls, answered live</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Existing-patient scheduling questions</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Billing &amp; insurance questions</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Call documentation in the chart</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Smart call routing</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Missed-call follow-up within minutes</span>
          </li>

        </ul>
      </div>

      {/* Outbound */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          Outbound call support
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Appointment reminders</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Hygiene recall &amp; reactivation</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Treatment-plan follow-up</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>No-show recovery</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Insurance-detail follow-up</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Patient-balance follow-up</span>
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
      {/* INBOUND */}
      <section id="inbound" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <p className="section-subtitle">Inbound Call Support</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Every Call Answered. <em className="font-light italic text-silver">Every Patient Helped.</em></h2>
            <p className="text-silver mb-5">Patients reach someone who understands dental scheduling, can discuss benefits, and turns inquiries into appointments. No scripts. No transfers.</p>
            <ul className="space-y-2.5">
              {["New patient calls answered and scheduled","Existing patient inquiries handled","Insurance questions addressed with real data","Appointment confirmations managed live","Overflow support during peak hours","After-hours voicemail triage"].map(t=>(
                <li key={t} className="flex items-start gap-2.5 text-sm text-oxford/70"><span className="w-1.5 h-1.5 rounded-full bg-royal mt-2 flex-shrink-0"/>{t}</li>
              ))}
            </ul>
          </Anim>
          <Anim type="right">
            <div className="bg-oxford rounded-xl p-5 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3 pb-2 border-b border-white/10">— Inbound Queue · Live</div>
              {[{d:"bg-success",t:"New patient — crown consult",s:"SCHEDULED"},{d:"bg-success",t:"Hygiene reschedule — existing patient",s:"DONE"},{d:"bg-carolina",t:"Insurance question — Delta PPO",s:"ANSWERED"},{d:"bg-success",t:"Appointment confirm — Dr. Kim 3pm",s:"CONFIRMED"},{d:"bg-warning",t:"Emergency — toothache, same-day",s:"ROUTING"}].map((r,i)=>(
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] mb-2 text-xs text-white/60 hover:bg-white/[0.07] transition-colors">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.d}`}/><span className="flex-1">{r.t}</span><span className="text-[9px] text-success tracking-wider">{r.s}</span>
                </div>
              ))}
            </div>
          </Anim>
        </div>
      </section>

      {/* OUTBOUND */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left" className="order-2 lg:order-1">
            <div className="bg-oxford rounded-xl p-5 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3 pb-2 border-b border-white/10">— Outbound Campaign · Today</div>
              {[{t:"Recall: 8/14 reached, 5 scheduled",s:"36%"},{t:"Treatment follow-up: Crown #14",s:"ACCEPTED"},{t:"No-show: 2/3 rescheduled",s:"67%"},{t:"Balance call: $640 plan arranged",s:"RESOLVED"},{t:"Tomorrow's reminders: 12/14 confirmed",s:"86%"}].map((r,i)=>(
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] mb-2 text-xs text-white/60">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${i%2===0?"bg-success":"bg-carolina"}`}/><span className="flex-1">{r.t}</span><span className="text-[9px] text-carolina tracking-wider">{r.s}</span>
                </div>
              ))}
            </div>
          </Anim>
          <Anim type="right" className="order-1 lg:order-2">
            <p className="section-subtitle">Outbound Call Support</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">The Calls Your Team Never <em className="font-light italic text-silver">Has Time to Make.</em></h2>
            <p className="text-silver mb-5">Recall lists sitting unworked. Treatment plans never followed up. No-shows nobody called back. We make those calls every day.</p>
            <ul className="space-y-2.5">
              {["Recall and reactivation outreach","Treatment plan follow-up","No-show same-day reschedule","Appointment reminders","Patient balance conversations","Insurance info collection"].map(t=>(
                <li key={t} className="flex items-start gap-2.5 text-sm text-oxford/70"><span className="w-1.5 h-1.5 rounded-full bg-royal mt-2 flex-shrink-0"/>{t}</li>
              ))}
            </ul>
          </Anim>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-oxford text-white">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-10">
            <p className="text-carolina font-display font-bold text-sm uppercase tracking-widest mb-3">Call Documentation</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white">Every Call Is Logged, Routed, <em className="font-light italic text-white/40">and Actionable.</em></h2>
          </Anim>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{i:FiFileText,t:"Logged in PMS",d:"Every call documented with context and next steps — directly in the chart."},{i:FiCornerUpRight,t:"Routed Correctly",d:"Clinical to clinical. Billing to billing. Scheduling changes reflected immediately."},{i:FiBell,t:"Follow-Up Tracked",d:"Callbacks and pending items queued and worked — not forgotten."},{i:FiBarChart2,t:"Daily Reports",d:"Calls answered, patients scheduled, issues flagged — in your daily summary."}].map((c,i)=>(
              <Anim key={i} delay={`d${i+1}`}>
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 h-full min-h-[220px] flex flex-col hover:bg-white/[0.08] hover:-translate-y-1 transition-all">
                  <c.i className="mb-3 text-2xl text-carolina" aria-hidden="true" />
                  <h4 className="font-display text-base font-bold text-white mb-2">{c.t}</h4>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{c.d}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      <Stats stats={[
        {value:92,unit:"%",label:"Call answer rate across clients"},
        {value:18,unit:"%",label:"New patient conversion lift",prefix:"+"},
        {value:34,unit:"%",label:"Recall reactivation rate"},
        {value:67,unit:"%",label:"No-show reschedule rate"},
      ]} eyebrow="Results" title="When Every Call" em="Gets Answered." />

      <FAQ title="About Dental" em="Call Support." items={[
        {q:"Will callers know they're not reaching my office?",a:"No. We answer using your practice name, greeting, and protocols. To the patient, we are your front desk."},
        {q:"Can you handle clinical questions?",a:"We handle admin and scheduling. Clinical questions are routed to your staff with full context. We never provide clinical advice."},
        {q:"What hours do you cover?",a:"We match your practice hours. After-hours voicemail triage with morning callback is available."},
        {q:"How do you handle high call volumes?",a:"Your support is a team, not one person. We scale coverage during peak periods."},
      ]} />

      <CTA eyebrow="Stop losing patients to voicemail" title="Let Us Review Your" em="Call Flow." text="Tell us your daily volume and biggest frustration. We'll show you where patients are falling through." btn1="Free Call Flow Review" />
    </>
  );
}
