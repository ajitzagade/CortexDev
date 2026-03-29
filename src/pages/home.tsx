import { lazy, Suspense } from 'react'
import { BelowFoldPlaceholder } from '@/components/below-fold-placeholder'
import { Seo } from '@/components/seo'
import { Hero } from '@/sections/hero'

const HomeBelowFold = lazy(async () => import('@/pages/home-below-fold'))

export function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <Suspense fallback={<BelowFoldPlaceholder />}>
        <HomeBelowFold />
      </Suspense>
    </>
  )
}
