import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/Home"
import GamesContainer from './components/GamesContainer';
import ReviewsContainer from './components/ReviewsContainer';

function App() {

  const [games, setGames] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/games")
    .then(response => response.json())
    .then(data => {
      
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/games"> <GamesContainer /> </Route>
          <Route exact path="/reviews"> <ReviewsContainer/> </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App
