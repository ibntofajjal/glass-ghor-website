import React, { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://salty-depths-67861.herokuapp.com/addReview`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <h1 className="text-center my-5">Reviews</h1>
        <div className="row review-row">
          {reviews.map((review) => (
            <div className="review-card ">
              <div single-review-card key="review._id">
                <h3>{review.title}</h3>
                <hr />
                <p>{review.description}</p> <hr />
                <h6>Reviewed By: {review.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
