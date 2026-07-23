import { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = { title: "About HBS Dental" };

export default function AdminSupport() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#f0f4ff] to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-32">
          <p className="section-subtitle text-sm mb-4 uppercase tracking-[0.28em]">About HBS Dental</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford leading-[1.1] mb-5">
            The dental operations division of <span className="text-royal">Hired Billing Support.</span>
          </h1>

          <p className="text-base md:text-lg text-silver leading-relaxed max-w-3xl mb-10">
            Same AI + human execution model that runs the back office for healthcare practices nationwide — focused entirely on dental.
          </p>

          <div className="rounded-3xl border border-[#D1F2E7] bg-[#EEFAF5] p-6 md:p-8 mb-12 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#0f766e] mb-3">
              WHAT CHANGED · BRAND ARCHITECTURE
            </p>
            <p className="text-sm md:text-base text-oxford leading-relaxed">
              This is where the HBS relationship is explained in full — an endorsed sub-brand, not a rename. The parent link lives here and in the footer, never crowding the hero.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-base md:text-lg text-silver leading-relaxed">
              HBS Dental brings the Hired Billing Support operations model — AI + human execution, embedded directly in your systems — to dental practices, DSOs, and cosmetic groups.
            </p>
            <p className="text-base md:text-lg text-silver leading-relaxed">
              Hired Billing Support runs revenue cycle and back-office operations for healthcare practices across the U.S. HBS Dental is the division built specifically for the way dental works: PPO contracts, CDT coding, hygiene recall, treatment-plan acceptance, and the daily reality of a busy front desk.
            </p>
            <p className="text-base md:text-lg text-silver leading-relaxed">
              We aren&apos;t a call center, a VA agency, or a staffing vendor. We&apos;re an embedded operations partner that works inside your practice management software, follows your SOPs, and reports to your office manager like a department.
            </p>
            <p className="text-base md:text-lg text-oxford font-semibold">
              The dental expertise is ours. <span className="italic text-royal">The operational muscle is HBS.</span>
            </p>
          </div>

          <div className="mt-12">
            <a
              href="https://www.hiredbillingsupport.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-blue inline-flex items-center gap-2"
            >
              Visit Hired Billing Support <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#031022] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
          <p className="section-subtitle text-sm mb-4 text-carolina uppercase tracking-[0.28em]">
            Meet the team behind your numbers.
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
            Meet the team behind your numbers.
          </h2>
          <a href="#" className="btn-gradient inline-flex items-center gap-2">
            Book a discovery call <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
