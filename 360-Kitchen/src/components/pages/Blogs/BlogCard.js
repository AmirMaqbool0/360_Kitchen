import React from "react";
import blogImg from "../../../images/blogImg.png";
import "./Blog.css";

const BlogCard = ({blogCardData}) => {
  const blogTitel = blogCardData?.title
  ? (blogCardData.title.length > 18
    ? blogCardData.title.substring(0, 18) + "..."
    : blogCardData.title)
  : "Untitled";

  const blogText = blogCardData?.blogText
  ? (blogCardData.blogText.length > 130
    ? blogCardData.blogText.substring(0, 130) + "..."
    : blogCardData.blogText)
  : "Untitled";
  return (
    <>
      <div className="BlogCard">
        <div className="blog-card-logo">
        <img src={blogCardData?.blogImage} alt="" />
        </div>
        <div className="blog-titel-blog">
        <span>{blogTitel}</span>
        </div>
        <div className="px-4 py-4">
          <p>
            {blogText}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
