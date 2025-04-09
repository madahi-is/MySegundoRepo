import { useState } from "react"
import "./Notificaciones.css"

export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([])

  const agregarNotificacion = () => {
    const mensaje = "✅ Garantía procesada con éxito"
    setNotificaciones([mensaje, ...notificaciones])
  }

  return (
    <div className="notificaciones-container">
      <div className="notificaciones-header">
        <h2>Notificaciones</h2>
        <button onClick={agregarNotificacion}>
          Simular Garantía Exitosa
        </button>
      </div>

      <div className="notificaciones-lista">
        {notificaciones.length === 0 ? (
          <p className="notificacion-vacia">No hay notificaciones aún.</p>
        ) : (
          notificaciones.map((n, idx) => (
            <div key={idx} className="notificacion-item">
              {n}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
