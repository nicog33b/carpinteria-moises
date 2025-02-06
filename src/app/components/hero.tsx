"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        src="/4935202_House_Furniture_3840x2160.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Gradiente de superposición */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Contenido del Hero */}
      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white/90 drop-shadow-xl ff-1">
            Diseños Exclusivos a Medida
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="mt-10"
          >
            <button
              className="inline-flex items-center gap-3 px-12 py-4 bg-[#1e1e1e]/60 hover:bg-[#1e1e1e]/80 backdrop-blur-md text-white text-xl font-semibold rounded-full 
                         shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl 
                         focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Explorar diseños personalizados"
            >
              ✨ Diseña tu hogar
              <FaArrowRight className="ml-2 text-lg" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 rounded-3xl border-4 border-white/80 flex items-start justify-center animate-bounce">
          <div className="w-2 h-3 bg-white/80 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
