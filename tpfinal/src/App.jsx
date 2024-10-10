import { useState } from 'react'
import { Cards } from './cards/cards'
import { Nav } from './Nav/Nav'

function App() {
  const [Productos, setProductos] = useState([])
  const [Total, setTotal] = useState(0)
  const [Contador, setContador] = useState(0)

  return (
    <>
      <Nav 
      Productos={Productos}
      setProductos={setProductos}
      Total={Total}
      setTotal={setTotal}
      Contador={Contador}
      setContador={setContador}
      />
      <Cards 
      Productos={Productos}
      setProductos={setProductos}
      Total={Total}
      setTotal={setTotal}
      Contador={Contador}
      setContador={setContador}
      />
    </>
  )
}

export default App
