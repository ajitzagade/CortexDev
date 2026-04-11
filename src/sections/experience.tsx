import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BcSectionTitle } from '@/components/bc-section-title'
import { MotionSection } from '@/components/motion-section'
import { experience } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Experience() {
  const defaultTab = useMemo(
    () => Math.max(0, experience.findIndex((j) => j.featured)),
    [],
  )
  const [active, setActive] = useState(defaultTab)
  const job = experience[active]

  return (
    <MotionSection id="experience" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="04"
        title="Where I've Worked"
        subtitle="Roles and impact across product orgs — tab through each stop."
      />
      <div className="flex flex-col gap-10 md:flex-row md:gap-12">
        <div className="relative flex shrink-0 md:w-[200px]">
          <div
            aria-hidden
            className="bg-bc-line absolute top-0 bottom-0 left-0 w-px"
          />
          <div
            role="tablist"
            aria-label="Employers"
            className="flex flex-col pl-4"
          >
            {experience.map((j, i) => (
              <button
                key={j.company + j.period}
                type="button"
                role="tab"
                id={`exp-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`exp-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  'font-mono text-sm transition-colors',
                  'border-l-2 py-3 pr-2 text-left -ml-px pl-4',
                  active === i
                    ? 'border-bc-accent bg-bc-light-navy/60 text-bc-accent'
                    : 'border-transparent text-bc-slate hover:bg-bc-light-navy/25 hover:text-bc-heading',
                )}
              >
                {j.company}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={job.company + job.period}
              id={`exp-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`exp-tab-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.33, 1, 0.68, 1] }}
            >
              <h3 className="text-bc-heading text-lg font-semibold md:text-xl">
                {job.role}{' '}
                <span className="text-bc-accent">@ {job.company}</span>
              </h3>
              <p className="text-bc-slate mt-2 font-mono text-sm">{job.period}</p>
              <p className="text-bc-slate/70 mt-1 font-mono text-xs">{job.location}</p>
              <ul className="text-bc-slate mt-6 space-y-3 text-sm leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-bc-accent mt-0.5 shrink-0 font-mono text-xs">
                      ▹
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionSection>
  )
}
