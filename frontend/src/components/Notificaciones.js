import "./Notificaciones.css"

export default function Notificaciones({ lista }) {
  return (
    <div className="notificaciones-container">
      <h2>Centro de Notificaciones</h2>
      <div className="notificaciones-lista">
        {lista.length === 0 ? (
          <p className="notificacion-vacia">No hay notificaciones aún.</p>
        ) : (
          lista.map((item, idx) => (
            <div key={idx} className="notificacion-item">
              ✅ Depósito registrado el {item.fecha} a las {item.hora} por {item.usuario}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
