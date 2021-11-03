import React from "react";

function ReviewCard({review, handleDelete}) {
    return(
        <div>
            <hr/>
            <h5>Name: <strong>{review.user_name}</strong></h5>
            Game: {review.game.title} 
            <br/>
            Price: $ {review.game.price} 
            <br/>
            Platform: {review.game.platform}
            <br></br>
            Review: <p>{review.content}</p>
            <button onClick={(e) => handleDelete(review.id)}>Remove Review</button>
            <hr/>
        </div>
    )
}

export default ReviewCard;