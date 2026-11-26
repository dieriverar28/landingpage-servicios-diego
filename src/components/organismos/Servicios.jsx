import { Container, Row, Col } from 'react-bootstrap'
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion'
import Plan from '../moleculas/Plan'
import BotonWhatsApp from '../atomos/BotonWhatsApp'
import { planes } from '../../data/planes'

function Servicios() {
  return (
    <section
      className="seccion seccion-fondo-claro"
      id="seccion-servicios"
      aria-labelledby="titulo-servicios"
    >
      <Container>
        <EncabezadoSeccion
          id="titulo-servicios"
          titulo="Páginas web con precio a la vista"
          descripcion="Elige una y te la entrego lista para compartir. Es un pago único: no hay hosting, dominio ni mensualidad que pagar después."
        />

        {/* Un plan por columna; se apilan en pantallas pequeñas */}
        <Row className="g-4">
          {planes.map((plan) => (
            <Col md={6} key={plan.id}>
              <Plan {...plan} />
            </Col>
          ))}
        </Row>

        <p className="nota-alcance">
          Se publica en GitHub Pages y Cloudflare: tu página queda en línea sin pagar hosting ni
          dominio. Si más adelante quieres un dominio propio, se puede agregar aparte.
        </p>

        <div className="bloque-tecnico">
          <div className="tecnico-texto">
            <span className="tarjeta-etiqueta">Servicio técnico</span>
            <h3 className="tecnico-titulo">Formateo e instalación de software</h3>
            <p>
              Formateo e instalación de Windows, programas y controladores, con la configuración
              básica lista para trabajar.
            </p>
            <p className="tecnico-garantia">
              Te confirmo respaldo y tiempos antes de tocar tu equipo.
            </p>
          </div>
          <div className="tecnico-accion">
            <p className="tecnico-precio">Cotización según tu equipo</p>
            <BotonWhatsApp mensaje="Hola, quiero cotizar formateo e instalación de software para mi equipo.">
              Consultar por WhatsApp
            </BotonWhatsApp>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Servicios