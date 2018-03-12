import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blueGrey300} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    Link
} from 'react-router-dom'
import ChangeBackground from './ChangeBackground'

class DrawerAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
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
                    
                    <ChangeBackground props={this.state.data}/>
                        
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

export default DrawerAppBar;