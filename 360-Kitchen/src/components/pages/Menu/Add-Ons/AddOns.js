import React from "react";
import "./AddOns.css";
import MenuComponent from "../../../MenuComponent/MenuComponent";

const AddOns = () => {
  const data = {
    HeadingName: "Our Special Add-Ons",
  };
  return (
    <>
      <div className="container-fluid py-5 Add-Ons-Container">
        <MenuComponent {...data} />
      </div>
      <div className="container-fluid py-5 Add-Ons-Container">
        <MenuComponent {...data} />
      </div>
    </>
  );
};

export default AddOns;
