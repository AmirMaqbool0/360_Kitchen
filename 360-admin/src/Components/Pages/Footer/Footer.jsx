import React, { useState, useEffect } from 'react';
import './style.css';
import { app } from '../../../firebase';
import { getFirestore, collection, doc, updateDoc, getDoc } from 'firebase/firestore';
import Loader from '../../Loader/Loader';

const Footer = () => {
  const [text, setText] = useState('Default footer text');
  const [image, setImage] = useState('');
  const [loading,setLoading] = useState(false)

  const db = getFirestore(app);
  const footerDocRef = doc(db, 'footerText', 'qBH3JWdOB75orDAqfDN2'); 
  const handleAddFooter = async () => {
    try {
      setLoading(true)
      await updateDoc(footerDocRef, {
        text: text,
      });
      setLoading(false)
      console.log('Footer updated successfully');
    } catch (error) {
      console.error('Error updating footer:', error);
    }
  };

  const getFooterText = async () => {
    try {
      const footerDoc = await getDoc(footerDocRef);
      if (footerDoc.exists()) {
        setText(footerDoc.data().text);
      } else {
        console.log('Footer text document not found');
      }
    } catch (error) {
      console.error('Error fetching footer text:', error);
    }
  };

  useEffect(() => {
    getFooterText();
  }, []); 

  return (
    <div className='footer-container'>
      <div className="footer-box">
        <div className="footer-text">
          <span>Text</span>
          <textarea placeholder='Footer Text...' onChange={(e) => setText(e.target.value)} value={text}/>
        </div>
        <div className="footer-btn">
          {
            loading ? (<Loader/>) :(<button onClick={handleAddFooter}>Add Footer</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
