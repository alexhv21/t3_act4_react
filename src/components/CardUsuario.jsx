export function CardUsuario({ nombre, rol }) {
  return (
    <div className="card-usuario">
      <h3>Usuario: {nombre}</h3>
      <p>Que hace: {rol}</p>
    </div>
  )
}