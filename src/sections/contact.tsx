import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/brand-icons'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Contact() {
  return (
    <MotionSection id="contact" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let’s build something impactful"
          subtitle="Open to senior IC or leadership conversations, advisory, or collaborations on ambitious product engineering."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="border-border/60 from-primary/10 via-card/60 to-card/30 relative mx-auto max-w-2xl overflow-hidden rounded-3xl border bg-gradient-to-br p-10 text-center shadow-xl backdrop-blur-md"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.65_0.15_275/0.2),transparent_55%)]"
          />
          <div className="relative">
            <p className="text-muted-foreground text-sm">
              Prefer email? Reach out directly.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-foreground mt-3 inline-flex items-center gap-2 text-lg font-semibold tracking-tight hover:text-primary"
            >
              {site.email}
              <ArrowUpRight className="size-4" />
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
              >
                <Mail className="size-4" />
                Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'gap-2')}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
