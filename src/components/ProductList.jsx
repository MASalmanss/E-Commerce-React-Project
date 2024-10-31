import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from "../redux/slices/productSlice"
import Product from './Product';

function ProductList() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]); // dispatch bağımlılığı eklenmiş

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div className='flex-row' style={{flexWrap :"wrap"}}>
        
        {products && products.map((product) => (
          
            <Product key={product.id} product={product} />
        ))}
      </div>
    );
}

export default ProductList;
