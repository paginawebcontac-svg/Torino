"use client"

import { useState, useEffect } from "react"

const inventoryData = [
  {
    brand: "audi",
    title: "Audi A4 2.0 TFSI",
    year: 2023,
    transmission: "Automático",
    km: "18,000 km",
    fuel: "Nafta",
    price: "USD 52,000",
    image: "/img/audi A4.png",
    description: "Elegancia y rendimiento en su máxima expresión.",
  },
  {
    brand: "toyota",
    title: "Toyota Hilux SRX",
    year: 2024,
    transmission: "Automática",
    km: "0 km",
    fuel: "Diesel",
    price: "USD 48,500",
    image: "/img/Toyota hilux.jpg",
    description: "La pickup más confiable del mercado.",
  },
  {
    brand: "volkswagen",
    title: "Volkswagen Tiguan Allspace",
    year: 2023,
    transmission: "DSG",
    km: "22,000 km",
    fuel: "Nafta",
    price: "USD 44,900",
    image: "/img/tiguan.png",
    description: "Versatilidad y confort para toda la familia.",
  },
  {
    brand: "chevrolet",
    title: "Chevrolet Tracker Premier",
    year: 2024,
    transmission: "Automática",
    km: "8,000 km",
    fuel: "Nafta",
    price: "USD 32,000",
    image: "/img/tracker.avif",
    description: "Tecnología y diseño en un SUV compacto.",
  },
  {
    brand: "ford",
    title: "Ford Ranger Raptor",
    year: 2023,
    transmission: "Automática",
    km: "15,000 km",
    fuel: "Diesel",
    price: "USD 68,000",
    image: "/img/ranger.jpg",
    description: "Poder y capacidad todo terreno.",
  },
  {
    brand: "jeep",
    title: "Jeep Compass Limited",
    year: 2024,
    transmission: "Automática",
    km: "5,000 km",
    fuel: "Nafta",
    price: "USD 42,500",
    image: "/img/jeep.jpeg",
    description: "Aventura y lujo en un mismo vehículo.",
  },
  {
    brand: "audi",
    title: "Audi Q5 S-Line",
    year: 2024,
    transmission: "Automático",
    km: "12,000 km",
    fuel: "Nafta",
    price: "USD 72,000",
    image: "/img/audi q5.jpg",
    description: "Deportividad y sofisticación en formato SUV.",
  },
  {
    brand: "toyota",
    title: "Toyota Corolla XEI",
    year: 2024,
    transmission: "CVT",
    km: "0 km",
    fuel: "Nafta",
    price: "USD 28,500",
    image: "/img/toyota.webp",
    description: "El sedán más vendido del mundo.",
  },
  {
    brand: "ford",
    title: "Ford Mustang GT",
    year: 2023,
    transmission: "Manual",
    km: "8,500 km",
    fuel: "Nafta",
    price: "USD 95,000",
    image: "/img/mustang.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
]

export default function Inventory() {
  const [selectedBrand, setSelectedBrand] = useState("todos")
  const [visibleCards, setVisibleCards] = useState(new Set())

  const brands = ["todos", "audi", "toyota", "volkswagen", "chevrolet", "ford", "jeep"]

  const filteredCars =
    selectedBrand === "todos" ? inventoryData : inventoryData.filter((car) => car.brand === selectedBrand)

  useEffect(() => {
    const newVisibleCards = new Set()
    filteredCars.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => new Set(prev).add(idx))
      }, idx * 80)
    })
  }, [selectedBrand, filteredCars.length])

  return (
    <section id="inventario" className="inventory">
      <div className="section-header">
        <h2 className="section-title">Nuestro Inventario</h2>
        <p className="section-subtitle">Vehículos seleccionados cuidadosamente para usted</p>
      </div>

      <div className="filter-container">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`filter-btn ${selectedBrand === brand ? "active" : ""}`}
            onClick={() => {
              setSelectedBrand(brand)
              setVisibleCards(new Set())
            }}
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </button>
        ))}
      </div>

      <div className="inventory-grid">
        {filteredCars.map((car, idx) => (
          <div key={idx} className={`inventory-card ${visibleCards.has(idx) ? "visible" : ""}`} data-brand={car.brand}>
            <div className="inventory-image">
              <img src={car.image || "/placeholder.svg"} alt={car.title} loading="lazy" />
            </div>
            <div className="inventory-info">
              <h3>{car.title}</h3>
              <p className="inventory-year">{car.year}</p>
              <p className="inventory-description">{car.description}</p>
              <div className="inventory-specs">
                <span>
                  <i className="fas fa-cog"></i> {car.transmission}
                </span>
                <span>
                  <i className="fas fa-road"></i> {car.km}
                </span>
                <span>
                  <i className="fas fa-gas-pump"></i> {car.fuel}
                </span>
              </div>
              <div className="inventory-price">{car.price}</div>
              <button className="btn-primary btn-full">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
