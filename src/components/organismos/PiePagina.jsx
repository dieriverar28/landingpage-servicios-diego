import { Container } from 'react-bootstrap'
import { contacto } from '../../data/contacto'

function PiePagina() {
  // El año se calcula al renderizar, así nunca queda desactualizado
  const anio = new Date().getFullYear()

  return (
    <footer className="pie-pagina">
      <Container className="pie-contenido">
        <div className="pie-marca">
          <p className="pie-logo">
            Diego<span>Tech</span>
          </p>
          <p className="pie-bajada">Ingeniería Informática DUOC UC.</p>
          <p className="pie-bajada">Innovación y tecnología para tu negocio.</p>
          <p className="pie-bajada">
            Páginas web informativas con QR y servicio técnico. Pago único, sin mensualidad.
          </p>
        </div>

        <div className="pie-contacto">
          <a href={contacto.enlaceTelefono}>{contacto.telefono}</a>
          <a href={contacto.enlaceInstagram} target="_blank" rel="noopener">
            Instagram {contacto.instagram}
          </a>
          <p>
            {contacto.horario} · {contacto.ciudad}
          </p>
        </div>
      </Container>

      <p className="pie-legal">© {anio} DiegoTech — Páginas web y servicio técnico</p>
    </footer>
  )
}

export default PiePagina