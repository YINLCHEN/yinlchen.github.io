import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from '../AppBarExampleIcon';
import Content from './Content';
import axios from 'axios';

import '../../css/App.css';
import '../../css/bootstrap-grid.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
    }

    loadTodosFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    componentDidMount() {
        this.loadTodosFromServer();
        setInterval(this.loadTodosFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider >
                    <AppBarExampleIcon />
                </MuiThemeProvider >
                <div className="App">
                    <Content props={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;