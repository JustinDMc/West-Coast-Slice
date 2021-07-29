import './App.css';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import { Route, Switch } from "react-router-dom"

function App() {
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
