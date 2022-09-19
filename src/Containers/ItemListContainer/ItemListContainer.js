
import {products} from "../../Assets/productos"
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
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then (res=>{
                console.log(res)
                res.forEach((element)=>{
                    element.stock = Math.floor(Math.random()*(10));                    
                })
                console.log(res)
                setListProducts(res)
            }
            )
            .finally (()=>{
                setLoading(false)
            })
    },[])

    return (
        <>
        <h1>{greeting}</h1>
        {loading ? <PuffLoader className="loader" color={"#000000"} loading={loading} size={150} /> :
        <ItemList listProducts = {listProducts}/>
        }
        {/* <ItemCount/> */}
        </>
    )
}


export default ItemListContainer;
