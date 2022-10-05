import React, { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map((prod) => {
                if (prod.id === item.id) {
                    const newQuantity = prod.quantity + quantity;
                    return { ...prod, quantity: newQuantity };
                } else {
                    return prod;
                }
            });
            setCartList(newCart);
        } else {
            const newProduct = { ...item, quantity: quantity };
            setCartList([...cartList, newProduct]);
        }
    };

    const removeProduct = (id) =>
        setCartList(cartList.filter((prod) => prod.id !== id));

    const emptyCart = () => setCartList([]);

    const isInCart = (id) => {
        return cartList.find((product) => product.id === id) ? true : false;
    };

    const totalPrice = () => {
        return cartList.reduce(
            (acc, product) => (acc += product.price * product.quantity),
            0
        );
    };

    const totalQuantity = () => {
        return cartList.reduce((acc, product) => (acc += product.quantity), 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                removeProduct,
                emptyCart,
                isInCart,
                totalPrice,
                totalQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
};
