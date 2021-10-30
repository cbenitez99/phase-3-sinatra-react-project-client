import React from "react";

function GameCard({game, handleDelete}) {
    return (
        <div>
            <hr/>
            Title: <strong>{game.title}</strong>
            <br/>
            Price: <em>${game.price}</em>
            <br/>
            Platform: <strong>{game.platform}</strong> 
            <hr/>
            <button onClick={()=>handleDelete(game.id)}>Remove game</button>
        </div>
    )
}

export default GameCard;