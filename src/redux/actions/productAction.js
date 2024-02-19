function getProducts(keyword) {
    return async (dispatch, getSetate) => {
        try {
            let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products?q=${keyword}`;
            let response = await fetch(url);
            if(!response.ok) {
                dispatch({type: "SET_ERROR_MESSAGE", payload: `상품을 불러오는데 실패했습니다`});
            }
            let productList = await response.json();
            dispatch({type: "GET_PRODUCTS_SUCCESS", payload: {productList}});
            if (productList.length === 0) {
                dispatch({type: "SET_ERROR_MESSAGE", payload: `${keyword}와 일치하는 상품이 없습니다.`});
            }
        } catch(error) {
            dispatch({type: "SET_ERROR_MESSAGE", payload: error.message});
        }
    };
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        try {
            let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products/${id}`;
            let response = await fetch(url);
            if(!response.ok) {
                dispatch({type: "SET_ERROR_MESSAGE", payload: `상품을 불러오는데 실패했습니다`});
            }
            let product = await response.json();
            dispatch({type: "GET_PRODUCT_SUCCESS", payload: {product}});
        } catch(error) {
            dispatch({type: "SET_ERROR_MESSAGE", payload: error.message});
        }
    };
}

function searchKeyword(keyword) {
    return (dispatch, getState) => {
        try {
            dispatch({type:"SEARCH_KEYWORD_SUCCESS", payload: {keyword}})
        } catch(error) {
            dispatch({type: "SET_ERROR_MESSAGE", payload: error.message});
        }

    };
}    


export const productAction={getProducts, getProductDetail, searchKeyword};