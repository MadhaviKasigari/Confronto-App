import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import actions from "../actions";
import { getImage } from './server'; // Import the getImage function

const Product = () => {
    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.catalog.selected);
    //console.log(selectedProduct);
    // Fetch product details when the component mounts or when the <id> changes
    useEffect(() => {
        // Dispatch the productDetails() action creator with the <id> value
        dispatch(actions.productDetails(id));
    }, [dispatch, id]);

    // The dependency array ensures this effect runs when <id> changes
    return (
        <>
            {selectedProduct && (
                <div className="product-details">
                    <>
                        <img src={getImage(selectedProduct.image)} // Use getImage to get the image URL
                            alt={selectedProduct.model} />
                        <h1>{selectedProduct.model}</h1>
                        <h3>{selectedProduct.brand}</h3>
                        <ul className="details">
                            <li>{selectedProduct.rear_camera}</li>
                            <li>{selectedProduct.front_camera}</li>
                            <li>{selectedProduct.screen}</li>
                            <li>{selectedProduct.storage}</li>
                            <li>{selectedProduct.os}</li>
                            <li>{selectedProduct.cost}</li>
                        </ul>
                    </>

                </div>
            )}




        </>
    )
}
export default Product;
