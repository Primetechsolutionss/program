import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free IT consultation with Primetech Solutions. 30 minutes, no commitment — we review your environment and provide a clear action plan.',
}

const contactInfo = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    ),
    label: 'Contact',
    value: 'William Einald',
    href: null,
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
    label: 'Email',
    value: 'William.einald@primetechsolutions.se',
    href: 'mailto:William.einald@primetechsolutions.se',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    ),
    label: 'Phone',
    value: '+46 72 303 71 85',
    href: 'tel:+46723037185',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
    label: 'Business hours',
    value: 'Monday–Friday, 08:00–17:00 CET',
    href: null,
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    ),
    label: 'Location',
    value: 'Sweden (remote-first, on-site available)',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-800 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Book a free consultation
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
            30 minutes with a senior IT consultant. No preparation needed, no obligation to
            proceed. Just a clear, written action plan delivered within 48 hours.
          </p>
        </div>
      </div>

      {/* Main contact section */}
      <section className="py-20 lg:py-28 bg-navy-800" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: form */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-white mb-2"
              >
                Send us a message
              </h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Fill in the form and a consultant will be in touch within one business day to
                arrange your consultation.
              </p>
              <ContactForm />
            </div>

            {/* Right: info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div className="rounded-2xl border border-slate-700 bg-navy-700 p-6 lg:p-8">
                <h3 className="text-base font-semibold text-white mb-5">Contact details</h3>
                <ul className="space-y-4" role="list">
                  {contactInfo.map(({ icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-800 border border-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        >
                          {icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-slate-200 hover:text-blue-400 transition-colors mt-0.5 block"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-200 mt-0.5">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to expect */}
              <div className="rounded-2xl border border-blue-900 bg-navy-700 p-6 lg:p-8">
                <h3 className="text-base font-semibold text-white mb-4">
                  What happens next
                </h3>
                <ol className="space-y-4" role="list">
                  {[
                    'We review your message and confirm receipt within 4 business hours.',
                    'A senior consultant contacts you to arrange the 30-minute video call.',
                    'After the call, you receive a written summary with clear recommendations.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-xs text-slate-400">
                  No commitment required. The consultation is free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
