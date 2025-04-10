import { useState, useEffect } from "react"
import ModalNotificacion from "./components/ModalNotificacion"
import Notificaciones from "./components/Notificaciones"
import mockNotifications from "./mocks/mockNotifications"


function App() {
  const [notificaciones, setNotificaciones] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [notificacionActiva, setNotificacionActiva] = useState(null)

  // Cargar las notificaciones iniciales desde el mock
  useEffect(() => {
    setNotificaciones(mockNotifications)
  }, [])

  // Abre el modal con los datos seleccionados
  const abrirModal = (datos) => {
    setNotificacionActiva(datos)
    setModalVisible(true)
  }

  // Cierra el modal
  const cerrarModal = () => {
    setModalVisible(false)
    setNotificacionActiva(null)
  }

  // Simular una nueva notificación
  const simularNotificacion = () => {
    const randomUser = mockNotifications[Math.floor(Math.random() * mockNotifications.length)]
  
    const estados = ["Pago confirmado", "En proceso", "Pago fallido"]
    const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)]
  
    const nueva = {
      id: Date.now(),
      usuario: randomUser.usuario,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      estado: estadoAleatorio,
    }
  
    setNotificaciones((prev) => [nueva, ...prev])
  }


  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", paddingTop: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#1f2937",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            
          }}
          onClick={simularNotificacion}
        >
          Simular notificación
        </button>
      </div>

      <Notificaciones lista={notificaciones} onClick={abrirModal} />

      <ModalNotificacion
        visible={modalVisible}
        datos={notificacionActiva}
        onClose={cerrarModal}
      />
    </div>
  )
}

export default App
