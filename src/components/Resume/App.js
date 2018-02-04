import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/bootstrap-grid.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Content />
        </div>
    );
  }
}

export default App;