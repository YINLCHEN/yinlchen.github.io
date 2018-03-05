import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blueGrey300} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    Link
} from 'react-router-dom'
import ChangeBackground from './ChangeBackground'

import reducer from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(reducer)

class DrawerAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="YINLCHEN"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style=
                    {{ 
                        backgroundColor: blueGrey300,
                        opacity: 0.8
                    }}
                    onLeftIconButtonClick = {this.handleToggle}
                    >
                    <Provider store={store}>
                        <ChangeBackground />
                    </Provider>

                </AppBar>
                
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Welcome</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/home" />}>Home</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/about" />}>About</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/resume" />}>Resume</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/portfolio" />}>Portfolio</MenuItem>
                </Drawer>
            </div>
        );
    }
}

const AppBarExampleIcon = () => (
    <div>
        <DrawerAppBar/>
    </div>
);

export default AppBarExampleIcon;