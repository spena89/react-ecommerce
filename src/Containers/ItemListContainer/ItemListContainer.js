
import {products} from "../../Assets/productos"
import {customFetch} from '../../Utils/customFetch'
import {useState, useEffect} from 'react'
import ItemList from "../../Components/ItemList/ItemList"
import PuffLoader from "react-spinners/PuffLoader";
import Spinner from "./Spinner.css"
import "./itemCount.css"

const ItemListContainer = ({greeting}) => {
    

    const[listProducts,setListProducts] = useState([])
    const[loading,setLoading]= useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
                })
    },[])

    console.log(listProducts
        )
    return (
        <>
        <h1>{greeting}</h1>
        {loading ? <PuffLoader className="loader" color={"#000000"} loading={loading} size={150} /> :
        <ItemList listProducts = {listProducts}/>
        }
        {/* <ItemCount stock = {5} initial ={1} onAdd={() =>{}}/> */}
        </>
    )
}


export default ItemListContainer;
