import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/home';

const App = () => (
  <div className="main-app">
    <Switch>
        <Route path='/' component={Home}/>
    </Switch>
  </div>
);

export default App;
