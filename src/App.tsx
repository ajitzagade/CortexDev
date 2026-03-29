import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BcShell } from '@/components/layout/bc-shell'
import { HomePage } from '@/pages/home'

const BlogPage = lazy(async () => {
  const m = await import('@/pages/blog')
  return { default: m.BlogPage }
})

function RouteFallback() {
  return (
    <div className="text-bc-slate flex min-h-[40vh] items-center justify-center px-4 font-mono text-sm">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <BcShell>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </BcShell>
    </BrowserRouter>
  )
}
