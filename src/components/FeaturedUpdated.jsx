"use client"

import { useFeaturedCars } from "../hooks/useCars"

export default function FeaturedUpdated() {
  const { cars, loading, error } = useFeaturedCars()

  if (loading) {
    return (
      <section className="featured">
        <p>Cargando destacados...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="featured">
        <p>Error: {error}</p>
      </section>
    )
  }

  return (
    <section id="destacado" className="featured">
      <div className="section-header">
        <h2 className="section-title">Vehículo Destacado</h2>
        <p className="section-subtitle">Lo mejor de nuestra selección exclusiva</p>
      </div>

      {cars.map((car, idx) => (
        <div key={car._id} className="featured-car" style={idx === 1 ? { direction: "rtl" } : {}}>
          <div className="car-image-container">
            <img src={car.image || "/placeholder.svg"} alt={car.title} />
          </div>
          <div className="car-details" style={idx === 1 ? { direction: "ltr" } : {}}>
            <h3>{car.title}</h3>
            <p className="car-description">{car.description}</p>
            <div className="car-specs-grid">
              <div className="spec-item">
                <span className="spec-label">Año</span>
                <span className="spec-value">{car.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Transmisión</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Kilometraje</span>
                <span className="spec-value">{car.km}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Combustible</span>
                <span className="spec-value">{car.fuel}</span>
              </div>
            </div>
            <div className="car-price">{car.price}</div>
            <button className="btn-primary">Solicitar Información</button>
          </div>
        </div>
      ))}
    </section>
  )
}
