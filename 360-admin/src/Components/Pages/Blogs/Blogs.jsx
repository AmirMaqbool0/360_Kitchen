import React from 'react'
import './style.css'
import ProductsComponents from '../../ProductsComponents/ProductsComponents'
import useFirestoreCollection from '../../../Hooks/useFirestoreCollection'
import BlogComponent from '../../BlogComponents/BlogComponent'
const Blogs = () => {
  const blogData =useFirestoreCollection('blogs')
  return (
    <div className='blog-container'>
      <div className="blog-box">
     
      <BlogComponent name={'Blogs'} link={'/addblog'} btntext={'Add Blog'} cardData={blogData} collectionName={'blogs'} />
      </div>
    </div>
  )
}

export default Blogs