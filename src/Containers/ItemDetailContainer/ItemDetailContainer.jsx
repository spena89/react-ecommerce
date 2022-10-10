import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "../ItemListContainer/Spinner.css";
import ItemDetails from "../../Components/Item/ItemDetails";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productID } = useParams();

    useEffect(() => {
            const productCollection = collection(db,'products')
            const refDoc = doc(productCollection, productID)
            getDoc(refDoc)
            .then((result)=>{
                setProduct(
                    {
                        id:result.id,
                        ...result.data()
                    }
                )
            })
            .catch(()=>{
                console.log("error")
            })
            .finally(()=>{ 
                setLoading(false)
            }
            )
         }, [productID]);

    return (
        <>
            {loading ? (
                <PuffLoader
                    className="loader"
                    color={"#000000"}
                    loading={loading}
                    size={150}
                />
            ) : (
                <ItemDetails prod={product} />
            )}
        </>
    );
};

export default ItemDetailContainer;
