import React, { useEffect, useState } from "react";
import "./Delivery.css";
import DeliveryImg from "../../../images/deliveryImg.png";
import line from "../../../images/line.png";
import {app} from '../../../firebase'
import { getDoc,doc,getFirestore } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";

const Delivery = () => {
  const [deliveryText, setDeliveryText] = useState(null);
  const [loading,setLoading] =useState(true)
  const db = getFirestore(app);

  useEffect(() => {
    getDeliveryText();
  }, []);

  const getDeliveryText = async () => {
    const docRef = doc(db, 'deliveryServices', 'GwhbCldOys6SWXjIrCkB');
    const deliveryDoc = await getDoc(docRef);
    setDeliveryText(deliveryDoc.data());
    setLoading(false)
  };
  if (loading || !deliveryText) {
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
      <div className="container-fluid py-5 deliveryContainerMain">
        <div className="container">
          <div className="delivery-content">
            <div className="col-md-6 DeliveryImg">
              <div>
                <img src={deliveryText?.image} alt="" />
              </div>
            </div>
            <div className="col-md-6 DeliveryDescription">
              <div>
                <p>
                  <span className="line me-2">
                    <img src={line} alt="" />
                  </span>
                  <span>Delivery Services</span>
                </p>
                <p className="m-0 dilivery-heading" >
                {deliveryText && deliveryText.heading && deliveryText.heading.split(" ").map((word, index) => (
                      <span key={index} style={{ color: index % 2 === 0 ? 'black' : '#e47719' }}>{word} </span>
                    ))}
                </p>
                <p>
                  {deliveryText?.text}
                </p>
                {/* <button className="button-main px-4 py-2">Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
