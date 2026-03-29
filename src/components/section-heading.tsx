import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-2xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-display text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
