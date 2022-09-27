import Item from "../Item/Item";
import ItemCount from "../../Containers/ItemListContainer/ItemCount"
import "./itemList.css"

const ItemList = ({ listProducts }) => {
    
    return (
        <div className="productList">
            {listProducts.map((prod, i) => ( 
                <div key ={i}>
                    <Item 
                    key={`${prod.title}-${i} `} 
                    prod={prod} 
                    />
                    <ItemCount initial = {1} stock ={prod.stock}/>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
