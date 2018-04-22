import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import BackImg1 from '../images/IMG_0977.JPG';
import BackImg2 from '../images/IMG_2014.JPG';
import BackImg3 from '../images/IMG_6889.JPG';
import BackImg4 from '../images/IMG_0835.jpg';
import '../css/Background.css';

class BackgroundBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: {},
            imageArray: [BackImg1,BackImg2,BackImg3,BackImg4]
        };
    }

    componentDidMount() {
        this.setState({
            imageSrc: this.state.imageArray[this.props.count]
        });

        this.timerID = setInterval(
            () => this.tick(), 10000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.props.dispatch({ type: 'INCREMENT' });
        this.setState({
            imageSrc: this.state.imageArray[this.props.count%4]
        });
    }

    render(){
        var divStyle = {
            backgroundImage: 'url(' + this.state.imageSrc + ')',
            top: 0,
            backgroundPosition: 'center center',
            height: '100%',
            width: '100%',
            position: 'absolute'
        }
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="carousel"
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <div style={divStyle} key={this.state.imageSrc}/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(BackgroundBase);