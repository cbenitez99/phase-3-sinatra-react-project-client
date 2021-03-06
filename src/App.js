import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/Home"
import ReviewsContainer from './components/ReviewsContainer';
import ReviewForm from './components/ReviewForm';
import GamesContainer from './components/GamesContainer'

function App() {

  const [reviews, setReviews] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:9292/reviews`)
    .then(response => response.json())
    .then(reviewsData => {
      setReviews([...reviewsData])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  function handlePost(newPost){
    setReviews(newPost)
  };

  function handleDelete(id) {
    const removedReview = reviews.filter(review => review.id !== id)
    setReviews(removedReview)
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
  };
    
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/reviews"> <ReviewsContainer reviews={reviews} handleDelete={handleDelete}/> </Route>
          <Route exact path="/reviews/new"> <ReviewForm handlePost={handlePost} /> </Route>
          <Route exact path="/games"> <GamesContainer/> </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App
