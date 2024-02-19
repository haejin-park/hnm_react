import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer, 
    }
});
export default store;