import React, { useState } from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ItemCount from "../../Containers/ItemListContainer/ItemCount";
import "../../Containers/ItemListContainer/itemCount.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useCartContext } from "../../Context/CartContext";

const ItemDetails = ({ prod }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addToCart } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);

        addToCart(prod, quantity);
    };

    return (
        <Box sx={{ marginTop: 10 }}>
            <CardMedia
                component="img"
                alt={prod.title}
                image={prod.image}
                sx={{
                    padding: "1em 1em 0 1em",
                    width: "25%",
                    margin: "0 auto",
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {prod.description}
                </Typography>
                <Typography align="center" variant="h5">
                    $ {prod.price}
                </Typography>
                <Typography align="center">
                    only {prod.stock} in stock!
                </Typography>
            </CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
                {goToCart ? (
                    <Link style={linkStyles.links} to="/cart">
                        <Button variant="contained" color="primary">
                            Finish Purchase
                        </Button>
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
                )}
            </Box>
        </Box>
    );
};

const linkStyles = {
    links: {
        textDecoration: "none",
        color: "white",
    },
};

export default ItemDetails;
