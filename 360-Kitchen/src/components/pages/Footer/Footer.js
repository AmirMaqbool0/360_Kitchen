import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../../images/app_logo.png";
import {Facebook,Instagram} from 'lucide-react'
import {app} from '../../../firebase'
import { doc,getDoc,getFirestore } from "firebase/firestore";

const Footer = () => {
  const [footerText, setFooterText] = useState(null);
  const [loading,setLoading] =useState(true)
  const db = getFirestore(app);

  useEffect(() => {
    getFooterText();
  }, []);

  const getFooterText = async () => {
    const docRef = doc(db, 'footerText', 'qBH3JWdOB75orDAqfDN2');
    const footerTextDoc = await getDoc(docRef);
    setFooterText(footerTextDoc.data());
    setLoading(false)
  };
  console.log(footerText)
  return (
    <>
      <div className="container-fluid pt-5 pb-2 FooterContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 FooterDescription">
              <div className="FooterLogo">
                <img src={logo} alt="" />
              </div>
              <p>
              {footerText&& footerText?.text}
              </p>
            </div>
            <div className="col-md-2 Navigation">
              <p>Navigation</p>
              <ul className="m-0 p-0">
                <li> <a href="#home">Home</a> </li>
                <li><a href="#delivery">Delivery</a></li>
                {/* <li>Menu</li> */}
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
            <div className="col-md-2 Dishes">
              <p>Dishes</p>
              <ul className="m-0 p-0">
                <li><a href="#pizza">Pizza</a></li>
                <li><a href="#sandwiche">Sandwiches</a></li>
                <li><a href="#wings&nuggets">Nuggets</a></li>
                <li><a href="#wings&nuggets">Wings</a></li>
                <li><a href="#hotdog">Hot Dogs</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="followUsText">Follow Us On</p>
              <div className="socials">
                <div>
                  
               <a href="https://www.facebook.com/people/360-Kitchen/61556627600847/?mibextid=LQQJ4d" target="_blank">  <Facebook  color="white"/> </a>
                </div>

                <div>
              <a href="https://www.instagram.com/360kitchen1/?igsh=NHFzYmU4Mzc5aDBt&utm_source=qr " target="_blank" >  <Instagram  color="white"/> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 copyrightText">
          <p>2024 all rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
