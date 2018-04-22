import React from 'react';
import { connect } from 'react-redux';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            messageCounter: 0,
            data: [],
            open: true,
            count: 0
        };
    }
  
    componentDidMount() {
        this.setState({
            count: this.props.count,
        })
        this.timerID = setInterval(
            () => this.tick(), 1250
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
     }
  
    tick() {
        this.setState({
            date: new Date(),
            counter: this.state.counter+1,
            messageCounter: this.state.counter%2 !== 0 ? this.state.messageCounter+1 : this.state.messageCounter,
            open: !this.state.open,
            count: this.props.count
        });
    }
    
    render() {
        const data = this.state.data;
        const classes = this.state.open ? 'basket' : 'basket hide'
        const element =  Object.keys(data).map((key,index) => 
            <div 
                key={key}
                className={classes} 
                style={{
                    color: dispatchFontColor(this.state.count)
                }}>
    
            {data[key].WelcomeMessage[this.state.messageCounter % data[key].WelcomeMessage.length]}
            
            </div>
        );
        return (
            <div>
                {element}
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

export default connect(mapStateToProps)(Clock);