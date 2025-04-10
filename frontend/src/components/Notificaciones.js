import "./Notificaciones.css"

export default function Notificaciones({ lista, onClick }) {
  return (
    <div className="notificaciones-container">
      <h2>Notificaciones</h2>
      <div className="notificaciones-lista">
        {lista.length === 0 ? (
          <p className="notificacion-vacia">No hay notificaciones aún.</p>
        ) : (
          lista.map((item) => (
            <div
              key={item.id}
              className="notificacion-item"
              onClick={() => onClick(item)}
              style={{ cursor: "pointer" }}
            >
               Depósito registrado por {item.usuario} a las {item.hora}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

