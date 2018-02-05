import React,{ Component } from 'react';
import '../../css/Portfolio/Portfolio.css';

class Portfolio extends Component{
    render(){
        return (
            <div className="PortfolioContainer">
                <img alt="photoshot" src="https://i.imgur.com/3sxBQot.png" />
                <h3>{this.props.projectName}</h3>
                <div className="TextContainer">
                    <p>{this.props.projectContribute}</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;