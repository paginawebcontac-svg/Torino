"use client"

import { useState, useEffect } from "react"

const inventoryData = [
  {
    brand: "Fiat",
    title: 'Fiat Cronos 1.8 Precision Pack Premium AT (L21)',
    year: 2021,
    transmission: "Automático",
    km: "10.9000 Km",
    fuel: "Nafta",
    price: "$ 21.500.000",
    image: "public/Cronos.jpg",
    potencia:'130 cv',
    motor:'1.8lts',
    traccion:'Delantera',
    consumo:'8.4 L/100km',
    description: "Elegancia y rendimiento en su máxima expresión.",
  },
  {
    brand: "toyota",
    title: "Toyota Corolla 1.8 Se-g AT (L08)",
    year: 2009,
    transmission: "Automática",
    km: "212.000 Km",
    fuel: "Diesel",
    price: "$ 13.500.000",
    motor:'1.8lts',
    potencia:'132 cv',
    traccion:'Delantera',
    consumo:'9.0 L/100km',
    image: "public/corolla.jpg",
    description: "La pickup más confiable del mercado.",
  },
  {
    brand: "fiat",
    title: "Fiat Pulse 1.0T Impetus CVT",
    year: 2022,
    transmission: "Automática",
    km: " 52.000 Km",
    fuel: "Nafta",
    price: "$ 28.500.000",
    image: "public/fiat pulse.jpg",
    motor:'1.0lts',
    potencia:'120 cv',
    traccion:'Delantera',
    consumo:'7.5 L/100km',
    description: "Versatilidad y confort para toda la familia.",
  },
  {
    brand: "chevrolet",
    title: "Chevrolet Onix LT 1.4 98cv (L17)",
    year: 2019,
    transmission: "Manual",
    km: " 73.000 Km",
    fuel: "Nafta",
    price: "$ 18.500.000",
    potencia:'98 cv',
    motor:'1.4lts',
    traccion:'Delantera',
    consumo:'8.4 L/100km',
    image: "public/onix.jpg",
    description: "Tecnología y diseño en un SUV compacto.",
  },
   {
    brand: "chevrolet",
    title: "Chevrolet Celta Advantage 1.4 N 5ptas Pack (L13)",
    year: 2015,
    transmission: "Manual",
    km: "13.9000 Km",
    fuel: "GNC",
    price: "$ 11.500.000",
    potencia:'92 cv',
    motor:'1.4lts',
    traccion:'Delantera',
    consumo:'8.9 L/100km',
    image: "public/celta.jpg",
    description: "Tecnología y diseño en un SUV compacto.",
  },
  {
    brand: "ford",
    title: "Ford EcoSport KD 1.5 Freestyle (L18)",
    year: 2018,
    transmission: "Manual",
    km: "10.8000 Km",
    fuel: "Diesel",
    price: "$ 20.900.000",
    motor:'1.5lts',
    potencia:'123 cv',
    traccion:'Delantera',
    consumo:'5.2 L/100km',
    image: "public/Ecosport.jpg",
    description: "Poder y capacidad todo terreno.",
  },
  {
    brand: "ford",
    title: "Ford Fiesta KD (L10) 1.6 5ptas Titanium",
    year: 2013,
    transmission: "Manual",
    km: " 152000 Km",
    fuel: "Nafta",
    price: "$ 13.900.000",
    image: "public/fiesta.jpg",
    motor:'1.6lts',
    potencia:'120 cv',
    traccion:'Delantera',
    consumo:'8.3 L/100km',
    description: "Aventura y lujo en un mismo vehículo.",
  },
  {
    brand: "volkswagen",
    title: "Volkswagen Amarok (L17) 2.0TD 4x2 C/D Trendline 140cv",
    year: 2023,
    transmission: "Manual",
    km: "82000 Km",
    fuel: "Diesel",
    price: "$ 33.900.000 ",
    image: "public/amarrok.jpg",
    motor:'2.0lts',
    potencia:'140 cv',
    traccion:'Tracera',
    consumo:'7.6 L/100km',
    description: "Deportividad y sofisticación en formato SUV.",
  },
  {
    brand: "toyota",
    title: "Toyota Etios 1.5 4ptas X",
    year: 2015,
    transmission: "Manual",
    km: "14.3000 Km",
    fuel: "Nafta",
    price: "$ 13.500.000",
    motor:'1.5lts',
    potencia:'90 cv',
    traccion:'Delantera',
    consumo:'9.1 L/100km',
    image: "public/ETIOS.jpg",
    description: "El sedán más vendido del mundo.",
  },
  {
    brand: "reault",
    title: "Renault Sandero 1.6 16V Confort (L11)",
    year: 2012,
    transmission: "Manual",
    km: "157.000 Km",
    fuel: "GNC",
    price: "$ 11.500.000",
    image: "public/sandero.jpg",
    motor:'1.6lts',
    potencia:'105 cv',
    traccion:'Delantera',
    consumo:'6.0 L/100km',
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "ram",
    title: "RAM 1500 Laramie 5.7 4x4 C/D",
    year: 2018,
    transmission: "Automatica",
    km: "13.000 Km",
    fuel: "Nafta",
    price: "U$ 39.000",
    motor:'5.7lts',
    potencia:'395 cv',
    traccion:'4x4',
    consumo:'13.5 L/100km',
    image: "public/RAM.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "bmw",
    title: "BMW X1 Xline 25 I Xdrive",
    year: 2017,
    transmission: "Automatica",
    km: "10.1000 Km",
    fuel: "Nafta",
    price: "U$ 32.000",
    motor:'2.0lts',
    potencia:'231 cv',
    traccion:'4x4',
    consumo:'6.5 L/100km',
    image: "public/bmw.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
    {
    brand: "Mini",
    title: "Mini Cooper Pepper",
    year: 2011,
    transmission: "Manual",
    km: '13.9000 Km',
    fuel: "Nafta",
    price: ' U$ 13.900',
    motor:'1.6lts',
    potencia:'120 cv',
    traccion:'Delantera',
    consumo:'4.7 L/100km',
    image: "public/mini.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
    {
    brand: "citroen",
    title: "Citroen C3 Shine 1.6 VTI AT (L16)",
    year: 2019,
    transmission: "Automatica",
    km: '51.000 Km',
    fuel: "Nafta",
    price: ' U$ 13.900',
    motor:'1.6lts',
    potencia:'115 cv',
    traccion:'Delantera',
    consumo:'6.3 L/100km',
    image: "public/citroen.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
   {
    brand: "citroen",
    title: "Citroen C5 Aircross 1.6 THP Feel Pack AT 165cv (L20)",
    year: 2021,
    transmission: "Automatica",
    km: ' 74.000 Km',
    fuel: "Nafta",
    price: ' $ 34.900.000',
    motor:'1.6lts',
    potencia:'165 cv',
    traccion:'Delantera',
    consumo:'7.8 L/100km',
    image: "public/aircross.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "volkswagen",
    title: "Volkswagen Golf 1.6 Comfortline",
    year: 2005,
    transmission: "Manual",
    km: ' 202.000 Km',
    fuel: "Nafta",
    price: ' $ 9.500.000',
    motor:'1.6lts',
    potencia:'100 cv',
    traccion:'Delantera',
    consumo:'5.2 L/100km',
    image: "public/golf.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
    {
    brand: "reault",
    title: "Renault Alaskan 2.3 TDI Intens 4x4",
    year: 2022,
    transmission: "Manual",
    km: ' 54.000 Km',
    fuel: "Diesel",
    price: '$ 35.500.000',
    motor:'2.3lts',
    potencia:'190 cv',
    traccion:'4x4',
    consumo:'10.0 L/100km',
    image: "public/alaskan.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
    {
    brand: "volkswagen",
    title: "Volkswagen Vento 2.5 Advance Plus Tiptronic 170cv (L15)",
    year: 2015,
    transmission: "Automatica",
    km: ' 170.000 Km',
    fuel: "Nafta",
    price: '$ 20.500.000',
    motor:'2.0lts',
    potencia:'170 cv',
    traccion:'Delantera',
    consumo:'8.5 L/100km',
    image: "public/vento.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "toyota",
    title: "Toyota Land Cruiser Prado 4.0 AT VX",
    year: 2012,
    transmission: "Automatica",
    km: ' 158.000 Km',
    fuel: "Nafta",
    price: 'U$ 37.000',
    motor:'4.0lts',
    potencia:'275 cv',
    traccion:'4x4',
    consumo:'10.8 L/100km',
    image: "public/toyota.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "renault",
    title: "Renault Duster Fase II 2.0 4x2 Privilege 143cv (L15)",
    year: 2019,
    transmission: "Manual",
    km: ' 124.000 Km',
    fuel: "GNC",
    price: '$ 21.000.000',
    motor:'2.0lts',
    potencia:'143 cv',
    traccion:'Delantera',
    consumo:'8.5 L/100km',
    image: "public/duster.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "chevrolet",
    title: "Chevrolet Spin LTZ 1.8 5AS 105cv",
    year: 2013,
    transmission: "Manual",
    km: ' 146.000 Km',
    fuel: "Nafta",
    price: '$ 13.000.000 ',
    motor:'1.8lts',
    potencia:'105 cv',
    traccion:'Delantera',
    consumo:'10.4 L/100km',
    image: "public/spin.jpg",
    description: "Ícono americano de potencia y estilo.",
  },
  {
    brand: "ford",
    title: "Ford EcoSport KD 1.5 Freestyle (L18)",
    year: 2015,
    transmission: "Manual",
    km: "83.000 Km",
    fuel: "Nafta",
    price: "$ 17.900.000 ",
    motor:'2.0lts',
    potencia:'143 cv',
    traccion:'Delantera',
    consumo:'9.1 L/100km',
    image: "public/ecoesport-2.jpg",
    description: "Poder y capacidad todo terreno.",
  },
  {
    brand: "ford",
    title: "Ford Ka 1.0 Fly Plus (L11)",
    year: 2013,
    transmission: "Manual",
    km: "151.000 Km",
    fuel: "Nafta",
    price: "$ 9.500.000 ",
    motor:'1.0lts',
    potencia:'63 cv',
    traccion:'Delantera',
    consumo:'S/D',
    image: "public/ford k.jpg",
    description: "Poder y capacidad todo terreno.",
  },
  {
    brand: "peugeot",
    title: "Peugeot 308 1.6 Active",
    year: 2012,
    transmission: "Manual",
    km: "156.000 Km",
    fuel: "Nafta",
    price: "$ 12.500.000 ",
    motor:'1.6lts',
    potencia:'115 cv',
    traccion:'Delantera',
    consumo:'6.4 lts / 100km',
    image: "public/308.jpg",
    description: "Poder y capacidad todo terreno.",
  },
  {
    brand: "fiat",
    title: "Fiat Cronos 1.3 Precision CVT (L22)",
    year: 2023,
    transmission: "Automatica",
    km: "49000 Km",
    fuel: "Nafta",
    price: "$ 23.500.000  ",
    motor:'1.6lts',
    potencia:'99 cv',
    traccion:'Delantera',
    consumo:'1.3 lts / 100km',
    image: "public/cronos-2.jpg",
    description: "Poder y capacidad todo terreno.",
  },
]

export default function Inventory() {
  const [selectedBrand, setSelectedBrand] = useState("todos")
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [openDetail, setOpenDetail] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)

  const brands = ["todos", "Fiat", "toyota", "volkswagen", "chevrolet", "ford", "jeep"]

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
              setOpenDetail(null)
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
              <button
                type="button"
                className="btn-primary btn-full"
                onClick={() => {
                  console.log('Inventory: Ver Detalles click', idx)
                  setSelectedCar(openDetail === idx ? null : car)
                  setOpenDetail(openDetail === idx ? null : idx)
                }}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* modal: show selectedCar */}
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
