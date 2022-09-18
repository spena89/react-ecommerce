import Item from "../Item/Item";
import ItemCount from "../../Containers/ItemListContainer/ItemCount"

const ItemList = ({ listProducts }) => {
    
    return (
        <>
            {listProducts.map((prod, i) => ( 
                <div key ={i}>
                    <Item 
                    key={`${prod.product}-${i} `} 
                    prod={prod} 
                    />
                    <ItemCount initial = {1} prod ={prod}/>
                </div>
            ))}
        </>
    );
};

export default ItemList;
