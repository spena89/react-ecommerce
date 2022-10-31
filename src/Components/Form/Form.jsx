import { useState } from "react";
import {
    collection,
    addDoc,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/firebase";
import { Typography, Button, FormHelperText } from "@mui/material";
import { FormControl, Input, InputLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

const Form = () => {
    const { cartList, totalPrice, emptyCart } = useCartContext();
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        email: "",
    });
    const [ventaID, setVentaID] = useState();

    const inputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const updateStock = (product) => {
        const updStock = doc(db, "products", product.id);
        updateDoc(updStock, { stock: product.stock - product.quantity });
    };

    const finalizarCompra = () => {
        if (
            userData.name !== "" &&
            userData.lastName !== "" &&
            userData.email !== ""
        ) {
            const ventasCollection = collection(db, "Sales");
            addDoc(ventasCollection, {
                comprador: userData,
                items: cartList,
                date: serverTimestamp(),
                total: totalPrice(),
            }).then((result) => {
                setVentaID(result.id);
                cartList.forEach((product) => {
                    updateStock(product);
                });
                setTimeout(() => {
                    emptyCart();
                }, 10000);
            });
            Swal.fire({
                title: "Success!",
                text: "Your order has been placed. Copy your verification code",
                icon: "success",
                confirmButtonText: "Continue",
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "All fields must be completed",
                icon: "error",
                confirmButtonText: "Continue",
            });
        }
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            backgroundColor="rgba(212, 198, 74, 0.375)"
            borderRadius={2}
            style={{ minHeight: "45vh" }}>
            <Typography variant="h4" padding="2rem">
                Please enter your information to finish purchase
            </Typography>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        aria-describedby="name-helper"
                        onChange={inputChange}
                        required={true}
                    />
                    <FormHelperText id="name-helper">
                        Type your name
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="name">Last Name</InputLabel>
                    <Input
                        id="Lastname"
                        type="text"
                        name="lastName"
                        aria-describedby="lastName-helper"
                        onChange={inputChange}
                        required={true}
                    />
                    <FormHelperText id="lastName-helper">
                        Type your last name
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        name="email"
                        aria-describedby="email-helper"
                        onChange={inputChange}
                        required={true}
                    />
                    <FormHelperText id="email-helper">
                        yourEmail@example.com
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <Box margin={3}>
                    <Button
                        variant="contained"
                        type="Submit"
                        size="small"
                        onClick={finalizarCompra}>
                        Aceptar
                    </Button>
                    <Link style={linkStyles.links} to="/">
                        <Button variant="contained" size="small" color="error">
                            Cancelar
                        </Button>
                    </Link>
                </Box>
            </Grid>
            <p>
                El código de verificación de tu compra es: <b> {ventaID} </b>
            </p>
        </Grid>
    );
};

const linkStyles = {
    links: {
        textDecoration: "none",
        color: "white",
        margin: "10px",
    },
};

export default Form;
