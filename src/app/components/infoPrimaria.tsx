import React from "react";
import Image from "next/image";

export const InfoPrimaria=()=>{
return(
    <>
     <section className="min-h-screen bg-[#f8f7f5] flex items-center">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-gray-900">
              OUR
              <br />
              COMMITMENT TO
              <br />
              EXCELLENCE
            </h1>
            <h2 className="text-sm font-medium tracking-wide uppercase text-gray-900">
              GUARANTEED SATISFACTION WITH
              <br />
              EVERY CLEAN.
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-md">
            We promise perfection, but should you find anything amiss, we'll make it right immediately. From our
            eco-friendly cleaning solutions to our meticulously vetted professionals, your peace of mind is our top
            priority.
          </p>
          <button className="px-6 py-3 text-sm font-medium rounded-full bg-[#f2ebe3] text-gray-900 hover:bg-[#e9e0d5] transition-colors">
            DISCOVER MORE
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MbXOVAf27n2Ts8Cs5G7F5xt3FAJNXD.png"
            alt="Modern living room with leather sofa and art gallery wall"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
    </>
)
}
