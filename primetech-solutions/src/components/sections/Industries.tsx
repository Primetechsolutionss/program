import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

const industries = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
      />
    ),
    title: 'Construction & Project Management',
    description:
      'Reliable IT for distributed project teams, site connectivity, and document-heavy workflows. Onboard and offboard staff efficiently across multiple sites.',
    highlights: ['Mobile device management', 'Site-to-site connectivity', 'Teams & SharePoint setup'],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    ),
    title: 'Professional Services',
    description:
      'Law firms, accounting offices, and management consultancies with strict data handling requirements and high expectations for uptime and security compliance.',
    highlights: ['Conditional Access & MFA', 'Data residency policies', 'Secure client collaboration'],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
    title: 'Property & Real Estate',
    description:
      'Property management companies handling multiple sites, tenant systems, and operational IT across both office and field teams.',
    highlights: ['Multi-site network design', 'Unified identity management', 'Lifecycle automation'],
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    ),
    title: 'Non-profit & Member Organisations',
    description:
      'Associations, foundations, and NGOs that require enterprise-grade IT governance without an enterprise budget — efficient and well-documented.',
    highlights: ['Microsoft 365 non-profit licensing', 'Simple device management', 'IT cost optimisation'],
  },
]

export default function Industries() {
  return (
    <SectionWrapper className="bg-navy-900" id="industries">
      <SectionHeading
        label="Industries served"
        title="Built for businesses with real operational demands"
        description="We understand the context. Different sectors have different compliance requirements, workflows, and risk profiles — we adapt accordingly."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
        {industries.map(({ icon, title, description, highlights }) => (
          <div
            key={title}
            className="p-6 lg:p-8 rounded-2xl bg-navy-800 border border-slate-700 hover:border-slate-500 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white leading-snug pt-1">{title}</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
            <ul className="space-y-1.5" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                  <svg
                    className="w-3.5 h-3.5 text-blue-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
