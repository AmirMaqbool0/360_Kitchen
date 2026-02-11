import React, { useEffect, useState } from "react";
import AboutImage from "../../../images/About Us.png";
import "./AboutUs.css";
import line from "../../../images/line.png";
import { app } from '../../../firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { ColorRing } from "react-loader-spinner";
const AboutUs = () => {
  const [about, setAbout] = useState(null);
  const [loading,setLoading] =useState(true)
  const db = getFirestore(app);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    const docRef = doc(db, 'aboutUs', 'fCP11TP1wimRMMIc3huj');
    const aboutDoc = await getDoc(docRef);
    setAbout(aboutDoc.data());
    setLoading(false)
  };
  if (loading || !about) {
    return (
      <div className="loader-container">
        <div className="loader">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid AboutUsContainer py-5" id="about">
        <div className="container">
          <div className="about-content">
            <div className="col-md-6 AboutImg">
              <div>
                {about && about.aboutImage && <img src={about.aboutImage} alt="" />}
              </div>
            </div>
            <div className="col-md-6 AboutUsDescription">
              <div>
                <p>
                  <span className="line me-2">
                    <img src={line} alt="" />
                  </span>
                  <span>About Us</span>
                </p>
                <p>
                  <span className="culinaryText">
                    {about && about.aboutHeading && about.aboutHeading.split(" ").map((word, index) => (
                      <span key={index} style={{ color: index % 2 === 0 ? 'black' : '#e47719' }}>{word} </span>
                    ))}
                  </span>
                </p>
                <p>{about && about.aboutText}</p>
                {/* <button className="button-main px-4 py-2">Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
