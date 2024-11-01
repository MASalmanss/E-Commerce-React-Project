import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct, getAllProducts } from '../redux/slices/productSlice';
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, selectedProduct, loading, error } = useSelector((store) => store.product);
    const [count, setCount] = useState(0);

    const { price, image, title, description } = selectedProduct;

    useEffect(() => {
        if (products.length === 0 && !loading) {
            dispatch(getAllProducts());
        } else if (!loading) {
            getProductById();
        }
    }, [products, id, dispatch, loading]);

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        }
    }, [count]);

    const arttir = () => {
        setCount(count + 1);
    };

    const azalt = () => {
        setCount(count > 0 ? count - 1 : 0);
    };

    const addBasket = () => {
        if (count > 0) {  // Sadece count > 0 olduğunda sepete ekle
            const payload = {
                id,
                price,
                image,
                title,
                description,
                count
            };
            dispatch(addToBasket(payload));
            console.log("Ürün sepete eklendi:", payload);
        } else {
            console.log("Ürün adeti 0 veya daha az, sepete eklenmedi.");
        }
    };

    useEffect(() => {
        console.log("Güncellenmiş Seçili Ürün:", selectedProduct); // Güncelleme kontrolü
    }, [selectedProduct]);

    const getProductById = () => {
        const product = products.find((prod) => prod.id === Number(id));
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Ürün Adı: {title ? title : "Ürün bulunamadı"}</h2>
            <p> Ürün Açıklaması: {description ? description : "Açıklama bulunamadı"}</p>
            <img src={image} alt="Bulunamadı" width={300} height={200} />
            <div style={{ margin: "13px" }}> Adet: {count}</div>
            <div>
                <button className='detail-button' style={{ margin: "16px" }} onClick={arttir}>Ekle</button>
                <button className='detail-button' style={{ margin: "16px" }} onClick={azalt}>Çıkar</button>
            </div>
            <button onClick={addBasket}>Sepete Ekle</button> {/* addBasket işlevini çağırıyoruz */}
        </div>
    );
}

export default ProductDetails;
