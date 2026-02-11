import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const Tandoori = () => {
  const tandooriData= useFirestoreCollection('tandoori')
  return (
    <div className='tandoori-container'>
      <ProductsComponents  link={'/addtandoori'} btntext={'Add Tandoori'} cardData={tandooriData} collectionName={'tandoori'}/>
    </div>
  )
}

export default Tandoori