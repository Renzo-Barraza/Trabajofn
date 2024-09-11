import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Botoninicio } from './boton inicio/boton.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<Botoninicio/>
  </StrictMode>,
)
