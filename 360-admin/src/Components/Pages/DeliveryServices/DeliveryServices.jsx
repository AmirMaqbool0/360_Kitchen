import React, { useEffect, useState } from "react";
import "./style.css";
import { app } from "../../../firebase";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../Loader/Loader";

const DeliveryServices = () => {
  const [delivery, setDelivery] = useState({});
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState();
  const [loading,setLoading] =useState(false)

  const db = getFirestore(app);
  const footerDocRef = doc(db, "deliveryServices", "GwhbCldOys6SWXjIrCkB");

  const handleAddFooter = async () => {
    try {
      setLoading(true)
      const imgRef = ref(storage, `delivery-services/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);

      await updateDoc(footerDocRef, {
        heading: heading,
        text: text,
        image: imageURL,
      });
      setLoading(false)
      console.log("Footer updated successfully");
    } catch (error) {
      console.error("Error updating footer:", error);
    }
    setHeading('');
    setText('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getDelivery = async () => {
    try {
      const docRef = doc(db, 'deliveryServices', 'GwhbCldOys6SWXjIrCkB');
      const deliveryDoc = await getDoc(docRef);
      if (deliveryDoc.exists()) {
        setDelivery(deliveryDoc.data());
        setText(deliveryDoc.data().text || ''); // Set default value for text
        setHeading(deliveryDoc.data().heading || ''); // Set default value for heading
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting about:", error);
    }
  };

  useEffect(() => {
    getDelivery();
  }, []);

  return (
    <div className="delivery-container">
      <div className="delivery-box">
        <div className="delivery-titel">
          <span>Title</span>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
          />
        </div>
        <div className="delivery-text">
          <span>Text</span>
          <textarea
            placeholder="Delivery Text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="delivery-image">
          <span>Image</span>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="delivery-btn">
          {
            loading ? (<Loader/>) :(<button onClick={handleAddFooter}>Add Delivery</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default DeliveryServices;
