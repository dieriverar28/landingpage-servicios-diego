// Maqueta decorativa de una página web con su código QR
function EjemploNavegador() {
  return (
    <div className="portada-ejemplo" aria-hidden="true">
      <div className="ventana-navegador">
        <div className="navegador-barra">
          <span className="navegador-punto" />
          <span className="navegador-punto" />
          <span className="navegador-punto" />
          <span className="navegador-url">tu-negocio.github.io</span>
        </div>
        <div className="pagina-ejemplo">
          <div className="ejemplo-encabezado">
            <strong>Tu negocio</strong>
            <span>Productos · Servicios · Contacto</span>
          </div>
          <div className="ejemplo-linea ejemplo-linea-corta" />
          <div className="ejemplo-linea" />
          <div className="ejemplo-linea" />
          <div className="ejemplo-boton">Ver productos</div>
          <div className="qr-caja">
            <img src="/qr-demo.png" width="240" height="240" alt="" loading="lazy" decoding="async" />
            <span>Así se ve tu QR</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EjemploNavegador