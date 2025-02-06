"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuMenu, LuX } from "react-icons/lu"
import { FaChevronRight } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F5F5F5]/30 backdrop-blur-md shadow-lg py-0 m-0" : "bg-transparent"}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-3">
          {/* Menu button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#8B5A2B] bg-[#FFC107] rounded-full hover:bg-[#FFD54F] transition-colors group"
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
            <Link href='/'>
            <Image alt="Carpinteria Moises - Muebles a medida." src='/logo.png' height={250} width={250} className="rounded-full w-16 h-16"></Image>
            </Link>
          
          </motion.div>

          {/* Contact button */}
          <motion.button
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#8B5A2B] rounded-full hover:bg-[#A9703A] transition-colors group shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:inline">Contacto</span>
            <FaChevronRight className="w-4 h-4" />
          </motion.button>
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
              <nav className="space-y-6 md:space-y-8">
                {["Inicio", "Trabajos", "Sobre Nosotros", "Contacto"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-4xl md:text-6xl font-bold text-[#F5F5F5] hover:text-[#FFC107] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Contact info */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 text-sm text-[#F5F5F5] flex justify-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p>Ciudad de la Costa</p>
                <p>094 475 430</p>
                <p>admin@woodcarpinteria.uy</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}