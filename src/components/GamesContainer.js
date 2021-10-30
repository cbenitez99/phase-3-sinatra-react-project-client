import React from "react"
import GameCard from "./GameCard"

function GamesContainer({games, handleDelete}) {
    return (
        <div className="games-container">
            <h1>Games</h1>
            {games.map(game => <GameCard key={game.id} game={game} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default GamesContainer