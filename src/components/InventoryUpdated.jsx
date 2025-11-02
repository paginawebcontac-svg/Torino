"use client"

import { useState, useEffect } from "react"
import { useCars } from "../hooks/useCars"

export default function InventoryUpdated() {
  const { cars, loading, error } = useCars()
  const [selectedBrand, setSelectedBrand] = useState("todos")
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [openDetail, setOpenDetail] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)

  const brands = ["todos", "Fiat", "toyota", "volkswagen", "chevrolet", "ford", "jeep", "mercedes", "bmw"]

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
              setOpenDetail(null)
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
            {openDetail === car._id && (
              <div className="detail-label" role="status" aria-live="polite">
                <strong>{car.title}</strong>
                <div className="detail-row">Año: {car.year} • {car.transmission} • {car.km}</div>
                <div className="detail-row">Combustible: {car.fuel} • Precio: {car.price}</div>
                <button type="button" className="detail-close" onClick={() => setOpenDetail(null)} aria-label="Cerrar detalles">✕</button>
              </div>
            )}

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
              <button
                type="button"
                className="btn-primary btn-full"
                onClick={() => {
                  console.log('InventoryUpdated: Ver Detalles click', car._id)
                  setSelectedCar(openDetail === car._id ? null : car)
                  setOpenDetail(openDetail === car._id ? null : car._id)
                }}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="detail-modal-overlay" role="dialog" aria-modal="true">
          <div className="detail-modal">
            <button type="button" className="detail-modal-close" onClick={() => { setSelectedCar(null); setOpenDetail(null); }} aria-label="Cerrar modal">✕</button>
            <div className="detail-modal-grid">
              <div className="detail-modal-image">
                <img src={selectedCar.image || '/placeholder.svg'} alt={selectedCar.title} />
              </div>
              <div className="detail-modal-body">
                <h3>{selectedCar.title}</h3>
                <p className="detail-modal-price">{selectedCar.price}</p>
                <p className="detail-modal-desc">{selectedCar.description}</p>
                <ul className="detail-modal-specs">
                  <li><strong>Año:</strong> {selectedCar.year}</li>
                  <li><strong>Transmisión:</strong> {selectedCar.transmission}</li>
                  <li><strong>Kilometraje:</strong> {selectedCar.km}</li>
                  <li><strong>Combustible:</strong> {selectedCar.fuel}</li>
                  {selectedCar.potencia && <li><strong>Potencia:</strong> {selectedCar.potencia}</li>}
                  {selectedCar.motor && <li><strong>Motor:</strong> {selectedCar.motor}</li>}
                  {selectedCar.traccion && <li><strong>Tracción:</strong> {selectedCar.traccion}</li>}
                  {selectedCar.consumo && <li><strong>Consumo:</strong> {selectedCar.consumo}</li>}
                </ul>
                <div className="detail-modal-actions">
                  <button type="button" className="btn-primary" onClick={() => alert('Contacto solicitado para: ' + selectedCar.title)}>Solicitar info</button>
                  <button type="button" className="btn-secondary" onClick={() => { setSelectedCar(null); setOpenDetail(null); }}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
