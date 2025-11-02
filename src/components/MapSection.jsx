export default function MapSection() {
  return (
    <section id="ubicacion" className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.736088947934!2d-64.49876!3d-31.416667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d66c76dd3fa59%3A0x8d8f4b8d8a8a8a8a!2sYour%20Business!5e0!3m2!1ses!2sar!4v1635789012345!5m2!1ses!2sar"
          allowFullScreen=""
          loading="lazy"
          title="Ubicación Torino Motors"
        ></iframe>
      </div>
    </section>
  )
}
