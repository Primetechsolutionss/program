import Link from 'next/link'

const serviceLinks = [
  { href: '/services#microsoft-365', label: 'Microsoft 365 & Entra ID' },
  { href: '/services#endpoint-management', label: 'Endpoint Management' },
  { href: '/services#network-wifi', label: 'Network & Wi-Fi' },
  { href: '/services#cloud-backup', label: 'Cloud & Backup' },
  { href: '/services#security', label: 'Security' },
  { href: '/services#it-operations', label: 'IT Operations / vCIO' },
]

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 group mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg w-fit"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:bg-blue-500 transition-colors shrink-0">
                P
              </span>
              <span className="font-semibold text-lg text-white">Primetech Solutions</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Reliable, structured IT services for growing organisations. Microsoft 365, endpoint
              management, security, and strategic IT operations.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-slate-400">
              <p>
                <span className="text-slate-300 font-medium">Email:</span>{' '}
                <a
                  href="mailto:William.einald@primetechsolutions.se"
                  className="hover:text-white transition-colors"
                >
                  William.einald@primetechsolutions.se
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">Phone:</span>{' '}
                <a href="tel:+46723037185" className="hover:text-white transition-colors">
                  +46 72 303 71 85
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">Hours:</span> Mon–Fri, 08:00–17:00 CET
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Primetech Solutions AB. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
