import { HoverLiftCard } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { site } from '@/lib/site'

export function About() {
  return (
    <MotionSection id="about" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="01"
        title="About"
        subtitle={`${site.experienceYears} years shipping products across fintech, healthcare IoT, and real-time collaboration — leading teams of 10–15 engineers while staying hands-on with architecture and delivery.`}
      />
      <div className="text-bc-slate space-y-6 text-base leading-relaxed md:grid md:grid-cols-2 md:gap-10 md:space-y-0">
        <div className="space-y-4">
          <p className="text-bc-heading">
            I have led teams of{' '}
            <strong className="font-semibold text-bc-accent">10–15 engineers</strong>, owned
            roadmaps and technical direction, and delivered{' '}
            <strong className="text-bc-heading font-semibold">large-scale systems</strong> under
            real production pressure.
          </p>
          <p>
            My work spans{' '}
            <span className="text-bc-heading font-medium">Fintech</span>,{' '}
            <span className="text-bc-heading font-medium">Healthcare IoT</span>, and{' '}
            <span className="text-bc-heading font-medium">Video Conferencing</span> — with a
            consistent focus on architecture, scalability, and team health.
          </p>
        </div>
        <HoverLiftCard
          intensity="subtle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-bc-light-navy/50 hover:border-bc-accent/35 p-6 font-mono text-sm"
        >
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-bc-accent mt-0.5">▹</span>
              System design, service boundaries, and pragmatic trade-offs for velocity.
            </li>
            <li className="flex gap-3">
              <span className="text-bc-accent mt-0.5">▹</span>
              Production rollouts, observability, and operational maturity.
            </li>
            <li className="flex gap-3">
              <span className="text-bc-accent mt-0.5">▹</span>
              Cross-functional alignment with product, design, and infrastructure.
            </li>
          </ul>
        </HoverLiftCard>
      </div>
    </MotionSection>
  )
}
