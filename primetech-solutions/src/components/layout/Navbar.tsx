'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const useTransparent = isHome && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Primetech Solutions — Home"
          >
            <Image
              src="/Images/Logo_transparent.png"
              alt="Primetech Solutions logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
            <span
              className={`font-semibold text-lg leading-none transition-colors ${
                useTransparent ? 'text-white' : 'text-slate-900'
              }`}
            >
              Primetech Solutions
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  pathname === href
                    ? useTransparent
                      ? 'text-white font-semibold'
                      : 'text-blue-600'
                    : useTransparent
                      ? 'text-white/75 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Free consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              useTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* Animated hamburger */}
            <span className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${
                  isOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              tabIndex={isOpen ? 0 : -1}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-blue-400 hover:to-indigo-500 transition-all"
            >
              Book free consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
