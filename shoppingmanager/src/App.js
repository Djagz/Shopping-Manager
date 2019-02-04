import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './closet/navbar'
import Closet from './closet/closet'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Closet />
        </div>
    );
  }
}

export default App;
