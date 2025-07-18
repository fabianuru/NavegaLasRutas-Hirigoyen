import CartWidget from "./CartWidget.jsx"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="logo montserrat">JUICELAB</h1>
        <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar