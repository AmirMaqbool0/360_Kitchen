import React from "react";
import sandwich from "../../../images/sandwich.png";
import { Star } from 'lucide-react';
import "./Feedback.css";

const FeedbackCard = ({ reviewsData }) => {
  const renderRatingStars = () => {
    const rating = reviewsData.rating;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star color="#FF7A00" fill="#FF7A00" size={22} key={i} />);
      } else {
        stars.push(<Star color="#FF7A00" fill="none" size={22} key={i} />);
      }
    }
    return stars;
  };
  const truncatedItemName = reviewsData?.review
  ? (reviewsData.review.length > 110
    ? reviewsData.review.substring(0, 110) + "..."
    : reviewsData.review)
  : "Untitled";

  return (
    <>
      <div className="card">
        <div className="review-card-logo">
        <img src={reviewsData?.productImage} alt="" />
        </div>
        <div className="feedback-content">
        <div className="feedback-rating">
          {renderRatingStars()}
        </div>
        <p>
          {truncatedItemName}
        </p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
