import React, { useState } from "react";
import "./Header.css";
import logo from "../../../images/app_logo.png";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar px-4 py-1 navbar-expand-lg sticky-top">
        <div className="container-fluid ">
          <Link className="navbar-brand text-info" to="/">
            <img className="logo" src={logo} alt="oracions" />
          </Link>
          <button
            className="navbar-toggler "
            data-bs-target="#canva"
            data-bs-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start bg-light text-white"
            id="canva"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand text-info" href="#">
                <img className="logo" src={logo} alt="oracions" />
              </a>
              <button className="btn-close " data-bs-dismiss="offcanvas">
                <X />
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li>
                  <a
                    href="#home"
                    className={activeLink === "Home" ? "active" : ""}
                    onClick={() => handleLinkClick("Home")}
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  {/* <Link
                    to="/Cart"
                    className={activeLink === "about" ? "active" : ""}
                    onClick={() => handleLinkClick("about")}
                  >
                    Cart
                  </Link> */}
                </li>
                {/* <li>
                  <a
                    href="#Menu"
                    className={activeLink === "Services" ? "active" : ""}
                    onClick={() => handleLinkClick("Services")}
                  >
                    Menu
                  </a>
                </li> */}
                <li>
                  <a
                    href="#delivery"
                    className={activeLink === "Delivery" ? "active" : ""}
                    onClick={() => handleLinkClick("Delivery")}
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className={activeLink === "portfolio" ? "active" : ""}
                    onClick={() => handleLinkClick("portfolio")}
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={activeLink === "team" ? "active" : ""}
                    onClick={() => handleLinkClick("team")}
                  >
                    About Us
                  </a>
                </li>
              </ul>

              <button className="header-btn"><a href="#Menu">Get started</a></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Header);
