import './App.css';
import Login from './Login'
import Signup from './Signup'
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
      </Switch>
    </div>
  );
}

export default App;
