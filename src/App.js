import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CustomProvider from "./components/CartContext";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
        <Footer />
      </CustomProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
