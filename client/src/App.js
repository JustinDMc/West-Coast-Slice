import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import { Route, Switch } from "react-router-dom"

function App() {
  const [pizzaCollection, setPizzaCollection] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch(`/pizzas`)
    .then(res => res.json())
    .then(pizzaData => console.log(pizzaData))
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path ="/">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path ="/home">
          <Home currentUser={currentUser}/>
        </Route>
        <Route exact path ="/about">
          <About currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
