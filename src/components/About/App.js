import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from '../AppBarExampleIcon';
import Content from './Content';
import '../../css/App.css';
import '../../css/bootstrap-grid.css';

class App extends Component {
  render() {
    return (
        <div>
            <MuiThemeProvider >
                <AppBarExampleIcon />
            </MuiThemeProvider >
            <div className="App">
                <Content />
            </div>
        </div>
    );
  }
}

export default App;