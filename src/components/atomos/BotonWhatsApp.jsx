import { enlaceWhatsApp } from '../../utils/whatsapp'

// Componente de botón de WhatsApp que llama a la función enlaceWhatsApp 
// para generar el enlace con el mensaje codificado.


// Props: mensaje, children (texto del botón), estilo (por defecto el verde) y extra (clases adicionales)
function BotonWhatsApp({ mensaje, children, estilo = 'boton-whatsapp', extra = '' }) {
  return (
    <a
      className={`boton ${estilo} ${extra}`}
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  )
}

export default BotonWhatsApp