import Navbar from './Components/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'
import './App.css'

function App() {

  const mensaje = "Bienvenida"
 

  return (
    <>
      <Navbar  />
      <ItemListContainer welcome={mensaje} />
    </>
  )
}

export default App
