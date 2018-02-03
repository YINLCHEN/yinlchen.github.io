import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Content from './Content';
import Header from './Header';
import './bootstrap-grid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <Header />
        </p>
        <br/>
        <p>
          <Content />
        </p>
      </div>
    );
  }
}

export default App;