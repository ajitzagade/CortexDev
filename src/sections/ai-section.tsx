import { Bot, Cpu, GitBranch, Sparkles, Wrench } from 'lucide-react'
import { HoverLiftLi } from '@/components/hover-lift-card'
import { MotionSection } from '@/components/motion-section'
import { BcSectionTitle } from '@/components/bc-section-title'
import { aiHighlights } from '@/lib/site'

const icons = [Sparkles, Bot, Cpu, GitBranch, Wrench]

export function AiSection() {
  return (
    <MotionSection id="ai" className="scroll-mt-28 py-20 lg:scroll-mt-12">
      <BcSectionTitle
        num="06"
        title="AI & Automation"
        subtitle="Practical AI applied to quality, performance, and delivery — measurable leverage, not hype."
      />
      <ul className="space-y-5">
        {aiHighlights.map((item, i) => {
          const Icon = icons[i] ?? Wrench
          return (
            <HoverLiftLi
              key={item.title}
              intensity="subtle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="hover:border-bc-accent/35 flex gap-4 p-5"
            >
              <div className="text-bc-accent shrink-0 transition-transform duration-300 group-hover/card:scale-110">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-bc-heading font-mono text-sm font-semibold">{item.title}</h3>
                <p className="text-bc-slate mt-2 text-sm leading-relaxed">{item.description}</p>
              </div>
            </HoverLiftLi>
          )
        })}
      </ul>
    </MotionSection>
  )
}
