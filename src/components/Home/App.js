import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerAppBar from '../DrawerAppBar';
import Header from './Header';

import '../../css/App.css';
import '../../css/bootstrap-grid.css';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider >
                    <DrawerAppBar />
                </MuiThemeProvider >
                <div className="App">
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;