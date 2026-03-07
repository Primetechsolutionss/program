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
  // {
  //   slug: 'your-post-slug',
  //   title: 'Your Post Title',
  //   date: '2026-03-08',
  //   category: 'Security',
  //   description: 'A short description shown in the post listing card.',
  //   readTime: '5 min read',
  //   Content: () => (
  //     <>
  //       <p>Your post content here. Use standard HTML/JSX elements.</p>
  //       <h2>A subheading</h2>
  //       <p>More content...</p>
  //     </>
  //   ),
  // },
]

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
