import * as actionTypes from "../constants/action-types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const intialcatalog = () => {

    return async (dispatch) => {

        try {

            const response = await fetch("api/products");
            const data = await response.json();
            //console.log(data);

            dispatch({
                type: actionTypes.INITIALIZE_CATALOG,
                payload: data
            });
        }
        catch (err) {

            console.error("Error intializing  catalog:", err);

        }
    }
}

export const productDetails = (product) => {
    console.log(product);
    return async (dispatch) => {
        try {
            
            const response = await fetch(`api/products/${product}`);
            const data = await response.json();

            console.log(data);
        

            dispatch({
                type: actionTypes.PRODUCT_DETAILS,
                payload: data,
            });
        } catch (error) {
            console.error('Error initializing catalog:', error);
        }
    }

}






