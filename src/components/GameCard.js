import React from "react";
// import {NavLink} from "react-router-dom"

function GameCard({game}) {
    return (
        <div>
            <hr/>
            Title: <strong>{game.title}</strong>
            <br/>
            Price: <em>${game.price}.99</em>
            <br/>
            Platform: <strong>{game.platform}</strong> 
            <hr/>
            {/* <NavLink to="/reviews/${}:id"><button>See reviews</button></NavLink> */}
        </div>
    )
}

export default GameCard;