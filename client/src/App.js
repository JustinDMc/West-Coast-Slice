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

  useEffect(() => {
    fetch(`/pizzas`)
    .then(res => res.json())
    .then(pizzaData => setPizzaCollection(pizzaData))
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path ="/login">
          <NavBar />
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/signup">
          <NavBar />
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/home">
          <NavBar />
          <Home currentUser={currentUser} pizzaCollection={pizzaCollection}/>
        </Route>
        <Route exact path ="/about">
          <NavBar />
          <About />
        </Route>
        <Route exact path ="/orders">
          <NavBar />
          <Orders />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
