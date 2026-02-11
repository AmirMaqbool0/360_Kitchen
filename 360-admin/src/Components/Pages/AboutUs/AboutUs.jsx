import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../../Button/Button";
import { app } from "../../../firebase";
import { getFirestore, collection, doc, updateDoc ,getDoc } from "firebase/firestore";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../Loader/Loader";

const AboutUs = () => {
  const [about,setAbout] = useState({
    aboutText: '',
    aboutHeading: '',
    aboutImage: ''
  });
  const [text, setText] = useState('');
  const [heading, setHeading] = useState('');
  const [image, setImage] = useState(null);
   const [loading,setLoading] =useState(false)
  const db = getFirestore(app);
  const footerDocRef = doc(db, "aboutUs", "fCP11TP1wimRMMIc3huj");

  const handleAddFooter = async () => {
    try {
      setLoading(true)
      if (image) {
        const imgRef = ref(storage, `about/${uuidv4()}`);
        await uploadBytes(imgRef, image);
        const imageURL = await getDownloadURL(imgRef);
        await updateDoc(footerDocRef, {
          aboutHeading: heading,
          aboutText: text,
          aboutImage: imageURL
        });
        setLoading(false)
        console.log("Footer updated successfully");
      } else {
        console.error("No image selected.");
      }
    } catch (error) {
      console.error("Error updating footer:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getAbout = async () => {
    try {
      const docRef = doc(db, 'aboutUs', 'fCP11TP1wimRMMIc3huj');
      const aboutDoc = await getDoc(docRef);
      if (aboutDoc.exists()) {
        setAbout(aboutDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting about:", error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  useEffect(() => {
    setText(about.aboutText);
    setHeading(about.aboutHeading);
  }, [about]);

  return (
    <div className="aboutus-container">
      <div className="about-box">
        <div className="about-titel">
          <span>Title</span>
          <input type="text" placeholder="Title..." onChange={(e) => setHeading(e.target.value)} value={heading} />
        </div>
        <div className="about-text">
          <span>About Text</span>
          <textarea placeholder="About Text..." onChange={(e) => setText(e.target.value)} value={text} />
        </div>
        <div className="aboutImage">
          <span>About Image</span>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="about-btn">
          {
            loading ? (<Loader/>) : (<button onClick={handleAddFooter}>Add About</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
