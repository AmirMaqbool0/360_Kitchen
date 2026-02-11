import React, { useRef, useState, useEffect } from "react";
import "./MenuComponent.css";
import MenuCard from "../MenuCards/MenuCard";
import line from "../../images/line.png";
import { ColorRing } from "react-loader-spinner";
import Button from "../Button/Button";

const MenuComponent = ({
  HeadingName,
  sectionName,
  loading,
  cardData,
  setSelectedItem = () => {},

}) => {
  const feedBackCardRowRef = useRef(null);
  
  if (loading || !cardData  ) {
    return (
      <div className="loader">
        <ColorRing
          visible={true}
          height={80}
          width={80}
          ariaLabel="color-ring-loading"
          wrapperClass="color-ring-wrapper"
        />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="MenuHeading">
            <p>
              <span className="me-2">
                <img src={line} className="Menuline" alt="" />
              </span>
              {HeadingName}
              <span className="ms-2">
                <img src={line} className="Menuline" alt="" />
              </span>
            </p>
            <p>
              All You Need Is A
              <span className="OrangeText"> Tasty {sectionName}</span>
            </p>
          </div>
        </div>
        <div className="row MenuMainComponent" ref={feedBackCardRowRef}>
          {cardData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <MenuCard
                menuCardData={item}
                onSelect={() => {
                  setSelectedItem(item);
                }}
              />
            </div>
            
          ))} 
         
        </div>
        <div className="order-btn">
       <a href="https://order.tikme.co/360kitchen" target="_blanck"> <Button text='Order Now'/> </a>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
