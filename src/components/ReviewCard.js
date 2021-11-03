import React from "react";

function ReviewCard({review, platform, price, title, content, user_name, handleDelete}) {
    return (
        <div>
            <hr/>
            <h5>Name: <strong>{user_name}</strong></h5>
            Game: {title} 
            <br/>
            Price: $ {price} 
            <br/>
            Platform: {platform}
            <br></br>
            Review: <p>{content}</p>
            <button onClick={(e) => handleDelete(review.id)}>Remove Review</button>
            <hr/>
        </div>
    )
}

export default ReviewCard;