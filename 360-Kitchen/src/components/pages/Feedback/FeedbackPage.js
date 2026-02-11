import React, { useEffect, useRef, useState } from "react";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard";
import line from "../../../images/line.png";
import right from "../../../images/left-icon.png";
import left from "../../../images/right-icon.png";
import {getDocs,collection,getFirestore} from 'firebase/firestore'
import {app} from '../../../firebase'

const FeedbackPage = () => {
  const feedBackCardRowRef = useRef(null);
  const [reviews,setReviews] =useState([])
  const db = getFirestore(app)
  const handleSwipe = (direction) => {
    const container = feedBackCardRowRef.current;
    const scrollAmount = 300; 
    if (container) {
      container.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(()=>{
 getReviews()
  },[])
  const getReviews = async () =>{
    const readref = collection(db,'Reviews');
    const res = await getDocs(readref);
   
    const arr = res.docs.map((doc) => (
        { id: doc.id, ...doc.data() } 
    ));
  setReviews(arr)
  }
console.log(reviews)
  return (
    <>
      <div className="container-fluid FeedbackContainer">
        <div className="container">
          <div className="row">
            <div className="FeedbackHeading ">
              <p>
                <span className="me-2">
                  <img src={line} className="line" alt="" />
                </span>
                Review
                <span className="ms-2">
                  <img src={line} className="line" alt="" />
                </span>
              </p>
              <p>
                What <span className="OrangeText">Customer</span> Says
              </p>
            </div>
          </div>
          <div className="row FeedBackCardRow" ref={feedBackCardRowRef}>
            {
              reviews?.map((item,i)=>{
                return(
                  <div className="col-md-4 FeedbackCardColumn" key={i}>
                  <FeedbackCard reviewsData={item}/>
                </div>
                )
              })
            }        


            {/* <div className="col-md-4 FeedbackCardColumn">
              <FeedbackCard />
            </div>
            <div className="col-md-4 FeedbackCardColumn">
              <FeedbackCard />
            </div>
            <div className="col-md-4 FeedbackCardColumn">
              <FeedbackCard />
            </div>
            <div className="col-md-4 FeedbackCardColumn">
              <FeedbackCard />
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
    </>
  );
};

export default FeedbackPage;
