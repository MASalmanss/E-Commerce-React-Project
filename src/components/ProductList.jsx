import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from "../redux/slices/productSlice"

function ProductList() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((store) => store.product); // store.product olarak değiştirildi

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    );
}

export default ProductList;
