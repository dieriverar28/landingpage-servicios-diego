import { Container } from 'react-bootstrap'
import BotonWhatsApp from '../atomos/BotonWhatsApp'
import { contacto } from '../../data/contacto'

function Contacto() {
  return (
    <section className="seccion" id="seccion-contacto" aria-labelledby="titulo-contacto">
      <Container>
        <div className="caja-contacto">
          <h2 id="titulo-contacto">Tu página puede estar en línea esta semana</h2>
          <p>
            Escríbeme con lo que vendes y te confirmo qué plan te conviene, qué incluye y en
            qué plazo la entrego. Sin compromiso.
          </p>
          <BotonWhatsApp
            mensaje="Hola, quiero mi página web informativa para mi negocio."
            extra="boton-grande"
          >
            Escríbeme por WhatsApp
          </BotonWhatsApp>
          <div className="contacto-datos">
            <span>Respondo el mismo día</span>
            <span>{contacto.horario}</span>
            <span>{contacto.ciudad}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contacto