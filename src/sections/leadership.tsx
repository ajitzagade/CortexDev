import { HoverLiftLi } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { leadershipPoints } from '@/lib/site'

export function Leadership() {
  return (
    <MotionSection id="leadership" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="05"
        title="Leadership"
        subtitle="Mentorship, hiring, and technical standards — scaled without losing craft."
      />
      <ul className="space-y-6">
        {leadershipPoints.map((item, i) => (
          <HoverLiftLi
            key={item.title}
            intensity="subtle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="hover:border-bc-accent/35 p-5"
          >
            <h3 className="text-bc-heading font-mono text-sm font-semibold">{item.title}</h3>
            <p className="text-bc-slate mt-2 text-sm leading-relaxed">{item.description}</p>
          </HoverLiftLi>
        ))}
      </ul>
    </MotionSection>
  )
}
