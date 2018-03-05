import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import '../../css/Index/Content.css';
import {
    Link
} from 'react-router-dom'

const styles = {
    button: {
        margin: 15,
    }
};

const AboutIcon = (props) => (   
    <SvgIcon {...props}>
    {
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>
    }
    </SvgIcon>
)

const element =
    <div className="container">
        <div className="row">
            <div className="title">
                Welcome!
            </div>
            <div className="toCenter">
                <MuiThemeProvider >
                    <RaisedButton
                        label="Enter"
                        secondary={true}
                        style={styles.button}
                        icon={<AboutIcon />}
                        containerElement={<Link to="/home" />}
                    />
                </MuiThemeProvider>
            </div>
        </div>
    </div>
;

class HiContent extends React.Component{
    render(){
        return element;
    }
}

export default HiContent;