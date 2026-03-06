import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

const testimonials = [
  {
    quote:
      'Primetech Solutions migrated our entire M365 tenant and restructured our Intune policies in under three weeks — with zero downtime. The documentation they left behind is something we can actually use.',
    name: 'Marcus E.',
    role: 'Operations Manager',
    company: 'Byggruppen Syd AB',
    initials: 'ME',
  },
  {
    quote:
      'We had been deferring our security posture review for over a year. After the free consultation, we had a clear, prioritised action list within 48 hours. Their approach is methodical and refreshingly honest.',
    name: 'Sara K.',
    role: 'Managing Partner',
    company: 'Juridicum Law Group',
    initials: 'SK',
  },
  {
    quote:
      'As a growing organisation with limited internal IT resources, Primetech fills that gap professionally. They communicate clearly, respond quickly, and always explain the rationale behind every recommendation.',
    name: 'Johan L.',
    role: 'Executive Director',
    company: 'Västerås Bostadsstiftelse',
    initials: 'JL',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="Client feedback"
        title="What our clients say"
        description="We let results speak for themselves. These are representative quotes from clients across our active portfolio."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map(({ quote, name, role, company, initials }) => (
          <figure
            key={name}
            className="flex flex-col p-6 lg:p-8 rounded-2xl border border-slate-700 bg-navy-700 hover:shadow-md hover:border-slate-500 transition-all duration-200"
          >
            <StarRating />
            <blockquote className="mt-5 flex-1">
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-700 pt-5">
              <div
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0"
                aria-hidden="true"
              >
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-slate-400">
                  {role} · {company}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        * Client names and company names are representative. Specific client references available on request.
      </p>
    </SectionWrapper>
  )
}
