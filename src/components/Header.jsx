"use client"

import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Destacado", id: "destacado" },
    { label: "Inventario", id: "inventario" },
    { label: "Servicios", id: "servicios" },
    { label: "Ubicación", id: "ubicacion" },
  ]

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="./logo-torino.jpg" alt="Logo Torino" className="logo-image" />
          <span className="logo-text">TORINO</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`}></i>
        </button>
        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas fa-${mobileMenuOpen ? "times" : "bars"}`}></i>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
