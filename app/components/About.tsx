import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8e5d7]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Chef Fernanda</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-fernanda.jpg-Asl8vgLfJ9tG0e4I8Kqv93lgulUe1y.jpeg"
              alt="Chef Fernanda surrounded by cookbooks"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="mb-6 text-lg leading-relaxed text-gray-800">
              Mexican chef specializing in nutrient-dense, vegan, and gluten-free cuisine. After running Miami's first
              vegan & gluten-free restaurant, I now offer personalized meal delivery in Mexico City.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              My prediabetes diagnosis at 15 sparked my passion for healing through food, leading me to create delicious
              options for those with dietary restrictions or seeking clean eating alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

