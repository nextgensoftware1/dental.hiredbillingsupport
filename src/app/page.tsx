import Anim from "./components/Anim";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import ResponsiveImage from "./components/ResponsiveImage";
import Link from "next/link";
import { FiArrowRight,FiShield , FiRefreshCw,FiBarChart2, FiCheckCircle, FiClipboard, FiDollarSign, FiMonitor, FiPhone, FiX } from "react-icons/fi";
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
              <p className="section-subtitle text-sm mb-3">For dental practices, DSOs & cosmetic groups</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-oxford leading-[1.1] mb-5 max-w-2xl">
                You produced $180k last month. You collected $128k. <span className="text-royal">That gap is the problem.</span>
              </h1>
              <p className="text-base md:text-lg text-black leading-relaxed max-w-lg mb-7">
                Treatment is happening. Patients are saying yes. Production looks great on the report. But somewhere between the chair and the bank, your collections are leaking — and your front desk is too buried to chase it.
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


           <section className="py-20 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Intro */}
    <div className="max-w-4xl mx-auto">

      <p className="section-subtitle mb-4">
        The Tuesday morning everyone in dental knows
      </p>

      <h2 className="font-display text-3xl md:text-5xl font-extrabold text-oxford leading-tight mb-8">
        You already know how this goes.
      </h2>

      <div className="space-y-6 text-lg leading-relaxed text-silver">

        <p>
          It's Tuesday. The schedule is packed. You're three minutes behind on every patient.
        </p>

        <p>
          Your front desk is on hold with Delta Dental — again — verifying a benefit for a patient who walked in fifteen minutes ago. The new hygiene patient is in the waiting room with a clipboard nobody has time to review. And the phone keeps ringing, because a new patient is trying to book — but no one can pick up.
        </p>

        <p>
          Meanwhile, last month's claims are still sitting. The PPO write-offs from January are confusing. The 90+ aging bucket hasn't been touched since the office manager went on leave. Two hygiene blocks went unfilled because nobody worked the recall list.
        </p>

        <p>
          You produced great numbers last month. You know you did.
        </p>

      </div>

      <h3 className="font-display text-2xl md:text-3xl font-bold text-success italic mt-10">
        So why doesn't the bank account reflect it?
      </h3>

    </div>

    {/* Copy Note */}

   

    {/* Problems */}

    <div className="border border-light-gray rounded-2xl overflow-hidden mt-6 bg-white">

      {[
        {
          no: "01",
          title: "Production looks good. Collection doesn't.",
          desc: "You produce $X and collect 70–80%. Benchmark is 98%. That gap is somebody's salary — maybe two.",
          value: "20pt gap",
        },
        {
          no: "02",
          title: "Verification is burying your front desk.",
          desc: "A payer call runs 12–18 minutes. Times 30 patients a day. They're on hold more than with patients.",
          value: "~6 hrs/day",
        },
        {
          no: "03",
          title: "Every missed call is a missed new patient.",
          desc: "Your desk can't answer while on hold with Delta. That $6k-lifetime-value patient just called the practice down the street.",
          value: "$6k / patient",
        },
        {
          no: "04",
          title: "PPO write-offs are quietly bleeding you.",
          desc: "You're writing off contracted amounts you should be appealing. Nobody has bandwidth to dig in.",
          value: "$4–11k/mo",
        },
        {
          no: "05",
          title: "AR is aging in silence.",
          desc: "Claims past 60 days collect 30% less. Yours sit in 90+ and nobody's working them.",
          value: "-30% recovery",
        },
        {
          no: "06",
          title: "Hygiene recall is a leaky bucket.",
          desc: "Every unfilled hygiene block is ~$200 lost. You have them every week. Do the math.",
          value: "~$3–5k/mo",
        },
        {
          no: "07",
          title: "You keep hiring. They keep leaving.",
          desc: "You trained the last biller for six months. She left for a $4/hr raise. Back to square one.",
          value: "$22k / hire",
        },
      ].map((item) => (
        <div
          key={item.no}
          className="grid grid-cols-12 gap-6 items-start px-6 py-6 border-b border-light-gray last:border-b-0 hover:bg-cultured transition-colors"
        >
          {/* Number */}

          <div className="col-span-12 md:col-span-1">
            <span className="font-display text-sm font-bold text-carolina">
              {item.no}
            </span>
          </div>

          {/* Content */}

          <div className="col-span-12 md:col-span-8">

            <h3 className="font-display text-xl font-bold text-oxford mb-2">
              {item.title}
            </h3>

            <p className="text-silver leading-relaxed">
              {item.desc}
            </p>

          </div>

          {/* Value */}

          <div className="col-span-12 md:col-span-3 md:text-right">

            <span className="font-display text-lg font-bold text-danger">
              {item.value}
            </span>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      {/* ═══ PAIN TICKER ═══ */}
     

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

    <Anim className="text-center mb-10">
      <p className="section-subtitle">
        What we run for your practice
      </p>

      <h2 className="font-display text-2xl md:text-4xl font-bold text-oxford">
        The full dental operational stack.
      </h2>

      <p className="text-silver mt-3 max-w-2xl mx-auto leading-relaxed">
        Run one layer, or hand us the entire back office. Each links to a full breakdown.
      </p>
    </Anim>

    {/* What Changed */}

    

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Card 1 */}

      <Anim delay="d1">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiPhone className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Patient Call Operations
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            Inbound + outbound. New-patient capture, scheduling, reminders,
            recall, treatment follow-up.
          </p>

          <Link
            href="/call-support"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>

      {/* Card 2 */}

      <Anim delay="d2">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiShield className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Insurance Verification
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            Full benefit breakdowns 48 hours before the appointment —
            maximums, frequencies, downgrades, clauses.
          </p>

          <Link
            href="/insurance-verification"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>

      {/* Card 3 */}

      <Anim delay="d3">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiDollarSign className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Dental RCM & Collections
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            Claims, AR follow-up, denial management, PPO write-off recovery,
            payment posting.
          </p>

          <Link
            href="/revenue-cycle-management"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>

      {/* Card 4 */}

      <Anim delay="d4">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiClipboard className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Practice Operations
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            Data entry, treatment-plan admin, scheduling support,
            documentation, daily task queues, reporting.
          </p>

          <Link
            href="/administrative-support"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>

      {/* Card 5 */}

      <Anim delay="d5">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiRefreshCw className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Hygiene & Recall
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            We work your recall list, reactivate inactive patients, and fill
            open hygiene blocks — no new chair.
          </p>

          <Link
            href="/recall-management"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>


 {/* Card 5 */}

      <Anim delay="d5">
        <div className="bg-white border border-light-gray rounded-xl p-7 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-royal/30 transition-all duration-300">

          <FiRefreshCw className="text-3xl text-royal mb-4" />

          <h3 className="font-display text-xl font-bold text-oxford mb-3">
            Not sure where to start?
          </h3>

          <p className="text-silver leading-relaxed flex-1">
            Send last month's production + aging report. We'll show you exactly where the leak is — free.
          </p>

          <Link
            href="/recall-management"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all"
          >
            View page <FiArrowRight />
          </Link>

        </div>
      </Anim>


    </div>

    {/* Bottom CTA */}

   

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