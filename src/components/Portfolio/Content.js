import React from 'react';
import Portfolio from './Portfolio'
import '../../css/Portfolio/Content.css';

class Content extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>作品集</h1>
                        <div className="forPortfolio">
                            <Portfolio projectName="1111" projectContribute = "簡單啦" />
                            <Portfolio projectName="2222" projectContribute = "輕輕鬆鬆" />
                        </div> 
                    </div>
                </div>
            </div>  
        );
    }
}

export default Content;