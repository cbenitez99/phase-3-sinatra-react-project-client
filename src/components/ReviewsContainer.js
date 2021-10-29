import React from "react";
import GameReviewForm from "./GameReviewForm";

function ReviewsContainer() {
    return (
        <div className="reviews-container">
            <h1>Post Your Reviews Here:</h1>
            <GameReviewForm/>
        </div>
    )
}

export default ReviewsContainer;