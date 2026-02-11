import React, { useState } from "react";
import "./style.css";
import Logo from "../../Assests/blogImg.png";
import { Trash2, Pencil, X } from "lucide-react";
import { app ,storage} from "../../firebase";
import { getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../Loader/Loader";

const ProductCard = ({ data, collectionName }) => {
  const [model, setModel] = useState(false);
  const [title, setTitle] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [image, setImage] = useState(data.image || null);
  const [description, setDescription] = useState(data.description);
   const [loading ,setLoading] =useState(false)
  const handleDelete = async () => {
    try {
      const db = getFirestore(app);
      await deleteDoc(doc(db, collectionName, data.id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true)
      const imgRef = ref(storage, `${collectionName}/${uuidv4()}`);
      await uploadBytes(imgRef, image);
      const imageURL = await getDownloadURL(imgRef);
      const db = getFirestore(app);
      const docRef = doc(db, collectionName, data.id);
      await updateDoc(docRef, {
        name: title,
        price: price,
        productImage: imageURL,
        description: description,
      });
      setLoading(false)
      console.log("Document updated successfully!");
      setModel(false);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  const truncatedItemName = data?.name
  ? (data.name.length > 16
    ? data.name.substring(0, 16) + ".."
    : data.name)
  : "Untitled";

  return (
    <div className="product-card-box">
      <div className="product-card-logo">
        <img src={data.productImage} alt="" />
      </div>
      <div className="product-card-titel">
        <span>{truncatedItemName}</span>
      </div>
      <div className="product-card-price">
        <span>CA${data.price}</span>
      </div>
      <div onClick={() => setModel(!model)}>
          <Pencil />
        </div>
      <div className="product-card-btn">
        <div onClick={handleDelete}>
          <Trash2 />
        </div>
      </div>
      {/* Edit Modal */}
      <div className={model === true ? `edit-modal` : "hide"}>
        <div className="edit-model-box">
          <div className="model-inputs">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="save-btn" >
            {
              loading ? (<Loader/>) :( <button onClick={handleUpdate}>Save</button>)
            }
           
          </div>
          <div className="close-btn" onClick={() => setModel(!model)}>
            <X color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
