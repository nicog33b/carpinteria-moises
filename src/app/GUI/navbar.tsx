"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuMenu, LuX } from "react-icons/lu"
import { FaChevronRight } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function ReziseMobile() {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', ReziseMobile);

    return () => {
      window.addEventListener('resize', ReziseMobile);
    }

  }, [])


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F5F5F5]/30 backdrop-blur-md shadow-lg py-0 m-0" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-1">
          
          
          <motion.button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#1e1e1e] hover:bg-[#A9703A] rounded-full transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:inline">Menu</span>
            <LuMenu className="w-5 h-5" />
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Link href="/">
              <Image
                alt="Carpinteria Moises - Muebles a medida."
                src="/logo.png"
                height={250}
                width={250}
                className="rounded-full w-16 h-16"
              />
            </Link>
          </motion.div>

          <Link href='/contacto'>
            <motion.button
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#1e1e1e] rounded-full hover:bg-[#A9703A] transition-colors group shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            // onClick={() =>
            //   window.open("https://wa.me/59894244685?text=Hola!", "_blank")
            // }
            >
              <span className="md:inline">Contacto</span>
              <FaChevronRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#1E1E1E]/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center h-full px-6 md:px-16 text-center">
              {/* Close button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 md:top-12 md:right-12 p-2 text-[#F5F5F5] hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <LuX className="w-8 h-8" />
              </motion.button>

              {/* Menu links */}

              <Image src='/logo.png' width={90} height={90} alt='Carpinteria Andres Moises muebles a medida' className="w-24 mb-6 rounded-full"/>
              
              <nav className="space-y-6 md:space-y-8 mb-12">
                {[
                  { name: "Inicio", url: "/" },
                  { name: "Trabajos", url: "/trabajos" },
                  { name: "Contacto", url: "/contacto" }
                ].map(
                  (item, index) => (
                    <motion.a
                      key={index}
                      href={item.url}
                      className="block text-4xl md:text-6xl font-bold text-[#F5F5F5] hover:text-[#FFC107] transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                    </motion.a>
                  )
                )}
              </nav>

              <motion.div
                className="absolute bottom-8 left-0 right-0 text-sm justify-center text-[#F5F5F5] flex md:flex-row flex-col  items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FFC107]" />
                  <p>Pando</p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#FFC107]" />
                  <p>094 244 685</p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#FFC107]" />
                  <p>carpinteriamoises@gmail.com</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
