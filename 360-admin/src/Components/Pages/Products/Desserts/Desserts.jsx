import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const Desserts = () => {
  const dessertsData =useFirestoreCollection('desserts')
  return (
    <div className='desserts-container'>
      <ProductsComponents  link={'/adddesserts'} btntext={'Add Dessert'} cardData={dessertsData} collectionName={'desserts'}/>
    </div>
  )
}

export default Desserts