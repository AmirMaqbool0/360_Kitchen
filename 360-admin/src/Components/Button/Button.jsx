import React from "react";
import "./style.css";
const Button = ({ text }) => {
  return (
    <div>
      <div className="main-btn">
        <button>{text}</button>
      </div>
    </div>
  );
};

export default Button;
