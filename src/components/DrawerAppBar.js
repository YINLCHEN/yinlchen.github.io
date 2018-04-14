import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blueGrey50, black} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    Link
} from 'react-router-dom'
import ChangeBackground from './ChangeBackground'
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

const styles = {
    button: {
        marginTop: 5,
        marginRight: 5
    }
};

const ChangeColorIcon = (props) => (
    <SvgIcon height="36" viewBox="0 0 24 24" width="36">
        {
            <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            </svg>
        }
    </SvgIcon>
);

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
                    iconElementLeft = { <IconButton>
                                        <ChangeColorIcon className={styles.button}/>
                                             </IconButton>}
                    style=
                    {{
                        backgroundColor: blueGrey50,
                        position: 'fixed',
                        top: 0,
                    }}
                    titleStyle = {{color:black}}
                    iconStyleLeft = {styles.button}
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