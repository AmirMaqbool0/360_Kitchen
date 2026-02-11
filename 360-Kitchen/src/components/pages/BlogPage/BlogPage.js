import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import line from "../../../images/line.png";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase";

// https://detailed.com/food-blogs/

const BlogPage = () => {
  const db = getFirestore(app);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      const blogRef = doc(db, "blogs", id);
      const blogDoc = await getDoc(blogRef);
      if (blogDoc.exists()) {
        setBlog(blogDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting blog:", error);
    }
  };

  return (
    <>
      <div className="container mt-2 mb-5">
        <div className="row my-4">
          <div className="d-flex justify-content-center align-items-center">
            <span>
              <img src={line} alt="" className="blog-line" />
            </span>
            <p className="mx-2 BlogHeading">Blog</p>
            <span>
              <img src={line} alt="" className="blog-line" />
            </span>
          </div>
        </div>
        <div className="row d-flex justify-content-center blogs-container">
      
            <div className="BlogPageContainer">
              <img src={blog?.blogImage} alt="" />
              <div className="blog-titel">
                <span>{blog?.title}</span>
              </div>
              <p>{blog?.blogText}</p>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default BlogPage;
