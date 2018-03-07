import React from 'react';

const element =
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
            
                <h1>About the Website</h1>
                    It' my personal website, includes Portfolio、About me, and Resume. 
                    Many of program solution on my job work. I make a page for Porfolio, and the source code hosted on GitHub.
                    <br/><br/>

                    <h3>Web technologies</h3>
                    The website is using React, use React-Router to create a SPA(Single-Page-Application), 
                    manage state with Redux, UI use Material-UI, and using NodeJS for the Backend.
                    When I 'git push' my project to GitHub, it will deploy to HeroKu with GitHub webhook.
                <hr />

                <h1>開發心路歷程</h1>
                    從無到有，苦盡甘來
                    <br/>
                    
                <hr />
            </div>
        </div>
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;