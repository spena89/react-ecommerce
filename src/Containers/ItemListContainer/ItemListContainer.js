import {useState, useEffect} from 'react'
import ItemList from "../../Components/ItemList/ItemList"
import PuffLoader from "react-spinners/PuffLoader";
import "./itemCount.css"
import "./Spinner.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    let { categoryID } = useParams();
    

    const[listProducts,setListProducts] = useState([])
    const[loading,setLoading]= useState(true)

    const url_base = 'https://fakestoreapi.com/products'
    const url_category = 'https://fakestoreapi.com/products/category/'

    useEffect(() => {
        setLoading(true)
        fetch((categoryID === undefined) ?`${url_base}`: `${url_category}${categoryID}`)
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
    },[categoryID])

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
