import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product/productSlice";
import { cartSlice } from "./slices/cart/cartSlice";
import { userSlice } from "./slices/user/userSlice";
import { orderSlice } from "./slices/order/orderSlice";


export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        user: userSlice.reducer,
        order: orderSlice.reducer
    },
    });
    