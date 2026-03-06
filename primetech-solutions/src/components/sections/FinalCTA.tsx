import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="relative bg-navy-800 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Ready to start?
          </p>
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Let&apos;s talk about your IT.
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Book a free 30-minute consultation with a senior IT consultant. We review your current
            environment, identify the highest-priority gaps, and provide a clear written summary —
            with no obligation to proceed.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-500 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
            >
              Book free consultation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="mailto:William.einald@primetechsolutions.se"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/5 transition-colors text-base"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              William.einald@primetechsolutions.se
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            No commitment. 30 minutes. Available Monday–Friday, 08:00–17:00 CET.
          </p>
        </div>

        {/* Contact details strip */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: 'Email', value: 'William.einald@primetechsolutions.se', href: 'mailto:William.einald@primetechsolutions.se' },
            { label: 'Phone', value: '+46 72 303 71 85', href: 'tel:+46723037185' },
            { label: 'Response time', value: 'Within 4 business hours', href: null },
          ].map(({ label, value, href }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1.5">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium text-slate-200">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
