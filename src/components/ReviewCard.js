import React, {useState} from "react";

function ReviewCard({review, handleDelete}) {
    
    const [likes, setLikes] = useState(review.likes)

    const [dislikes, setDislikes] = useState(review.likes)

    function handlePatch(id) {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},      
            body: JSON.stringify({likes: likes + 1 })
        })
        .then(response => response.json())
        .then(data => setLikes(likes + 1)) //cause re-render with state, could have been done another way
    };

    function handleDislikePatch(id) {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},      
            body: JSON.stringify({likes: likes - 1 })
        })
        .then(response => response.json())
        .then(data => setDislikes(likes - 1)) //cause re-render with state, could have been done another way
    };

    

    return (
    <div>
        <div id="review-card">
            <span className="card-title">Game: <strong>{review.game.title}</strong> </span>
            <p>Price: <strong>{"$" + review.game.price}</strong></p>
            <p>Platform: <strong>{review.game.platform}</strong></p>
            <p>Review: <em>"{review.content}"<br/></em>- {review.user_name}</p>
            <div className="card-action" id="button-rev-card">
            <button className="waves-effect waves-dark btn-small" onClick={(e) => handleDelete(review.id)}>Remove Review</button> {""}
            <button className="waves-effect waves-dark btn-small">{likes ? "Dislike:" : dislikes }</button>
            <button className="waves-effect waves-light btn-small" onClick={() => handlePatch(review.id)}>{likes ? "Dislike" : "Like"}: {Math.abs(likes)} </button>
            <button className="waves-effect waves-light btn-small" onClick={() => handleDislikePatch(review.id)}>{dislikes ? "Dislike" : "Like"}: {Math.abs(dislikes)}</button>
            {/* <button className="waves-effect waves-light btn-small" onClick={() => handlePatch(review.id)}> {likes ? '<3' : null} {likes}</button> */}
            </div>
        </div>
    </div>
    )
};

export default ReviewCard;