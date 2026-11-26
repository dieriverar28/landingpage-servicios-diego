// Título y descripción que abren cada sección
function EncabezadoSeccion({ id, titulo, descripcion }) {
  return (
    <div className="seccion-encabezado">
      <h2 id={id}>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  )
}

export default EncabezadoSeccion