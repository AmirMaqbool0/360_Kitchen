import React from "react";
import "./PopularSandwich.css";
import MenuComponent from "../../../MenuComponent/MenuComponent";

const PopularSandwich = () => {
  const data = {
    HeadingName: "Our Popular Sandwich",
  };
  return (
    <>
      <div className="container-fluid py-5 sandwichContainer">
        <MenuComponent {...data} />
      </div>
    </>
  );
};

export default PopularSandwich;
