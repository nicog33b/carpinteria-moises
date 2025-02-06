"use client"

export default function Banner() {
  return (
    <div className="relative h-full w-full">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="4935202_House_Furniture_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

