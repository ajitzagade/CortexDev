import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300',
        scrolled
          ? 'border-border/60 bg-background/75 supports-backdrop-filter:backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-foreground text-lg font-semibold tracking-tight"
        >
          {site.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className={cn(
              buttonVariants({ size: 'sm' }),
              'hidden sm:inline-flex',
            )}
          >
            Resume
          </a>

          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'lg:hidden',
              )}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-display text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="hover:bg-muted rounded-lg px-3 py-3 text-base font-medium"
                  >
                    {l.label}
                  </a>
                ))}
                <Link
                  to="/blog"
                  className="hover:bg-muted rounded-lg px-3 py-3 text-base font-medium"
                >
                  Blog
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="hover:bg-muted rounded-lg px-3 py-3 text-base font-medium"
                >
                  Download resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
