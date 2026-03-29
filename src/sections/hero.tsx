import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.2_275/0.35),transparent)]" />
        <div className="absolute top-1/4 left-1/4 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 size-[24rem] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-400/10" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <p className="text-primary font-display mb-4 text-xs font-semibold tracking-[0.25em] uppercase">
            {site.title}
          </p>
          <h1 className="font-display text-foreground text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            {site.subtext}
          </p>
          <p className="text-muted-foreground/90 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="text-foreground/90 font-medium">{site.name}</span>
            <span aria-hidden className="text-border">
              ·
            </span>
            <span>{site.location}</span>
            <span aria-hidden className="text-border">
              ·
            </span>
            <span>{site.experienceYears} years experience</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'gap-2 shadow-lg shadow-primary/15',
              )}
            >
              View projects
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
            >
              <Download className="size-4" />
              Download resume
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'gap-2')}
            >
              <MessageCircle className="size-4" />
              Contact me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="border-border/60 bg-card/40 mt-16 max-w-2xl rounded-2xl border p-6 shadow-xl shadow-black/5 backdrop-blur-md dark:shadow-black/30"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            I partner with product and platform teams to ship reliable systems — from
            real-time media and payments to mobile and IoT — with clear ownership,
            pragmatic architecture, and teams that execute.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Architecture', 'Scale', 'Leadership', 'Production'].map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
