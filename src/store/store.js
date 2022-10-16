import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product/productSlice";
import { cartSlice } from "./slices/cart/cartSlice";


export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
    },
    });
    