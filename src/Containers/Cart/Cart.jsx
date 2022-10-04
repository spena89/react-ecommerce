import React from "react";
import { useCartContext } from "../../Context/CartContext";
import {
    CardContent,
    Typography,
    Card,
    Button,
    CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid'

const Cart = () => {
    const { cartList, totalPrice, removeProduct, emptyCart } = useCartContext();

    return (
        <div>
            {cartList.map((prod) => (
              <Card sx={{ minWidth: 275, margin: "6px" }} key={prod.id}>
                <Grid container spacing ={0} alignItems="center" justifyContent="center">
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
                    <IconButton
                        aria-label="delete"
                        onClick={() => removeProduct(prod.id)}
                        />
                    <DeleteIcon />
                         </Grid>
                        </ Grid>
                </Card>
            ))}
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
                    onClick={() => emptyCart()}>
                    Vaciar carrito
                </Button>
                <p>Cart Total : USD ${totalPrice()}</p>
            </Box>
            <Box display="flex" justifyContent="start"></Box>
        </div>
    );
};

export { Cart };
