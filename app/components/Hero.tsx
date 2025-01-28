import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2dNPOYltukJm812Sl0LQgFf6m36lWy.png"
        alt="Variety of healthy prepared meals including salads, quinoa bowls, and vegetable dishes"
        fill
        quality={100}
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <a
          href="https://www.ibrahimayub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f8e5d7] text-gray-800 text-sm font-medium italic px-3 py-1 rounded-full mb-4 inline-block hover:bg-[#f8e5d7]/90 transition-colors duration-300"
        >
          Sample Mockup by Ibrahim Ayub
        </a>
        <h1 className="text-5xl font-bold mb-6 leading-tight">Epic Foods Mexico City</h1>
        <p className="text-xl mb-8 text-gray-100">Organic • Gluten-Free • Vegan</p>
        <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Order Now
        </button>
      </div>
    </div>
  )
}

