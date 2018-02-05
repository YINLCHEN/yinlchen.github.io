import React from 'react';
import '../../css/Header.css';

const element = (
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <h1>CHEN YIN LIN</h1>
            </div>
            <div className="col-lg-4">
                <img width="200px;" alt="myPhoto" src="https://i.imgur.com/3sxBQot.png" />
            </div>
        </div>
        <div>
            React F2E <br/>
            Taipei, TW <br/>
            <a href="mailto:sidneychen137@gmail.com">sidneychen137@gmail.com</a>
        </div>
    </div>
  );

class Header extends React.Component{
    render(){
        return element;
    }
}

export default Header;