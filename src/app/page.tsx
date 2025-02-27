import React from "react"
import Navbar from "./GUI/navbar"
import Hero from "./components/hero"
import ContactSection from "./components/contact"
import TailoredSection from "./components/tailored"
import BottomHero from "./components/bottomHero"
import Diseno3D from './components/disenio3d';
import WhatsAppButton from "./GUI/whatsappButton"
import ProcessTimeline from "./components/process"
import Script from "next/script"


export default function Home() {

  return (
    <main>
      <Script src="http://localhost:3000/kubot-iframe-handler.js"></Script>
      <iframe 
        id="kubot-chat-iframe"
        src="http://localhost:3000/iframe-chat/bot1"
        allow="web-share"
      ></iframe>
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

