import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import actions from "../actions";
import { getImage } from './server'; // Import the getImage function

const ProductCard = ({ product }) => {
    //console.log(product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle the "Add to Compare" button click
    const handleAddToCompare = (product) => {
        console.log(product);
        // Dispatch the addToCompare action creator with the product's ID
        dispatch(actions.addToCompare(product));
        //navigate(`/product/${product}`);
        //navigate(`/compare`);


    };

    // Function to handle image click and navigate to product details
    const handleImageClick = (pid) => {
        console.log(pid);
        // Navigate to the product details page with the product's ID
        navigate(`/${pid}`);

        //dispatch(actions.productDetails(pid));
    };

    return (
        <div className="product-card">

            <img height={250} width={250}
                src={getImage(product.image)} // Use getImage to get the image URL
                alt={product.model}
                onClick={() => handleImageClick(product.id)} // Handle image click to navigate
            />


            <h3>{product.brand}</h3>
            <p>{product.model}</p>
            <button onClick={() => handleAddToCompare(product.id)}> Add to Compare</button>
        </div >

    );
};

export default ProductCard;
