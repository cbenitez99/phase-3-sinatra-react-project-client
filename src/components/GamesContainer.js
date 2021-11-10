import React, {useState, useEffect} from "react"
import GameCard from "./GameCard"

function GamesContainer({ handleDelete}) {
    const [games, setGames] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/games`)
        .then(resp => resp.json())
        .then(data => setGames(data))
    },[]);

    const mappedgames = games.map(game => <GameCard key={game.id} game={game} handleDelete={handleDelete}/>)
    return (
        <div className="games-container">
            <h1 id="game-list-title">Games</h1>
            {mappedgames}
        </div>
    )
};

export default GamesContainer;
