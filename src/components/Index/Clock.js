import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            messageCounter: 0,
            data: ['Hej!', 'こんにちは!', 'Bonjour!', '三碗豬腳'],
            open: true
        };
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 2500
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    tick() {
        this.setState({
            date: new Date(),
            counter: this.state.counter+1,
            messageCounter: this.state.counter%2 !== 0 ? this.state.messageCounter+1 : this.state.messageCounter,
            open: !this.state.open
        });
    }
    
    render() {
        const classes = this.state.open ? 'basket' : 'basket hide'
        return (
            <div className={classes} >{this.state.data[this.state.messageCounter%4]}</div>
        );
    }
}

export default Clock;