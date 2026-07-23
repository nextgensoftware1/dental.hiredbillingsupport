import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-oxford text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <span className="font-display text-2xl font-extrabold text-white">HBS<span className="text-carolina">.</span></span>
            <p className="mt-3 text-sm leading-relaxed text-white/50">The remote dental operations team that works like your in-house staff.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-3">Services</h4>
            <ul className="space-y-2">
              {[{h:"/call-support",l:"Call Support"},{h:"/insurance-verification",l:"Insurance Verification"},{h:"/rcm-billing",l:"RCM & Billing"},{h:"/admin-support",l:"Admin Support"}].map(s=>(
                <li key={s.h}><Link href={s.h} className="hover:text-carolina transition-colors">{s.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-3">Software</h4>
            <ul className="space-y-2">
              {["Open Dental","Dentrix","Eaglesoft","Curve Dental","Denticon","CareStack"].map(s=>(
                <li key={s} className="text-white/40">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-3">Contact</h4>
            <a
              href="https://hiredbillingsupport.com/contact"
              className="block transition-colors hover:text-carolina"
            >
              hello@hiredbillingsupport.com
            </a>
         
            <p className="mt-3 text-[11px] uppercase tracking-widest text-white/25">HIPAA · BAA · No long-term contract</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/hiredbillingsupport"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-carolina"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hiredbillingsupport"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-carolina"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hiredbillingsupport?igsh=MTU3YTVwMHg3ZWcycw%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-carolina"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>© 2026 Hired Billing Support</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-carolina transition-colors">Privacy</a>
            <a href="#" className="hover:text-carolina transition-colors">Terms</a>
            <a href="#" className="hover:text-carolina transition-colors">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
