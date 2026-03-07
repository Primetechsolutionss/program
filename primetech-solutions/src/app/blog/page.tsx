import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical IT insights from Primetech Solutions — covering Microsoft 365, security, automation, and IT management for SMEs.',
}

const categories = ['All', 'Security', 'Microsoft 365', 'Managed IT', 'AI & Automation', 'IT Strategy']

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Page header */}
      <div className="bg-navy-800 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Insights
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
            Practical IT advice for SMEs — written by engineers who do the work, not content teams.
          </p>
        </div>
      </div>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-navy-900 min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-800 border border-slate-700 mb-6">
                <svg
                  className="w-7 h-7 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">First post coming soon</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                We are writing practical guides on Microsoft 365, security hardening, and IT automation. Check back shortly.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-sm font-medium text-slate-300 rounded-xl hover:border-slate-400 transition-colors"
                >
                  Get in touch instead
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-700 bg-navy-800 hover:border-slate-500 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <time
                        dateTime={post.date}
                        className="text-xs text-slate-500"
                      >
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
