import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { hoverLiftShadow, hoverLiftSpring } from '@/lib/hover-motion'
import { cn } from '@/lib/utils'

type HoverLiftCardProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
  /** Slightly subtler motion for dense grids */
  intensity?: 'default' | 'subtle'
}

/**
 * Card shell: lift + scale + cyan glow on hover, optional shine sweep.
 */
export function HoverLiftCard({
  children,
  className,
  intensity = 'default',
  ...props
}: HoverLiftCardProps) {
  const lift = intensity === 'subtle' ? -5 : -8
  const scale = intensity === 'subtle' ? 1.012 : 1.022

  return (
    <motion.div
      whileHover={{
        y: lift,
        scale,
        boxShadow: hoverLiftShadow,
      }}
      transition={hoverLiftSpring}
      className={cn(
        'group/card border-bc-line bg-bc-light-navy/40 relative overflow-hidden rounded-lg border',
        'cursor-default',
        className,
      )}
      style={{ transformOrigin: 'center center' }}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#64ffda]/[0.09] to-transparent opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover/card:translate-x-[120%] group-hover/card:opacity-100"
      />
      <div className="relative z-[1] min-w-0 w-full">{children}</div>
    </motion.div>
  )
}

type HoverLiftLiProps = HTMLMotionProps<'li'> & {
  children: ReactNode
  className?: string
  intensity?: 'default' | 'subtle'
}

export function HoverLiftLi({
  children,
  className,
  intensity = 'default',
  ...props
}: HoverLiftLiProps) {
  const lift = intensity === 'subtle' ? -4 : -7
  const scale = intensity === 'subtle' ? 1.01 : 1.018

  return (
    <motion.li
      whileHover={{
        y: lift,
        scale,
        boxShadow: hoverLiftShadow,
      }}
      transition={hoverLiftSpring}
      className={cn(
        'group/card border-bc-line bg-bc-light-navy/30 relative list-none overflow-hidden rounded-lg border',
        'cursor-default',
        className,
      )}
      style={{ transformOrigin: 'center center' }}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#64ffda]/[0.08] to-transparent opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover/card:translate-x-[120%] group-hover/card:opacity-100"
      />
      <div className="relative z-[1] min-w-0 w-full">{children}</div>
    </motion.li>
  )
}
