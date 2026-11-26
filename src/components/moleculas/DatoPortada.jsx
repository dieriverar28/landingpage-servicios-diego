// Props: titulo (texto en negrita) y detalle (texto pequeño)
function DatoPortada({ titulo, detalle }) {
  return (
    <div>
      <strong>{titulo}</strong>
      <span>{detalle}</span>
    </div>
  )
}

export default DatoPortada