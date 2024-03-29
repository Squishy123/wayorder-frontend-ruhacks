import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import EmailConfirmationRedirect from './emailConfirmationRedirect/emailConfirmationRedirect';
import TopNav from './topnav/topnav';
import Search from './search/search';
import Merchant from './merchant/merchant'


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
        <Route path="/search" component={Search}/>
        <Route path="/merchant/:id" component={Merchant}/>
      </div>
    </Router>

  );
}

export default App;
