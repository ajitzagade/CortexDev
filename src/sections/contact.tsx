import { ArrowUpRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/brand-icons'
import { HoverLiftCard } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const cta =
  'border-bc-accent/50 text-bc-accent hover:bg-bc-accent/10 focus-visible:ring-bc-accent inline-flex items-center justify-center gap-2 rounded border bg-transparent px-5 py-2.5 font-mono text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f] focus-visible:outline-none'

export function Contact() {
  return (
    <MotionSection id="contact" className="scroll-mt-28 py-24 lg:scroll-mt-12">
      <BcSectionTitle
        align="center"
        num="07"
        title="Contact"
        subtitle="Open to senior IC or leadership conversations, advisory, or collaborations on ambitious product engineering."
      />
      <HoverLiftCard
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="bg-bc-light-navy/40 hover:border-bc-accent/40 mx-auto max-w-lg p-8 text-center"
      >
        <p className="text-bc-slate font-mono text-sm">What’s next?</p>
        <a
          href={`mailto:${site.email}`}
          className="text-bc-heading hover:text-bc-accent mt-4 inline-flex items-center justify-center gap-2 text-lg font-semibold transition-colors"
        >
          {site.email}
          <ArrowUpRight className="size-4" />
        </a>
        <p className="text-bc-accent mt-6 font-mono text-sm tracking-wide">
          Let’s build something impactful.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${site.email}`} className={cn(cta)}>
            <Mail className="size-4" />
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(cta)}
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(cta)}
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </HoverLiftCard>
    </MotionSection>
  )
}
