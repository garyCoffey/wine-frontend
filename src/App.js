import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage.js'
import WinePage from './pages/WinePage.js'
import AddWinePage from './pages/AddWinePage.js'


class App extends Component {
  render() {
    return (
      <div>
        <h1>test1</h1>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add-wine" component={AddWinePage} />
            <Route exact path="/wines/:wineID" component={WinePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;