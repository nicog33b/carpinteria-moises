'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Diseno3D() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#faf6f1] py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full">
          <pattern id="woodgrain" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 0h100v100H0z" fill="#faf6f1" />
            <path d="M20 50c0-16.6 13.4-30 30-30s30 13.4 30 30" stroke="#c37d4a" strokeWidth="2" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#woodgrain)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl ff-1 md:text-6xl xl:text-7xl font-bold text-wood-800 mb-6 font-display text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }}
        >
          Diseño Exclusivo en Madera
        </motion.h2>
        <p className="ff-2 text-xl text-[#1e1e1e] max-w-3xl mx-auto mb-12">
          Creamos piezas únicas combinando la precisión del diseño 3D con la maestría artesanal, dando vida a muebles exclusivos y personalizados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          <motion.div className="group relative rounded-2xl overflow-hidden bg-transparent">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/3d-rendering-cartoon-house.jpg"
                alt="Visualización de diseño 3D"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#4a453d] mt-6">Modelado de Precisión</h3>
            <p className="text-[#6b6257] leading-relaxed font-medium">
              Cada detalle de tu mueble es cuidadosamente esculpido en un entorno digital para garantizar un resultado impecable.
            </p>
          </motion.div>

          <motion.div className="group relative rounded-2xl overflow-hidden bg-transparent">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/architectural-blueprints.jpg"
                alt="Planos detallados"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#4a453d] mt-6">Diseño Personalizado</h3>
            <p className="text-[#6b6257] leading-relaxed font-medium">
              Adaptamos cada creación a tu espacio y estilo, asegurando una armonía perfecta entre funcionalidad y estética.
            </p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1e1e1e] text-lg px-8 py-4 rounded-full text-white font-display shadow-lg hover:shadow-wood-800 transition-all duration-300"
        >
          Pedi tu diseño
        </motion.button>
      </div>
    </section>
  );
}
