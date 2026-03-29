import { ExternalLink } from 'lucide-react'
import { HoverLiftLi } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { projects } from '@/lib/site'

export function Projects() {
  return (
    <MotionSection id="projects" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="03"
        title="Projects"
        subtitle="Selected work — real-time systems, payments, healthcare IoT, and mobile commerce."
      />
      <ul className="space-y-12">
        {projects.map((project, i) => (
          <HoverLiftLi
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="group/proj hover:border-bc-accent/40 p-6 md:p-8"
          >
            <div className="md:grid md:grid-cols-12 md:gap-8 md:items-start">
            <div className="text-bc-accent mb-4 shrink-0 font-mono text-xs uppercase tracking-wider md:col-span-4 md:mb-0">
              Featured
            </div>
            <div className="min-w-0 md:col-span-8">
              <h3 className="text-bc-heading group-hover/proj:text-bc-accent mb-3 flex items-start gap-2 text-lg font-semibold transition-colors md:text-xl">
                {project.title}
                <ExternalLink className="text-bc-accent size-4 shrink-0 opacity-0 transition-opacity group-hover/proj:opacity-100" />
              </h3>
              <p className="text-bc-slate mb-4 leading-relaxed">{project.description}</p>
              <ul className="text-bc-slate mb-4 space-y-2 text-sm">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-bc-accent font-mono">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mb-4 flex flex-wrap gap-2 font-mono text-xs">
                {project.stack.map((t) => (
                  <span key={t} className="text-bc-slate">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-bc-slate border-bc-line border-t pt-4 text-sm italic">
                <span className="text-bc-heading not-italic">Impact: </span>
                {project.impact}
              </p>
            </div>
            </div>
          </HoverLiftLi>
        ))}
      </ul>
    </MotionSection>
  )
}
