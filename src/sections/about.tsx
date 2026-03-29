import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function About() {
  return (
    <MotionSection id="about" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering at scale, with ownership end-to-end"
          subtitle={`${site.experienceYears} years shipping products across fintech, healthcare IoT, and real-time collaboration — leading teams of 10–15 engineers while staying hands-on with architecture and delivery.`}
        />
        <div className="border-border/60 bg-card/30 grid gap-8 rounded-2xl border p-8 shadow-sm backdrop-blur-sm md:grid-cols-2 md:p-10">
          <div className="space-y-4 text-base leading-relaxed">
            <p className="text-foreground">
              I have led teams of <strong className="font-semibold">10–15 engineers</strong>,
              owned roadmaps and technical direction, and delivered{' '}
              <strong className="font-semibold">large-scale systems</strong> under real
              production pressure.
            </p>
            <p className="text-muted-foreground">
              My work spans <strong className="text-foreground/90 font-medium">Fintech</strong>,{' '}
              <strong className="text-foreground/90 font-medium">Healthcare IoT</strong>, and{' '}
              <strong className="text-foreground/90 font-medium">Video Conferencing</strong> —
              with a consistent focus on architecture, scalability, and team health.
            </p>
          </div>
          <ul className="text-muted-foreground space-y-3 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="bg-primary/20 text-primary mt-1.5 size-1.5 shrink-0 rounded-full" />
              System design, service boundaries, and pragmatic trade-offs for velocity.
            </li>
            <li className="flex gap-3">
              <span className="bg-primary/20 text-primary mt-1.5 size-1.5 shrink-0 rounded-full" />
              Production rollouts, observability, and operational maturity.
            </li>
            <li className="flex gap-3">
              <span className="bg-primary/20 text-primary mt-1.5 size-1.5 shrink-0 rounded-full" />
              Cross-functional alignment with product, design, and infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
