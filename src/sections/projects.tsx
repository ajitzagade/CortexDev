import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/lib/site'

export function Projects() {
  return (
    <MotionSection id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="High-impact work"
          subtitle="Selected highlights — real-time systems, payments, healthcare IoT, and mobile commerce."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="border-border/60 from-card/80 to-card/40 h-full overflow-hidden bg-gradient-to-br backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Layers className="size-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      Case study
                    </span>
                  </div>
                  <CardTitle className="font-display text-xl transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-primary mt-1.5">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground border-border/60 border-t pt-3 text-sm italic">
                    <span className="text-foreground font-medium not-italic">Impact: </span>
                    {project.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
