import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/brand-icons'
import { Link } from 'react-router-dom'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-border/60 border-t bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-foreground font-semibold">{site.name}</p>
          <p className="text-muted-foreground mt-1 text-sm">{site.title}</p>
          <p className="text-muted-foreground mt-2 text-xs">{site.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="text-muted-foreground hover:text-foreground inline-flex size-10 items-center justify-center rounded-full border border-border/60 transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground inline-flex size-10 items-center justify-center rounded-full border border-border/60 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground inline-flex size-10 items-center justify-center rounded-full border border-border/60 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>
        </div>
        <div className="text-muted-foreground flex flex-col gap-2 text-sm sm:text-right">
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog (coming soon)
          </Link>
          <p className="text-xs">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
