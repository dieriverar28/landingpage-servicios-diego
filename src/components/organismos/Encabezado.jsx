import { useState, useEffect, useRef } from 'react'
import BotonWhatsApp from '../atomos/BotonWhatsApp'
import { enlacesMenu } from '../../data/enlaces'

function Encabezado() {
  // State: el menú móvil está abierto (true) o cerrado (false)
  const [abierto, setAbierto] = useState(false)

  // Referencias a elementos del DOM real
  const encabezadoRef = useRef(null)
  const botonRef = useRef(null)

  const cerrar = () => setAbierto(false)

  // Efecto 1: Escape y clic fuera, solo mientras el menú está abierto
  useEffect(() => {
    if (!abierto) return

    const alPresionarTecla = (evento) => {
      if (evento.key === 'Escape') {
        setAbierto(false)
        botonRef.current.focus()
      }
    }

    const alHacerClic = (evento) => {
      if (!encabezadoRef.current.contains(evento.target)) {
        setAbierto(false)
      }
    }

    document.addEventListener('keydown', alPresionarTecla)
    document.addEventListener('click', alHacerClic)

    // Limpieza: se ejecuta al cerrar el menú o al desmontar el componente
    return () => {
      document.removeEventListener('keydown', alPresionarTecla)
      document.removeEventListener('click', alHacerClic)
    }
  }, [abierto])

  // Efecto 2: cerrar el menú si la pantalla pasa a tamaño escritorio
  useEffect(() => {
    const escritorio = window.matchMedia('(min-width: 769px)')

    const alCambiar = (evento) => {
      if (evento.matches) setAbierto(false)
    }

    escritorio.addEventListener('change', alCambiar)
    return () => escritorio.removeEventListener('change', alCambiar)
  }, [])

  return (
    <header className="encabezado-barra" ref={encabezadoRef}>
      <div className="contenedor-central encabezado-contenido">
        <a className="logo-sitio" href="#inicio">
          Diego<span>Tech</span>
        </a>

        <button
          ref={botonRef}
          className="boton-menu-movil"
          aria-expanded={abierto}
          aria-controls="menuNavegacion"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
        >
          <svg className="icono-abrir" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
            <path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg className="icono-cerrar" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
            <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <nav
          className={`navegacion-menu ${abierto ? 'activo' : ''}`}
          id="menuNavegacion"
          aria-label="Navegación principal"
        >
          <ul className="navegacion-lista">
            {enlacesMenu.map((enlace) => (
              <li key={enlace.destino}>
                <a href={enlace.destino} onClick={cerrar}>
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
          <BotonWhatsApp mensaje="Hola, quiero información sobre sus servicios.">
            Escríbeme
          </BotonWhatsApp>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado