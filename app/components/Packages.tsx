import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "All the Way There!",
    price: "4,333 MXN",
    description: "Designed for maximum energy, health and weight management",
    features: ["5 breakfasts", "5 lunches", "5 dinners", "3 soups", "4 pecan protein squares"],
  },
  {
    name: "Half Way There!",
    price: "2,777 MXN",
    description: "Perfect for supplementing your week",
    features: ["3 breakfasts", "3 lunches", "3 dinners", "2 soups", "6 energy balls"],
  },
  {
    name: "Custom Selection",
    price: "Varies",
    description: "Build your perfect meal plan",
    features: [
      "Mix and match all your favorites",
      "Tailored to your needs and schedule",
      "Flexible pricing based on selection",
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <Check className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Choose Plan</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

