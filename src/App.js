import Login from './components/Auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route path='/home'>
            <Home/>
          </Route>
          
          <Route path='/detail/:id' >
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
