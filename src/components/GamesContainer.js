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
        <div id="game-card-container">
            <em><strong><h1 style={{color: "white"}} className="game-list-title">Saved Games</h1></strong></em>
        
            {mappedgames}
        </div>
    )
};

export default GamesContainer;
