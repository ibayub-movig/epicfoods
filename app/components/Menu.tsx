import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const menuCategories = [
  {
    title: "Breakfast",
    price: "From 165 MX",
    description: "Start your day right with our nutritious breakfast options.",
    examples: ["TOFURIZO SCRAMBLE", "OVERNIGHT OATS"],
    icon: "🍳",
  },
  {
    title: "Lunch & Dinner",
    price: "From 275 MX",
    description: "Delicious and satisfying meals for any time of day.",
    examples: ["THAI BOWL", "GREEK BOWL"],
    icon: "🥗",
  },
  {
    title: "Soups",
    price: "From 185 MX",
    description: "Warm, comforting, and packed with nutrients.",
    examples: ["CREAMY LENTIL SOUP", "CREAMY GREEN SOUP"],
    icon: "🍲",
  },
  {
    title: "Snacks & Treats",
    price: "From 285 MX",
    description: "Healthy indulgences to keep you going.",
    examples: ["ENERGY BALLS", "PECAN PROTEIN SQUARE"],
    icon: "🍪",
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary flex items-center">
                    <span className="mr-2 text-3xl">{category.icon}</span>
                    {category.title}
                  </h3>
                  <span className="text-gray-600 font-medium">{category.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Popular items:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {category.examples.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            View Full Menu
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

