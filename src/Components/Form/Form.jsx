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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Form = () => {
    const { cartList, totalPrice, emptyCart } = useCartContext();
    const [userData, setUserData] = useState({
       
    });

    const [ventaID, setVentaID] = useState("");

    const inputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const updateStock = (product) => {
        const updStock = doc(db, "products", product.id);
        updateDoc(updStock, { stock: product.stock - product.quantity });
    };

    const finalizarCompra = () => {
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
            <Modal>
                <Typography>
                    test modal
                </Typography>

            </Modal>
            emptyCart();
        });
    };

    return (
            <Grid container spacing={0}
            direction="column"
            alignItems="center"
            backgroundColor="rgba(212, 198, 74, 0.375)"
            borderRadius={2}
            style={{ minHeight: '45vh' }}>
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
                            name="Email"
                            aria-describedby="email-helper"
                            onChange={inputChange}
                        />
                        <FormHelperText id="email-helper">
                            yourEmail@example.com
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={12}>
                    <Box margin={3}>
                    <Link style={linkStyles.links} className="Link-Home" to="/">
                        <Button
                            variant="contained"
                            type="Submit"
                            size="small"
                            onClick={finalizarCompra}>
                            Aceptar
                        </Button>
                        </Link>
                        <Link style={linkStyles.links} className="Link-Home" to="/">
                            <Button
                                variant="contained"
                                size="small"
                                color="error">
                                Cancelar
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

    );
};

const linkStyles = {
    links: {
        textDecoration: "none",
        color: "white",
        margin:"10px"
    },
};

export default Form;
