import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Botoninicio } from './boton inicio/boton.jsx'
import { Linea } from './nav/linea.jsx'
import './nav/nav.css'
import { Nav2 } from './nav/nav.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Sectionfan/>
      

          
  </StrictMode>
)
function Sectionfan(){
  return ( <section className='sec2'> 
     <Nav2/>
            <Linea/>
            <Botoninicio/>
            
            </section>)
}