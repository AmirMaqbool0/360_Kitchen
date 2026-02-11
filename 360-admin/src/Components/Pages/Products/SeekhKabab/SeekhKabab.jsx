import React from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection'
const SeekhKabab = () => {
  const seekhKababData = useFirestoreCollection('seekhKabab')
  return (
    <div className='seekhkabab-container'>
      <ProductsComponents link={'/addseekhkabab'} btntext={'Add SeekhKabab'} cardData={seekhKababData} collectionName={'seekhKabab'}/>
    </div>
  )
}

export default SeekhKabab