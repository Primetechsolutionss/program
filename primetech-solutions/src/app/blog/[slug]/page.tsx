import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import FinalCTA from '@/components/sections/FinalCTA'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  const { Content } = post

  return (
    <>
      {/* Post header */}
      <div className="bg-navy-800 pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-slate-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors mb-6"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All posts
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              {post.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">{post.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Primetech Solutions</p>
              <time dateTime={post.date} className="text-xs text-slate-500">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Post content */}
      <article className="py-16 lg:py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-content text-slate-300 leading-relaxed space-y-5 text-base">
            <Content />
          </div>

          {/* Post footer */}
          <div className="mt-16 pt-10 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-4">Have a question about this topic?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-400 hover:to-indigo-500 transition-all"
            >
              Speak to us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  )
}
