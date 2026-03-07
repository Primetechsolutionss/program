import Link from 'next/link'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'

const services = [
  {
    id: 'o365-security',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
    title: 'O365 + Security',
    description:
      'Full Microsoft 365 deployment and administration combined with Defender, Conditional Access, and compliance hardening.',
    pos: { left: '50%', top: '12%' },
    line: [50, 12] as [number, number],
  },
  {
    id: 'managed-it',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
      />
    ),
    title: 'Managed IT',
    description:
      '24/7 monitoring, SLA-backed helpdesk, and proactive patch management — end-to-end IT management for a fixed monthly fee.',
    pos: { left: '86%', top: '38%' },
    line: [86, 38] as [number, number],
  },
  {
    id: 'it-consultancy',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    ),
    title: 'IT Consultancy',
    description:
      'Senior-led project management, architecture, and migrations — from greenfield deployments to legacy modernisation.',
    pos: { left: '72%', top: '81%' },
    line: [72, 81] as [number, number],
  },
  {
    id: 'data-management',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    ),
    title: 'Data Management',
    description:
      'Backup & recovery, secure data migrations, GDPR compliance, storage architecture, and DCC consultancy.',
    pos: { left: '28%', top: '81%' },
    line: [28, 81] as [number, number],
  },
  {
    id: 'ai-workflows',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    ),
    title: 'AI + Workflows',
    description:
      'Make, Power Automate, and AI integration — turning bottlenecks into intelligent, scalable automated workflows.',
    pos: { left: '14%', top: '38%' },
    line: [14, 38] as [number, number],
  },
]

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services-overview">
      <SectionHeading
        label="What we do"
        title="Five services. One consistent standard."
        description="Every engagement is structured, documented, and delivered by senior engineers. No junior staff, no delegation to offshore teams."
      />

      {/* Desktop: circular / pentagon layout */}
      <div className="relative hidden lg:block" style={{ height: '700px' }}>
        {/* SVG connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {services.map(({ id, line }) => (
            <line
              key={id}
              x1="50"
              y1="50"
              x2={line[0]}
              y2={line[1]}
              stroke="#334155"
              strokeWidth="0.25"
              strokeDasharray="1.2 0.8"
            />
          ))}
        </svg>

        {/* Center circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center z-10 shadow-xl shadow-blue-900/50">
          <p className="text-white font-bold text-center leading-relaxed text-base tracking-wide">
            Solutions<br />by<br />Primetech
          </p>
        </div>

        {/* Service cards */}
        {services.map(({ id, icon, title, description, pos }, index) => (
          <div
            key={id}
            style={{
              position: 'absolute',
              left: pos.left,
              top: pos.top,
              transform: 'translate(-50%, -50%)',
              width: '210px',
              zIndex: 20,
            }}
          >
            <AnimateIn delay={index * 120}>
              <Link
                href={`/services#${id}`}
                className="group flex flex-col p-5 rounded-2xl border border-slate-700 hover:border-blue-500 hover:shadow-lg transition-all duration-200 bg-navy-700"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-800 group-hover:bg-navy-900 flex items-center justify-center mb-3 transition-colors shrink-0">
                  <svg
                    className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:gap-2 transition-all">
                  Learn more
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </AnimateIn>
          </div>
        ))}
      </div>

      {/* Mobile: standard grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map(({ id, icon, title, description }, index) => (
          <AnimateIn key={id} delay={index * 60}>
            <Link
              href={`/services#${id}`}
              className="group flex flex-col h-full p-6 lg:p-7 rounded-2xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-navy-700"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-800 group-hover:bg-navy-900 flex items-center justify-center mb-4 transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:gap-2.5 transition-all">
                Learn more
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </AnimateIn>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-sm font-medium text-slate-300 rounded-xl hover:border-slate-400 hover:bg-navy-700 transition-colors"
        >
          View full service details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </SectionWrapper>
  )
}
