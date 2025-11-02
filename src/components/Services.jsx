"use client"

import { useEffect, useState } from "react"
import "./Services.css"

export default function Services() {
  const [visibleServices, setVisibleServices] = useState(new Set())

  const services = [
    {
      number: "01",
      title: "Financiación",
      description:
        "Planes de financiamiento personalizados con las mejores tasas del mercado. Trabajamos con los principales bancos del país.",
    },
    {
      number: "02",
      title: "Permuta",
      description:
        "Recibimos tu vehículo usado como parte de pago. Tasación justa y transparente realizada por expertos.",
    },
    {
      number: "03",
      title: "Garantía Oficial",
      description: "Todos nuestros vehículos cuentan con garantía de fábrica y servicio técnico autorizado disponible.",
    },
    {
      number: "04",
      title: "Asesoramiento",
      description:
        "Equipo de profesionales capacitados para ayudarte a encontrar el vehículo ideal según tus necesidades.",
    },
  ]

  useEffect(() => {
    // Comprobar si es un dispositivo móvil
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // En móvil, mostrar todos los servicios inmediatamente
      setVisibleServices(new Set([0, 1, 2, 3]));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleServices((prev) => new Set(prev).add(idx))
              }, idx * 80)
            }
          })
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      )

      const cards = document.querySelectorAll(".service-card")
      cards.forEach((card) => observer.observe(card))

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section id="servicios" className="services-section">
      <div className="services-header">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-subtitle">Soluciones integrales para tu vehículo</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`service-card ${visibleServices.has(idx) ? "visible" : ""}`}
          >
            <div className="service-number">{service.number}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
