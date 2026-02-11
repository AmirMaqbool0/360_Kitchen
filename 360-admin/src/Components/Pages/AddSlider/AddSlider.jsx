import React, { useState } from "react";
import "./style.css";
import useFirestoreWriter from "../../../Hooks/useFirestoreWriter";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; 
import Loader from "../../Loader/Loader";

const AddSlider = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const { writeToFirestore, error, loading } = useFirestoreWriter("homeSlider");
  const handleAddData = async () => {
    try {
      const imgRef = ref(storage, `home-slider/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);

      const data = {
        title: title,
        description: description,
        image: imageURL
      };

      await writeToFirestore(data);
      setTitle('');
    
      setDescription('');
    } catch (error) {
      console.error("Error uploading image and adding data to Firestore:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="add-slider-container">
      <div className="add-slider-box">
        <div className="add-slider-title">
          <span>Title</span>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="add-slider-description">
          <span>Description</span>
          <textarea
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="add-slider-image">
          <span>Image</span>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="add-slider-btn">
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

export default AddSlider;
