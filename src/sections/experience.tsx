import { motion } from 'framer-motion'
import { HoverLiftCard } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { experience } from '@/lib/site'

export function Experience() {
  return (
    <MotionSection id="experience" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="04"
        title="Experience"
        subtitle="Leadership and delivery across enterprise platforms and regulated domains."
      />
      <div className="relative">
        <div
          aria-hidden
          className="bg-bc-line absolute top-0 bottom-0 left-[7px] w-px md:left-2"
        />
        <ul className="space-y-10">
          {experience.map((job, i) => (
            <motion.li
              key={job.company + job.period}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="relative list-none pl-10 md:pl-14"
            >
              <span
                className={
                  job.featured
                    ? 'bg-bc-accent absolute top-6 left-0 z-[2] size-2.5 rounded-full ring-4 ring-[#0a192f] md:left-1 md:top-7'
                    : 'bg-bc-slate absolute top-6 left-0.5 z-[2] size-2 rounded-full md:left-1.5 md:top-7'
                }
              />
              <HoverLiftCard
                intensity="subtle"
                className="hover:border-bc-accent/35 p-5 md:p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-bc-heading text-lg font-semibold">{job.company}</h3>
                  <p className="text-bc-accent font-mono text-sm tabular-nums">{job.period}</p>
                </div>
                <p className="text-bc-slate mt-1 text-sm">{job.role}</p>
                <p className="text-bc-slate/80 text-xs">{job.location}</p>
                <ul className="text-bc-slate mt-4 space-y-2 text-sm leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </HoverLiftCard>
            </motion.li>
          ))}
        </ul>
      </div>
    </MotionSection>
  )
}
