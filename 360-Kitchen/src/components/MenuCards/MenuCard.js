import React, { useState } from "react";
import "./MenuCard.css";
import { Plus, Star } from "lucide-react";
import NotFoundImage from "../../images/notfound.jpeg";
import {Info} from 'lucide-react'
import {
  collection,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../../firebase";
const MenuCard = ({ menuCardData, onSelect }) => {
  const truncatedItemName = menuCardData?.name
  ? (menuCardData.name.length > 26
    ? menuCardData.name.substring(0, 26) + "..."
    : menuCardData.name)
  : "Untitled";

  const [imageError, setImageError] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const db = getFirestore(app);

  const handlePlusClick = async () => {
    setClickCount(clickCount + 1);
    await updateFeatureProduct();
  };

  const updateFeatureProduct = async () => {
    const productQuery = query(
      collection(db, "featureProducts"),
      where("productId", "==", menuCardData.id || "")
    );    

    const productSnapShot = await getDocs(productQuery);

    if (productSnapShot.empty) {
      addNewFeatureProduct();
    } else {
      await updateExistingFeatureProduct(productSnapShot.docs[0].id);
    }
  };

  
const addNewFeatureProduct = async () => {
  if (menuCardData.id !== undefined) {
    await addDoc(collection(db, "featureProducts"), {
      productId: menuCardData.id,
      createdAt: menuCardData.createdAt,
      clickCount: 1,
      collectionName: menuCardData.collection 
    });
  } else {
    console.error("Invalid productId: ", menuCardData.id);
  }
};

  const updateExistingFeatureProduct = async (docId) => {
    const docRef = doc(db, "featureProducts", docId);
    try {
      await updateDoc(docRef, {
        clickCount: clickCount,
      });
    } catch (error) {
      console.error("Error updating feature product in Firestore: ", error);
    }
  };

  return (
    <>
      <div className="cards">
        <div className="product-image">
          <img
            src={imageError ? NotFoundImage : menuCardData?.productImage}
            alt="Product Image"
            onError={() => setImageError(true)}
          />
        </div>
        <p className="name">{truncatedItemName}</p>
        <p className="price">CA{menuCardData?.price}</p>
        <div className="info-btn" data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onSelect}>
        <Info  color="white" size={18}/>
        </div>
       
        <span className="cardFooter">
          {/* <div className="d-flex align-items-center rating">
            <Star color="#FF7A00" fill="#FF7A00" />
            <p className="m-0 p-0 ms-1">4.9</p>
          </div> */}
          <div>
            {/* <div className="CardFooteBtn" onClick={handlePlusClick}>
              <Plus
                color="white"
                size={24}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onSelect}
              />
            </div> */}
          </div>
        </span>
      </div>
    </>
  );
};

export default MenuCard;