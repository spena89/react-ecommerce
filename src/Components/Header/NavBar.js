
import logo from "../../Assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"


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
        <ShoppingCartIcon />
        </header>
    )
}

export default NavBar