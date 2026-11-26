import { Container, Accordion } from 'react-bootstrap'
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion'
import { preguntas } from '../../data/preguntas'

function Preguntas() {
  return (
    <section
      className="seccion seccion-fondo-claro"
      id="seccion-preguntas"
      aria-labelledby="titulo-preguntas"
    >
      <Container>
        <EncabezadoSeccion
          id="titulo-preguntas"
          titulo="Preguntas frecuentes"
          descripcion="Lo que más me preguntan antes de contratar."
        />
        {/* El Accordion guarda por sí solo cuál pregunta está abierta */}
        <Accordion className="lista-preguntas">
          {preguntas.map((item, indice) => (
            <Accordion.Item eventKey={String(indice)} key={item.pregunta}>
              <Accordion.Header>{item.pregunta}</Accordion.Header>
              <Accordion.Body>{item.respuesta}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default Preguntas