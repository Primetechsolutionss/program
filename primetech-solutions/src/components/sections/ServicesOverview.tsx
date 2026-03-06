import Link from 'next/link'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'

const services = [
  {
    id: 'microsoft-365',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
      />
    ),
    title: 'Microsoft 365 & Entra ID',
    description:
      'Tenant configuration, identity governance, licensing optimisation, and secure mail flow for your entire organisation.',
  },
  {
    id: 'endpoint-management',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
      />
    ),
    title: 'Endpoint Management',
    description:
      'Device compliance, policy enforcement, and zero-touch onboarding via Microsoft Intune and Windows Autopilot.',
  },
  {
    id: 'network-wifi',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    ),
    title: 'Network & Wi-Fi',
    description:
      'Network segmentation, VLAN design, Wi-Fi site surveys, and firewall configuration for reliable, secure connectivity.',
  },
  {
    id: 'cloud-backup',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
      />
    ),
    title: 'Cloud & Backup',
    description:
      'Microsoft 365 data protection, Azure-based disaster recovery, retention policy management, and tested recovery procedures.',
  },
  {
    id: 'security',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
    title: 'Security',
    description:
      'MFA enforcement, Conditional Access policies, security baseline implementation, and identity threat protection.',
  },
  {
    id: 'it-operations',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
      />
    ),
    title: 'IT Operations / vCIO',
    description:
      'IT roadmaps, vendor management, budget planning, and quarterly business reviews — strategic oversight without the overhead.',
  },
  {
    id: 'ai-automation',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    ),
    title: 'AI & Automation Workflows',
    description:
      'Power Automate, Power Apps, and Microsoft Copilot — turning repetitive manual processes into automated, intelligent workflows.',
  },
]

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services-overview">
      <SectionHeading
        label="What we do"
        title="Seven services. One consistent standard."
        description="Every engagement is structured, documented, and delivered by senior engineers. No junior staff, no delegation to offshore teams."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                Learn more
                <svg
                  className="w-3.5 h-3.5"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </SectionWrapper>
  )
}
