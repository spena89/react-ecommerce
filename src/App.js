import './App.css';
import ResponsiveAppBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';




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
