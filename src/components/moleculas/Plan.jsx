import BotonWhatsApp from '../atomos/BotonWhatsApp'

// Tarjeta de un plan. Recibe todos sus datos por props.
function Plan({ nombre, precio, etiqueta, destacado, caracteristicas, textoBoton, mensaje }) {
  return (
    <article className={`plan h-100 ${destacado ? 'plan-destacado' : ''}`}>
      {/* Solo se dibuja si el plan trae etiqueta */}
      {etiqueta && <span className="plan-etiqueta">{etiqueta}</span>}

      <h3 className="plan-nombre">{nombre}</h3>
      <p className="plan-precio">
        <span className="plan-desde">desde</span> {precio}
      </p>
      <p className="plan-nota">Pago único · CLP</p>

      <ul className="plan-lista">
        {caracteristicas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <BotonWhatsApp
        mensaje={mensaje}
        estilo={destacado ? 'boton-whatsapp' : 'boton-contorno'}
        extra="boton-bloque"
      >
        {textoBoton}
      </BotonWhatsApp>
    </article>
  )
}

export default Plan