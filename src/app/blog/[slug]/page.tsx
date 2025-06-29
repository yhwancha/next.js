import { notFound } from 'next/navigation'
import Link from 'next/link'

// Mock blog data (normally from database or CMS)
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easy and efficient.</p>
      <h2>Why Next.js?</h2>
      <ul>
        <li>Server-side rendering out of the box</li>
        <li>Automatic code splitting</li>
        <li>Built-in CSS support</li>
        <li>API routes</li>
      </ul>
      <p>In this tutorial, we'll explore the key features that make Next.js special...</p>
    `,
    publishedAt: '2024-01-15',
    author: 'John Doe'
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    content: `
      <p>React Server Components represent a new paradigm in React development.</p>
      <h2>Key Benefits</h2>
      <ul>
        <li>Zero bundle size</li>
        <li>Direct access to backend resources</li>
        <li>Improved performance</li>
      </ul>
      <p>Let's dive into how they work and when to use them...</p>
    `,
    publishedAt: '2024-01-10',
    author: 'Jane Smith'
  },
  {
    slug: 'app-router-best-practices',
    title: 'App Router Best Practices',
    content: `
      <p>The App Router in Next.js 13+ introduces many new concepts and patterns.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Use Server Components by default</li>
        <li>Implement proper loading states</li>
        <li>Handle errors gracefully</li>
        <li>Optimize for SEO</li>
      </ul>
      <p>Following these practices will help you build better applications...</p>
    `,
    publishedAt: '2024-01-05',
    author: 'Mike Johnson'
  }
]

// This function gets the blog post by slug
function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  // If post doesn't exist, show 404
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back to blog link */}
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to Blog
      </Link>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <time>{post.publishedAt}</time>
        </div>
      </header>

      {/* Article content */}
      <article 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Navigation */}
      <footer className="mt-12 pt-8 border-t">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to all posts
        </Link>
      </footer>
    </div>
  )
}

// Generate metadata for SEO
export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  }
} 