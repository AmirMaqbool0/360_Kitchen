import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const AddOn = () => {
  const AddonData = useFirestoreCollection('addOn')
  return (
    <div className='addon-container'>
      <ProductsComponents link={'/addaddon'} btntext={'Add AddOn'} cardData={AddonData} collectionName={'addOn'}/>
    </div>
  )
}

export default AddOn