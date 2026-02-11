import React from "react";
import "./DealsPage.css";
import dealsImg from "../../../images/dealsImg.png";

const DealsPage = () => {
  return (
    <>
      <div className="container-fluid py-5 DealsContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 DealsImg">
              <div>
                <img src={dealsImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 DealsDescription">
              <div>
                <p>
                  Hot Deals <br />
                  <span className="OrangeText"> Special </span> <br />
                  Combo Pack
                </p>
                <p className="OrangeText">Try Our New</p>
                <p className="OrangeText">Pizza, Fries & Drinks</p>
                <button className="button-main px-4 py-2"><a href="https://order.tikme.co/360kitchen" target="blanck" className="order-now-btn">Order Now</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsPage;
