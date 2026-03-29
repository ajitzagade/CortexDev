import { cn } from '@/lib/utils'

type BcSectionTitleProps = {
  num: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function BcSectionTitle({
  num,
  title,
  subtitle,
  className,
  align = 'left',
}: BcSectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-4',
          align === 'center' && 'justify-center',
        )}
      >
        <h2 className="text-bc-heading flex min-w-0 items-baseline gap-2 text-xl font-semibold tracking-tight md:text-3xl">
          <span className="text-bc-accent font-mono text-sm tabular-nums md:text-base">
            {num}.
          </span>
          <span className="whitespace-nowrap">{title}</span>
        </h2>
        {align === 'left' ? (
          <span
            className="bg-bc-line hidden h-px flex-1 md:block"
            aria-hidden
          />
        ) : null}
      </div>
      {subtitle ? (
        <p
          className={cn(
            'text-bc-slate mt-4 max-w-2xl text-base leading-relaxed',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
