'use client'
import { motion } from "framer-motion"
import type React from "react"
import { FaWhatsapp } from "react-icons/fa"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = "Hello! I have a question." }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const MotionIcon = motion(FaWhatsapp)

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 }
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#16a34a",
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <MotionIcon
        className="w-8 h-8 text-white"
        animate={{
          rotate: [0, -10, 12, -9, 0],
          transition: { 
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 2
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.button>
  )
}

export default WhatsAppButton