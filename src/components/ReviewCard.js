import React from "react";

function ReviewCard({review, handleDelete}) {
    function handleClick() {
        fetch(`https://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },      
          body: JSON.stringify({likes: review.likes + 1})
        })
        .then (resp => resp.json())
        .then (data => console.log(data))
    }
    return (
    <div>
        <div id="review-card">
            <span className="card-title">Game: <strong>{review.game.title}</strong> </span>
            <p>Price: <strong>{"$" + review.game.price}</strong></p>
            <p>Platform: <strong>{review.game.platform}</strong></p>
            <p>Review: <em>"{review.content}"<br/></em>- {review.user_name}</p>
            <div className="card-action" id="button-rev-card">
            <button className="waves-effect waves-dark btn-small" onClick={(e) => handleDelete(review.id)}>Remove Review</button> {""}
            <button className="waves-effect waves-light btn-small" onClick={() => handleClick(review)}>Like Review: {review.likes}</button>
            </div>
        </div>
    </div>
    )
}

export default ReviewCard;