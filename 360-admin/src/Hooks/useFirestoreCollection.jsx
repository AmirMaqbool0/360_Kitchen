import { useEffect, useState } from 'react';
import { app } from '../firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const useFirestoreCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const db = getFirestore(app);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const dataArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    return () => {
      
    };
  }, [db, collectionName]);

  return data;
};

export default useFirestoreCollection;
