import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Primetech Solutions IT services: O365 & Security, Managed IT, IT Consultancy, Data Management, and AI & Automation Workflows.',
}

const services = [
  {
    id: 'o365-security',
    number: '01',
    title: 'O365 + Security',
    tagline: 'Full Microsoft 365 deployment, administration, and cloud architecture — combined with comprehensive security posture management, endpoint protection, and compliance hardening.',
    description:
      'Lead IT operations and Microsoft 365 governance across 5+ organizations in Sweden and Europe — with security baselines, compliance frameworks, and lifecycle control built in from day one.',
    deliverables: [
      'Microsoft 365 tenant deployment and administration',
      'Entra ID identity and access management setup',
      'Microsoft Defender for Business configuration',
      'Conditional Access policy design and enforcement',
      'CIS / Microsoft security baseline implementation',
      'DLP, retention, and sensitivity label policies',
      'Secure Score improvement plan and monitoring',
    ],
  },
  {
    id: 'managed-it',
    number: '02',
    title: 'Managed IT',
    tagline: 'Proactive monitoring, helpdesk support, and end-to-end management of your entire IT environment — so your team stays focused on business, not infrastructure.',
    description:
      'From hands-on helpdesk to multi-site escalation point — I\'ve managed IT environments for 200+ personnel across 8+ project offices, standardizing infrastructure, documentation, and operational procedures.',
    deliverables: [
      '24/7 environment monitoring and alerting',
      'SLA-backed helpdesk (remote and on-site support)',
      'Patch management for operating systems and applications',
      'Proactive incident detection and resolution',
      'Monthly IT health report and review',
      'Vendor and licence management',
      'Onboarding and offboarding workflow management',
    ],
  },
  {
    id: 'it-consultancy',
    number: '03',
    title: 'IT Consultancy',
    tagline: 'From greenfield deployments to legacy modernisation — we plan, architect, and lead complex IT projects from kickoff to go-live with senior-level oversight throughout.',
    description:
      'Mobilized and demobilized 10+ site offices on Västlänken mega-project (€270M+) — from greenfield setup to structured handover, with full compliance documentation deliveries throughout.',
    deliverables: [
      'Project scoping, requirements gathering, and architecture design',
      'Greenfield deployments and legacy modernisation',
      'Infrastructure and platform migrations',
      'Vendor evaluation and procurement support',
      'Senior-led project management and stakeholder reporting',
      'Go-live support and post-project stabilisation',
      'Knowledge transfer and full project documentation',
    ],
  },
  {
    id: 'data-management',
    number: '04',
    title: 'Data Management',
    tagline: 'Protecting and structuring your most critical asset — from backup & recovery strategies and secure storage to seamless data migrations, GDPR compliance, and DCC consultancy.',
    description:
      'Implemented backup strategies, compliance frameworks, and lifecycle control across multi-tenant Microsoft 365 environments — covering GDPR, data integrity, and structured handovers.',
    deliverables: [
      'Backup strategy design and implementation',
      'Tested disaster recovery procedures (RTO/RPO defined)',
      'Secure data migration planning and execution',
      'GDPR compliance assessment and remediation',
      'Storage architecture and archiving policy design',
      'DCC (Data Centre Consultancy) advisory services',
      'Retention policy configuration and audit trail setup',
    ],
  },
  {
    id: 'ai-workflows',
    number: '05',
    title: 'AI + Workflows',
    tagline: 'Identify bottlenecks and implement intelligent automation — from AI-assisted process design to end-to-end workflow orchestration that reduces overhead and scales with your business.',
    description:
      'Building custom AI and automation solutions on request — identifying manual overhead and replacing it with intelligent workflows tailored to each client\'s operations.',
    deliverables: [
      'Process discovery workshop and automation opportunity report',
      'Make (Integromat) and Power Automate workflow implementation',
      'AI integration design and deployment',
      'End-to-end workflow orchestration across platforms',
      'Bottleneck analysis and optimisation recommendations',
      'User training and adoption programme',
      'Ongoing workflow monitoring and iteration support',
    ],
  },
]

function ServiceSection({
  id,
  number,
  title,
  tagline,
  description,
  deliverables,
  reverse,
}: (typeof services)[0] & { reverse?: boolean }) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 border-b border-slate-700 ${reverse ? 'bg-navy-900' : 'bg-navy-800'}`}
      aria-labelledby={`service-${id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              {number}
            </p>
            <h2
              id={`service-${id}-heading`}
              className="text-2xl lg:text-3xl font-bold text-white tracking-tight"
            >
              {title}
            </h2>
            <p className="mt-2 text-base font-medium text-blue-400 italic">{tagline}</p>
            <p className="mt-5 text-sm text-slate-300 leading-relaxed">{description}</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Discuss this service
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
          </div>

          {/* Deliverables */}
          <div className="rounded-2xl border border-slate-700 bg-navy-700 p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Typical deliverables
            </p>
            <ul className="space-y-3" role="list">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
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
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-800 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            What we offer
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our services
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
            Five focused service areas. Every engagement is structured, delivered by senior engineers,
            and fully documented. No surprises.
          </p>

          {/* Jump-to nav */}
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to service section">
            {services.map(({ id, number, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-xs font-medium hover:border-slate-500 hover:text-white transition-colors"
              >
                <span className="text-blue-400 font-semibold">{number}</span>
                {title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Service sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} {...service} reverse={index % 2 !== 0} />
      ))}

      <FinalCTA />
    </>
  )
}
