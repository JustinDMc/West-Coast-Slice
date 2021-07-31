import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import { Route, Switch } from "react-router-dom"

function App() {
  const [pizzaCollection, setPizzaCollection] = useState([]);

  useEffect(() => {
    fetch(`/pizzas`)
    .then(res => res.json())
    .then(pizzaData => console.log(pizzaData))
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path ="/">
          <Login />
        </Route>
        <Route exact path ="/signup">
          <Signup />
        </Route>
        <Route exact path ="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
