import { motion } from 'framer-motion'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { leadershipPoints } from '@/lib/site'

export function Leadership() {
  return (
    <MotionSection id="leadership" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Building teams that ship"
          subtitle="Mentorship, hiring, and technical standards — scaled without losing craft."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {leadershipPoints.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="border-border/60 bg-card/40 rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-colors hover:border-primary/25"
            >
              <h3 className="font-display text-foreground text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
