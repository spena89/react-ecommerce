import Item from "../Item/Item";

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
                </div>
            ))}
        </div>
    );
};

export default ItemList;
