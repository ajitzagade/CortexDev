import { motion } from 'framer-motion'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/site'

export function Experience() {
  return (
    <MotionSection id="experience" className="scroll-mt-24 bg-muted/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Timeline"
          subtitle="Leadership and delivery across enterprise platforms and regulated domains."
        />
        <div className="relative">
          <div
            aria-hidden
            className="bg-border absolute top-0 bottom-0 left-[11px] w-px sm:left-4"
          />
          <ul className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.period}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative pl-10 sm:pl-14"
              >
                <span
                  className={
                    job.featured
                      ? 'bg-primary ring-primary/30 absolute top-1.5 left-0 size-3 rounded-full ring-4 sm:top-2 sm:left-1'
                      : 'bg-muted-foreground absolute top-2 left-0.5 size-2.5 rounded-full sm:left-1.5'
                  }
                />
                <div className="border-border/60 bg-card/50 rounded-xl border p-5 shadow-sm backdrop-blur-sm sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-foreground text-lg font-semibold">
                      {job.company}
                    </h3>
                    <p className="text-primary text-sm font-medium tabular-nums">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">{job.role}</p>
                  <p className="text-muted-foreground/80 text-xs">{job.location}</p>
                  <ul className="text-muted-foreground mt-4 list-inside space-y-2 text-sm leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
