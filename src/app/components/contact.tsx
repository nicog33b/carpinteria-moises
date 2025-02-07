"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import { CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

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

    emailjs
      .send(
        "service_ewsn30g", //Service ID
        "template_1usnes9", //Template ID
        {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
        "Ll0-LWo_3Z1Msbkq2" // Reemplaza con tu Public Key de EmailJS
      )
      .then(() => {
        setIsSubmitted(true)
      })
      .catch((error) => console.error("Error al enviar:", error))
  }

  const inputClasses =
    "w-full p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-[#8B5A2B] transition-all bg-[#2d2d2d] text-white"

  return (
    <section id="contactSection" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#1e1e1e] z-50">
      {/* Sección de Imagen */}
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

      {/* Sección del Formulario */}
      <div className="lg:w-1/2 w-full border-l border-white p-8 lg:p-16 flex flex-col justify-center bg-[#1e1e1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-[#FFC107]">Contáctanos ahora</h2>
          <p className="text-lg mb-6 text-gray-200">
            ¡Es hora de hacerlo realidad! Completa nuestro formulario y cuéntanos tus ideas.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="text"
                placeholder="Tu Nombre"
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                className={inputClasses}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <textarea
                placeholder="Cuéntanos qué mueble necesitas"
                rows={4}
                className={inputClasses}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FFC107" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-md font-bold text-black bg-[#FFC107] hover:shadow-xl"
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
              <h3 className="text-2xl font-bold mb-2 text-[#8B5A2B]">¡Gracias por contactarnos!</h3>
              <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
