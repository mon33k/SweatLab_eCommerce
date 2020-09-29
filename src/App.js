import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar.js'
import DataRouter from './components/DataRouter'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={DataRouter}/>
      </Switch>
    </div>
  );
}

export default App;
