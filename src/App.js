import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/Home"
import GamesContainer from './components/GamesContainer';
import GameReviewForm from './components/GameReviewForm';

function App() {

  const [games, setGames] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:9292/games`)
    .then(response => response.json())
    .then(gamesData => {
      setGames([...gamesData])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  function handlePost(newPost){
    setGames(newPost)
  }

  function handleDelete(id) {
    const removedGames = games.filter(game => game.id !== id)
    console.log(removedGames)
    setGames(removedGames)
    fetch(`http://localhost:9292/games/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
  }


  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/games"> <GamesContainer games={games} handleDelete={handleDelete}/> </Route>
          <Route exact path="/reviews"> <GameReviewForm handlePost={handlePost}/></Route>
          <Route path="/"> <Home/> </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App
