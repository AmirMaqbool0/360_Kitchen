import React from "react";
import "./PopularPizza.css";
import MenuComponent from "../../../MenuComponent/MenuComponent";

const PopularPizza = () => {
  const data = {
    HeadingName: "Our Popular Pizza",
  };
  return (
    <>
      <div className="container-fluid py-5 PizzaContainer">
        <MenuComponent {...data} />
      </div>
    </>
  );
};

export default PopularPizza;
