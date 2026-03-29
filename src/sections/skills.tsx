import { motion } from 'framer-motion'
import { HoverLiftCard } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { skillCategories } from '@/lib/site'

export function Skills() {
  return (
    <MotionSection id="skills" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="02"
        title="Skills"
        subtitle="Depth across the stack — from client and mobile to platform, data, and delivery."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <HoverLiftCard
            key={cat.title}
            intensity="subtle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="hover:border-bc-accent/45 p-5"
          >
            <h3 className="text-bc-heading mb-3 font-mono text-sm font-semibold">{cat.title}</h3>
            <ul className="text-bc-slate flex flex-wrap gap-2 font-mono text-xs">
              {cat.items.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                  className="bg-bc-navy/80 text-bc-accent border-bc-line cursor-default rounded border px-2 py-1"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </HoverLiftCard>
        ))}
      </div>
    </MotionSection>
  )
}
