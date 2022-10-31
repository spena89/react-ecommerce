import "./App.css";
import ResponsiveAppBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./Containers/Cart/Cart";
import { CartContextProvider } from "./Context/CartContext";
import Form from "./Components/Form/Form";

const App = () => {
    const greeting = "Deals of the day";
    return (
        <>
            <BrowserRouter>
                <CartContextProvider>
                    <ResponsiveAppBar />
                    <Routes>
                        <Route
                            path="/"
                            element={<ItemListContainer greeting={greeting} />}
                        />
                        <Route
                            path="/category/:categoryID"
                            element={<ItemListContainer greeting={greeting} />}
                        />
                        <Route
                            path="/product/:productID"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/checkout" element={<Form />} />
                        <Route path="/cart/" element={<Cart />} />
                    </Routes>
                </CartContextProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
