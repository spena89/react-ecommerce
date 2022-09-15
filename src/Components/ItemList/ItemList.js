import Item from "../Item/Item";

import ItemCount from "../../Containers/ItemListContainer.js/ItemCount";

const ItemList = ({ listProducts }) => {
    return (
        <>
            {listProducts.map((prod, i) => (
                <ItemCount
                key={`${prod.product}-${i} `}
                initial={1}
                prod={prod}
                ></ItemCount>
            ))}
        </>
    );
};

export default ItemList;
