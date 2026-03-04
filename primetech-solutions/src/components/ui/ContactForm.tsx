'use client'

import { useState } from 'react'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service (optional)' },
  { value: 'microsoft-365', label: 'Microsoft 365 & Entra ID' },
  { value: 'endpoint-management', label: 'Endpoint Management (Intune)' },
  { value: 'network-wifi', label: 'Network & Wi-Fi' },
  { value: 'cloud-backup', label: 'Cloud & Backup' },
  { value: 'security', label: 'Security' },
  { value: 'it-operations', label: 'IT Operations / vCIO' },
  { value: 'other', label: 'Other / Not sure yet' },
]

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  message?: string
  consent?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Full name is required.'
  if (!data.company.trim()) errors.company = 'Company name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.message.trim()) errors.message = 'Please include a brief message.'
  if (!data.consent) errors.consent = 'You must agree to be contacted to proceed.'
  return errors
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
      <svg
        className="w-4 h-4 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </p>
  )
}

const inputBase =
  'block w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
const inputNormal = 'border-slate-200 hover:border-slate-300'
const inputError = 'border-red-300 bg-red-50 focus:ring-red-400'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0]
      document.getElementById(firstErrorField)?.focus()
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-2xl border border-green-100">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Message received</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Thank you for reaching out. A consultant will contact you within one business day to
          arrange your free consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            placeholder="Anna Lindqvist"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          <FieldError message={errors.name} />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Company <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className={`${inputBase} ${errors.company ? inputError : inputNormal}`}
            placeholder="Acme AB"
            aria-required="true"
            aria-invalid={!!errors.company}
          />
          <FieldError message={errors.company} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            placeholder="anna@acme.se"
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          <FieldError message={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone{' '}
            <span className="text-slate-400 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputBase} ${inputNormal}`}
            placeholder="+46 70 000 00 00"
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
            Service interest{' '}
            <span className="text-slate-400 font-normal text-xs">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBase} ${inputNormal} cursor-pointer`}
          >
            {SERVICE_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
            placeholder="Briefly describe your current IT setup and what you'd like to improve or resolve."
            aria-required="true"
            aria-invalid={!!errors.message}
          />
          <FieldError message={errors.message} />
        </div>

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
              aria-required="true"
              aria-invalid={!!errors.consent}
            />
            <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
              I agree to be contacted by Primetech Solutions regarding my request. We process your
              data in accordance with our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .<span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError message={errors.consent} />
        </div>
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div
          role="alert"
          className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
        >
          Something went wrong on our end. Please try again or contact us directly at{' '}
          <a href="mailto:hello@primetechsolutions.se" className="font-medium underline">
            hello@primetechsolutions.se
          </a>
          .
        </div>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Fields marked <span className="text-red-500" aria-hidden="true">*</span> are required.
          We typically respond within one business day.
        </p>
      </div>
    </form>
  )
}
