import React from 'react'
import './style.css'
import ProductsComponents from '../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../Hooks/useFirestoreCollection'
import ReviewComponent from '../../ReviewComponents/ReviewComponent'
const Reviews = () => {
  const reviewData = useFirestoreCollection('Reviews')
  return (
    <div className='reviews-container'>
      <div className="reviews-box">
        <ReviewComponent link={'/addreview'} name={'Reviews'} btntext={'Add Review'}  cardData={reviewData} collectionName={'Reviews'}/>
      </div>
    </div>
  )
}

export default Reviews