import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Primetech Solutions IT services: Microsoft 365, Intune endpoint management, network & Wi-Fi, cloud backup, security, and IT operations / vCIO.',
}

const services = [
  {
    id: 'microsoft-365',
    number: '01',
    title: 'Microsoft 365 & Entra ID',
    tagline: 'Identity, productivity, and governance — properly configured from day one.',
    description:
      'A poorly configured Microsoft 365 tenant is one of the most common sources of security incidents and operational friction in small and mid-sized organisations. We design and implement tenant configurations that are secure, scalable, and compliant — and we document everything so your team understands exactly what has been set up and why.',
    deliverables: [
      'Tenant audit report with prioritised findings',
      'Domain, DNS, and mail flow configuration',
      'Entra ID identity and access management setup',
      'User and group lifecycle management workflows',
      'Licensing review and optimisation recommendations',
      'Security and compliance policy configuration (DLP, retention, sensitivity labels)',
      'Governance documentation and admin runbook',
    ],
  },
  {
    id: 'endpoint-management',
    number: '02',
    title: 'Endpoint Management (Intune)',
    tagline: 'Every device compliant, every user productive — regardless of location.',
    description:
      'Modern workforces require modern device management. Microsoft Intune gives you central control over Windows, macOS, iOS, and Android devices — enforcing compliance policies, deploying applications, and enabling zero-touch onboarding via Windows Autopilot. We design the policies, enrol your devices, and build the documentation that keeps your environment manageable long term.',
    deliverables: [
      'Intune environment design and initial configuration',
      'Device compliance and configuration profiles',
      'Windows Autopilot deployment profile setup',
      'Application deployment (required and available)',
      'Conditional Access integration with Entra ID',
      'Enrolment guide for end users and IT administrators',
      'Device compliance dashboard and reporting setup',
    ],
  },
  {
    id: 'network-wifi',
    number: '03',
    title: 'Network & Wi-Fi',
    tagline: 'Reliable, segmented, and documented — the foundation everything else depends on.',
    description:
      'A well-designed network is invisible to end users and invaluable to IT teams. We design, configure, and document network infrastructure that is appropriately segmented, resilient, and manageable. Whether you need a single-site office network or a multi-site SD-WAN architecture, we approach every engagement with the same rigour: no ad-hoc configurations, no undocumented exceptions.',
    deliverables: [
      'Network design documentation and VLAN schema',
      'Firewall configuration and rule set review',
      'Wi-Fi site survey and access point placement plan',
      'Switch and router configuration (Ubiquiti, Cisco, Meraki)',
      'Guest network and BYOD segmentation',
      'VPN and remote access configuration',
      'Network diagram (logical and physical)',
    ],
  },
  {
    id: 'cloud-backup',
    number: '04',
    title: 'Cloud & Backup',
    tagline: 'Your data is protected, recoverable, and compliant with retention requirements.',
    description:
      'Microsoft 365 is not a backup solution — Microsoft states this explicitly. Email, SharePoint, Teams, and OneDrive data requires a dedicated backup layer. We design and implement backup strategies that cover your critical data, define clear recovery objectives, and verify that recovery actually works before you need it.',
    deliverables: [
      'Backup scope assessment and policy design',
      'Microsoft 365 backup implementation (Exchange, SharePoint, Teams, OneDrive)',
      'Azure-based backup and disaster recovery configuration',
      'Retention policy configuration aligned with regulatory requirements',
      'RTO/RPO assessment and documentation',
      'Tested recovery procedure and recovery report',
      'Backup monitoring and alerting setup',
    ],
  },
  {
    id: 'security',
    number: '05',
    title: 'Security',
    tagline: 'A pragmatic, baseline-driven approach — built around your actual risk profile.',
    description:
      'Effective IT security for a 50-person organisation looks very different from enterprise security programmes. We apply Microsoft and CIS security baselines pragmatically — prioritising the controls that address the highest-probability threats for your organisation, without creating unnecessary complexity or user friction. MFA, Conditional Access, and identity protection are the foundation; we build from there.',
    deliverables: [
      'Security assessment report with risk prioritisation',
      'MFA enforcement and Conditional Access policy design',
      'Microsoft Secure Score baseline improvement plan',
      'CIS / Microsoft security baseline implementation',
      'Entra ID Identity Protection configuration',
      'Security hardening checklist (endpoints, cloud, network)',
      'Monitoring and alerting setup (Defender, Sentinel basics)',
    ],
  },
  {
    id: 'it-operations',
    number: '06',
    title: 'IT Operations / vCIO',
    tagline: 'Strategic IT oversight — without the cost of a full-time IT director.',
    description:
      'Growing organisations reach a point where ad-hoc IT decisions become a liability. The vCIO engagement provides structured IT leadership: quarterly reviews, documented roadmaps, vendor relationship management, and budget planning. We become your IT strategic partner — representing your interests in vendor negotiations and ensuring your IT investments align with your business direction.',
    deliverables: [
      '12-month IT roadmap and priority matrix',
      'IT budget planning template and annual review',
      'Vendor register and contract management overview',
      'Quarterly IT business review (written summary + meeting)',
      'Technology lifecycle management (hardware and software)',
      'IT documentation baseline (knowledge base structure)',
      'Incident response procedure and escalation matrix',
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
      className={`py-16 lg:py-20 border-b border-slate-100 ${reverse ? 'bg-slate-50' : 'bg-white'}`}
      aria-labelledby={`service-${id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              {number}
            </p>
            <h2
              id={`service-${id}-heading`}
              className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight"
            >
              {title}
            </h2>
            <p className="mt-2 text-base font-medium text-blue-600 italic">{tagline}</p>
            <p className="mt-5 text-sm text-slate-600 leading-relaxed">{description}</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
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
                  <span className="text-sm text-slate-700 leading-snug">{item}</span>
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
            Six focused service areas. Every engagement is structured, delivered by senior engineers,
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
