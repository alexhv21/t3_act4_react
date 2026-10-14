<div align="center">

# TECNOLÓGICO NACIONAL DE MÉXICO
## INSTITUTO TECNOLÓGICO DE OAXACA

---

### **DEPARTAMENTO DE SISTEMAS Y COMPUTACIÓN**
### **INGENIERÍA EN SISTEMAS COMPUTACIONALES**

**ACTIVIDAD:**  
Actividad 4: Mi Primer Proyecto en React (Vite)

**ESTUDIANTE:**  
Hernández Vázquez Alexis  
**Número de Control:** 23160952  
**Correo:** 23160952@itoaxaca.edu.mx  

**FECHA:**  
Octubre de 2026  
Oaxaca de Juárez, Oaxaca, México

---

</div>

## Descripción del Proyecto
Esta aplicación es un gestor práctico de actividades desarrollado con **React** y empaquetado con **Vite**. Su propósito es aplicar de forma práctica los conceptos esenciales del framework solicitados en la actividad:
- Configuración del entorno de desarrollo local con Vite y React.
- Creación de componentes funcionales modulares (`Header`, `CardUsuario`).
- Transferencia y visualización de datos mediante `props`.
- Control de reactividad y estado interno con el hook `useState`.
- Renderizado de colecciones dinámicas mediante `.map()` y asignación de identificadores únicos (`key`).
- Despliegue en producción a través de **GitHub Pages**.

---

## Estructura y Código Implementado

### a) Componente Funcional Simple (`src/components/Header.jsx`)
Muestra el encabezado estático de la aplicación sin manejar lógica interna:

```jsx
export function Header() {
  return (
    <header className="header">
      <h1>Gestor de Actividades</h1>
      <p>Práctica de React: Props, Estado y Listas</p>
    </header>
  );
}
```

### b) Componente con Props (`src/components/CardUsuario.jsx`)
Recibe datos desestructurados (`nombre`, `rol`, `tareasPendientes`) enviados desde el componente padre:

```jsx
export function CardUsuario({ nombre, rol, tareasPendientes }) {
  return (
    <div className="card-usuario">
      <h3>Estudiante: {nombre}</h3>
      <p><strong>Rol:</strong> {rol}</p>
      <p><strong>Tareas pendientes:</strong> {tareasPendientes}</p>
    </div>
  );
}
```

### c) Componente con Estado (`useState`) y Manejo de Eventos (`src/App.jsx`)
Administra la lista de actividades y el texto del input de forma reactiva ante los eventos del usuario:

```jsx
const [tareas, setTareas] = useState([
  { id: 1, texto: 'Configurar entorno con Vite' },
  { id: 2, texto: 'Crear componentes y pasar props' },
  { id: 3, texto: 'Manejar estado con useState' }
]);
const [inputTexto, setInputTexto] = useState('');

const agregarTarea = (e) => {
  e.preventDefault();
  if (inputTexto.trim() === '') return;

  const nuevaTarea = {
    id: Date.now(),
    texto: inputTexto.trim()
  };

  setTareas([...tareas, nuevaTarea]);
  setInputTexto('');
};
```

### d) Renderizado de Lista Dinámica con `.map()` y `key` (`src/App.jsx`)
Recorre el arreglo de tareas para generar la lista en pantalla, asignando a cada nodo su llave única:

```jsx
<ul className="lista-tareas">
  {tareas.map((tarea) => (
    <li key={tarea.id} className="item-tarea">
      <span>{tarea.texto}</span>
      <button type="button" onClick={() => eliminarTarea(tarea.id)} className="btn-eliminar">
        ✕
      </button>
    </li>
  ))}
</ul>
```

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?
- **Props (Properties):** Son valores de entrada que un componente padre transfiere a sus componentes hijos. Son inmutables (de solo lectura) desde la perspectiva del componente que las recibe, garantizando el flujo de datos unidireccional en la jerarquía de componentes.
- **State (Estado):** Es una estructura de datos interna y reactiva administrada directamente por el propio componente. Es mutable a través de su función actualizadora y, cuando su valor cambia, hace que React vuelva a renderizar el componente para actualizar la interfaz gráfica con los nuevos datos.

---

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad `key` proporciona una identidad única y estable a cada elemento dentro del Virtual DOM de React. Durante el proceso de reconciliación (*diffing algorithm*), React compara estas claves para determinar con exactitud cuáles elementos fueron agregados, modificados, reordenados o eliminados.

Omitir la `key` o utilizar el índice del arreglo puede provocar inconsistencias en el estado de los componentes hijos, comportamientos visuales inesperados en formularios y una degradación del rendimiento al forzar re-renderizados completos e innecesarios de toda la lista.

---

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook básico de React que permite dotar de memoria y reactividad a un componente funcional. Al ejecutarse, recibe el valor inicial del estado y devuelve un arreglo con exactamente dos elementos:
1. La variable que contiene el valor actual del estado.
2. Una función actualizadora que modifica dicho valor y le solicita a React re-renderizar el componente.

**Ejemplo en la aplicación:**
Se utilizó en `src/App.jsx` para almacenar la colección de tareas:

```jsx
const [tareas, setTareas] = useState([
  { id: 1, texto: 'Configurar entorno con Vite' },
  { id: 2, texto: 'Crear componentes y pasar props' },
  { id: 3, texto: 'Manejar estado con useState' }
]);
```

Cuando el usuario envía el formulario con una nueva actividad, se invoca `setTareas([...tareas, nuevaTarea])`, lo que añade el nuevo objeto al arreglo y provoca que la lista se repinte al instante sin recargar la página.

---

### d) Enlace del repositorio de GitHub
- [https://github.com/alexhv21/t3_act4_react](https://github.com/alexhv21/t3_act4_react)

---

### e) Enlace del proyecto desplegado en GitHub Pages
- [https://alexhv21.github.io/t3_act4_react/](https://alexhv21.github.io/t3_act4_react/)