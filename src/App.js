import './App.css';
import ResponsiveAppBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import {
    BrowserRouter,
    Routes,
    Route} from "react-router-dom"




const App = () =>{
    const greeting = "Welcome to Rafa's Hardware store";
    return(
    <>
    <BrowserRouter>
        <ResponsiveAppBar />
        <ItemListContainer greeting = {greeting} />
        <ItemDetailContainer greeting = {greeting} />
    </BrowserRouter>
    </>
    )
}


export default App;
