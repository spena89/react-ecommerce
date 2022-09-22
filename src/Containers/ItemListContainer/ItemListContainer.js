import {useState, useEffect} from 'react'
import ItemList from "../../Components/ItemList/ItemList"
import PuffLoader from "react-spinners/PuffLoader";
import "./itemCount.css"
import "./Spinner.css"

const ItemListContainer = ({greeting}) => {
    

    const[listProducts,setListProducts] = useState([])
    const[loading,setLoading]= useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then (data=>{
                const productList = data.map((product)=>{
                    return {...product, stock:Math.floor(Math.random()*20)}
                })
                setListProducts(productList)
                console.log(productList)
            }
            )
            .finally(()=>{
                setLoading(false)
            }) 
    },[])

    return (
        <>
        <h1>{greeting}</h1>
        {loading ? <PuffLoader className="loader" color={"#000000"} loading={loading} size={150} /> :
        <ItemList listProducts = {listProducts}/>
        }
        </>
    )
}


export default ItemListContainer;
