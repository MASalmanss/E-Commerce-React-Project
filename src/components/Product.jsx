import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom';
function Product({product}) {
  const {id , price , image , title, description  , category} = product   
  console.log(product);
  const navigate = useNavigate()
  
  return (
    <div className='card'>
        <img src={image} className='image' alt="" />
        <div>
          <p style={{textAlign : "center"}}>{title}</p>
          <h3>{price}</h3>
        </div>

        <div className='flex-row'>
          <button onClick={()=>{navigate("/product-details/" + id)}} className='detail-button'>
            Detay
          </button>
        </div>
    </div>
  )
}

export default Product