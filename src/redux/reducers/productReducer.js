import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    product:{},
    keyword: "",
    errorMessage: "",
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts(state, action){
            state.productList = action.payload;
            state.errorMessage = "";
        },
        getSingleProduct(state, action) {
            state.product = action.payload;
            state.errorMessage = "";
        },
        searchKeyword(state, action) {
            state.keyword = action.payload;
            state.errorMessage = "";
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;