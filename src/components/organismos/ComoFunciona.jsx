import { Container } from 'react-bootstrap'
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion'
import Paso from '../moleculas/Paso'
import { pasos } from '../../data/pasos'

function ComoFunciona() {
  return (
    <section
      className="seccion"
      id="seccion-como-funciona"
      aria-labelledby="titulo-como-funciona"
    >
      <Container>
        <EncabezadoSeccion
          id="titulo-como-funciona"
          titulo="Cómo funciona"
          descripcion="En tres pasos tienes tu página en línea y lista para clientes."
        />
        <ol className="lista-pasos">
          {pasos.map((paso, indice) => (
            <Paso
              key={paso.titulo}
              numero={indice + 1}
              titulo={paso.titulo}
              texto={paso.texto}
            />
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default ComoFunciona