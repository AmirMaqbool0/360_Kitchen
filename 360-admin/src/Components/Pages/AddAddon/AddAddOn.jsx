import React, { useState } from "react";
import "./style.css";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; 
import useFirestoreWriter from "../../../Hooks/useFirestoreWriter";
import Loader from "../../Loader/Loader";

const AddAddOn = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();


  const { writeToFirestore, error, loading } = useFirestoreWriter('addOn');
  const handleAddData = async () => {
    try {
      const imgRef = ref(storage, `addon/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);

      const data = {
        name: title,
        price: price,
        description: description,
        productRating: rating,
        productImage: imageURL
      };

      await writeToFirestore(data);
      setPrice('');
      setTitle('');
      setRating('');
      setDescription('');
    } catch (error) {
      console.error("Error uploading image and adding data to Firestore:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="addaddon-container">
      <div className="addaddon-box">
        <div className="addaddon-name-desscription">
          <div className="addaddon-name">
            <span>Title</span>
            <input type="text" placeholder="Title..."  onChange={(e)=> setTitle(e.target.value)} value={title}/>
          </div>
          <div className="addaddon-description">
            <span>Description</span>
            <textarea placeholder="Add Description..." onChange={(e)=> setDescription(e.target.value)} value={description} />
          </div>
        </div>
        <div className="addaddon-price-rating">
          <div className="addaddon-price">
            <span>Price</span>
            <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price} />
          </div>
          <div className="addaddon-rating">
            <span>Rating</span>
            <input type="number" min={"1"} max={"5"} onChange={(e)=> setRating(e.target.value)} value={rating}/>
          </div>
          <div className="addaddon-image">
            <span>Image</span>
            <input type="file" onChange={handleImageChange} />
          </div>
        </div>
        <div className="addaddon-btn">
        {
            loading ? (<Loader/>):(

              <button onClick={handleAddData}>Add Pizza</button>
           )
          }
        </div>
      </div>
    </div>
  );
};

export default AddAddOn;
