import Encabezado from './components/organismos/Encabezado'
import Portada from './components/organismos/Portada'
import Servicios from './components/organismos/Servicios'
import ComoFunciona from './components/organismos/ComoFunciona'
import Preguntas from './components/organismos/Preguntas'
import Contacto from './components/organismos/Contacto'
import PiePagina from './components/organismos/PiePagina'
import WhatsAppFlotante from './components/atomos/WhatsAppFlotante'

function App() {
  return (
    <>
      <a className="enlace-salta" href="#contenido">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Servicios />
        <ComoFunciona />
        <Preguntas />
        <Contacto />
      </main>
      <PiePagina />
      <WhatsAppFlotante />
    </>
  )
}

export default App