import {productActions} from '../reducers/productReducer';

function getProducts(keyword) {
    return async (dispatch, getSetate) => {
        try {
            let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products?q=${keyword}`;
            let response = await fetch(url);
            if(!response.ok) {
                dispatch(productActions.setErrorMessage(`상품을 불러오는데 실패했습니다`));
            }
            let productList = await response.json();
            dispatch(productActions.getAllProducts(productList));
            if (productList.length === 0) {
                dispatch(productActions.setErrorMessage(`${keyword}와 일치하는 상품이 없습니다.`));
            }
        } catch(error) {
            dispatch(productActions.setErrorMessage(error.message));
        }
    };
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        try {
            let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products/${id}`;
            let response = await fetch(url);
            if(!response.ok) {
                dispatch(productActions.setErrorMessage(`상품을 불러오는데 실패했습니다`));
            }
            let product = await response.json();
            dispatch(productActions.getSingleProduct(product))
        } catch(error) {
            dispatch(productActions.setErrorMessage(error.message));

        }
    };
}

function searchKeyword(keyword) {
    return (dispatch, getState) => {
        try {
            dispatch(productActions.searchKeyword(keyword))
        } catch(error) {
            dispatch(productActions.setErrorMessage(error.message));
        }

    };
}    


export const productAction={getProducts, getProductDetail, searchKeyword};