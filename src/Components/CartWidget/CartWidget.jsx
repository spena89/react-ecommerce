import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../Context/CartContext";
import { Typography } from "@mui/material";
import "./CartWidget.css";

const CartWidget = () => {
    const { totalQuantity } = useCartContext();

    return (
        <>
            {totalQuantity() === 0 ? (
                <ShoppingCartIcon />
            ) : (
                <>
                    <ShoppingCartIcon />
                    <Typography className="badge">{totalQuantity()}</Typography>
                </>
            )}
        </>
    );
};
export default CartWidget;
