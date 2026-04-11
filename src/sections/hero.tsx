import { motion } from 'framer-motion'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const linkClass =
  'text-bc-accent font-mono text-sm transition-colors hover:text-bc-heading focus-visible:ring-bc-accent rounded outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]'

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-8rem)] flex-col justify-center gap-5 lg:min-h-[85vh]"
    >
      <motion.p
        className="text-bc-accent font-mono text-sm tracking-wide"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-bc-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {site.name}.
      </motion.h1>
      <motion.h2
        className="text-bc-slate max-w-[20ch] text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {site.headline}
      </motion.h2>
      <motion.div
        className="text-bc-slate max-w-xl space-y-4 text-base leading-relaxed md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.18 }}
      >
        <p>{site.subtext}</p>
        <p className="font-mono text-sm">
          {site.location} · {site.experienceYears} years building products
        </p>
        <p className="font-mono text-sm">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-bc-accent hover:text-bc-heading transition-colors underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
          <span className="text-bc-slate/80"> · WhatsApp</span>
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-x-8 gap-y-3 pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.25 }}
      >
        <a href="#projects" className={cn(linkClass)}>
          View projects
        </a>
        <a
          href="/resume.pdf"
          download="Ajit-Zagade-Resume.pdf"
          type="application/pdf"
          className={cn(linkClass)}
        >
          Download resume
        </a>
        <a href="#contact" className={cn(linkClass)}>
          Contact
        </a>
      </motion.div>
    </section>
  )
}
