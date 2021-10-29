import React from "react";
import {NavLink} from "react-router-dom"

function GameCard({game}) {
    return (
        <div>
            <hr/>
            Title: <strong>{game.title}</strong>
            <br/>
            Price: <em>${game.price}</em>
            <br/>
            Platform: <strong>{game.platform}</strong> 
            <hr/>
            <NavLink to="/reviews/all"><button>See reviews</button></NavLink>
        </div>
    )
}

export default GameCard;