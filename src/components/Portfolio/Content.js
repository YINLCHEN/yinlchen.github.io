import React from 'react';
import Portfolio from './Portfolio'
import '../../css/Portfolio/Content.css';

const element =
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1>
                    作品集    
                </h1>
                <div className="forPortfolio">
                    <Portfolio />
                    <Portfolio />
                </div> 
            </div>
        </div>
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;