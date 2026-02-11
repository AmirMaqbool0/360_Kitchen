import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const Drinks = () => {
  const drinksData = useFirestoreCollection('drinks')
  return (
    <div className='drink-container'> 
    <ProductsComponents link={'/adddrink'} btntext={'Add Drink'} cardData={drinksData} collectionName={'drinks'} />
    </div>
  )
}

export default Drinks