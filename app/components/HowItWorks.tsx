import { Truck, Package, Utensils } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">1. Choose Your Package</h3>
            <p className="text-gray-600">Select from our variety of meal packages or create a custom selection.</p>
          </div>
          <div className="text-center">
            <Truck className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">2. Place Your Order</h3>
            <p className="text-gray-600">Order by Saturday at 12:00pm via WhatsApp: +1-786-451-2951</p>
          </div>
          <div className="text-center">
            <Utensils className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">3. Enjoy Your Meals</h3>
            <p className="text-gray-600">
              Pickup in Roma Norte or get delivery on Monday. Savor your delicious, healthy meals!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

