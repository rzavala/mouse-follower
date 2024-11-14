import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //este no funciona en production solo en desarrollo se asegura que 
  //codigo corre correctamtene por ejemplo renderiza y hace cleanup de los useEfect
  ///en consola se puede ver como que se renderiza se hace cleanup y se vuelve a ejecutar
  //entoncs si queremos que eso desaparezca debemos quitar el tag StrictMode
  <StrictMode> 
    <App />
  </StrictMode>,
)
