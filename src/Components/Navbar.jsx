import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Ecommerce</h1>
      <ul className="nav__list">
        <li>
          <NavLink to="/" className="nav__list__link">Productos</NavLink >
        </li>
        <li>
          <NavLink to="/category/beauty" className="nav__list__link">Beauty</NavLink >
        </li>
        <li>
          <NavLink to="/category/groceries" className="nav__list__link">Groceries</NavLink >
        </li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar