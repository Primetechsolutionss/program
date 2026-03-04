import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

const reasons = [
  {
    title: 'Senior engineers on every engagement',
    description:
      'No junior staff, no delegation. The engineer you meet in the consultation is the engineer who delivers the work.',
  },
  {
    title: 'Structured, documented delivery',
    description:
      'Every project ends with full documentation — configuration records, runbooks, and handover materials you can hand to any IT provider.',
  },
  {
    title: 'Fixed-price proposals wherever possible',
    description:
      'We scope carefully and propose fixed fees. Hourly work is available where scope is genuinely uncertain — always agreed in advance.',
  },
  {
    title: 'Proactive, clear communication',
    description:
      'We provide written status updates throughout every engagement. You will never need to chase us for a progress report.',
  },
  {
    title: 'Vendor-neutral recommendations',
    description:
      'We are not tied to any reseller relationship. We recommend what is right for your environment — not what earns us the highest margin.',
  },
  {
    title: 'No minimum contract commitment',
    description:
      'Start with a project, expand to a retainer, or stay ad-hoc. We earn your continued business by delivering results, not by locking you in.',
  },
  {
    title: 'Pragmatic and direct',
    description:
      'We speak plainly about what you need, what you do not, and what will deliver the highest return on your IT investment.',
  },
]

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: heading */}
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Our standard
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Why organisations choose Primetech Solutions
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            There is no shortage of IT providers. The difference lies in consistency, transparency,
            and what happens after the project closes.
          </p>
          <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
            <p className="text-sm text-slate-700 leading-relaxed italic">
              &ldquo;We built Primetech Solutions to be the IT partner we wished existed when we
              were working inside organisations ourselves.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-500">
              — Primetech Solutions founders
            </p>
          </div>
        </div>

        {/* Right: reasons list */}
        <ul className="space-y-6" role="list">
          {reasons.map(({ title, description }) => (
            <li
              key={title}
              className="flex items-start gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <CheckIcon />
              <div>
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
