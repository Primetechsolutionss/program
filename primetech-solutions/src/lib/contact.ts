/**
 * Contact submission types and email adapter placeholder.
 *
 * To enable email notifications, see the comments in src/app/api/contact/route.ts.
 * Supported adapters: SendGrid, Nodemailer (SMTP), Mailgun, Resend.
 */

export interface ContactSubmission {
  id: string
  timestamp: string
  name: string
  company: string
  email: string
  phone?: string
  service?: string
  message: string
}

/**
 * Example Resend adapter (minimal, modern API — recommended alternative to SendGrid).
 *
 * Setup:
 *   npm install resend
 *   RESEND_API_KEY=re_xxxx in .env.local
 *   CONTACT_TO_EMAIL=contact@primetechsolutions.se
 *
 * Usage in route.ts: await sendWithResend(submission)
 */

// import { Resend } from 'resend'
//
// const resend = new Resend(process.env.RESEND_API_KEY)
//
// export async function sendWithResend(submission: ContactSubmission) {
//   await resend.emails.send({
//     from: 'Primetech Solutions <no-reply@primetechsolutions.se>',
//     to: [process.env.CONTACT_TO_EMAIL!],
//     replyTo: submission.email,
//     subject: `New consultation request — ${submission.company}`,
//     text: formatPlainText(submission),
//   })
// }

export function formatPlainText(submission: ContactSubmission): string {
  return [
    `New consultation request received at ${submission.timestamp}`,
    '',
    `Name:     ${submission.name}`,
    `Company:  ${submission.company}`,
    `Email:    ${submission.email}`,
    `Phone:    ${submission.phone ?? 'Not provided'}`,
    `Service:  ${submission.service ?? 'Not specified'}`,
    '',
    'Message:',
    submission.message,
  ].join('\n')
}
