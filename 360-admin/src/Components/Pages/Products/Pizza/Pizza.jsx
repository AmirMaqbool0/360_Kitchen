import React, { useEffect, useState } from 'react'
import './style.css'
import ProductsComponents from '../../../ProductsComponents/ProductsComponents';
import {app} from '../../../../firebase'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import useFirestoreCollection from '../../../../Hooks/useFirestoreCollection';
const Pizza = () => {
  
  const pizzaData =useFirestoreCollection('pizza')
  return (
    <div className='pizza-container'>
        <ProductsComponents  link={'/addpizza'} btntext={'Add Pizza'} cardData={pizzaData} collectionName={'pizza'}/>
    </div>
  )
}

export default Pizza;