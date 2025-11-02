"use client"

import { useState, useEffect } from "react"
import { useCars } from "../hooks/useCars"

export default function InventoryUpdated() {
  const { cars, loading, error } = useCars()
  const [selectedBrand, setSelectedBrand] = useState("todos")
  const [visibleCards, setVisibleCards] = useState(new Set())

  const brands = ["todos", "audi", "toyota", "volkswagen", "chevrolet", "ford", "jeep", "mercedes", "bmw"]

  const filteredCars = selectedBrand === "todos" ? cars : cars.filter((car) => car.brand === selectedBrand)

  useEffect(() => {
    const newVisibleCards = new Set()
    filteredCars.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => new Set(prev).add(idx))
      }, idx * 80)
    })
  }, [selectedBrand, filteredCars.length])

  if (loading) {
    return (
      <div className="inventory">
        <p>Cargando vehículos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="inventory">
        <p>Error: {error}</p>
      </div>
    )
  }

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
          <div
            key={car._id}
            className={`inventory-card ${visibleCards.has(idx) ? "visible" : ""}`}
            data-brand={car.brand}
          >
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
