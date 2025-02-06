'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/muebles/1.jpeg",
  "/muebles/2.jpeg",
  "/muebles/3.jpeg",
  "/muebles/4.jpeg",
  "/muebles/5.jpeg",
];

export default function BottomHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-12"
      aria-labelledby="bottom-hero-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Contenido textual */}
          <article>
            <header className="space-y-6 md:space-y-8">
              <h1
                id="bottom-hero-title"
                className="text-4xl ff-1 md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block mb-2 md:mb-3">MUEBLES A MEDIDA,</span>
                <span className="block mb-2 md:mb-3">DISEÑADOS PARA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                  TU ESPACIO PERFECTO
                </span>
              </h1>
              <p className="ff-2 text-xl text-[#1e1e1e] max-w-3xl mx-auto mb-12">
                Creamos muebles únicos que combinan diseño, funcionalidad y la
                más alta calidad artesanal. Haz de tu hogar un espacio especial
                con piezas que cuentan tu historia.
              </p>
            </header>

            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 border-2 border-gray-900 text-gray-900 font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-xl mt-9"
            >
              Solicitar Cotización
              <svg
                className="ml-3 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </article>

          {/* Imagen destacada con animación */}
          <figure className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Mueble destacado ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <figcaption className="sr-only">
              Mueble artesanal a medida en un ambiente moderno y cálido.
            </figcaption>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-amber-50/20" />
          </figure>
        </div>
      </div>
    </section>
  );
}
