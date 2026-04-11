import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, Menu, MessageCircle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/brand-icons'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useActiveSection } from '@/hooks/use-active-section'
import { navLinks, scrollSpySectionIds, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function NavLink({
  href,
  label,
  num,
  active,
  onNavigate,
}: {
  href: string
  label: string
  num: string
  active: boolean
  onNavigate?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={cn(
        'font-mono text-sm tracking-wide transition-colors',
        'border-l-2 py-2 pl-4',
        active
          ? 'border-bc-accent text-bc-heading'
          : 'border-transparent text-bc-slate hover:text-bc-heading',
      )}
    >
      <span className="text-bc-accent mr-2">{num}.</span>
      {label}
    </a>
  )
}

export function Sidebar() {
  const { pathname } = useLocation()
  const isBlog = pathname === '/blog'
  const scrollActiveId = useActiveSection(scrollSpySectionIds)
  const activeId = pathname === '/' ? scrollActiveId : null
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  const nav = (
    <nav className="flex flex-col gap-1" aria-label="Sections">
      {navLinks.map((l) => (
        <NavLink
          key={l.id}
          href={pathname === '/' ? l.href : `/${l.href}`}
          label={l.label}
          num={l.num}
          active={!isBlog && activeId === l.id}
          onNavigate={closeMobile}
        />
      ))}
      <Link
        to="/blog"
        onClick={closeMobile}
        className={cn(
          'font-mono text-sm tracking-wide transition-colors',
          'border-l-2 py-2 pl-4',
          isBlog
            ? 'border-bc-accent text-bc-heading'
            : 'border-transparent text-bc-slate hover:text-bc-heading',
        )}
      >
        <span className="text-bc-accent mr-2">08.</span>
        Blog
      </Link>
    </nav>
  )

  const social = (
    <div className="flex gap-4">
      <a
        href={site.github}
        target="_blank"
        rel="noreferrer noopener"
        className="text-bc-slate hover:text-bc-accent transition-colors"
        aria-label="GitHub"
      >
        <GitHubIcon className="size-5" />
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="text-bc-slate hover:text-bc-accent transition-colors"
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="size-5" />
      </a>
      <a
        href={`mailto:${site.email}`}
        className="text-bc-slate hover:text-bc-accent transition-colors"
        aria-label="Email"
      >
        <Mail className="size-5" />
      </a>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="text-bc-slate hover:text-bc-accent transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  )

  return (
    <>
      <header className="border-bc-line bg-bc-navy/90 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md lg:hidden">
        <a href="/" className="text-bc-heading font-mono text-sm font-semibold">
          {site.name}
        </a>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'border-bc-line text-bc-heading',
            )}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-bc-line bg-bc-navy w-[min(100%,20rem)] border-l"
          >
            <SheetHeader>
              <SheetTitle className="text-bc-heading font-mono text-left">
                Navigate
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-8">
              {nav}
              <a
                href="/resume.pdf"
                download="Ajit-Zagade-Resume.pdf"
                type="application/pdf"
                className={cn(
                  buttonVariants({ size: 'sm' }),
                  'border-bc-accent/40 text-bc-accent bg-transparent hover:bg-bc-accent/10 w-fit',
                )}
              >
                Resume
              </a>
              {social}
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <aside
        className="border-bc-line bg-bc-navy/98 fixed top-0 bottom-0 left-0 z-40 hidden w-[min(100vw,180px)] flex-col justify-between border-r px-8 py-12 lg:flex"
        aria-label="Primary"
      >
        <div>
          <a href="/#top" className="text-bc-heading block font-mono text-lg font-bold tracking-tight">
            {site.name}
          </a>
          <p className="text-bc-slate mt-2 font-mono text-xs leading-snug">
            {site.title}
          </p>
          <div className="mt-12">{nav}</div>
        </div>
        <div className="flex flex-col gap-6">
          <a
            href="/resume.pdf"
            download="Ajit-Zagade-Resume.pdf"
            type="application/pdf"
            className={cn(
              buttonVariants({ size: 'sm', variant: 'outline' }),
              'border-bc-accent/50 text-bc-accent hover:bg-bc-accent/10 w-full',
            )}
          >
            Resume
          </a>
          {social}
        </div>
      </aside>
    </>
  )
}
