import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import otherPage from './otherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
        </header>
        <Route exact path="/" component={Fib}></Route>
        <Route path="/otherpage" component={otherPage}></Route>
      </div>
    </Router>
  );
}

export default App;
