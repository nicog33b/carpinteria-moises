import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from './GUI/navbar'
import Footer from './GUI/footer'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Carpinteria Moises",
  description: "Armamos el mueble que siempre quisiste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-[#faf7f2]`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
   
    </html>
  );
}
