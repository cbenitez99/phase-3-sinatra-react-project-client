import React, {useState} from "react";

function ReviewCard({review, handleDelete}) {
    
    const [likes, setLikes] = useState(review.likes)

    function handlePatch(id) {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},      
            body: JSON.stringify({likes: likes + 1 })
        })
        .then(response => response.json())
        .then(data => setLikes(likes + 1)) 
    };

    function handleDislikePatch(id) {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},      
            body: JSON.stringify({likes: likes - 1 })
        })
        .then(response => response.json())
        .then(data => setLikes(likes - 1))
    };

    return (
    <div>
        <div id="review-card">
            <p>Game: <strong>{review.game.title}</strong> </p>
            <p>Price: <strong>{"$" + review.game.price}</strong></p>
            <p>Platform: <strong>{review.game.platform}</strong></p>
            <p>Review: <em>"{review.content}"<br/></em>- {review.user_name}</p>
            <div className="card-action" id="button-rev-card">
            <button className="waves-effect waves-dark btn-small" onClick={() => handleDelete(review.id)}>Remove Review</button> {""}
            <button className="waves-effect waves-light btn-small" onClick={() => handlePatch(review.id)}>Likes: {likes}</button> {""}
            <button className="waves-effect waves-dark btn-small" onClick={() => handleDislikePatch(review.id)}>Dislike</button> 
            </div>
        </div>
    </div>
    )
};

export default ReviewCard;