import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import List from "./List";
import Detail from "./Detail";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={List}/>
        <Route exact path='/reaction/:fieldId' component={Detail}/>
      </Router>
    );
  }
}


export default App;
