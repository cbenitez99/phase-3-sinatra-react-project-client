import React from "react"
import ReviewCard from "./ReviewCard"

function ReviewsContainer({ reviews, handleDelete }) {
    const mappedReviews = reviews.map(review => <ReviewCard key={review.id} review={review} handleDelete={handleDelete} />)
    return (
        <div className="reviews-container">
            <h1 id="review-list-title">GAMES</h1>
            {mappedReviews}
        </div>
    )
};

export default ReviewsContainer;
