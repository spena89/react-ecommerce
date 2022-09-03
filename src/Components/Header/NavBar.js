
import logo from "../../Assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"
const NavBar = () =>{
    return(
        <header>
        {/* logo */}
        <img src ={logo} alt= "logo"/>
        <h1>Ecommerce</h1>

        {/* NavBar */}
        <nav>
            <a href ="#"> Catergoria 1</a>
            <a href ="#"> Catergoria 2</a>
            <a href ="#"> Catergoria 3</a>
        </nav>

        {/* carrito */}
        <ShoppingCartIcon />
        </header>
    )
}

export default NavBar