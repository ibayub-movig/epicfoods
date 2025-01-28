import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import About from "./components/About"
import Packages from "./components/Packages"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Packages />
      <HowItWorks />
      <Footer />
    </div>
  )
}

