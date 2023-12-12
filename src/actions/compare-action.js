import * as actionTypes from "../constants/action-types";


export const addToCompare = (product) => {
    //console.log(product);

    return async (dispatch) => {
        try {
;
            const response = await fetch(`api/products/${product}`);
            const productData = await response.json();

            dispatch({
                type: actionTypes.ADD_TO_COMPARE,
                payload: productData,
            });
        } catch (error) {
            console.error('Error fetching product details:', error);

        }
    };

}


export const removeFromCompare = (product) => {
    console.log(product);
    //console.log(product.product);
    return async (dispatch) => {
        try {

            const response = await fetch(`api/products/${product}`, { method: 'delete' });
            const productData = await response.json();
            console.log(productData);


            dispatch({
                type: actionTypes.REMOVE_FROM_COMPARE,
                payload: product,
            });
        } catch (error) {
            console.error('Error fetching product details:', error);

        }
    };

}