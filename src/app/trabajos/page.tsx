"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import ContactSection from "../components/contact";

interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "Armario de Roble Personalizado",
    description: "Diseño elegante con detalles intrincados y acabado artesanal.",
    imageUrl: "/muebles/1.jpeg",
  },
  {
    id: 2,
    title: "Mesa de Centro Modernista",
    description: "Fusión de madera y metal con líneas limpias y formas geométricas.",
    imageUrl: "/muebles/2.jpeg",
  },
  {
    id: 3,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/3.jpeg",
  },
  {
    id: 4,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/4.jpeg",
  },
  {
    id: 5,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/5.jpeg",
  },
  {
    id: 6,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/6.jpeg",
  },
  {
    id: 7,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/7.jpeg",
  },
  {
    id:8,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/8.jpeg",
  },
  {
    id: 9,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/9.jpeg",
  },
  {
    id: 10,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/10.jpeg",
  },
  {
    id: 11,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/11.jpeg",
  },
  {
    id: 12,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/12.jpeg",
  },
  {
    id: 13,
    title: "Estantería Modular Contemporánea",
    description: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/1.jpeg",
  },
  // Agrega más trabajos según sea necesario
];

export default function Trabajos() {
  const [currentWork, setCurrentWork] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextWork = () => {
    setCurrentWork((prev) => (prev + 1) % works.length);
  };

  const prevWork = () => {
    setCurrentWork((prev) => (prev - 1 + works.length) % works.length);
  };

  const filteredWorks = works.filter((work) => work.id !== works[currentWork].id);

  return (
    <div className="min-h-screen bg-white pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 md:px-12"
      >
        <h1 id="current" className="ff-1 text-4xl md:text-6xl text-[#8B5A2B] mb-8">Nuestros Trabajos</h1>
        <p className="ff-2 text-lg md:text-xl text-[#1E1E1E] mb-12 max-w-3xl">
          Descubre nuestra colección de trabajos a medida, donde cada pieza es una obra maestra de artesanía y diseño sofisticado.
        </p>
        <div  className="relative">
          <motion.div
            key={currentWork}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={works[currentWork].imageUrl || "/placeholder.svg"}
                alt={works[currentWork].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h2 className="ff-1 text-3xl md:text-4xl text-[#8B5A2B]">{works[currentWork].title}</h2>
              <p className="ff-2 text-lg text-[#1E1E1E]">{works[currentWork].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#FFC107] text-[#8B5A2B] rounded-full font-medium hover:bg-[#FFD54F] transition-colors"
              >
                Solicitar Presupuesto
              </motion.button>
            </div>
          </motion.div>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <motion.button
              onClick={prevWork}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-[#8B5A2B] text-white rounded-full shadow-md"
            >
              <LuChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextWork}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-[#8B5A2B] text-white rounded-full shadow-md"
            >
              <LuChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
        <div className="mt-16 py-24">
          <h3 className="ff-1 text-2xl md:text-3xl text-[#8B5A2B] mb-6">Más Trabajos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredWorks.map((work) => (
              <Link href='#current' key={work.id}>
              <motion.div
                key={work.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => setCurrentWork(works.findIndex((w) => w.id === work.id))}
              >
                <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={work.imageUrl || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="ff-2 text-sm mt-2 text-[#1E1E1E] truncate">{work.title}</p>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <ContactSection/>
    </div>
  );
}