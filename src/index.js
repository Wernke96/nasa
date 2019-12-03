import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Home from './App';
import MarsWeather from'./containers/Weather/index';
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={MarsWeather}/>

        
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
