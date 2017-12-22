import React, { Component } from 'react';
import Home from './components/Home/Home.js';
import Leaderboard from './components/Leaderboard/Leaderboard.js';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
       <Router>
        <div>
          <div className="App">
            <h1>Users</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </div>

          <Route exact path="/" component={Home}/>
          <Route path="/Leaderboard" component={Leaderboard}/>
        </div>   
      </Router>
    );
  }
}

export default App;