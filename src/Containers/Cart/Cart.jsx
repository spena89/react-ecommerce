import React, {useState} from "react";
import { useCartContext } from "../../Context/CartContext";
import {
    CardContent,
    Typography,
    Card,
    Button,
    CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Cart.css"

const Cart = () => {
    const { cartList, totalPrice, removeProduct, emptyCart } = useCartContext();

    const [inHover, setHover] = useState(false);
    return (
        <div>
            {cartList.map((prod) => (
                <Card  sx={{ minWidth: 275, margin: "6px" }} key={prod.id}>
                    <Grid className="cartItem"
                        container
                        spacing={0}
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={8}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    {prod.title}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    alt={prod.title}
                                    image={prod.image}
                                    sx={{
                                        padding: "1em 1em 0 1em",
                                        width: "5%",
                                    }}
                                />
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    Precio por unidad: ${prod.price}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    Cantidad: {prod.quantity}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={4}>
                            <DeleteIcon onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}
                                aria-label="delete"
                                onClick={() => removeProduct(prod.id)}/>
                                {inHover && <span className="delete">Delete?</span>}
                        </Grid>
                    </Grid>
                </Card>
            ))}
            {cartList.length === 0 ? (
                <Typography
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="20vh">
                    Your cart is empty
                </Typography>
            ) : (
                <>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="10px">
                        <Button
                            display="flex"
                            position="flexStart"
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => emptyCart()} >
                            Vaciar carrito
                        </Button>
                        <p>Cart Total : USD ${totalPrice()}</p>
                    </Box>
                    <Box display="flex" justifyContent="start"></Box>
                </>
            )}
        </div>
    );
};

export { Cart };
