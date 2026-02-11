import React from "react";
import "./FeaturedItem.css";
import MenuComponent from "../../../MenuComponent/MenuComponent";

const FeaturedItems = () => {
  const data = {
    HeadingName: "Our Featured Items",
  };

  return (
    <>
      <div className="container-fluid py-5 FeaturedContainer">
        <MenuComponent {...data} />
      </div>
    </>
  );
};

export default FeaturedItems;
