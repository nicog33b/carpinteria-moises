"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import ContactSection from "../components/contact";
import { Send } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  description: string;
  detalle:string;
  imageUrl: string;    
}
const works: Work[] = [
  {
    id: 1,
    title: "Placard de Lavadero",
    description: "Este placard a medida está diseñado para organizar productos de limpieza de manera eficiente. Su estructura resistente y funcional optimiza el espacio en el lavadero.",
    detalle: "Tiradores de acero inoxidable, negro mate y bisagras autoreten de 35mm con freno.",
    imageUrl: "/muebles/1.jpeg",
  },
  {
    id: 2,
    title: "Placard de puertas corredizas",
    description: "Este placard empotrado con puertas corredizas maximiza el almacenamiento con un diseño elegante. Su estructura interna permite una organización óptima del espacio.",
    detalle: "MDF blanco 18mm y perfilería de aluminio.",
    imageUrl: "/muebles/2.jpeg",
  },
  {
    id: 3,
    title: "Guardarropa de pasillo a medida",
    description: "Un guardarropa compacto diseñado para aprovechar pasillos o espacios reducidos. Su distribución facilita el acceso y almacenamiento de ropa y accesorios.",
    detalle: "Tiradores de acero inoxidable color mate, bisagras autoreten de 35mm con freno.",
    imageUrl: "/muebles/3.jpeg",
  },
  {
    id: 4,
    title: "Escalones de finger",
    description: "Escalones de madera maciza de 35mm con acabado lustrado. Su diseño robusto y elegante brinda una solución estética y funcional para escaleras.",
    detalle: "",
    imageUrl: "/muebles/4.jpeg",
  },
  {
    id: 5,
    title: "Mueble de baño",
    description: "Este mueble de baño combina melamina negra ma,te con estantes de madera lustrada. Su diseño ofrece almacenamiento práctico y un estilo moderno.",
    detalle: "MDF 18mm negro con estantes de finger lustrados, tiradores de acero inoxidable color mate y bisagras de 35mm con freno.",
    imageUrl: "/muebles/5.jpeg",
  },
  {
    id: 6,
    title: "Juego de dormitorio infantil",
    description: "Con un diseño funcional y decorativo, este juego de dormitorio incluye un ropero amplio y un escritorio flotante. Ideal para habitaciones infantiles.",
    detalle: "Tiradores decorativos infantiles y bisagras autoreten de 35mm.",
    imageUrl: "/muebles/6.jpeg",
  },
  {
    id: 10,
    title: "Mueble de tv con almacenamiento",
    description: "Este centro de entretenimiento es un mueble d,iseñado para optimizar el espacio y la organización en una sala de estar. Su estructura combina materiales de madera y melamina en dos tonos",
    detalle:``,
    imageUrl: "/muebles/10.jpeg",
  },
  {
    id: 11,
    title: "Mueble pileta flotante a medida para baño",
    description: "Transforma tu baño con un mueble flotant,e diseñado a medida. Su estructura moderna y sin patas optimiza el espacio, aportando elegancia y funcionalidad.",
    detalle: "Sistema flexible y adaptable para espacios modernos.",
    imageUrl: "/muebles/11.jpeg",
  },
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
  // Construir el mensaje y el enlace de WhatsApp
  const message = `Hola, vengo desde tu pagina web, me ha interesado ${works[currentWork].title}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/094244685?text=${encodedMessage}`;

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
              <motion.button
                onClick={prevWork}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-[#8B5A2B] text-white rounded-full shadow-md z-10"
              >
                <LuChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextWork}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-[#8B5A2B] text-white rounded-full shadow-md z-10"
              >
                <LuChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="space-y-6">
              <h2 className="ff-1 text-3xl md:text-4xl text-[#8B5A2B]">{works[currentWork].title}</h2>
              <p className="ff-2 text-lg text-[#1E1E1E]">{works[currentWork].description}</p>
              <p className="ff-2 text-lg text-[#1E1E1E]">{works[currentWork].detalle}</p>
                <Link href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
              >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#FFC107] text-[#8B5A2B] rounded-full font-medium hover:bg-[#FFD54F] transition-colors mt-9"
              >
                  <div className="flex items-center font-bold"> 
                Solicitar Presupuesto
                <Send className="ml-3"/>
                </div>
              </motion.button>
              </Link>
             
            
              
             
            </div>
          </motion.div>
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
      </motion.div >

    <ContactSection />
    </div >
  );
}