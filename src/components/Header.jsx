"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import "./Header.css"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    }

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [])

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
    <header style={{ position: isMobile ? 'relative' : 'fixed' }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0.5rem' : '1rem'
      }}>
        <div className="logo">
          <img src="./logo-torino.jpg" alt="Logo Torino" className="logo-image" />
          <span className="logo-text">TORINO</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            <i className={`fas fa-${theme === "dark" ? "sun" : "moon"}`}></i>
          </button>
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
          >
            <i className={`fas fa-${mobileMenuOpen ? "times" : "bars"}`}></i>
          </button>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`} style={{
          display: isMobile ? (mobileMenuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? 0 : 'auto',
          right: isMobile ? 0 : 'auto',
          backgroundColor: 'var(--bg-primary)',
          padding: window.innerWidth <= 768 ? '1rem' : 0,
          boxShadow: window.innerWidth <= 768 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
          zIndex: 1000
        }}>
          {navLinks.map((link) => (
            <li key={link.id} style={{
              margin: isMobile ? '0.5rem 0' : '0 1rem'
            }}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
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
