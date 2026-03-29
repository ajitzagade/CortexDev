import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type MotionSectionProps = HTMLMotionProps<'section'> & {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
