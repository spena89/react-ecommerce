import {useState, useEffect} from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../ItemListContainer/Spinner.css"
import  ItemDetails  from '../../Components/Item/ItemDetails';

const ItemDetailContainer = () =>{

    const [product,setProduct] = useState ({})
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const getItem = async () => {
            try{
                const item = await fetch('https://fakestoreapi.com/products/1')    
                const itemData = await item.json()
                setProduct(itemData);
            }
            catch{
                console.error("something went wrong fetching API")
            }
            finally{
                 setLoading(false);
                 } 
        }
    getItem(); 
    }, [] )
    return(
        <>
            {loading ? <PuffLoader className="loader" color={"#000000"} loading={loading} size={150} /> :
        <ItemDetails prod ={product} />
            }
        </>

)

}

export default ItemDetailContainer;