import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from "../firebase";
const useFirestoreWriter = (collectionName) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const writeToFirestore = async (data) => {
    setLoading(true);
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, collectionName);
      await addDoc(collectionRef, data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { writeToFirestore, error, loading };
};

export default useFirestoreWriter;
