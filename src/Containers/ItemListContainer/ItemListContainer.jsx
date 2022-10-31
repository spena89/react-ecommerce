import { useState, useEffect } from "react";
import ItemList from "../../Components/ItemList/ItemList.jsx";
import PuffLoader from "react-spinners/PuffLoader";
import "./itemCount.css";
import "./Spinner.css";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    let { categoryID } = useParams();

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "products");
        const productsCategory = query(
            productsCollection,
            where("category", "==", `${categoryID}`)
        );
        let url =
            categoryID === undefined ? productsCollection : productsCategory;
        getDocs(url)
            .then((data) => {
                const products = data.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id,
                    };
                });
                setListProducts(products);
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false);
            });
    }, [categoryID]);

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? (
                <PuffLoader
                    className="loader"
                    color={"#000000"}
                    loading={loading}
                    size={150}
                />
            ) : (
                <ItemList listProducts={listProducts} />
            )}
        </>
    );
};

export default ItemListContainer;
