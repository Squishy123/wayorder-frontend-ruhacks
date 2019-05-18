import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home/home';
import Register from './register/register';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
      </div>
    </Router>

  );
}

export default App;
