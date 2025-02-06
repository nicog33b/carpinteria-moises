import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b border-t border-white from-[#1e1e1e] to-[#392F19] text-slate-300 py-12 z-50 relative">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 mb-8 border-b border-slate-700">
          <Link href="/" className="group">
            <Image
              className="w-20 h-20 cursor-pointer rounded-full transition-transform duration-300 group-hover:scale-105"
              src="/logo.png"
              alt="Logo de la empresa"
              width={256}
              height={256}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="mt-6 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-8 text-center font-playfair">
              <li>
                <Link 
                  href="#about" 
                  className="hover:scale-105 text-lg hover:text-slate-100 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-slate-100 hover:after:w-full after:transition-all after:duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="hover:scale-105 text-lg hover:text-slate-100 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-slate-100 hover:after:w-full after:transition-all after:duration-300"
                >
                  Trabajos
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="hover:scale-105 text-lg hover:text-slate-100 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-slate-100 hover:after:w-full after:transition-all after:duration-300"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-lg  hover:text-slate-100 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-slate-100 hover:after:w-full after:transition-all after:duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex space-x-6">
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              className="hover:text-slate-100 transition-colors duration-300 hover:scale-105"
            >
              <FaInstagram className="w-7 h-7" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              className="hover:text-slate-100 transition-colors duration-300 hover:scale-105"
            >
              <FaFacebook className="w-7 h-7" />
            </Link>
          </div>

          {/* Creator Credit */}
          <Link 
            href="https://wa.me/59894272390" 
            target="_blank" 
            className="group flex items-center font-roboto text-slate-100 hover:text-slate-100 transition-colors duration-300"
          >
            <span className="mr-2">Creado por</span>
            <span className="font-medium border-b border-transparent group-hover:border-slate-100 transition-all duration-300">
              Nicolás García
            </span>
            <FaWhatsapp className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-green-300" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-slate-100 text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}