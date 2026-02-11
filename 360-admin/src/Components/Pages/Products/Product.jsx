import React from 'react'
import './style.css'
import ProductHeader from '../../ProductsHeader/ProductHeader'
import { Outlet } from 'react-router'
const Product = () => {
  return (
    <div className='product-container'>
      <div className="product-box">
      <ProductHeader/>
    
      <Outlet/>
      </div>
      
    </div>
  )
}

export default Product