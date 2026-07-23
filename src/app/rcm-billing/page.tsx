import { Metadata } from "next";
import Anim from "../components/Anim";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import { FiArrowRight, FiBarChart2, FiClipboard, FiDollarSign, FiSearch, FiSend, FiTrendingDown, FiTrendingUp, FiZap } from "react-icons/fi";

export const metadata: Metadata = { title: "Dental RCM & Billing" };

const IMG = {
  hero: "/assets/rcm_hero.webp",
};

const rcm = [
  {i:FiSend,t:"Claim Submission",d:"CDT-coded, narrative-attached claims submitted within 24 hours. 98%+ clean-claim rate."},
  {i:FiSearch,t:"Claim Follow-Up",d:"Every claim tracked. Payer outreach at 21, 30, and 45 days. Nothing sits untouched."},
  {i:FiBarChart2,t:"AR Management",d:"Every aging bucket worked — 30, 60, 90, 120+. AR days below 25 within 90 days."},
  {i:FiZap,t:"Denial Management",d:"Every denial categorized, prioritized, and appealed by someone who knows the payer playbook."},
  {i:FiDollarSign,t:"Payment Posting",d:"EOBs posted and reconciled daily. Insurance, patient, adjustments — all clean."},
  {i:FiTrendingDown,t:"PPO Write-Off Recovery",d:"We audit fee schedules against EOBs and recover write-offs that shouldn't have been written off."},
  {i:FiClipboard,t:"Patient Billing",d:"Statements on schedule. Balance calls with clarity and empathy. Payment plans set up."},
  {i:FiTrendingUp,t:"Reporting",d:"Production vs collection, AR trends, denial rates by payer. Weekly reports your team uses."},
];

export default function RCMBilling() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden hero-bg min-h-[680px] md:min-h-[720px]"
        style={{ backgroundImage: `url(${IMG.hero})`, backgroundPosition: "center", backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-oxford/10" />
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-royal pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[90px] bg-carolina pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="section-subtitle text-sm mb-3">Dental RCM & Collections</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford leading-[1.1] mb-5">
              Close the gap between <span className="text-royal">production and collection.</span>
            </h1>
            <p className="text-base md:text-lg text-black leading-relaxed max-w-lg mb-7">
            Clean claims out in 24 hours, every aging bucket worked, denials appealed by specialists, and PPO write-offs audited back into your account.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cta" className="btn-gradient">Fix Your Dental AR <FiArrowRight aria-hidden="true" /></a>
              <a href="#rcm" className="btn-outline-blue">See RCM Workflow</a>
            </div>
          </div>
          {/* <Anim type="right">
            <div className="bg-oxford rounded-xl p-5 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3 pb-2 border-b border-white/10">— AR Aging · Current</div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[{l:"0–30 days",v:"$24.8k",w:"85%",c:"bg-success"},{l:"31–60 days",v:"$12.4k",w:"55%",c:"bg-warning"},{l:"61–90 days",v:"$8.1k",w:"35%",c:"bg-warning"},{l:"90+ days",v:"$14.2k",w:"60%",c:"bg-danger"}].map(b=>(
                  <div key={b.l} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 text-center">
                    <div className="text-[9px] uppercase tracking-wider text-white/35 mb-1">{b.l}</div>
                    <div className="font-display text-lg text-white font-semibold">{b.v}</div>
                    <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden"><div className={`h-full rounded-full ${b.c}`} style={{width:b.w}}/></div>
                  </div>
                ))}
              </div>
              <div className="bg-success/10 border border-success/20 rounded-xl p-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-success">Recovered This Month</span>
                <span className="font-display text-lg font-semibold text-success">$18,400</span>
              </div>
            </div>
          </Anim> */}
        </div>
      </section>

            <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          Claims &amp; posting
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>CDT-coded, X-ray-attached submission</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Out within 24 hours</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>98%+ clean-claim rate</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Daily EOB posting &amp; reconciliation</span>
          </li>

        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          AR &amp; denials
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Every bucket: 30/60/90/120+</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Payer calls &amp; re-submissions</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Specialist narrative appeals</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Categorized denial routing</span>
          </li>

        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          PPO &amp; visibility
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Write-off recovery audits</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Underpayment review</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Insurance aging review</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Production-vs-collection reporting</span>
          </li>

        </ul>
      </div>

    </div>

  </div>
</section>
                
      
      {/* PROD VS COLLECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <p className="section-subtitle">The Real Gap</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Production Is Not the Problem. <em className="font-light italic text-silver">Collection Is.</em></h2>
            <p className="text-silver mb-4">Most dental practices collect 70–85% of production. Industry benchmark is 98%. That 13–28 point gap is a billing, claims, and AR management problem.</p>
            <p className="font-display text-lg italic text-oxford/70">HBS closes that gap. Claims within 24 hours. Every bucket worked. Every denial appealed. Write-offs recovered.</p>
          </Anim>
          <Anim type="right">
            <div className="bg-white border border-light-gray rounded-xl p-7">
              <div className="text-[10px] uppercase tracking-widest text-silver mb-5">— Production vs. Collection · 90 days</div>
              {[{l:"Production",w:"100%",c:"bg-oxford",v:"$180k"},{l:"Before HBS",w:"71%",c:"bg-danger",v:"$128k"},{l:"With HBS",w:"96%",c:"bg-success",v:"$172k"}].map(b=>(
                <div key={b.l} className="flex items-center gap-4 mb-4">
                  <span className="text-xs text-silver w-20 flex-shrink-0 uppercase tracking-wider">{b.l}</span>
                  <div className="flex-1 h-3 bg-cultured rounded-full overflow-hidden"><div className={`h-full rounded-full ${b.c}`} style={{width:b.w}}/></div>
                  <span className="font-display text-base font-semibold w-16 text-right text-oxford">{b.v}</span>
                </div>
              ))}
              <div className="mt-5 bg-success/5 border border-success/20 rounded-lg p-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-success/80">Recovered Monthly</span>
                <span className="font-display text-xl font-bold text-success">$44,000</span>
              </div>
            </div>
          </Anim>
        </div>
      </section>

      {/* RCM SERVICES */}
      <section id="rcm" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">Dental RCM Services</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Every Step From Claim to <em className="font-light italic text-silver">Collection.</em></h2>
          </Anim>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rcm.map((s,i)=>(
              <Anim key={i} delay={`d${(i%6)+1}`}>
                <div className="bg-white border border-light-gray rounded-xl p-6 h-full min-h-[220px] flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-royal/30 transition-all">
                  <s.i className="mb-3 text-2xl text-royal" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-oxford mb-2">{s.t}</h3>
                  <p className="text-silver text-sm leading-relaxed flex-1">{s.d}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      <Stats stats={[
        {value:24,unit:"%",label:"Average monthly collections lift",prefix:"+"},
        {value:25,unit:"d",label:"AR days dropped from 47-day baseline"},
        {value:98,unit:"%",label:"First-pass clean-claim rate"},
        {value:7.5,unit:"k",label:"Avg PPO write-off recovery",prefix:"$",decimal:1},
      ]} eyebrow="RCM Outcomes" title="What Changes When Revenue Cycle" em="Actually Runs." />

      <FAQ title="About Dental RCM" em="& Billing." items={[
        {q:"Do you work inside our dental software?",a:"Yes. Claims are submitted, posted, and followed up directly inside your PMS — Open Dental, Dentrix, Eaglesoft, Curve, Denticon, or CareStack."},
        {q:"How quickly do you submit claims?",a:"Within 24 hours of the procedure, assuming charge entry and documentation are available."},
        {q:"How do you handle denied claims?",a:"Every denial categorized by reason, then routed to a specialist who knows that payer's appeal process. Narrative appeals written by trained dental billing professionals."},
        {q:"What reporting do we get?",a:"Weekly summaries covering production vs collection, AR aging, claims submitted, denial rates by payer, and collection rate by provider."},
      ]} />

      <CTA eyebrow="Let us find the leak" title="Send Us Your Aging Report." em="We'll Show You the Gap." text="Bring your production report and aging summary. We'll tell you exactly where collections are leaking." btn1="Free Dental AR Review" />
    </>
  );
}
