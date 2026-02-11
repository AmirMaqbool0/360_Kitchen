import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const HotDog = () => {
  const hotdogData =useFirestoreCollection('hotdog')
  return (
    <div className='hotdog-container'>
      <ProductsComponents link={'/addhotdog'} btntext={'Add HotDog'} cardData={hotdogData} collectionName={'hotdog'}/>
    </div>
  )
}

export default HotDog