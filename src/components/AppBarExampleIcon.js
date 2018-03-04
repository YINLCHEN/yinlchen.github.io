import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import {blueGrey300} from 'material-ui/styles/colors';
import BackImg1 from '../images/IMG_0977.JPG';
import BackImg2 from '../images/IMG_2014.JPG';
import BackImg3 from '../images/IMG_6889.JPG';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
    Link
} from 'react-router-dom'

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
            
            <ChangeBackground/>
            </AppBar>

            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
                <MenuItem onClick={this.handleClose} containerElement={<Link to="/about" />}>About</MenuItem>
                <MenuItem onClick={this.handleClose} containerElement={<Link to="/resume" />}>Resume</MenuItem>
                <MenuItem onClick={this.handleClose} containerElement={<Link to="/portfolio" />}>Portfolio</MenuItem>
            </Drawer>
        </div>
    );
    }
}

class ChangeBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            test: props.test
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        Change(this.state.count);
        return (
            <IconButton onClick={this.incrementCount} tooltip="Change Background" touch={true} tooltipPosition="bottom-left">
                <ColorIcon />
            </IconButton>
        )
    }
}

function Change(params) {
    switch(params % 3) {
        case 0:
            document.body.style.background =  "url(" + BackImg1 + ")"
            break;
        case 1:
            document.body.style.background =  "url(" + BackImg2 + ")"
            break;
        case 2:
            document.body.style.background =  "url(" + BackImg3 + ")"
            break;
        default:
    };
}

const ColorIcon = (props) => (
    <SvgIcon {...props}>
        {
        <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
        }
    </SvgIcon>
);

const AppBarExampleIcon = () => (
    <div>
        <DrawerAppBar/>
    </div>
);

export default AppBarExampleIcon;