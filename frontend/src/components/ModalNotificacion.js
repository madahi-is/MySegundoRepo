import "./ModalNotificacion.css"

export default function ModalNotificacion({ datos, visible, onClose }) {
  if (!visible) return null

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <img
          src="https://img.icons8.com/emoji/48/bell-emoji.png"
          alt="bell"
          className="modal-icon"
        />
        <h2 className="modal-title">¡Depósito de Garantía Registrado!</h2>
        <p className="modal-text">
          Tu depósito ha sido procesado correctamente.
        </p>
        <p className="modal-status">Estado: <span className="highlight">Pago confirmado</span></p>
        <p>Fecha: {datos.fecha}</p>
        <p>Hora: {datos.hora}</p>
        <p>Usuario: {datos.usuario}</p>
        <button className="modal-btn" onClick={onClose}>Ver detalles</button>
      </div>
    </div>
  )
}
