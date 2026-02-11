import React, { useRef, useState, useEffect } from "react";
import "./MenuComponent.css";
import MenuCard from "../MenuCards/MenuCard";
import line from "../../images/line.png";
import { ColorRing } from "react-loader-spinner";
import ProductModel from "../ProductModel/ProductModel";


const MenuComponent2 = ({ HeadingName, sectionName, loading, cardData }) => {
  const feedBackCardRowRef = useRef(null);
  const [selectedItem,setSelectedItem] =useState(null)


  if (loading || !cardData) {
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
                ItemName={item?.name}
                ItemPrice={`$${item?.price}`}
                itemImage={item?.productImage}
                onSelect={() => {
                    setSelectedItem(item)
                }}
              />
            </div>
          ))}
        </div>
        <ProductModel modelData={selectedItem}/>
      </div>
    </>
  );
};

export default MenuComponent2;
