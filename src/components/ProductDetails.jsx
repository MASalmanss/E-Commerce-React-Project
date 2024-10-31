import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct, getAllProducts } from '../redux/slices/productSlice';

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, selectedProduct, loading, error } = useSelector((store) => store.product);
    const [count , setCount] = useState(0)

    useEffect(() => {
        // Eğer products boşsa, tüm ürünleri getir
        if (products.length === 0 && !loading) {
            dispatch(getAllProducts());
        } else if (!loading) {
            getProductById();
        }
    }, [products, id, dispatch, loading ]);

    useEffect(() => {
        console.log("Güncellenmiş Seçili Ürün:", selectedProduct); // Güncelleme kontrolü
    }, [selectedProduct]);

    const getProductById = () => {
        const product = products.find((prod) => prod.id === Number(id)); // id dönüşümü
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Ürün Adı: {selectedProduct && selectedProduct.title ? selectedProduct.title : "Ürün bulunamadı"}</h2>


            <p> Ürün Açıklaması : {selectedProduct && selectedProduct.description ? selectedProduct.description : "Açıklama bulunamadı"}</p>


            <img src={selectedProduct.image} alt="Bulunamadı" width={300} height={200}/>
            <div style={{margin : "13px"}}> Adet {count}</div>
            <button>Sepete Ekle</button>
        </div>
    );
}

export default ProductDetails;
