
import logo from "../../Assets/logo.jpg"
import "./NavBar.css"
import CartWidget from "./Cartwidget/CartWidget"


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
        <div class="animation start-home"></div>
        </nav>

        {/* Cart */}
        
        <CartWidget />
        </header>
    )
}

export default NavBar