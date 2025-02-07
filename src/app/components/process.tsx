"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Building2, HardHat } from "lucide-react"

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Brain,
      title: "Análisis Estratégico",
      description:
        "Exploramos a fondo tus aspiraciones y metas. Iniciamos comprendiendo la esencia de tu visión para construir una base sólida que guiará todo el proceso creativo.",
    },
    {
      icon: Palette,
      title: "Conceptualización Creativa",
      description:
        "Transformamos la información en ideas tangibles. Nuestro equipo desarrolla propuestas innovadoras y diseños únicos que materializan tu visión en conceptos concretos.",
    },
    {
      icon: Building2,
      title: "Implementación Técnica",
      description:
        "Convertimos los conceptos en realidad. En esta fase, cada elemento se desarrolla con precisión, asegurando que cada componente cumpla con los más altos estándares de calidad.",
    },
    {
      icon: HardHat,
      title: "Soporte Continuo",
      description:
        "La entrega es solo el comienzo. Mantenemos un compromiso constante, ofreciendo seguimiento dedicado y soporte integral para garantizar el éxito a largo plazo.",
    },
  ]

  return (
    <div className="w-full mx-auto px-4 py-24 bg-gradient-to-b border-b border-t border-white bg-[#1e1e1e] text-white">
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10"
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full border-2 border-primary/20 animate-pulse" />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium px-2 py-1 rounded-full"
              >
                {index + 1}
              </motion.span>
              <h3 className="text-xl font-semibold mb-3 text-[#8B5A2B]">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

