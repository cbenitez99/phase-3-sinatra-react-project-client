import React from "react"
import ReviewCard from "./ReviewCard"

function ReviewsContainer({ reviews, handleDelete}) {
    return (
        <div>
            <h1>Reviews</h1>
            {reviews.map(review => 
            <ReviewCard key={review.id}
            review={review}
            platform={review.game.platform}
            price={review.game.price}
            title={review.game.title}
            content={review.content}
            user_name={review.user_name} 
            handleDelete={handleDelete}/>)}
        </div>
    )
}

export default ReviewsContainer;