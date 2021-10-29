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
    fetch(`http://localhost:9292/games/review`)
    .then(response => response.json())
    .then(gamesData => {
      debugger;
      setGames([...gamesData])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  function handlePost(newPost){
    setGames(newPost)
  }

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/games"> <GamesContainer games={games}/> </Route>
          <Route exact path="/reviews"> <GameReviewForm handlePost={handlePost}/></Route>
          <Route path="/"> <Home/> </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App
