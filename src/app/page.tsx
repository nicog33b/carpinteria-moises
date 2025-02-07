import Navbar from "./GUI/navbar"
import Hero from "./components/hero"
import ContactSection from "./components/contact"
import TailoredSection from "./components/tailored"
import BottomHero from "./components/bottomHero"
import Diseno3D from './components/disenio3d';
import WhatsAppButton from "./GUI/whatsappButton"
import ProcessTimeline from "./components/process"

export default function Home() {
  return (
    <main>
      <WhatsAppButton phoneNumber="094244685" />
      <Navbar />
      <Hero />
      <BottomHero />
      <Diseno3D/>
      <TailoredSection />
      <ProcessTimeline/>
      <ContactSection />
    </main>
  )
}

