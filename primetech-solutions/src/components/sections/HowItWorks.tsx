import Link from 'next/link'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    title: 'Book a 30-minute call',
    description:
      'Schedule a video call with a senior IT consultant. No preparation required — just a willingness to describe your current situation.',
  },
  {
    number: '02',
    title: 'We review your environment',
    description:
      'We ask the right questions about your infrastructure, pain points, and goals. We listen first, then identify what matters most.',
  },
  {
    number: '03',
    title: 'You receive a clear action plan',
    description:
      'Within 48 hours, you receive a written summary with concrete recommendations. No obligation, no pressure — just clarity.',
  },
]

export default function HowItWorks() {
  return (
    <SectionWrapper className="bg-slate-50" id="how-it-works">
      <SectionHeading
        label="Free consultation"
        title="How the free consultation works"
        description="Three straightforward steps — designed to give you maximum value with minimum friction."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
        {/* Connector line (desktop) */}
        <div
          className="hidden md:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-slate-200"
          aria-hidden="true"
        />

        {steps.map(({ number, title, description }, i) => (
          <div key={number} className="relative flex flex-col items-center text-center">
            {/* Step number */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 shadow-sm flex items-center justify-center mb-6">
              <span className="text-lg font-bold text-blue-600">{number}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>

            {/* Mobile connector */}
            {i < steps.length - 1 && (
              <div className="md:hidden mt-6 flex items-center justify-center" aria-hidden="true">
                <svg
                  className="w-5 h-5 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-500 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Book your free consultation
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
        <p className="mt-3 text-xs text-slate-400">
          No commitment. 30 minutes. One clear outcome.
        </p>
      </div>
    </SectionWrapper>
  )
}
