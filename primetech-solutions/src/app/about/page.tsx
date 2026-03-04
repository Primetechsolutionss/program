import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Primetech Solutions — our background, operating principles, and the engagement models we offer to IT-dependent organisations.',
}

const principles = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
    title: 'Reliability',
    description:
      'We say what we will do, and we do what we say. Every commitment — a response time, a delivery date, a project scope — is treated as a professional obligation. Our reputation is built on consistency, not on best-case outcomes.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    ),
    title: 'Transparency',
    description:
      'We share our reasoning, not just our conclusions. When we recommend a solution, we explain why — including what we considered and why we ruled it out. Clients receive written summaries, not verbal agreements. You always know where your project stands.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
    title: 'Security',
    description:
      'Security is not an add-on or an upsell — it is embedded in everything we design and configure. We apply recognised security baselines (CIS, Microsoft) across every engagement, and we flag security gaps honestly, even when they fall outside the original project scope.',
  },
]

const engagementModels = [
  {
    title: 'Project-based',
    badge: 'Most common',
    badgeColor: 'bg-blue-50 text-blue-700 border border-blue-100',
    description:
      'A defined scope, a fixed price, and a clear set of deliverables. Ideal for migrations, implementations, audits, and one-time infrastructure work. You know what you are getting and what it costs before we start.',
    examples: [
      'Microsoft 365 tenant migration',
      'Intune implementation and device rollout',
      'Network redesign and documentation',
      'Security baseline assessment and remediation',
    ],
    pricing: 'Fixed price per project',
  },
  {
    title: 'Monthly retainer',
    badge: 'Best value',
    badgeColor: 'bg-green-50 text-green-700 border border-green-100',
    description:
      'Ongoing IT support, monitoring, and strategic oversight for a fixed monthly fee. Suitable for organisations that want a reliable IT partner without hiring an internal IT manager. Includes priority response, quarterly reviews, and proactive recommendations.',
    examples: [
      'Priority support and incident response',
      'Quarterly IT business reviews',
      'Ongoing policy and configuration management',
      'Licence and vendor management',
    ],
    pricing: 'Fixed monthly fee (tailored to scope)',
  },
  {
    title: 'Hourly / advisory',
    badge: 'Flexible',
    badgeColor: 'bg-slate-50 text-slate-600 border border-slate-200',
    description:
      'For organisations that need occasional expert input without a committed scope. Billed at our standard consulting rate, agreed before work commences. Minimum booking is two hours. Suitable for second opinions, troubleshooting, and exploratory assessments.',
    examples: [
      'Architecture review and second opinion',
      'Troubleshooting and incident investigation',
      'Vendor evaluation support',
      'Staff training and knowledge transfer',
    ],
    pricing: 'From €125/hour excl. VAT',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-800 pt-28 pb-20 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Who we are
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            About Primetech Solutions
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
            IT consultancy built by practitioners, for organisations that depend on their technology.
          </p>
        </div>
      </div>

      {/* Company story */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full-width heading */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Our background
            </p>
            <h2 id="story-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Built by practitioners who know what good IT looks like
            </h2>
          </div>
          {/* Two-column: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/Images/about.PNG"
                alt="William Einald - CEO & Founder"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 text-base text-slate-600 leading-relaxed">
              <p>
                Primetech Solutions was founded by IT engineers who spent years working inside
                organisations — managing infrastructure, supporting end users, and navigating the
                gap between what IT consultancies promised and what they delivered.
              </p>
              <p>
                We saw the same patterns repeat: vague proposals, junior engineers doing senior
                work, poor documentation, and handovers that left clients more dependent on the
                provider than before. We built Primetech Solutions to change that.
              </p>
              <p>
                Today, we work exclusively with small and mid-sized organisations — primarily in
                construction, professional services, property management, and the non-profit sector.
                We are deliberately focused: we do not try to be a large-scale MSP or a generalist
                IT helpdesk. We do a defined set of things exceptionally well.
              </p>
              <p>
                Every client engagement is handled by senior engineers with direct, hands-on
                experience in Microsoft environments, network infrastructure, and IT operations.
                We write the documentation ourselves. We do the work ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100" aria-labelledby="principles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              How we work
            </p>
            <h2 id="principles-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Three principles we do not compromise on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map(({ icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-200 p-7">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="models-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Working together
            </p>
            <h2 id="models-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Engagement models
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We adapt to how your organisation works — not the other way around. Choose the model
              that fits your situation, or combine them as your needs evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {engagementModels.map(({ title, badge, badgeColor, description, examples, pricing }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6 flex-1" role="list">
                  {examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg
                        className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
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
                      {ex}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Pricing: </span>
                    {pricing}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-5">
              Not sure which model suits your situation? Start with the free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Book free consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
