export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Torino Motors</h3>
          <p>
            Concesionario oficial con más de 35 años de trayectoria en el mercado automotor argentino. Comprometidos con
            la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>
            <strong>Dirección:</strong>
            <br />
            Av. Ramón J. Cárcano 1608, X5152 Villa Carlos Paz, Córdoba
          </p>
          <p>
            <strong>Teléfono:</strong>
            <br />
            0351 15-242-9960
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            <a href="mailto:info@torinomotors.com">info@torinomotors.com</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Horarios</h3>
          <ul>
            <li>Lunes: 4 a.m.-8 p.m.</li>
            <li>Martes a Viernes: 9 a.m.-1 p.m., 4-8 p.m.</li>
            <li>Sábado: 9 a.m.-1 p.m.</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Torino Motors. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
