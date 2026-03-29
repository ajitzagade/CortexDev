import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '@/components/seo'
import { cn } from '@/lib/utils'

export function BlogPage() {
  return (
    <>
      <Seo
        title="Blog"
        description="Writing on engineering, systems, and leadership — coming soon."
        path="/blog"
      />
      <div className="py-8">
        <Link
          to="/"
          className={cn(
            'text-bc-accent hover:text-bc-heading focus-visible:ring-bc-accent mb-10 inline-flex items-center gap-2 rounded font-mono text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f] focus-visible:outline-none',
          )}
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
        <h1 className="text-bc-heading text-3xl font-bold tracking-tight md:text-4xl">
          Blog
        </h1>
        <p className="text-bc-slate mt-6 max-w-xl text-lg leading-relaxed">
          This is a placeholder for long-form notes on engineering, architecture, and leadership.
          Add your posts here when you are ready.
        </p>
      </div>
    </>
  )
}
