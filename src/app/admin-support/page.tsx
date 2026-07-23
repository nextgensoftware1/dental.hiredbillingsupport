import { Metadata } from "next";
import Anim from "../components/Anim";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ResponsiveImage from "../components/ResponsiveImage";
import { FiArrowRight, FiBarChart2, FiCalendar, FiClipboard, FiFileText, FiMonitor, FiPaperclip } from "react-icons/fi";

export const metadata: Metadata = { title: "Dental Administrative Support" };

const tasks = [
  {i:FiFileText,t:"Patient Data Entry",d:"Demographics, insurance, medical history, treatment notes — entered accurately into your PMS."},
  {i:FiCalendar,t:"Appointment Coordination",d:"Schedule changes, rescheduling, waitlist management — keeping the schedule full."},
  {i:FiClipboard,t:"Form Follow-Up",d:"Intake, consent, history updates — sent, tracked, and completed before the appointment."},
  {i:FiMonitor,t:"PMS Task Support",d:"Daily task lists, routing slips, chart notes, treatment plan updates, system maintenance."},
  {i:FiPaperclip,t:"Insurance Documents",d:"Missing cards, secondary coverage, EOBs — collected, organized, filed in chart."},
  {i:FiBarChart2,t:"Reporting & Prep",d:"Production reports, next-day chart prep, verification status, operational summaries."},
];

const board = [
  {title:"To Do",count:3,items:[
    {t:"Enter new patient demographics",m:"Sarah M. — Tue 10am",tag:"DATA ENTRY",tc:"text-success bg-success/10"},
    {t:"Collect missing insurance card",m:"James R. — Delta Dental",tag:"URGENT",tc:"text-danger bg-danger/10"},
    {t:"Follow up medical history form",m:"Maria T. — Sent 3 days ago",tag:"FORMS",tc:"text-royal bg-royal/10"},
  ]},
  {title:"In Progress",count:3,items:[
    {t:"Coordinate ortho referral",m:"David K. — Letter drafted",tag:"COORDINATION",tc:"text-carolina bg-carolina/10"},
    {t:"Schedule hygiene recall block",m:"Thu 2-5pm — 3/6 filled",tag:"SCHEDULING",tc:"text-success bg-success/10"},
    {t:"Prepare tomorrow's charts",m:"14 patients — verified",tag:"PREP",tc:"text-royal bg-royal/10"},
  ]},
  {title:"Completed",count:3,items:[
    {t:"Update treatment plan notes",m:"Crown #19 — estimate added",tag:"DONE",tc:"text-success bg-success/10"},
    {t:"Send appointment reminders",m:"14 patients — text + email",tag:"DONE",tc:"text-success bg-success/10"},
    {t:"Process intake forms",m:"6 forms entered into PMS",tag:"DONE",tc:"text-success bg-success/10"},
  ]},
];

export default function AdminSupport() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-white to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <p className="section-subtitle text-sm mb-3">Administrative Support</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford leading-[1.1] mb-5 max-w-3xl mx-auto">
            Your Front Desk Is Doing the Work of <span className="text-royal">Three People.</span>
          </h1>
          <p className="text-base md:text-lg text-silver leading-relaxed max-w-2xl mx-auto mb-7">
            Phones. Check-ins. Insurance forms. Schedule changes. Patient messages. Data entry. Recall follow-up. The admin load is not sustainable — and you can see it in the burnout.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a href="#cta" className="btn-gradient">Build Your Support Team <FiArrowRight aria-hidden="true" /></a>
            <a href="#tasks" className="btn-outline-blue">See What We Handle</a>
          </div>

          {/* Task Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
            {board.map(col=>(
              <div key={col.title} className="bg-white border border-light-gray rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-light-gray">
                  <span className="text-xs uppercase tracking-wider text-silver font-semibold">{col.title}</span>
                  <span className="text-[11px] bg-cultured px-2 py-0.5 rounded-full text-silver">{col.count}</span>
                </div>
                <div className="space-y-2">
                  {col.items.map(it=>(
                    <div key={it.t} className="p-3 bg-cultured rounded-lg border border-light-gray/60 hover:-translate-y-0.5 hover:shadow-md transition-all">
                      <div className="text-sm font-semibold text-oxford mb-0.5">{it.t}</div>
                      <div className="text-xs text-silver mb-1.5">{it.m}</div>
                      <span className={`inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${it.tc}`}>{it.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERLOAD SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <p className="section-subtitle">The Admin Reality</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Your Team Is Not Failing. <em className="font-light italic text-silver">They Are Overloaded.</em></h2>
            <p className="text-silver mb-4">Every dental practice runs on invisible administrative work. When the admin load exceeds what your front desk can handle, the cracks show up as missed follow-ups, incomplete charts, scheduling errors, and patients who feel unheard.</p>
            <p className="font-display text-lg italic text-oxford/70">HBS takes the overflow. We work inside your dental software every day — handling the admin tasks that keep the practice running.</p>
          </Anim>
          <Anim type="right">
            <ResponsiveImage src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80" alt="Dental office reception area" className="rounded-2xl shadow-lg w-full h-[300px] md:h-[380px]" />
          </Anim>
        </div>
      </section>

      {/* TASK CATEGORIES */}
      <section id="tasks" className="py-16 md:py-24 px-4 sm:px-6 bg-cultured">
        <div className="max-w-7xl mx-auto">
          <Anim className="text-center mb-12">
            <p className="section-subtitle">What We Handle</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Every Admin Task That Keeps Your <em className="font-light italic text-silver">Practice Running.</em></h2>
          </Anim>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tasks.map((s,i)=>(
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

      {/* SOFTWARE */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Anim type="left">
            <p className="section-subtitle">Inside Your Software</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">We Work Where <span className="text-royal">Your Team Works.</span></h2>
            <p className="text-silver mb-6">We don&apos;t use a separate portal. We log into your PMS every morning and work inside it all day. If your SOP says to enter notes in a specific field, we enter them there.</p>
            <div className="flex flex-wrap gap-2">
              {["Open Dental","Dentrix","Eaglesoft","Curve Dental","Denticon","CareStack","tab32","Archy"].map(sw=>(
                <span key={sw} className="px-4 py-2 bg-cultured border border-light-gray rounded-full text-sm text-oxford/70 font-medium hover:border-royal hover:text-royal transition-colors">{sw}</span>
              ))}
            </div>
          </Anim>
          <Anim type="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-light-gray rounded-xl overflow-hidden">
              <div className="bg-oxford p-7 text-white">
                <h3 className="font-display text-lg font-bold text-white mb-2">AI Handles</h3>
                <p className="text-white/50 text-sm mb-4">Repetitive admin tasks.</p>
                <ul className="space-y-2">{["Reminder sequences","Form distribution","Task prioritization","Document classification","Schedule gap alerts"].map(t=>(<li key={t} className="flex items-start gap-2 text-sm text-white/75"><span className="w-1.5 h-1.5 rounded-full bg-carolina mt-2 flex-shrink-0"/>{t}</li>))}</ul>
              </div>
              <div className="bg-white p-7">
                <h3 className="font-display text-lg font-bold mb-2">Humans Handle</h3>
                <p className="text-silver text-sm mb-4">Judgment-dependent tasks.</p>
                <ul className="space-y-2">{["Patient data entry","Chart note review","Schedule optimization","Referral coordination","Office manager comms"].map(t=>(<li key={t} className="flex items-start gap-2 text-sm text-oxford/70"><span className="w-1.5 h-1.5 rounded-full bg-oxford mt-2 flex-shrink-0"/>{t}</li>))}</ul>
              </div>
            </div>
          </Anim>
        </div>
      </section>

      <Stats stats={[
        {value:4,unit:"hrs",label:"Front desk hours freed daily"},
        {value:100,unit:"%",label:"Next-day charts prepped before 5pm"},
        {value:92,unit:"%",label:"Patient form completion rate"},
      ]} eyebrow="Outcomes" title="What Happens When the Backlog" em="Clears." />

      <FAQ title="About Dental" em="Admin Support." items={[
        {q:"Can you follow our specific SOPs?",a:"Yes. During onboarding we document your SOPs — appointment types, chart note formats, scheduling rules — and follow them exactly."},
        {q:"How does the team communicate with my office manager?",a:"Daily reports via Slack, Teams, or email. Weekly reviews. We function as a department that reports to your manager."},
        {q:"What if we just need help with one area?",a:"Many start with one task category — data entry, form follow-up, or chart prep — and expand as they see impact."},
        {q:"Is patient data secure?",a:"HIPAA non-negotiable. BAA on every engagement. Encrypted connections. Same compliance as your in-house staff."},
      ]} />

      <CTA eyebrow="Give your front desk breathing room" title="Tell Us What Your Team Can't" em="Get To." text="Walk us through a typical day at your front desk. We'll show you which tasks we can take off their plate." btn1="Free Dental Workflow Review" />
    </>
  );
}
