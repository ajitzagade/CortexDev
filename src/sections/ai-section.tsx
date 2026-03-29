import { motion } from 'framer-motion'
import { Bot, Cpu, GitBranch, Sparkles, Wrench } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { aiHighlights } from '@/lib/site'

const icons = [Sparkles, Bot, Cpu, GitBranch, Wrench]

export function AiSection() {
  return (
    <MotionSection
      id="ai"
      className="scroll-mt-24 relative overflow-hidden bg-muted/40 px-4 py-20 sm:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,oklch(0.55_0.18_275/0.12),transparent_50%)]"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Innovation"
          title="AI-driven engineering & automation"
          subtitle="Practical AI applied to quality, performance, and delivery — not hype, measurable leverage."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiHighlights.map((item, i) => {
            const Icon = icons[i] ?? Wrench
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="border-border/60 bg-card/50 group flex gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}
