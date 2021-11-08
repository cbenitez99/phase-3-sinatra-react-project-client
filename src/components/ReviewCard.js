import React /*{ useState }*/ from "react";
// import ReviewEdit from "./ReviewEdit";

function ReviewCard({review, platform, price, title, content, user_name, handleDelete, handlePatch}) {
    return (
    <div>
        <div id="review-card">
            <span className="card-title">Game: <strong>{title}</strong> </span>
            <p>Price: <strong>{"$" + price}</strong></p>
            <p>Platform: <strong>{platform}</strong></p>
            <p>Review: <em>"{content}"<br/></em>- {user_name}</p>
            <div className="card-action" id="button-rev-card">
            <button className="waves-effect waves-dark btn-small" onClick={(e) => handleDelete(review.id)}>Remove Review</button> {""}
            <button className="waves-effect waves-light btn-small" onClick={(e) => handlePatch(review.id)}>Edit Review</button>
            </div>
        </div>
    </div>
    )
}

export default ReviewCard;