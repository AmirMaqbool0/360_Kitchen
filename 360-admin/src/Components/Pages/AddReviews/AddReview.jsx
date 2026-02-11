import React, { useState } from "react";
import "./style.css";
import useFirestoreWriter from "../../../Hooks/useFirestoreWriter";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../Loader/Loader";

const AddReview = () => {

  
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState();

  const { writeToFirestore, error, loading } = useFirestoreWriter('Reviews');
  const handleAddData = async () => {
    try {
      const imgRef = ref(storage, `reviews/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);

      const data = {
      review:review,
      rating:rating,
        productImage: imageURL
      };

      await writeToFirestore(data);
           
      setRating('');
      setReview('')
    } catch (error) {
      console.error("Error uploading image and adding data to Firestore:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="add-review-container">
      <div className="add-review-box">
        <div className="add-review-rating">
          <span>Rating</span>
          <input type="number" max={5} min={1} onChange={(e) => setRating(e.target.value)} value={rating}/>
        </div>
        <div className="add-review-text">
          <span>Review Text</span>
          <textarea placeholder="Review Text..." onChange={(e) => setReview(e.target.value)} value={review}/>
        </div>
        <div className="add-review-image">
          <span>Product Image</span>
          <input type="file"  onChange={handleImageChange}/>
        </div>
        <div className="add-review-btn">
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

export default AddReview;
