import React, { useState } from "react";
import "./style.css";
import useFirestoreWriter from "../../../Hooks/useFirestoreWriter";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; 
import Loader from "../../Loader/Loader";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const { writeToFirestore, error, loading } = useFirestoreWriter('blogs');
    const handleAddData = async () => {
    try {
      const imgRef = ref(storage, `blogs/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);

      const data = {
        title: title,
        blogText: description,
        blogImage: imageURL
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
    <div className="addblog-container">
      <div className="addblog-box">
        <div className="addblog-titel">
          <span>Title</span>
          <input type="text" placeholder="Titel..." onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className="addblog-text">
          <span>Text</span>
          <textarea placeholder="Blog Text..." onChange={(e) => setDescription(e.target.value)} value={description}/>
        </div>
        <div className="addblog-image">
          <span>Image</span>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="addblog-btn">
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

export default AddBlog;
