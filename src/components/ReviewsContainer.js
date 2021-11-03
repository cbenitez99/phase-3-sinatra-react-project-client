import React from "react"
import ReviewCard from "./ReviewCard"

function ReviewsContainer({ reviews, handleDelete}) {
    return (
        <div>
            <h1>Reviews</h1>
            {reviews.map(review => <ReviewCard key={review.id} review={review} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default ReviewsContainer