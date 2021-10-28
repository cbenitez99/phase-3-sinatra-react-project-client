import logo from './logo.svg';
import React, {useState, useEffect} from "react"
import './App.css';
import GameCard from "./components/GameCard"
function App() {
  const [games, setGames] = useState([])

  useEffect(()=> {
    fetch('http://localhost:9292/games')
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      // setGames(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [])

  return (
    <div className="App">
     {games.map((game) => <GameCard game={game}/>)}
    </div>
  );
}

export default App;
