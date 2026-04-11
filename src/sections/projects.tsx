import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { GitHubIcon } from '@/components/icons/brand-icons'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { projects } from '@/lib/site'
import { hoverLiftShadow, hoverLiftSpring } from '@/lib/hover-motion'
import { cn } from '@/lib/utils'

function ProjectVisual({
  title,
  imageSrc,
}: {
  title: string
  imageSrc: string
}) {
  const monogram = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-bc-line shadow-2xl shadow-black/40">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="size-full object-cover grayscale contrast-125 brightness-75 saturate-50"
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#112240] via-[#0a192f] to-[#1e3a5f]">
          <span className="font-mono text-5xl font-bold text-bc-accent/20 md:text-7xl">
            {monogram}
          </span>
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-bc-accent/25 mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-bc-navy/35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bc-accent/20"
      />
    </div>
  )
}

export function Projects() {
  return (
    <MotionSection id="projects" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="03"
        title="Some Things I've Built"
        subtitle="Featured work — architecture, delivery, and outcomes."
      />
      <ul className="flex flex-col gap-28 lg:gap-40">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1
          const gh = project.links.github
          const live = project.links.live
          const liveExtra =
            'liveExtra' in project.links && project.links.liveExtra
              ? project.links.liveExtra
              : []

          return (
            <li
              key={project.title}
              className="list-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                className={cn(
                  'relative flex flex-col gap-8 lg:min-h-[360px] lg:flex-row lg:items-start lg:gap-0',
                  reversed && 'lg:flex-row-reverse',
                )}
              >
                <div
                  className={cn(
                    'w-full shrink-0 lg:w-[60%]',
                    reversed ? 'lg:pl-10' : 'lg:pr-10',
                  )}
                >
                  <motion.div
                    whileHover={{
                      y: -7,
                      scale: 1.01,
                      boxShadow: hoverLiftShadow,
                    }}
                    transition={hoverLiftSpring}
                    className="rounded-md shadow-2xl shadow-black/30"
                    style={{ transformOrigin: 'center center' }}
                  >
                    <ProjectVisual title={project.title} imageSrc={project.imageSrc} />
                  </motion.div>
                </div>

                <div
                  className={cn(
                    'relative z-10 min-w-0 flex-1 lg:w-[40%] lg:pt-2',
                    reversed ? 'lg:-mr-20 lg:pr-2 lg:text-left' : 'lg:-ml-20 lg:pl-2 lg:text-right',
                  )}
                >
                  <p className="text-bc-accent font-mono text-xs tracking-[0.2em] uppercase">
                    Featured Project
                  </p>
                  <h3 className="text-bc-heading mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>

                  <motion.div
                    whileHover={{
                      y: -7,
                      scale: 1.01,
                      boxShadow: hoverLiftShadow,
                    }}
                    transition={hoverLiftSpring}
                    className={cn(
                      'border-bc-line bg-bc-light-navy/90 mt-7 rounded border p-6 text-left shadow-2xl shadow-black/35 md:p-7',
                      'lg:max-w-2xl',
                      reversed ? 'mr-auto' : 'ml-auto',
                    )}
                    style={{ transformOrigin: 'center center' }}
                  >
                    <p className="text-bc-slate text-sm leading-relaxed md:text-base">
                      {project.description}
                    </p>
                    <ul className="text-bc-slate mt-5 space-y-3 text-sm">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-bc-accent font-mono">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="text-bc-slate/90 mt-6 border-bc-line border-t pt-5 text-sm italic">
                      <span className="text-bc-heading not-italic">Impact: </span>
                      {project.impact}
                    </p>
                  </motion.div>

                  <p
                    className={cn(
                      'text-bc-slate mt-7 font-mono text-xs leading-relaxed md:text-sm',
                      reversed ? 'text-left' : 'text-right',
                    )}
                  >
                    {project.stack.join(' · ')}
                  </p>

                  <div
                    className={cn(
                      'mt-6 flex gap-5',
                      reversed ? 'justify-start' : 'justify-end',
                    )}
                  >
                    {gh ? (
                      <a
                        href={gh}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-bc-slate hover:text-bc-accent transition-colors"
                        aria-label="View on GitHub"
                      >
                        <GitHubIcon className="size-6" />
                      </a>
                    ) : null}
                    {live ? (
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-bc-slate hover:text-bc-accent transition-colors"
                        aria-label="Open live site"
                        title="Live product"
                      >
                        <ExternalLink className="size-6" />
                      </a>
                    ) : null}
                    {liveExtra.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-bc-slate hover:text-bc-accent transition-colors"
                        aria-label={item.label}
                        title={item.label}
                      >
                        <ExternalLink className="size-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </li>
          )
        })}
      </ul>
    </MotionSection>
  )
}
