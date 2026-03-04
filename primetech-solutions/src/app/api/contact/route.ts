import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface ContactSubmission {
  id: string
  timestamp: string
  name: string
  company: string
  email: string
  phone?: string
  service?: string
  message: string
}

// Simple email regex — robust enough for server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const { name, company, email, phone, service, message, consent } = body as Record<
    string,
    unknown
  >

  // --- Validate required fields ---
  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof company !== 'string' ||
    !company.trim() ||
    typeof email !== 'string' ||
    !email.trim() ||
    typeof message !== 'string' ||
    !message.trim() ||
    consent !== true
  ) {
    return NextResponse.json(
      { error: 'Missing or invalid required fields.' },
      { status: 400 }
    )
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const submission: ContactSubmission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    name: name.trim(),
    company: company.trim(),
    email: email.trim().toLowerCase(),
    phone: typeof phone === 'string' && phone.trim() ? phone.trim() : undefined,
    service: typeof service === 'string' && service ? service : undefined,
    message: message.trim(),
  }

  // --- Console log (always) ---
  console.log(
    `[Contact] New submission from ${submission.name} <${submission.email}> at ${submission.company}`,
    '\n',
    JSON.stringify(submission, null, 2)
  )

  // --- Persist to local JSON file ---
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'submissions.json')

    await fs.mkdir(dataDir, { recursive: true })

    let submissions: ContactSubmission[] = []
    try {
      const raw = await fs.readFile(filePath, 'utf-8')
      submissions = JSON.parse(raw)
      if (!Array.isArray(submissions)) submissions = []
    } catch {
      // File does not exist yet — start fresh
    }

    submissions.push(submission)
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), 'utf-8')
  } catch (fileError) {
    // Log the error but do not fail the request — submission was already logged
    console.error('[Contact] Failed to persist submission to file:', fileError)
  }

  // -------------------------------------------------------------------------
  // Option 2: Email adapter (disabled by default)
  //
  // To enable SendGrid email notifications:
  // 1. npm install @sendgrid/mail
  // 2. Add to .env.local:
  //      SENDGRID_API_KEY=SG.xxxxx
  //      CONTACT_FROM_EMAIL=hello@primetechsolutions.se
  //      CONTACT_TO_EMAIL=contact@primetechsolutions.se
  // 3. Uncomment and adapt the block below:
  //
  // import sgMail from '@sendgrid/mail'
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  // await sgMail.send({
  //   to: process.env.CONTACT_TO_EMAIL!,
  //   from: process.env.CONTACT_FROM_EMAIL!,
  //   replyTo: submission.email,
  //   subject: `[Primetech] New consultation request — ${submission.company}`,
  //   text: [
  //     `Name: ${submission.name}`,
  //     `Company: ${submission.company}`,
  //     `Email: ${submission.email}`,
  //     `Phone: ${submission.phone ?? 'Not provided'}`,
  //     `Service: ${submission.service ?? 'Not specified'}`,
  //     `Message:\n${submission.message}`,
  //   ].join('\n'),
  // })
  // -------------------------------------------------------------------------

  return NextResponse.json(
    { success: true, message: 'Submission received. We will be in touch shortly.' },
    { status: 200 }
  )
}
