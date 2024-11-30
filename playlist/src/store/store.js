import { configureStore} from "@reduxjs/toolkit";
import createReducer from "../features/cart/cartSlice"
import modalReducer from "../features/modal/modalSlice"

export const store=configureStore({
    reducer: {cart:createReducer, modal: modalReducer}
})