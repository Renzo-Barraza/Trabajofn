import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Botoninicio } from './boton inicio/boton.jsx'
import { Linea } from './nav/linea.jsx'
import './nav/nav.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

 <nav >
            <ul>
            <li><a href="">Messi       </a> </li>
            <li><a href="">JULIETANEGRA</a>  </li>
            <li><a href="">SOY MESSI   </a> </li>
            </ul>
            </nav>
            <Linea/>
            <Botoninicio/>
          
  </StrictMode>,
)
