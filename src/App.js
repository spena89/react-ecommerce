import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemCount from './Containers/ItemListContainer.js/ItemCount';
import ItemListContainer from './Containers/ItemListContainer.js/ItemListContainer';




const App = () =>{
    const greeting = "Welcome to Rafa's Hardware store";

    const onAdd= (contador) =>{
        console.log("exito");
        console.log(contador)
    }
    return(
    <>
        <NavBar />
        <ItemListContainer greeting = {greeting} />
        <ItemCount stock = {5} onAdd={onAdd} initial ={0}/>
    </>
    )
}


export default App;
