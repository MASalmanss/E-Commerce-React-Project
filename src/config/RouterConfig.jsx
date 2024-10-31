import React from 'react'
import { Routes  , Route} from 'react-router-dom'
import Home from "../pages/Home"
import ProductList from '../components/ProductList'
import ProductDetails from '../components/ProductDetails'
function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productList' element= {<ProductList/>}/>
        <Route path='/product-details/:id' element = {<ProductDetails/>}/>
    </Routes>
)
}

export default RouterConfig