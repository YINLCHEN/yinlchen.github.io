import React from 'react';
import { connect } from 'react-redux';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import BackImg1 from '../images/IMG_0977.JPG';
import BackImg2 from '../images/IMG_2014.JPG';
import BackImg3 from '../images/IMG_6889.JPG';

const ChangeColorIcon = (props) => (
    <SvgIcon {...props}>
        {
        <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
        }
    </SvgIcon>
);

class ChangeBackground extends React.Component {
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

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
        ChangeColor(this.props.count);
    }

    render() {
        return (
            <IconButton 
                onClick={this.increment} 
                tooltip="Change Background" 
                touch={true} 
                tooltipPosition="bottom-left"
                style={
                    {marginTop: 8}
                }>
                <ChangeColorIcon />
            </IconButton>
        )
    }
}

function mapStateToProps(state) {
    if(state.count === 0){
        ChangeColor(1);
        state.count = 2;
    }
    return {
        count: state.count
    };
}

function ChangeColor(params) {
    switch(params % 3) {
        case 0:
            document.body.style.background = "#000 url(" + BackImg1 + ") center center fixed no-repeat"
            break;
        case 1:
            document.body.style.background = "#000 url(" + BackImg2 + ") center center fixed no-repeat"
            break;
        case 2:
            document.body.style.background = "#000 url(" + BackImg3 + ") center center fixed no-repeat"
            break;
        default:
    };
}

export default connect(mapStateToProps)(ChangeBackground);