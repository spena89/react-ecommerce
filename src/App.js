import './App.css';
import ResponsiveAppBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import {Cart} from "./Containers/Cart/Cart"




const App = () =>{
    const greeting = "Deals of the day";
    return(
    <>
    <BrowserRouter>
    <ResponsiveAppBar />
        <Routes>
            <Route path= '/'element = { <ItemListContainer greeting = {greeting} /> } />
            <Route path = '/category/:categoryID' element = { <ItemListContainer greeting = {greeting} /> } /> 
            <Route path = '/product/:productID' element = { <ItemDetailContainer /> } />
            <Route path = '/cart/' element = { <Cart />} />
        </Routes>


            
            {/* <ItemListContainer greeting = {greeting} />
            <ItemDetailContainer greeting = {greeting} /> */}
    </BrowserRouter>
    </>
    )
}


export default App;
