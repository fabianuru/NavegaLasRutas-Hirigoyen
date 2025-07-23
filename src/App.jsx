import Navbar from './Components/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer.jsx'
import './App.css'

function App() {

  const mensaje = "Bienvenidxs a e-commerce"


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer welcome={mensaje} />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </>
  )
}

export default App
