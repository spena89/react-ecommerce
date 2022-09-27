import Item from "../Item/Item";
import ItemCount from "../../Containers/ItemListContainer/ItemCount"
import "./itemList.css"
import { Link } from "react-router-dom";

const ItemList = ({ listProducts }) => {
    
    return (
        <div className="productList">
            {listProducts.map((prod, i) => ( 
                <Link to= {`/product/${prod.id}`} >
                <div key ={i}>
                    <Item 
                    key={`${prod.title}-${i} `} 
                    prod={prod} 
                    />
                    <ItemCount initial = {1} stock ={prod.stock}/>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemList;
