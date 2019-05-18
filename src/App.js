import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import EmailConfirmationRedirect from './emailConfirmationRedirect/emailConfirmationRedirect';
import TopNav from './topnav/topnav';


import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNav/>

        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/emailconfirm/redirect" component={EmailConfirmationRedirect}/>
      </div>
    </Router>

  );
}

export default App;
