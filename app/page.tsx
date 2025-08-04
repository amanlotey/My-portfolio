import Profile from '@/components/Profile'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MagneticCursor from '@/components/ui/MagneticCursor'

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <section id="profile"><Profile /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}
