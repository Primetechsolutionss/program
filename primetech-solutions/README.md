# Primetech Solutions — Website

Professional IT consultancy website built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Fonts | Inter (via `next/font/google`) |
| Linting | ESLint (next/core-web-vitals) |
| Formatting | Prettier |

---

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install dependencies

```bash
cd primetech-solutions
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint and format

```bash
npm run lint          # ESLint
npm run format        # Prettier (writes to disk)
```

---

## Project structure

```
primetech-solutions/
├── public/
│   ├── favicon.svg           # SVG favicon (replace with branded version)
│   ├── og-image.png          # OpenGraph image (add a 1200×630px image)
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts  # Contact form API handler
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx        # Root layout (Navbar + Footer + metadata)
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Fixed nav with scroll detection + mobile menu
│   │   │   └── Footer.tsx
│   │   ├── sections/         # Home page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── ui/
│   │       ├── AnimateIn.tsx     # Intersection Observer animation wrapper
│   │       ├── Button.tsx        # Polymorphic button/link component
│   │       ├── ContactForm.tsx   # Controlled form with validation
│   │       └── SectionWrapper.tsx
│   └── lib/
│       └── contact.ts        # Email adapter types and placeholder
├── data/                     # Auto-created; holds submissions.json (gitignored)
├── .env.local                # Environment variables (create from example below)
├── tailwind.config.ts
└── ...
```

---

## Editing content

All copy lives directly in the component files. Key locations:

| Content | File |
|---|---|
| Hero headline and sub-copy | `src/components/sections/Hero.tsx` |
| Trust strip items | `src/components/sections/TrustStrip.tsx` |
| Services (overview cards) | `src/components/sections/ServicesOverview.tsx` |
| Services (full detail) | `src/app/services/page.tsx` — the `services` array at the top |
| Why choose us | `src/components/sections/WhyChooseUs.tsx` — `reasons` array |
| Industries | `src/components/sections/Industries.tsx` — `industries` array |
| Testimonials | `src/components/sections/Testimonials.tsx` — `testimonials` array |
| About / company story | `src/app/about/page.tsx` |
| Engagement models | `src/app/about/page.tsx` — `engagementModels` array |
| Contact info | `src/app/contact/page.tsx` — `contactInfo` array |
| Footer links and address | `src/components/layout/Footer.tsx` |
| SEO metadata | `src/app/layout.tsx` (global) and each `page.tsx` (per-page) |

### Updating contact details

Search for the placeholder values and replace them:

- Email: `hello@primetechsolutions.se`
- Phone: `+46 XX XXX XX XX`
- URL: `https://primetechsolutions.se`

---

## Contact form

### How it works (default)

Submissions are:
1. **Logged to the server console** (`console.log`)
2. **Persisted to `data/submissions.json`** in the project root (auto-created, gitignored)

This is suitable for development and low-volume production use. The JSON file is readable and can be imported into any spreadsheet or CRM.

### Enabling email notifications

See `src/app/api/contact/route.ts` for the commented-out SendGrid block.

For the recommended **Resend** adapter (simpler setup):

```bash
npm install resend
```

Create `.env.local`:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=contact@primetechsolutions.se
```

Uncomment and adapt the adapter in `src/lib/contact.ts`, then call it from `src/app/api/contact/route.ts`.

### Form fields

| Field | Required | Notes |
|---|---|---|
| Full name | Yes | |
| Company | Yes | |
| Email | Yes | Validated format |
| Phone | No | |
| Service interest | No | Dropdown |
| Message | Yes | |
| Consent checkbox | Yes | GDPR consent |

---

## SEO

- Title template: `[Page title] | Primetech Solutions`
- OpenGraph and Twitter Card metadata in `src/app/layout.tsx`
- Add a `public/og-image.png` (1200×630px) for social sharing
- Update `metadataBase` in `layout.tsx` to match your production URL
- `public/robots.txt` is included; update the sitemap URL once deployed

---

## Design system

| Token | Value |
|---|---|
| Primary dark (`navy-800`) | `#0d1b2a` |
| Accent | `blue-600` (#2563EB) |
| Body background | `white` |
| Alternate section | `slate-50` |
| Body text | `slate-900` / `slate-600` |
| Font | Inter (Google Fonts, self-hosted by Next.js) |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section padding | `py-20 lg:py-28` |
| Card radius | `rounded-2xl` |
| Button radius | `rounded-xl` |

### Animations

- Hero: CSS `@keyframes fadeUp` on load (with `animation-delay-*` utilities)
- Scroll-triggered: `AnimateIn` component (Intersection Observer, client-side only)
- Reduced motion: all animations disabled via `prefers-reduced-motion: reduce`

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in the Vercel dashboard if using email notifications.

### Other providers

Any Node.js-compatible host works (Railway, Render, Fly.io). Build output is in `.next/`.

For static export (no API routes / no contact form), add to `next.config.ts`:

```ts
output: 'export'
```

Note: This disables the contact form API route. Use a third-party form service (Formspree, Netlify Forms) instead.

---

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`, `figure`)
- ARIA labels on all interactive elements
- `aria-current="page"` on active nav links
- `aria-label` / `aria-invalid` / `aria-required` on form fields
- `aria-hidden="true"` on decorative icons
- Focus-visible ring on all interactive elements
- Colour contrast: all text meets WCAG AA minimum
- Skip-to-main `id="main-content"` on the `<main>` element

---

## Performance notes

- Inter font loaded via `next/font/google` (zero layout shift, self-hosted)
- No heavy UI libraries (zero Radix, Material, Chakra, etc.)
- Images: use `next/image` for any photos added later
- JS payload: minimal — most components are React Server Components
- Client components: `Navbar`, `AnimateIn`, `ContactForm` only
