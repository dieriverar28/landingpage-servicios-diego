import { Container, Row, Col } from 'react-bootstrap'
import BotonWhatsApp from '../atomos/BotonWhatsApp'
import DatoPortada from '../moleculas/DatoPortada'
import EjemploNavegador from '../moleculas/EjemploNavegador'
import { datosPortada } from '../../data/portada'

function Portada() {
  return (
    <section className="portada-hero" id="inicio">
      <Container>
        {/* Dos columnas desde 768px; en móvil se apilan solas */}
        <Row className="gx-md-5 gy-5 align-items-center">
          <Col md={6}>
            <span className="portada-insignia">Páginas web para emprendedores</span>
            <h1 className="portada-titulo">Tu negocio en una página web que suma clientes</h1>
            <p className="portada-subtitulo">
              Página informativa + código QR + botón de WhatsApp. Tu cliente escanea, ve qué
              vendes y te escribe directamente. Desde $20.000, pago único, lista en 3 días.
            </p>

            <div className="portada-botones">
              <BotonWhatsApp
                mensaje="Hola, quiero una página web para mi negocio."
                extra="boton-grande"
              >
                Escríbeme por WhatsApp
              </BotonWhatsApp>
              <a className="enlace-flecha" href="#seccion-servicios">
                Ver precios y qué incluye
              </a>
            </div>

            <div className="portada-datos">
              {datosPortada.map((dato) => (
                <DatoPortada key={dato.titulo} titulo={dato.titulo} detalle={dato.detalle} />
              ))}
            </div>
          </Col>

          <Col md={6}>
            <EjemploNavegador />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Portada