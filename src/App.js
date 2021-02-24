
import './App.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
