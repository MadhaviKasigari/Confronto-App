import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import actions from "../actions";
import { getImage } from './server'; // Import the getImage function




const Compare = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.compare.products);
    console.log(products);

    //const ProductCard = useSelector((state) => state.catalog.products);
    //console.log(ProductCard);

    //run on first render
    /*useEffect(() => {
        // Dispatch the initCatalog() action creator to fetch products
        dispatch(actions.addToCompare());
    }, [dispatch]);
    */

    // Function to handle the "Remove" button click
    const handleRemoveClick = (ProductCard) => {
        console.log(ProductCard);
        if (window.confirm("Are you sure to delete this product")) {
            // Dispatch the removeFromCompare() action creator with the productId
            dispatch(actions.removeFromCompare(ProductCard.product.id));
        }
    };

    return (
        <>
            {
                products.map((ProductCard) => (

                    <div className="comparison-grid" key={ProductCard.product.id}>
                        <div className="feature-labels">
                            <div>Brand</div>
                            <div>Model</div>
                            <div>Rear Camera</div>
                            <div>Front Camera</div>
                            <div>Screen</div>
                            <div>Storage</div>
                            <div>OS</div>
                            <div>Cost</div>
                        </div>
                        <div className="product-table">
                            <div className="product-features">
                                <div>
                                    <img src={getImage(ProductCard.product.image)}
                                        alt={ProductCard.product.model} />
                                </div>
                                <div>{ProductCard.product.brand}</div>
                                <div>{ProductCard.product.model}</div>
                                <div>{ProductCard.product.rear_camera}</div>
                                <div>{ProductCard.product.front_camera}</div>
                                <div>{ProductCard.product.screen}</div>
                                <div>{ProductCard.product.storage}</div>
                                <div>{ProductCard.product.os}</div>
                                <div>{ProductCard.product.cost}</div>
                                <div>
                                    <button onClick={() => handleRemoveClick(ProductCard)}>REMOVE</button>
                                </div>
                            </div>
                        </div>



                    </div >
                ))}
        </>
    );
};

export default Compare;
{/* <div className="product-features">
          <div>
            <img src="" alt="" />
          </div>
          <div>Guava</div>
          <div>DumbPhone</div>
          <div>1MP</div>
          <div>2MP</div>
          <div>2inch Full HD</div>
          <div>2MB</div>
          <div>Windows CE</div>
          <div>$1.20</div>
          <div>
            <button>REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare; */}
