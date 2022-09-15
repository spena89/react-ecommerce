import './App.css';
import ResponsiveAppBar from "./Components/NavBar/NavBar"
import ItemCount from './Containers/ItemListContainer.js/ItemCount';
import ItemListContainer from './Containers/ItemListContainer.js/ItemListContainer';




const App = () =>{
    const greeting = "Welcome to Rafa's Hardware store";
    return(
    <>
        <ResponsiveAppBar />
        <ItemListContainer greeting = {greeting} />
    </>
    )
}


export default App;
