import { motion } from 'framer-motion'
import { MotionSection } from '@/components/motion-section'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/lib/site'

export function Skills() {
  return (
    <MotionSection id="skills" className="scroll-mt-24 bg-muted/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Depth across the stack"
          subtitle="Categorized capabilities — from client and mobile to platform, data, and delivery."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Card className="border-border/60 bg-card/50 h-full backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-base">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {cat.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
