import React from "react"

function GameCard ({game}){
    return(
        <div id="game-card">
            <div className="game-card-title">
                <h3 style={{color: "white"}}>{game.title}</h3>
            </div>
            <p style={{color: "red"}}>Only for a price of {"$" + game.price}!</p>
        </div>
    )
}

export default GameCard;