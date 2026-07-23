import Anim from "./components/Anim";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import ResponsiveImage from "./components/ResponsiveImage";
import Link from "next/link";
import { FiArrowRight, FiBarChart2, FiCheckCircle, FiClipboard, FiDollarSign, FiMonitor, FiPhone, FiX } from "react-icons/fi";

const IMG = {
  hero: "/assets/home_hero.webp",
  about: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80",
  team: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80",
  reception: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80",
};

const services = [
  { icon: FiPhone, title: "Inbound & Outbound Call Support", text: "Every call answered with dental context. New patient scheduling, recall outreach, treatment follow-up, and patient balance conversations.", href: "/call-support" },
  { icon: FiCheckCircle, title: "Insurance Verification", text: "Benefits verified 48 hours before every appointment. Maximums, deductibles, frequency limits, downgrades — documented in the chart.", href: "/insurance-verification" },
  { icon: FiDollarSign, title: "Dental RCM & Billing", text: "Claims submitted within 24 hours. AR worked across every aging bucket. Denials appealed and resolved. PPO write-offs recovered.", href: "/rcm-billing" },
  { icon: FiBarChart2, title: "AR Follow-Up & Recovery", text: "We call payers, resubmit claims, file appeals, and recover balances. Most clients see AR days drop below 25 within 90 days." },
  { icon: FiClipboard, title: "Treatment Plan Follow-Up", text: "Patients who said \"let me think about it\" don't disappear. We follow up with benefit clarity and scheduling support." },
  { icon: FiMonitor, title: "Admin & Front Desk Support", text: "Patient data entry, appointment coordination, form follow-up, PMS task support, and daily reporting.", href: "/admin-support" },
];

const pain = ["Missed calls → voicemail", "Insurance verification delays", "Unscheduled treatment plans", "AR aging past 90 days", "Claim denials piling up", "Hygiene schedule holes", "Front desk burnout", "Production vs collection gap", "PPO write-off confusion", "Recall list not worked"];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden hero-bg min-h-[680px] md:min-h-[720px]"
        style={{ backgroundImage: `url(${IMG.hero})`, backgroundPosition: "center", backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-oxford/10" />
        {/* Decorative blurs */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-royal pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[90px] bg-carolina pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="section-subtitle text-sm mb-3">Welcome To HBS Dental</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-oxford leading-[1.1] mb-5 max-w-2xl">
                Your Front Desk Is Buried. <span className="text-royal">We Are the Backup.</span>
              </h1>
              <p className="text-base md:text-lg text-silver leading-relaxed max-w-lg mb-7">
                Hired Billing Support gives your dental practice a remote operations team that handles calls, verifies insurance, submits claims, follows up on AR, and supports your front desk — working inside your software every day.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#cta" className="btn-gradient">
                  Book a Support Call
                  <FiArrowRight aria-hidden="true" />
                </a>
                <a href="#services" className="btn-outline-blue">See How It Works</a>
              </div>
            </div>

            {/* Hero visual — image + dashboard overlay */}
            <div className="relative">
              
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PAIN TICKER ═══ */}
      <section className="py-8 border-y border-light-gray bg-cultured overflow-hidden">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-silver mb-5">What dental practices deal with every day</p>
        <div className="ticker-track flex gap-4">
          {[...pain, ...pain].map((p, i) => (
            <span key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-light-gray text-sm text-oxford/70 font-medium whitespace-nowrap hover:border-danger hover:text-danger transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-danger/40" />{p}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT / SPLIT ═══ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <ResponsiveImage src={IMG.about} alt="Dentist working with patient" className="rounded-2xl shadow-lg w-full h-[320px] md:h-[420px]" />
          </Anim>
          <Anim type="right">
            <p className="section-subtitle">About Us</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-5">We Sit Inside Your Practice. <span className="text-royal">Not Outside It.</span></h2>
            <p className="text-silver leading-relaxed mb-4">We are not a call center. We are not virtual assistants. We are a dental-trained remote operations team that logs into your practice management system every morning and works there all day — the same way your in-house staff would.</p>
            <p className="text-silver leading-relaxed mb-6">Open Dental. Dentrix. Eaglesoft. Curve. Denticon. CareStack. We follow your SOPs, use your appointment types, and document in the chart. Your patients never know the difference.</p>
            <a href="#services" className="btn-gradient !py-3">Learn More <FiArrowRight aria-hidden="true" /></a>
          </Anim>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">Our Services</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">What We Provide</h2>
            <p className="text-silver mt-3 max-w-xl mx-auto">Pick the services you need. Add more as your practice grows. We scale without adding headcount.</p>
          </Anim>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Anim key={i} delay={`d${(i % 6) + 1}`}>
                <div className="bg-white border border-light-gray rounded-xl p-6 h-full min-h-[240px] flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-royal/30 transition-all duration-300">
                  <s.icon className="mb-3 text-3xl text-royal" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-oxford mb-2">{s.title}</h3>
                  <p className="text-silver text-sm leading-relaxed mb-4 flex-1">{s.text}</p>
                  {s.href && (
                    <Link href={s.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-royal hover:gap-3 transition-all">
                      Learn more <FiArrowRight aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">How We Work</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Six Steps to Going Live</h2>
          </Anim>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {n:"01",t:"Discovery",d:"Review your PMS and pain points"},
              {n:"02",t:"Access",d:"Secure login. BAA signed."},
              {n:"03",t:"SOP Alignment",d:"Learn your codes and protocols"},
              {n:"04",t:"Team Assigned",d:"Dedicated people, not a pool"},
              {n:"05",t:"Go Live",d:"Calls, claims, AR — running"},
              {n:"06",t:"Daily Ops",d:"Reports and weekly reviews"},
            ].map((s, i) => (
              <Anim key={i} delay={`d${i + 1}`}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-royal mx-auto mb-3 flex items-center justify-center font-display text-sm font-bold text-royal group-hover:bg-royal group-hover:text-white transition-all">{s.n}</div>
                  <h4 className="font-display text-sm font-bold text-oxford mb-1">{s.t}</h4>
                  <p className="text-xs text-silver">{s.d}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI + HUMAN ═══ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">AI + Human</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">AI Does the Lifting. <em className="font-light italic text-silver">Humans Do the Thinking.</em></h2>
          </Anim>
          <Anim type="scale">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-gray rounded-xl overflow-hidden">
              <div className="bg-oxford p-8 md:p-10 text-white">
                <h3 className="font-display text-xl font-bold text-white mb-2">AI Handles</h3>
                <p className="text-white/50 text-sm mb-5">Speed-dependent, repetitive tasks.</p>
                <ul className="space-y-2.5">
                  {["Eligibility checks — 30 seconds","Claim scrubbing against payer rules","Denial categorization and routing","Appointment reminder sequences","Document classification","AR aging alerts"].map(t=>(
                    <li key={t} className="flex items-start gap-2.5 text-sm text-white/75"><span className="w-1.5 h-1.5 rounded-full bg-carolina mt-2 flex-shrink-0"/>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 md:p-10">
                <h3 className="font-display text-xl font-bold mb-2">Humans Handle</h3>
                <p className="text-silver text-sm mb-5">Complex, nuanced, relationship tasks.</p>
                <ul className="space-y-2.5">
                  {["Patient conversations about balances","Insurance payer negotiations","Narrative appeals for denials","PPO contract analysis","Treatment coordination follow-up","Escalation handling"].map(t=>(
                    <li key={t} className="flex items-start gap-2.5 text-sm text-oxford/70"><span className="w-1.5 h-1.5 rounded-full bg-oxford mt-2 flex-shrink-0"/>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <Stats stats={[
        {value:24,unit:"%",label:"Average monthly collections lift",prefix:"+"},
        {value:25,unit:"d",label:"AR days dropped within 90 days"},
        {value:98,unit:"%",label:"First-pass clean-claim rate"},
        {value:7.5,unit:"k",label:"Avg PPO write-off recovery",prefix:"$",decimal:1},
      ]} eyebrow="By the Numbers" title="What Changes in the" em="First 90 Days." />

      {/* ═══ COMPARISON ═══ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="mb-12">
            <p className="section-subtitle">The Honest Comparison</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Why Not Just Hire Another Person?</h2>
          </Anim>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Anim type="left">
              <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col">
                <p className="text-[11px] uppercase tracking-widest text-silver mb-5">— Hiring In-House</p>
                <h3 className="font-display text-xl font-bold mb-5">Another hire. Another training cycle.</h3>
                <ul className="space-y-3 flex-1">{["$48k–$68k salary + benefits","6-month learning curve","Out sick = work stops","14-month average tenure","You manage and cover","Knowledge leaves with them"].map(t=>(
                  <li key={t} className="flex items-start gap-3 text-sm text-silver"><FiX className="mt-0.5 flex-shrink-0 text-danger" aria-hidden="true" />{t}</li>
                ))}</ul>
              </div>
            </Anim>
            <Anim type="right">
              <div className="bg-oxford text-white rounded-xl p-7 h-full flex flex-col">
                <p className="text-[11px] uppercase tracking-widest text-carolina mb-5">— Embedded HBS Team</p>
                <h3 className="font-display text-xl font-bold text-white mb-5">Cross-trained team. No turnover.</h3>
                <ul className="space-y-3 flex-1">{["Performance-aligned pricing","Live in 10–14 business days","Cross-covered every day","Specialist team across functions","We manage, they report to you","SOPs documented — system runs"].map(t=>(
                  <li key={t} className="flex items-start gap-3 text-sm text-white/80"><FiCheckCircle className="mt-0.5 flex-shrink-0 text-carolina" aria-hidden="true" />{t}</li>
                ))}</ul>
              </div>
            </Anim>
          </div>
        </div>
      </section>

      {/* ═══ TEAM IMAGE ═══ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <p className="section-subtitle">Your Extended Team</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-5">They Work Like Staff. <span className="text-royal">Because They Are.</span></h2>
            <p className="text-silver leading-relaxed mb-4">Specific people assigned to your account. They learn your codes, your PPO contracts, your providers, your patients&#39; names. They join your communication channels and follow your workflows.</p>
            <p className="text-silver leading-relaxed">The difference: you didn&#39;t have to hire them, train them for six months, or watch them leave for $4 more an hour.</p>
          </Anim>
          <Anim type="right">
            <ResponsiveImage src={IMG.team} alt="Dental support team" className="rounded-2xl shadow-lg w-full h-[300px] md:h-[380px]" />
          </Anim>
        </div>
      </section>

      <FAQ title="What Dental Practices" em="Ask Us." items={[
        {q:"Do you work inside our dental software?",a:"Yes. We log directly into your PMS — Open Dental, Dentrix, Eaglesoft, Curve, Denticon, CareStack. We follow your workflows and document in the chart the same way your in-house team would."},
        {q:"How is this different from a call center?",a:"A call center reads from a script. We handle the actual work — verifying benefits, submitting claims, following up on AR, managing recall — inside your software every day."},
        {q:"How fast can you start?",a:"Most practices are live within 10–14 business days including discovery, software access, SOP review, and team assignment."},
        {q:"Is my patient data secure?",a:"HIPAA compliance is non-negotiable. BAA on every engagement. Encrypted connections. PHI-trained staff with minimum necessary access."},
        {q:"Can I start with one service?",a:"Absolutely. Most start with verification or AR follow-up. Adding services later is easy because the team already knows your practice."},
      ]} />

      <CTA title="Send Us Your Aging Report." em="We'll Show You the Gap." text="Book a 30-minute discovery call. Bring your production report and your biggest frustration. We'll tell you exactly where collections are leaking." />
    </>
  );
}
