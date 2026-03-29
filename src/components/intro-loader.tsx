import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/lib/site'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="bg-bc-deep fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <div className="border-bc-accent/80 flex size-14 items-center justify-center rounded border-2">
              <span className="text-bc-accent font-mono text-xl font-semibold">
                {site.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')}
              </span>
            </div>
            <p className="text-bc-heading font-mono text-sm tracking-wide">{site.name}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
