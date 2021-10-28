import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import GameCard from "./components/GameCard"
import Home from "./components/Home"
import Reviews from "./components/Reviews"
function App() {

  const [games, setGames] = useState({})

  useEffect(()=> {
    fetch('http://localhost:9292/games')
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [])

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/games"><GameCard/></Route>
          <Route exact path="/reviews"></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App
