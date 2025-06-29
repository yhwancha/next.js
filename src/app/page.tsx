import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to My App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Built with Next.js App Router
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Blog
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Try these URLs to see dynamic routing in action:</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/blog/getting-started-with-nextjs" className="text-blue-600 hover:underline">
                  /blog/getting-started-with-nextjs
                </Link>
              </li>
              <li>
                <Link href="/blog/react-server-components" className="text-blue-600 hover:underline">
                  /blog/react-server-components
                </Link>
              </li>
              <li>
                <Link href="/blog/nonexistent-post" className="text-blue-600 hover:underline">
                  /blog/nonexistent-post (404 example)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
