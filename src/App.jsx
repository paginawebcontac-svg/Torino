import { ThemeProvider } from "./context/ThemeContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Featured from "./components/Featured"
import Inventory from "./components/Inventory"
import Services from "./components/Services"
import MapSection from "./components/MapSection"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Featured />
      <Inventory />
      <Services />
      <MapSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App
