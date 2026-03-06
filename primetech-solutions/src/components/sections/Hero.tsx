import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen bg-navy-800 overflow-hidden"
      aria-label="Hero — Primetech Solutions"
    >
      {/* Background dot-grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true" />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            IT infrastructure that works —
            <span className="block mt-2 text-blue-400">every day, without exception.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up animation-delay-200 mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Primetech Solutions delivers structured, transparent IT services to growing
            organisations — from Microsoft 365 and endpoint management to network infrastructure,
            security, and strategic IT operations.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800 text-base"
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
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 text-base"
            >
              See our services
            </Link>
          </div>

          {/* Microcopy */}
          <p className="animate-fade-up animation-delay-400 mt-4 text-sm text-slate-400">
            No commitment required.{' '}
            <span className="text-slate-300">30 minutes. One clear outcome.</span>
          </p>
        </div>

        {/* Floating stat chips */}
        <div
          className="animate-fade-up animation-delay-500 mt-16 flex flex-wrap gap-3"
          aria-hidden="true"
        >
          {[
            '4-hour response SLA',
            'Fixed-price proposals',
            'Senior engineers only',
            'No lock-in contracts',
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
