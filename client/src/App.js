import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import Orders from './Orders'

function App() {
  const [pizzaCollection, setPizzaCollection] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  // const [shazamCollection, setShazamCollection] = useState([]);

  useEffect(() => {
    fetch(`/pizzas`)
    .then(res => res.json())
    .then(pizzaData => setPizzaCollection(pizzaData))
  }, [])

  // useEffect(() => {
  //   fetch("https://shazam.p.rapidapi.com/songs/get-details?key=40333608&locale=en-US", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "7a9f4a66d1msh228fce086544fb4p1a004ejsn093be23161c0",
  //       "x-rapidapi-host": "shazam.p.rapidapi.com"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(response => {console.log(response)})
  // }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path ="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/home">
          <NavBar currentUser={currentUser}/>
          <Home currentUser={currentUser} pizzaCollection={pizzaCollection}/>
        </Route>
        <Route exact path ="/about">
          <NavBar currentUser={currentUser}/>
          <About />
        </Route>
        <Route exact path ="/orders">
          <NavBar currentUser={currentUser}/>
          <Orders currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
