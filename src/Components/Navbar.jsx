import CartWidget from "./CartWidget.jsx"

const Navbar = ({welcome}) => {
  return (
    <nav>
        <h1>JUICELAB</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar