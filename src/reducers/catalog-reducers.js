import * as actionTypes from "../constants/action-types";
import { initialProducts } from "../data/products";



const initialState = {
    products: [],
    selected: null,

}
const catalogReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INITIALIZE_CATALOG:
            return {
                ...state, products: action.payload, selected: null,
            }
        case actionTypes.PRODUCT_DETAILS:
            //console.log(action.payload);
            return {
                ...state,
                selected: action.payload.product,
            };

        default:
            return state;

    }
}

export default catalogReducer;