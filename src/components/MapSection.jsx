export default function MapSection() {
  return (
    <section id="ubicacion" className="map-section">
      <div className="section-header">
        <h2 className="section-title">Nuestra Ubicación</h2>
        <p className="section-subtitle">Torino Select Garage S.A.</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.952870827454!2d-64.50660179999999!3d-31.443841099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6777d805b509%3A0x40b11ebda71e371f!2sTorino%20Select%20Garage%20S.A.!5e0!3m2!1ses!2sar!4v1698894000000!5m2!1ses!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Torino Select Garage"
        ></iframe>
      </div>
    </section>
  )
}
