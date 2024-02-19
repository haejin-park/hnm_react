import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    product:{},
    keyword: "",
    error: "",
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts(state, action){
            state.productList = action.payload;
            state.error = "";
        },
        getSingleProduct(state, action) {
            state.product = action.payload;
            state.error = "";
        },
        searchKeyword(state, action) {
            state.keyword = action.payload;
            state.error = "";
        },
        setErrorMessage(state, action) {
            state.error = action.payload;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;