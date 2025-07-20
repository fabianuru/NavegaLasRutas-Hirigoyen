import Navbar from './Components/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer.jsx'
import './App.css'

function App() {

  const mensaje = "Bienvenida"
 

  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer welcome={mensaje} />} />
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    
    </>
  )
}

export default App
