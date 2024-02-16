function getProducts(searchQuery) {
    return async (dispatch, getSetate) => {
        let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}});
    };
}

export const productAction={getProducts}