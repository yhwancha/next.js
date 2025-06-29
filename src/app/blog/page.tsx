import Link from 'next/link'

const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    publishedAt: '2024-01-15'
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'Deep dive into the new React Server Components',
    publishedAt: '2024-01-10'
  },
  {
    slug: 'app-router-best-practices',
    title: 'App Router Best Practices',
    excerpt: 'Tips and tricks for using Next.js App Router effectively',
    publishedAt: '2024-01-05'
  }
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.publishedAt}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 