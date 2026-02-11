import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const ProductHeader = () => {
  return (
    <div className="product-header-container">
      <ul>
        <li><NavLink to="/products/pizza" style={{textDecoration:'none',color:'black'}}>Pizza</NavLink></li>
        <li><NavLink to="/products/drinks" style={{textDecoration:'none',color:'black'}}>Drinks</NavLink></li>
        <li><NavLink to="/products/sandwich" style={{textDecoration:'none',color:'black'}}>Sanwich</NavLink></li>
        <li><NavLink to="/products/tandoori" style={{textDecoration:'none',color:'black'}}>Tandoori</NavLink></li>
        <li><NavLink to="/products/addon" style={{textDecoration:'none',color:'black'}}>AddOn</NavLink></li>
        <li><NavLink to="/products/chickenWingsAndNuggets" style={{textDecoration:'none',color:'black'}}>ChickenWingsAndNuggets</NavLink></li>
        <li><NavLink to="/products/desserts" style={{textDecoration:'none',color:'black'}}>Desserts</NavLink></li>
        <li><NavLink to="/products/hotdog" style={{textDecoration:'none',color:'black'}}>HotDog</NavLink></li>
        <li><NavLink to="/products/seekhkabab" style={{textDecoration:'none',color:'black'}}>SeekhKabab</NavLink></li>
      </ul>
    </div>
  );
};

export default ProductHeader;
