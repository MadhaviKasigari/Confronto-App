import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from "../actions";
import ProductCard from './ProductCard'; // Import your ProductCard component



function Catalog() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.catalog.products);
    console.log(products);
    //run on first render
    useEffect(() => {
        // Dispatch the initCatalog() action creator to fetch products
        dispatch(actions.intialcatalog());
    }, [dispatch]);

    return (
        <div>
            <h2>Catalog</h2>
            <div className="product-list">
                {products.map((product) => (
                    // Render ProductCard for each product
                    <ProductCard
                        key={product.id} // Make sure each card has a unique key
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;

