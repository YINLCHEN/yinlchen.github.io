import React from 'react';

const element =
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1>
                    關於我    
                </h1>
                <p>
                    Hi, 我是
                </p>
            </div>
        </div>
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;