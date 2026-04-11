import type { ReactNode } from 'react'
import { IntroLoader } from '@/components/intro-loader'
import { Sidebar } from '@/components/layout/sidebar'
import { site } from '@/lib/site'

export function BcShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bc-navy text-bc-slate min-h-screen">
      <a
        href="#content"
        className="bg-bc-accent text-bc-deep focus:not-sr-only sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:rounded focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
      >
        Skip to Content
      </a>
      <IntroLoader />
      <Sidebar />
      <div className="lg:pl-[180px]">
        <div className="min-h-screen pt-[72px] lg:pt-0">
          <main
            id="content"
            className="mx-auto max-w-3xl px-6 py-12 lg:max-w-5xl lg:px-12 lg:py-24 xl:max-w-6xl"
          >
            {children}
          </main>
          <footer className="text-bc-slate/70 mx-auto max-w-3xl px-6 pb-10 text-center font-mono text-xs lg:max-w-5xl lg:px-12 xl:max-w-6xl">
            <p>© {new Date().getFullYear()} {site.name}</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
