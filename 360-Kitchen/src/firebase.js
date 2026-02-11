
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxmCsLSvPRbBn1v5OKNSnmj0xewGI-alM",
  authDomain: "kitchen-3a030.firebaseapp.com",
  projectId: "kitchen-3a030",
  storageBucket: "kitchen-3a030.appspot.com",
  messagingSenderId: "182511978581",
  appId: "1:182511978581:web:900efbbc87cf883d88ecdc",
  measurementId: "G-ER2FMW65GB"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);