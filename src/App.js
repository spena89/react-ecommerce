import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer.js/ItemListContainer';



const App = () =>{
    const greeting = "Welcome to Rafa's Hardware store";

    return(
    <>
        <NavBar />
        <ItemListContainer greeting = {greeting} />
    </>

    )
}


export default App;
