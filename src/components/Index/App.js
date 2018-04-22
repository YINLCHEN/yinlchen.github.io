import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerAppBar from '../DrawerAppBar';
import Content from './Content';
import axios from 'axios';
import BackgroundBase from '../BackgroundBase';

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
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <DrawerAppBar props={this.state.data}/>
                </MuiThemeProvider >
                
                <BackgroundBase props={this.state.data}/>

                <div className="IndexApp">
                    <Content props={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;