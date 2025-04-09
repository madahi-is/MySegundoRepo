import { useState } from "react"
import ModalNotificacion from "./components/ModalNotificacion"
import Notificaciones from "./components/Notificaciones"

function App() {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [datosDeposito, setDatosDeposito] = useState(null)
  const [notificaciones, setNotificaciones] = useState([])

  const simularDeposito = () => {
    const nuevaNotificacion = {
      fecha: "12 de abril de 2025",
      hora: "16:00",
      usuario: "Carlos Gómez",
    }

    setDatosDeposito(nuevaNotificacion)
    setMostrarModal(true)
  }

  const cerrarModal = () => {
    setMostrarModal(false)
    setNotificaciones([datosDeposito, ...notificaciones])
  }

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", paddingTop: "40px" }}>
      <button
        onClick={simularDeposito}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginBottom: "20px",
          padding: "10px 16px",
          background: "#1e3a8a",
          color: "white",
          borderRadius: "8px",
          border: "none",
        }}
      >
        Simular Depósito Garantía
      </button>

      <ModalNotificacion
        visible={mostrarModal}
        datos={datosDeposito}
        onClose={cerrarModal}
      />

      <Notificaciones lista={notificaciones} />
    </div>
  )
}
export default App

