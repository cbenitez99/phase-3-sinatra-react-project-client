import React from "react"
import GameCard from "./GameCard"

function GamesContainer({games}) {
    return (
        <div className="games-container">
            <h1>Games</h1>
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </div>
    )
}

export default GamesContainer