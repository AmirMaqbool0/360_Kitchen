import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const ChickenWingsAndNuggets = () => {
  const wingsData =useFirestoreCollection('chickenWingsAndNuggets')
  return (
    <div className='wing-container'>
      <ProductsComponents link={'/addwing'} btntext={'Add Product'} cardData={wingsData} collectionName={'chickenWingsAndNuggets'}/>
    </div>
  )
}

export default ChickenWingsAndNuggets