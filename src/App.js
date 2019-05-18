import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home/home';
import Register from './register/register';
import EmailConfirmationRedirect from './emailConfirmationRedirect/emailConfirmationRedirect';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/emailconfirm/redirect" component={EmailConfirmationRedirect}/>
      </div>
    </Router>

  );
}

export default App;
