import React from "react"

function GameCard ({game}){
    return(
        <div id="game-card">
            <div className="game-card-title">
                <h3 style={{color: "red"}}>{game.title}</h3>
            </div>
            <p style={{color: "#EE6D73"}}>Only for a price of {"$" + game.price}!</p>
        </div>
    )
}

export default GameCard;