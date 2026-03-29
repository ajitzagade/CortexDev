import { About } from '@/sections/about'
import { AiSection } from '@/sections/ai-section'
import { Contact } from '@/sections/contact'
import { Experience } from '@/sections/experience'
import { Leadership } from '@/sections/leadership'
import { Projects } from '@/sections/projects'
import { Skills } from '@/sections/skills'

export default function HomeBelowFold() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <AiSection />
      <Contact />
    </>
  )
}
