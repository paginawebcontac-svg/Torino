"use client"

import { useEffect } from "react"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector(".hero-bg")
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>TORINO</h1>
        <p className="hero-subtitle">Vendemos Confianza</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection("inventario")}>
            Ver Inventario
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection("ubicacion")}>
            Visitanos
          </button>
        </div>
      </div>
    </section>
  )
}
