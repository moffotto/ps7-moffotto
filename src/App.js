import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Dnd } from './Dnd';
import { Mtg } from './Mtg';
import { Homepage } from './Homepage';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="container">
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/dnd">Dungeons and Dragons</Link>
                { ' ' }
                <Link to="/mtg">Magic The Gathering</Link>
                <Route exact path="/" component={ Homepage } />
                <Route path="/dnd" component={ Dnd } />
                <Route path="/mtg" component={ Mtg } />
              </div>
            </Router>
            );
    }
}

export default App;