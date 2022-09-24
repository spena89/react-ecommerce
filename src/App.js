import './App.css';
import ResponsiveAppBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"




const App = () =>{
    const greeting = "Deals of the day";
    return(
    <>
        
            <ResponsiveAppBar />
            <ItemListContainer greeting = {greeting} />
            <ItemDetailContainer greeting = {greeting} />
        
    </>
    )
}


export default App;
