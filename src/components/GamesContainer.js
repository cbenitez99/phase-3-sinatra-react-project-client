import React from "react"

function GamesContainer({games}) {
    return (
        <div className="games-container">
            <h1>GamesContainer</h1>
            <p>{games}</p>
        </div>
    )
}

export default GamesContainer