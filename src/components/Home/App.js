import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import '../../css/App.css';
import '../../css/bootstrap-grid.css';

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