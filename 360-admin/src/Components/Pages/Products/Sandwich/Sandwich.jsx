import React from 'react'
import './style.css'
import ProductCard from '../../../ProductCard/ProductCard'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const Sandwich = () => {
  const snadwichData = useFirestoreCollection('sandwich')
  return (
    <div className='sandwich-container'>
      <div className="sandwich-box">
        <ProductsComponents link={'/addsandwich'} btntext={'Add Sandwich'} cardData={snadwichData} collectionName={'sandwich'}/>
      </div>
    </div>
  )
}

export default Sandwich