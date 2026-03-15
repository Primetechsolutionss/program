import React from 'react'

export type Post = {
  slug: string
  title: string
  date: string // ISO: 'YYYY-MM-DD'
  category: string
  description: string
  readTime: string
  Content: React.FC
}

// Add new posts to this array. Most recent first is handled automatically.
export const posts: Post[] = [
  {
    slug: 'what-vastlanken-taught-me-about-the-future-of-it',
    title: 'What Västlänken Taught Me About the Future of IT',
    date: '2026-03-15',
    category: 'IT Strategy',
    description:
      'Four years as IT Manager on a 2 billion SEK section of Västlänken taught me one thing above all else: the value of IT is measured in outcomes, not hours. This is why I founded Primetech Solutions.',
    readTime: '6 min read',
    Content: () => (
      <>
        <p className="text-lg text-slate-200 leading-relaxed italic">
          And Why I Founded Primetech Solutions
        </p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">
          What Running IT on a 2 Billion SEK Project Teaches You
        </h2>
        <p>
          Västlänken is the largest infrastructure project in Gothenburg&apos;s history — an
          8-kilometre railway tunnel, three underground stations, and a price tag north of 36 billion
          SEK. It is the kind of project that strips away theory and leaves you with raw perspective
          on what actually works.
        </p>
        <p>
          I spent four years as the IT Manager for a section valued at 2 billion SEK (2017 price
          levels). Six years total inside mega-scale projects. Now in my ninth year in the industry.
          And the experience did not just shape how I think about IT — it shaped how I believe the
          entire labour market is evolving.
        </p>
        <p>My name is William Einald, and this is why I founded Primetech Solutions.</p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">
          The Perspective You Only Get from the Inside
        </h2>
        <p>
          When budgets are measured in billions and timelines stretch across years, you learn one
          thing fast: agility is not a buzzword. It is a survival skill.
        </p>
        <p>
          As an IT Manager I sat at the intersection of infrastructure, security, systems
          integration, and stakeholder coordination. Every part of the project&apos;s digital
          backbone ran through my team. And the lesson that stuck with me more than any other is
          simple — the value of IT is not measured in systems deployed. It is measured in outcomes.
          In whether the handover is clean, the stakeholders trust your delivery, and the project
          actually runs.
        </p>
        <p>
          Outcome over activity. Results over hours. That mindset became the foundation of Primetech
          Solutions.
        </p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">
          From Employment to Operating Under My Own Banner
        </h2>
        <p>
          In a project of that scale, budget cycles end and contracts close. That is the nature of
          large infrastructure work. But the work itself does not always end on the same schedule.
        </p>
        <p>
          When my formal role came to a close, I had built something I was not willing to leave
          unfinished — relationships, systems knowledge, an understanding of how every moving part
          connected. That does not transfer in a handover document. It lives in the person who built
          it.
        </p>
        <p>
          So rather than walking away, I made a decision: continue delivering value to the
          stakeholders who had come to rely on that expertise. Not as an employee waiting for a
          renewal, but under my own banner.
        </p>
        <p>
          The significant work I had done during my employment had already proven the value. The
          trust was there. The track record was established. And when I showed up as the founder of
          Primetech Solutions, ready to finish what I had started, the doors were open.
        </p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">
          The Convergence Problem — And Why Results Will Define the Next Era
        </h2>
        <p>
          We are living through the fastest convergence of technological change in history. AI,
          cloud infrastructure, automation, cybersecurity — these are no longer separate trends
          moving at their own pace. They are compounding on top of each other, each one accelerating
          the next, creating a rate of disruption that doubles while it is already doubling.
        </p>
        <p>
          For businesses, this creates a fundamental problem. The expertise you need is more
          specialised than ever. The landscape shifts faster than traditional hiring cycles can keep
          up with. And the old model — fill a role, log hours, close the contract when the budget
          runs out — leaves you perpetually restarting with someone new who has to learn everything
          from scratch.
        </p>
        <p>
          I believe the labour market is heading somewhere different. Somewhere that rewards
          commitment to outcomes over commitment to headcount. Where partnerships are measured by
          what was delivered, not how many hours were billed. Where the businesses that thrive are
          the ones that stopped hiring bodies and started hiring results.
        </p>
        <p>That is the shift Primetech Solutions was built for.</p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">What We Stand For</h2>
        <ul className="space-y-4 list-none pl-0">
          <li className="border-l-2 border-blue-500 pl-4">
            <strong className="text-white">Committed from start to finish.</strong> We do not walk
            away from unfinished work. When we take on an engagement, we see it through — because
            that is what the client was promised.
          </li>
          <li className="border-l-2 border-blue-500 pl-4">
            <strong className="text-white">Honest in every engagement.</strong> We tell you what you
            need to hear, not what is easiest to say. No overselling. No overpromising.
          </li>
          <li className="border-l-2 border-blue-500 pl-4">
            <strong className="text-white">Trust earned through delivery.</strong> The stakeholders
            from Västlänken did not come to Primetech because of a pitch deck. They came because
            they had already seen the work. That is the model we are building on.
          </li>
        </ul>
        <p>
          Whether it is Microsoft 365 administration, cloud infrastructure, security, IT
          consultancy, or AI-driven workflow automation — we support your journey from beginning to
          end.
        </p>

        <h2 className="text-xl font-bold text-white mt-10 mb-3">The Bottom Line</h2>
        <p>
          The businesses that will define the next decade are the ones that demand results over
          activity, outcomes over hours, and partners who finish what they start.
        </p>
        <p>
          That is what Primetech Solutions is here for. Born from one of Sweden&apos;s most complex
          infrastructure projects. Built on trust that was earned, not pitched.
        </p>

        <div className="mt-10 p-5 rounded-xl bg-navy-800 border border-slate-700">
          <p className="text-sm text-slate-400 leading-relaxed">
            <strong className="text-white">William Einald</strong> is the founder of Primetech
            Solutions Sweden, an IT infrastructure consultancy based in Göteborg. With 9 years of
            experience in the IT industry — including 4 years as IT Manager on a 2 billion SEK
            section of Västlänken and 6 years inside mega-scale Swedish infrastructure projects —
            William founded Primetech Solutions to deliver committed, results-driven IT partnerships.
          </p>
        </div>
      </>
    ),
  },
]

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
