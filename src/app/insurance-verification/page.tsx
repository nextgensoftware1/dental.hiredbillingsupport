import { Metadata } from "next";
import Anim from "../components/Anim";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ResponsiveImage from "../components/ResponsiveImage";
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiCircle, FiClock, FiClipboard, FiDollarSign, FiFileText, FiRefreshCw, FiShield, FiTrendingDown } from "react-icons/fi";

export const metadata: Metadata = { title: "Dental Insurance Verification" };

const IMG = {
  hero: "/assets/verification_hero.webp",
};

const benefits = [
  {i:FiCheckCircle,t:"Eligibility & Status",d:"Active/inactive with group, subscriber, and dependent details confirmed."},
  {i:FiBarChart2,t:"Annual Maximums",d:"Remaining benefit dollars, used-to-date, and rollover status."},
  {i:FiDollarSign,t:"Deductibles",d:"Individual and family deductible status — applied vs remaining."},
  {i:FiRefreshCw,t:"Frequency Limitations",d:"Prophys, BWX, pano, FMX, fluoride — every limit checked."},
  {i:FiTrendingDown,t:"Downgrades",d:"Composite-to-amalgam, crown downgrades, posterior composite policies."},
  {i:FiShield,t:"Missing Tooth Clause",d:"Documented before you present the treatment plan."},
  {i:FiClock,t:"Waiting Periods",d:"Major, basic, and preventive waiting periods confirmed."},
  {i:FiFileText,t:"Pre-Authorization",d:"When pre-auth is required, we submit it. When recommended, we advise."},
  {i:FiClipboard,t:"COB & Dual Coverage",d:"Primary/secondary coordination, benefit order, cross-coverage logic."},
];

export default function Verification() {
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
            <p className="section-subtitle text-sm mb-3">Insurance Verification & Benefits</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford leading-[1.1] mb-5">
              Every chart, verified 48 hours <span className="text-royal">before they sit down.</span>
            </h1>
            <p className="text-base md:text-lg text-black leading-relaxed max-w-lg mb-7">
             Maximums, deductibles, frequencies, downgrades, missing-tooth clauses, waiting periods — documented before the appointment, so treatment gets presented with real numbers.
            </p>
            <a href="#cta" className="btn-gradient">Free Verification Review <FiArrowRight aria-hidden="true" /></a>
          </div>
          {/* <Anim type="right">
            <div className="bg-oxford rounded-xl p-5 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3 pb-2 border-b border-white/10">— Verification Queue · Tomorrow</div>
              {[{n:"Sarah M. — Delta PPO",s:FiCheckCircle,c:"text-success"},{n:"James R. — MetLife",s:FiCheckCircle,c:"text-success"},{n:"Maria T. — Cigna DPPO",s:FiRefreshCw,c:"text-warning"},{n:"David K. — Aetna DMO",s:FiRefreshCw,c:"text-warning"},{n:"Lisa P. — Guardian",s:FiCircle,c:"text-white/40"},{n:"Mike J. — BCBS",s:FiCircle,c:"text-white/40"}].map((r,i)=>(
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] mb-2 text-xs">
                  <span className="text-white/60">{r.n}</span><span className={`flex items-center gap-1 ${r.c}`}><r.s aria-hidden="true" />{r.s === FiCheckCircle ? "VERIFIED" : r.s === FiRefreshCw ? "VERIFYING" : "QUEUED"}</span>
                </div>
              ))}
            </div>
          </Anim> */}
        </div>
      </section>
<section className="py-20 bg-[#F5FCFC]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          Eligibility &amp; benefits
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Active-coverage checks</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Deductibles &amp; annual maximums</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Frequency limits</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Waiting periods</span>
          </li>

        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          PPO plan detail
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Downgrade clauses</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Missing-tooth clauses</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Coverage notes in chart</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Fee-schedule confirmation</span>
          </li>

        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="font-display text-3xl font-bold text-oxford mb-8">
          Estimates &amp; auth
        </h3>

        <ul className="space-y-5">

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Accurate treatment estimates</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Pre-authorization support</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Pre-determination tracking</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-carolina">✓</span>
            <span>Same-day case acceptance</span>
          </li>

        </ul>
      </div>

    </div>

  </div>
</section>
      {/* BENEFIT GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">What We Verify</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Every Detail Your Team <em className="font-light italic text-silver">Needs to Know.</em></h2>
          </Anim>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b,i)=>(
              <Anim key={i} delay={`d${(i%6)+1}`}>
                <div className="bg-white border border-light-gray rounded-xl p-6 h-full min-h-[220px] flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-royal/30 transition-all">
                  <b.i className="mb-3 text-2xl text-royal" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-oxford mb-2">{b.t}</h3>
                  <p className="text-silver text-sm leading-relaxed flex-1">{b.d}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">How It Works</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Verified Before They <em className="font-light italic text-silver">Sit Down.</em></h2>
          </Anim>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{n:"01",t:"Schedule Syncs",d:"We pull your next-day appointments"},{n:"02",t:"Benefits Verified",d:"Full breakdown — maximums, deductibles, limits"},{n:"03",t:"Chart Documented",d:"Entered directly in your PMS"},{n:"04",t:"Flagged & Ready",d:"Issues flagged before patient arrives"}].map((s,i)=>(
              <Anim key={i} delay={`d${i+1}`}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-royal mx-auto mb-3 flex items-center justify-center font-display text-sm font-bold text-royal">{s.n}</div>
                  <h4 className="font-display text-sm font-bold text-oxford mb-1">{s.t}</h4>
                  <p className="text-xs text-silver">{s.d}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <ResponsiveImage src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80" alt="Insurance forms and documentation" className="rounded-2xl shadow-lg w-full h-[300px] md:h-[380px]" />
          </Anim>
          <Anim type="right">
            <p className="section-subtitle">Why It Matters</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Patients Accept Treatment <span className="text-royal">When They Know Coverage.</span></h2>
            <p className="text-silver leading-relaxed mb-4">When a patient sits in the chair and hears &ldquo;we&rsquo;ll call you about your coverage,&rdquo; same-day acceptance drops. When they hear &ldquo;here&rsquo;s what your insurance covers and here&rsquo;s your estimated cost,&rdquo; they say yes.</p>
            <p className="text-silver leading-relaxed">That clarity starts with verification done right — 48 hours before the appointment, documented in the chart, flagged for your team.</p>
          </Anim>
        </div>
      </section>

      <Stats stats={[
        {value:100,unit:"%",label:"Verified before patient sits down"},
        {value:48,unit:"hrs",label:"Ahead — verifications completed"},
        {value:6,unit:"hrs",label:"Front desk time freed daily"},
        {value:15,unit:"%",label:"Same-day acceptance lift",prefix:"+"},
      ]} eyebrow="Results" title="When Verification" em="Actually Runs." />

      <FAQ title="About Dental" em="Verification." items={[
        {q:"How far in advance do you verify?",a:"Standard is 48 hours. Rush verifications for same-day or next-day patients are available."},
        {q:"Which payers do you verify with?",a:"All major dental payers — Delta, MetLife, Cigna, Aetna, Guardian, United, and hundreds more."},
        {q:"Where do you document?",a:"Directly in the patient chart in your PMS, matching your existing documentation format."},
        {q:"What about missing insurance info?",a:"We collect missing details proactively. Card images and subscriber info gathered before they arrive."},
      ]} />

      <CTA eyebrow="Free your front desk" title="Send Us Tomorrow's Schedule." em="We'll Verify It Tonight." text="Walk us through your current process. We'll show you exactly how much time your team is losing." btn1="Free Verification Review" />
    </>
  );
}
