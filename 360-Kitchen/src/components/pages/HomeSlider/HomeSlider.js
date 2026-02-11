import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import leftArrow from "../../../images/leftArrow.png";
import rightArrow from "../../../images/rightArrow.png";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../../firebase';
import "./HomeSlider.css";

const HomeSlider = () => {
  const [loading, setLoading] = useState(true);
  const [sliderData, setSliderData] = useState([]);

  const db = getFirestore(app);

  useEffect(() => {
    readdData();
  }, []);

  const readdData = async () => {
    try {
      const readref = collection(db, 'homeSlider');
      const res = await getDocs(readref);
      const arr = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSliderData(arr);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !sliderData) {
    return (
      <div className="loader-container">
        <div className="loader">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide d-flex align-items-center justify-content-center"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {sliderData.map((item, i) => (
            <div className={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
              <div className="CarouselImgDiv">
                <img src={item.image} className="sliderImg" alt="Slider" />
              </div>
              <div className="carousel-caption">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="CarouselArrow">
            <img src={leftArrow} alt="Left Arrow" />
          </div>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="CarouselArrow">
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
