
import logo from "../../Assets/logo.jpg"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <header>
        {/* logo */}
        <img src ={logo} alt= "logo"/>
        <h1>Rafa's Hardware Store</h1>

        {/* NavBar */}
        <nav>
            <a href ="#"> Processors </a>
            <a href ="#"> Graphics cards</a>
            <a href ="#"> Motherboards </a>
        <div></div>
        </nav>

        {/* Cart */}
        
        <CartWidget />
        </header>
    )
}


export default NavBar