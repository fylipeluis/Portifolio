import './App.css'
import { useReveal } from './useReveal'
import Hero from './Hero/Hero'
import { Skill } from './Skills/Skill'
import { AboutMe } from './Sobre/AboutMe'
import { Projects } from './Projects/Projects'
import { Experience } from './Experience/Experience'
import { Contato } from './Contato/Contato'
import { Footer } from './Footer/Footer'

function App() {
  useReveal()

  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Experience />
      <Contato />
      <Footer />
    </>
  )
}

export default App