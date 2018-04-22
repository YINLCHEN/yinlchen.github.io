import React from 'react';
import { connect } from 'react-redux';

import BackImg1 from '../images/IMG_0977.JPG';
import BackImg2 from '../images/IMG_2014.JPG';
import BackImg3 from '../images/IMG_6889.JPG';
import BackImg4 from '../images/IMG_0835.jpg';

class StaticBackground extends React.Component {
    render() {
        ChangeBackgroundFnc(this.props.count)
        return null;
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function ChangeBackgroundFnc(params) {
    switch(params % 4) {
        case 0:
            document.body.style.background = "#000 url(" + BackImg1 + ") center center fixed no-repeat"
            break;
        case 1:
            document.body.style.background = "#000 url(" + BackImg2 + ") center center fixed no-repeat"
            break;
        case 2:
            document.body.style.background = "#000 url(" + BackImg3 + ") center center fixed no-repeat"
            break;
        case 3:
            document.body.style.background = "#000 url(" + BackImg4 + ") center center fixed no-repeat"
            break;
        default:
    };
}

export default connect(mapStateToProps)(StaticBackground);