import * as actionTypes from "../constants/action-types";


const initialState = {
    products: [],
};

const compareReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.ADD_TO_COMPARE:
            if (!state.products.some((product) => product.id === action.payload)) {
                return {
                    ...state,
                    products: [...state.products, action.payload],
                };
            }

        case actionTypes.REMOVE_FROM_COMPARE:
        
            // console.log(product.id);
            //console.log(action.payload);
            return {
                ...state,
                products: state.products.filter((product) => product.product.id !== action.payload),
            };
        default:
            return state;

    }
}

export default compareReducer;