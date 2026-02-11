import React from "react";
import "./style.css";
import Logo from "../../Assests/app_logo.png";
const Header = () => {
  return (
    <div className="headre-container">
      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header-btn">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
