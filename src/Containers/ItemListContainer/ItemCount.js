import React, { useState } from "react";
import "./itemCount.css";

import { Button } from "@mui/material";

const ItemCount = ({ initial, stock, onAdd , prod }) => {
    const [count, setCount] = useState(initial);

    // short circuit conditionals
    const increment = () => count < stock && setCount(count + 1);
    const decrement = () => count > 1 && setCount(count - 1);

    return (
        <div>
            <Button
                disabled = {count === initial}
                variant="contained"
                color="primary"
                onClick={decrement}
                size="small">
                -
            </Button>
            <span className="contador">{count}</span>
            <Button
                disabled={count === stock}
                variant="contained"
                color="primary"
                onClick={increment}
                size="small">
                +
            </Button>
            <div className="addToCartButton">
                <Button variant = "contained" color = "primary" onClick = {()=> onAdd(count) }>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ItemCount;
