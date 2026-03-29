import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '@/components/seo'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function BlogPage() {
  return (
    <>
      <Seo title="Blog" description="Writing on engineering, systems, and leadership — coming soon." path="/blog" />
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        <Link
          to="/"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'mb-8 gap-2',
          )}
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
        <h1 className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          This is a placeholder for long-form notes on engineering, architecture, and
          leadership. Add your posts here when you are ready.
        </p>
      </div>
    </>
  )
}
