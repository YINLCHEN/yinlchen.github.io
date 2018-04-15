import React from 'react';
import MyPhoto from '../../images/ski.jpg';
import Content from './Content';
import '../../css/Header.css';

const element = (
    <div className="container">
        <div className="row">
            <div className="col-lg-9">
                <div className="introDiv">
                    <h1>CHEN YIN LIN</h1>
                    <div>
                        <h3>Front-End Engingeer, Javascript x React, Hualien Taiwan</h3>
                        <hr/>
                        <h3>
                            <a target="_blank" href="https://medium.com/@YINLCHEN/" rel="noopener noreferrer" >Medium 技術文章</a>
                            <br/>
                            <a href="mailto:sidneychen137@gmail.com">sidneychen137@gmail.com</a>
                        </h3>
                    </div>
                </div>
                <Content />
            </div>
            <div className="col-lg-2">
                <img width="200px;" alt="myPhoto" src={MyPhoto} />
            </div>
        </div>
    </div>
);

class Header extends React.Component{
    render(){
        return element;
    }
}

export default Header;