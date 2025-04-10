import React from "react"
import "./ModalNotificacion.css" // opcional para estilos

export default function ModalNotificacion({ visible, datos, onClose }) {
  if (!visible || !datos) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="icono-campana">🔔</span>
          <h2>¡Depósito de Garantía Registrado!</h2>
        </div>
        <p>Tu depósito ha sido procesado correctamente.</p>
        <p>
          <strong>Estado:</strong>{" "}
          <span className="estado-confirmado">{datos.estado}</span>
        </p>
        <p>
          <strong>Fecha:</strong> {datos.fecha}
        </p>
        <p>
          <strong>Hora:</strong> {datos.hora}
        </p>
        <p>
          <strong>Usuario:</strong> {datos.usuario}
        </p>
        <button className="boton-detalles" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
