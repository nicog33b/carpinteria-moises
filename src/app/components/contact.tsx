"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import { CheckCircle } from "lucide-react"
import type React from "react" // Added import for React

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setIsSubmitted(true)
  }

  const inputClasses =
    "w-full p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-[#8B5A2B] transition-all bg-[#2d2d2d] text-white"

  return (
    <section id="contactSection" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#F5F5DC]  z-50">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/furniture-contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#8B5A2B] bg-opacity-40" />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full border-l border-white p-8 lg:p-16 flex flex-col justify-center bg-[#1e1e1e]
">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-[#8B5A2B] ff-1">
          Contáctanos ahora
          </h2>
          <p className="text-lg mb-6 text-gray-200 ff-2">
          ¡Es hora de hacerlo realidad! Completa nuestro formulario de contacto y déjanos conocer tus ideas.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6 ff-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <input
                  type="tel"
                  placeholder="Teléfono de contacto"
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <textarea
                  placeholder="Cuéntanos qué mueble necesitas"
                  rows={4}
                  className={inputClasses}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ff8f37bc" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-md font-bold text-white transition-all shadow-lg bg-[#ff8f07bc] hover:shadow-xl"
              >
              Enviar
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold mb-2 text-[#003366] ff-1">¡Gracias por contactarnos!</h3>
              <p className="text-gray-600 ff-2">
                Nos pondremos en contacto contigo pronto para diseñar tu mueble ideal.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Benefits */}
        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            "Muebles a medida diseñados según tu espacio.",
            "Materiales de alta calidad que garantizan durabilidad.",
            "Envío y montaje sin preocupaciones.",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-6 h-6 bg-[#8B5A2B] text-white flex items-center justify-center rounded-full font-bold">
                ✓
              </span>
              <p className="ff-2 text-gray-300">
                <strong>{benefit.split(" ").slice(0, 2).join(" ")}</strong>
                {" " + benefit.split(" ").slice(2).join(" ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

