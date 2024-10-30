import React from 'react'
import { Routes  , Route} from 'react-router-dom'
import Home from "../pages/Home"
import ProductList from '../components/ProductList'
function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productList' element= {<ProductList/>}/>
    </Routes>
)
}

export default RouterConfig