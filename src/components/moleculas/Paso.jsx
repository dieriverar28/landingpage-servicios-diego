// Un paso numerado del proceso
function Paso({ numero, titulo, texto }) {
  return (
    <li className="paso">
      <span className="paso-numero">{numero}</span>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </li>
  )
}

export default Paso