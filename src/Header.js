import React from 'react';
import './Header.css';

const element = (
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1>
                    <p>CHEN YIN LIN</p>
                </h1>
            </div>
            <div class="col-lg-4">
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