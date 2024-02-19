let initialState = {
    productList:[],
    product:{},
    keyword: "",
    error: "",
};


const productReducer = (state=initialState, action) => {
    const {type, payload} = action;
    // console.log("action", action);
    switch(type) {
        case "GET_PRODUCTS_SUCCESS":
            return {
                ...state,
                productList: payload.productList,
                error: "",
            };
        
        case "GET_PRODUCT_SUCCESS":
            return {
                ...state,
                product: payload.product,
                error: "",
            };    

        case "SEARCH_KEYWORD_SUCCESS":
            return {
                ...state,
                keyword: payload.keyword,
                error: "",
            };    

        case "SET_ERROR_MESSAGE":
            return {
                ...state,
                error: payload
            };
            
        default: 
            return {
                ...state
        };
    }
}

export default productReducer;