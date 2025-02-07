"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link"

const images = ["/muebles/6.jpeg", "/muebles/7.jpeg", "/muebles/8.jpeg", "/muebles/9.jpeg", "/muebles/10.jpeg"]

export default function TailoredSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-[#1e1e1e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mx-auto mb-16"
        >
          <h2 className="text-4xl text-[#8B5A2B]/90 ff-1 md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            CREADO A LA MEDIDA
            DE TU 
            <br/>ESTILO DE VIDA
          </h2>
          <p className="ff-2 text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transforma tus espacios con muebles únicos, diseñados para reflejar tu estilo, necesidades y sueños. Nuestro compromiso con la artesanía de calidad convierte tus ideas en piezas atemporales que hacen de tu hogar un lugar especial.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Tailored design ${currentIndex + 1}`}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
        </div>
        <div className="place-self-center mt-12"> 
          <Link href='/trabajos'>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-lg px-8 py-4 rounded-full text-[#1e1e1e] font-display shadow-lg hover:shadow-wood-800 transition-all duration-300 flex items-center"
        >
          Ver más trabajos <FaArrowRight className="ml-3"/>
        </motion.button>
        </Link>
        
        </div>
       
      </div>
    </section>
  )
}

