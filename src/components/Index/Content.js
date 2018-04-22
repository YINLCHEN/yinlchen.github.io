import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SvgIcon from 'material-ui/SvgIcon';
import FlatButton from 'material-ui/FlatButton';
import Clock from './Clock';
import {
    Link
} from 'react-router-dom'
import '../../css/Index/Content.css';
import { connect } from 'react-redux';

const EnterIcon = (props) => (   
    <SvgIcon {...props} >
    {
        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
    }
    </SvgIcon>
)

class Content extends React.Component{

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
     }

    render(){
        const styles = {
            button: {
                marginTop: 10,
                color: dispatchFontColor(this.props.count),
                border: '1px solid'
            }
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <Clock props={this.state.data}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <MuiThemeProvider >
                            <FlatButton
                                secondary={true}
                                label='COME HERE !'
                                labelStyle={{fontSize:'15px'}}
                                icon={<EnterIcon />}
                                fullWidth={true}
                                style={styles.button}
                                containerElement={<Link to="/home" />}
                                />
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function dispatchFontColor(backgroundColor){
    switch(backgroundColor%4){
        case 0:
            return '#EF9A9A'
        case 1:
            return 'white'
        case 3:
            return 'white'
        case 2:
            return '#F4FF81'
        default:
            return '#white'
    }
}

export default connect(mapStateToProps)(Content);