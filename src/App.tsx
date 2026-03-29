import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { HomePage } from '@/pages/home'

const BlogPage = lazy(async () => {
  const m = await import('@/pages/blog')
  return { default: m.BlogPage }
})

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <p className="text-muted-foreground text-sm">Loading…</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-background">
        <Navbar />
        <main>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
