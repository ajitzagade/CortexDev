export function BelowFoldPlaceholder() {
  return (
    <div
      className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6"
      aria-hidden
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4">
          <div className="bg-muted h-4 w-28 animate-pulse rounded-md" />
          <div className="bg-muted h-10 max-w-md animate-pulse rounded-lg" />
          <div className="bg-muted/70 h-24 animate-pulse rounded-xl" />
        </div>
      ))}
    </div>
  )
}
