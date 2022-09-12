import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemCount from './Containers/ItemListContainer.js/ItemCount';
import ItemListContainer from './Containers/ItemListContainer.js/ItemListContainer';




const App = () =>{
    const greeting = "Welcome to Rafa's Hardware store";
    return(
    <>
        <NavBar />
        <ItemListContainer greeting = {greeting} />
        <ItemCount stock = {5} initial ={1}/>
    </>
    )
}


export default App;
