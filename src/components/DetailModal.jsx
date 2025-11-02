"use client"

import React from "react"

export default function DetailModal({ car, onClose }) {
  if (!car) return null

  return (
    <div className="detail-modal-overlay" role="dialog" aria-modal="true">
      <div className="detail-modal">
        <button type="button" className="detail-modal-close" onClick={onClose} aria-label="Cerrar modal">✕</button>
        <div className="detail-modal-grid">
          <div className="detail-modal-image">
            <img src={car.image || '/placeholder.svg'} alt={car.title} />
          </div>
          <div className="detail-modal-body">
            <h3>{car.title}</h3>
            <p className="detail-modal-price">{car.price}</p>
            <p className="detail-modal-desc">{car.description}</p>
            <ul className="detail-modal-specs">
              <li><strong>Año:</strong> {car.year}</li>
              <li><strong>Transmisión:</strong> {car.transmission}</li>
              <li><strong>Kilometraje:</strong> {car.km}</li>
              <li><strong>Combustible:</strong> {car.fuel}</li>
              {car.potencia && <li><strong>Potencia:</strong> {car.potencia}</li>}
              {car.motor && <li><strong>Motor:</strong> {car.motor}</li>}
              {car.traccion && <li><strong>Tracción:</strong> {car.traccion}</li>}
              {car.consumo && <li><strong>Consumo:</strong> {car.consumo}</li>}
            </ul>
            <div className="detail-modal-actions">
              <button type="button" className="btn-primary" onClick={() => alert('Contacto solicitado para: ' + car.title)}>Solicitar info</button>
              <button type="button" className="btn-secondary" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
