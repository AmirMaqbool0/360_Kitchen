import React, { useRef,useEffect, useState } from "react";
import "./Blog.css";
import line from "../../../images/line.png";
import BlogCard from "./BlogCard";
import right from "../../../images/left-icon.png";
import left from "../../../images/right-icon.png";
import {getFirestore,getDocs,collection} from 'firebase/firestore'
import {app} from '../../../firebase'
import {Link} from 'react-router-dom'

const Blog = () => {


  const db =getFirestore(app)
  const [blogData,setBlogData] = useState([])
   useEffect(()=>{
  getBlogData()
   },[])
  const getBlogData = async() =>{
    const readref = collection(db,'blogs');
    const res = await getDocs(readref);
   
    const arr = res.docs.map((doc) => (
        { id: doc.id, ...doc.data() } 
    ));
   setBlogData(arr)  
}


  const feedBackCardRowRef = useRef(null);

  const handleSwipe = (direction) => {
    const container = feedBackCardRowRef.current;
    const scrollAmount = 300; 
    if (container) {
      container.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };
  return (
    <div className="container-fluid my-5" id="blog">
      <div className="container">
        <div className="row ">
          <div className="BlogHeading  ">
            <p>
              <span className="me-2">
                <img src={line} className="line" alt="" />
              </span>
              Blogs
              <span className="ms-2">
                <img src={line} className="line" alt="" />
              </span>
            </p>
            <p>
              Our <span className="OrangeText">Blogs</span>
            </p>
          </div>
        </div>

        <div className="row BlogCardRow" ref={feedBackCardRowRef}>
        
        {
          blogData?.map((item,i)=>{
            return(
              <div className="col-md-4 BlogCardColumn" key={i}>
          <Link to={`blogs/${item.id}`} style={{textDecoration:'none'}}>  <BlogCard blogCardData={item} /> </Link>
          </div>
            )
          })
        }
          
        
        
          {/* <div className="col-md-4 BlogCardColumn">
            <BlogCard />
          </div>
          <div className="col-md-4 BlogCardColumn">
            <BlogCard />
          </div>
          <div className="col-md-4 BlogCardColumn">
            <BlogCard />
          </div>
          <div className="col-md-4 BlogCardColumn">
            <BlogCard />
          </div>
          <div className="col-md-4 BlogCardColumn">
            <BlogCard />
          </div> */}
        </div>
        {/* <div className="row mt-4 ">
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="SliderBtn me-2 py-2 px-4"
              onClick={() => handleSwipe("left")}
            >
              <img src={left} alt="" />
            </button>
            <button
              className="SliderBtn ms-2 py-2 px-4"
              onClick={() => handleSwipe("right")}
            >
              <img src={right} alt="" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
