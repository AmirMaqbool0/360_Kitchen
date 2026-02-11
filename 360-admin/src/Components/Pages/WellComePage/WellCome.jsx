import React, { useEffect, useState } from "react";
import "./style.css";
import { app } from "../../../firebase";
import { getFirestore, collection, doc, updateDoc ,getDoc} from "firebase/firestore";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../Loader/Loader";

const WellCome = () => {
  const [wellcome, setWellcome] = useState({});
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState();
  const [loading,setLoading] =useState(false)

  const db = getFirestore(app);
  const footerDocRef = doc(db, "welcomeToOurRestaurant", "bXyfCqBDff9R9aCpAmPj");

  const handleAddFooter = async () => {
    try {
      setLoading(true)
      const imgRef = ref(storage, `wellcome/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);
      
      await updateDoc(footerDocRef, {
        heading: heading,
        text: text,
        Image: imageURL
      });
      console.log("Footer updated successfully");
      setLoading(false)
    } catch (error) {
      console.error("Error updating footer:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getWellcome = async () => {
    try {
      const docRef = doc(db, 'welcomeToOurRestaurant', 'bXyfCqBDff9R9aCpAmPj');
      const wellcomeDoc = await getDoc(docRef);
      if (wellcomeDoc.exists()) {
        setWellcome(wellcomeDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting about:", error);
    }
  };

  useEffect(() => {
    getWellcome();
  }, []);

  useEffect(() => {
    setText(wellcome.text || "");
    setHeading(wellcome.heading || "");
  }, [wellcome]);

  return (
    <div className="wellcome-container">
      <div className="wellcome-box">
        <div className="wellcome-titel">
          <span>Title</span>
          <input type="text" placeholder="Title" onChange={(e) => setHeading(e.target.value)} value={heading} />
        </div>
        <div className="wellcome-text">
          <span>Text</span>
          <textarea placeholder="Wellcome Text..." onChange={(e) => setText(e.target.value)} value={text} />
        </div>
        <div className="wellcome-image">
          <span>Image</span>
          <input type='file' onChange={handleImageChange} />
        </div>
        <div className="wellcone-btn">
          {
            loading ? (<Loader/>) :(<button onClick={handleAddFooter}>Add Wellcome</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default WellCome;
