import React from 'react';
import '../../css/Portfolio/Portfolio.css';

const element =
    <div className="PortfolioContainer">
        <img alt="photoshot" src="https://i.imgur.com/3sxBQot.png" />
        <h3>專案1</h3>
        <div className="TextContainer">
            <p>描述</p>
        </div>
    </div>;

class Portfolio extends React.Component{
    render(){
        return element;
    }
}

export default Portfolio;