import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar-container'>
     <div className="side-bar-link">
        <ul>
          <NavLink to={'/products'}><li>Products</li> </NavLink>
           <NavLink to={'/aboutus'}><li>About Us</li> </NavLink>
           <NavLink to={'/reviews'}><li>Reviews</li></NavLink>
           <NavLink to={'/homeslider'}><li>Home Slider</li></NavLink>
           <NavLink to={'/blogs'}><li>Blogs</li></NavLink>
           <NavLink to={'/wellcomepage'}><li>Welcome Page</li></NavLink>
           <NavLink to={'/deliveryservices'}><li>Delivery Services</li> </NavLink>
           <NavLink to={'/footer'}><li>Footer</li> </NavLink>
        </ul>
     </div>
    </div>
  )
}

export default SideBar