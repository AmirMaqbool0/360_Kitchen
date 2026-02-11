import React, { useState } from 'react';
// import './style.css';
import ProductCard from '../ProductCard/ProductCard';
import ReviewCard from '../ReviewCard/ReviewCard'
import HomeSliderCard from '../HomeSliderCard/HomeSliderCard'
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const ProductsComponents = ({ name, link, btntext, cardData,collectionName }) => {
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1); 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  return (
    <div className="product-components-container">
      <div className="product-name">
        <span>{name}</span>
      </div>
      <div className="product-cards">
        {currentItems.map((item, i) => (
        <HomeSliderCard key={i} data={item}  collectionName={collectionName}/>
        ))}
      </div>
      {totalPages > 1 && ( 
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={handlePrevPage}>Previous</button>
          )}
          <span>{currentPage} / {totalPages}</span>
          {currentPage < totalPages && (
            <button onClick={handleNextPage}>Next</button>
          )}
        </div>
      )}
      <NavLink to={link}>
        <Button text={btntext} />
      </NavLink>
    </div>
  );
};

export default ProductsComponents;
