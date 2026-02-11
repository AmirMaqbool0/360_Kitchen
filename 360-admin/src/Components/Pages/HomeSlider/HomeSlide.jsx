import React from 'react'
import './style.css'
import ProductsComponents from '../../ProductsComponents/ProductsComponents'
import HomeSliderComponents from '../../HomeSliderComponent/HomeSliderComponet'
import useFirestoreCollection from '../../../Hooks/useFirestoreCollection'
const HomeSlide = () => {
  const homeSliderData =useFirestoreCollection('homeSlider')
  return (
    <div className='home-slider-container'>
      <div className="home-slider-box">
          <HomeSliderComponents link={'/addslider'} btntext={'Add Slider'} name={'Home Slider'} cardData={homeSliderData} collectionName={'homeSlider'}/>
      </div>
    </div>
  )
}

export default HomeSlide