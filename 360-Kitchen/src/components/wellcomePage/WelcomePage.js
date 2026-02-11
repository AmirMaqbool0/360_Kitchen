import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import MenuImg from "../../images/wellcomeImg.png";
import {app} from '../../firebase'
import { getDoc,doc,getFirestore } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";

const WelcomePage = () => {

  const [wellcomeText, setWellcomeText] = useState(null);
  const [loading,setLoading] =useState(true)
  const db = getFirestore(app);

  useEffect(() => {
    getWellcomePage();
  }, []);

  const getWellcomePage = async () => {
    const docRef = doc(db, 'welcomeToOurRestaurant', 'bXyfCqBDff9R9aCpAmPj');
    const wellcomeDoc = await getDoc(docRef);
    setWellcomeText(wellcomeDoc.data());
    setLoading(false)
  };
  if (loading || !wellcomeText) {
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
      <div className="container-fluid menuContainer py-5">
        <div className="wellcome-container">
            <div className="col-md-6 order-sm-1 order-md-2 order-2 MenuDescription">
              <div>
              {wellcomeText && wellcomeText.heading && wellcomeText.heading.split(" ").map((word, index) => (
                      <span key={index} style={{ color: index % 2 === 0 ? 'black' : '#e47719' }}>{word} </span>
                    ))}
                {/* <p>Restaurant</p> */}
                <p>
                 {wellcomeText?.text}
                </p>
                {/* <button className="button-main py-2 px-5 mt-4">Menu</button> */}
              </div>
            </div>
            <div className="col-md-6 order-sm-2 order-md-2 order-1 MenuImg ">
              <div>
                <img src={wellcomeText?.Image} alt="" />
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
