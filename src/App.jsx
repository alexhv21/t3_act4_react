import { useState } from 'react'
import { Header } from './components/Header'
import { CardUsuario } from './components/CardUsuario'
import './App.css'

function App() {
  //  Estado con useState
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Configurar proyecto con Vite' },
    { id: 2, texto: 'Crear componentes y props' },
    { id: 3, texto: 'Manejar estado con useState' }
  ])

  const [inputTexto, setInputTexto] = useState('')

  // Evento para agregar tareas a la lista
  const agregarTarea = (e) => {
    e.preventDefault()
    if (inputTexto.trim() === '') return

    const nuevaTarea = {
      id: Date.now(), // key única
      texto: inputTexto
    }

    setTareas([...tareas, nuevaTarea])
    setInputTexto('')
  }

  return (
    <div className="container">
      {/* Componente funcional simple */}
      <Header />

      {/*  Componente que recibe props */}
      <CardUsuario nombre="Alexis Hernández" rol="Estudiante de sistemas xd" />
      <hr />

      {/* Manejo de eventos con formulario */}
      <form onSubmit={agregarTarea} className="form-tarea">
        <input 
          type="text" 
          placeholder="Escribe una tarea..." 
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <h3>Lista de Tareas:</h3>

      {/*  Renderizado de lista con .map() y key */}
      <ul className="lista-tareas">
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  )
}

export default App