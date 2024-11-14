import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  //pointermove
  useEffect(() => {
    console.log('effect ', { enabled })

    //dependencias en el useEffect
    // [] (array vacio) -> solo se ejecuta una vez cuando se monta el componente
    // [enabled] (1 o mas dependencias) -> se ejecuta cuando cambia enabled y cuando se monta el componente
    // undefined (no le mandamos nada) -> se ejecuta cada vez que se renderiza el componente

    const handleMove = (event) => {
      const { clientX, clientY } = event
      //console.log('handleMove', { clientX, clientY })
      setPosition({x: clientX, y: clientY})
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup, ejecuta cuando el componente se desmonta
    //o cuando cambian las deps, antes de ejecutar el efecto nuevo
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  //change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
