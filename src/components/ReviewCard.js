import React from "react";

function ReviewCard({review, platform, price, title, content, user_name, handleDelete}) {
    return (
    <div>
        <div id="review-card">
            <span className="card-title">Game: <strong>{title}</strong> </span>
            <p>Price: <strong>${price}</strong></p>
            <p>Platform: <strong>{platform}</strong></p>
            <p>Review: <em>"{content}"<br/></em>- {user_name}</p>
        </div>
        <div className="card-action" id="button-rev-card">
            <button className="waves-effect waves-light btn-large" onClick={(e) => handleDelete(review.id)}>Remove Review</button>
        </div>
    </div>
    )
}

export default ReviewCard;