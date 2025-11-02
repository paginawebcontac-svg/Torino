export default function Featured() {
  const featuredCars = [
    {
      id: 1,
      title: "Mercedes-Benz Clase E 300",
      image: "public/luxury-car.png",
      description:
        "Experimenta el lujo alemán en su máxima expresión. Este Mercedes-Benz Clase E combina elegancia, tecnología de vanguardia y un rendimiento excepcional. Equipado con todas las características premium que esperarías de la marca de la estrella.",
      year: 2024,
      transmission: "Automática 9G",
      km: "5,000 km",
      fuel: "Nafta Premium",
      price: "USD 89,900",
    },
    {
      id: 2,
      title: "BMW X5 M Sport",
      image: "public/luxury-car.png",
      description:
        "El SUV deportivo que redefine el concepto de versatilidad premium. Con su imponente presencia y tecnología de última generación, el X5 M Sport ofrece una experiencia de conducción incomparable tanto en ciudad como en ruta.",
      year: 2023,
      transmission: "Automática",
      km: "12,000 km",
      fuel: "Diesel",
      price: "USD 125,000",
    },
  ]

  return (
    <section id="destacado" className="featured">
      <div className="section-header">
        <h2 className="section-title">Vehículo Destacado</h2>
        <p className="section-subtitle">Lo mejor de nuestra selección exclusiva</p>
      </div>

      {featuredCars.map((car, idx) => (
        <div key={car.id} className="featured-car" style={idx === 1 ? { direction: "rtl" } : {}}>
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
