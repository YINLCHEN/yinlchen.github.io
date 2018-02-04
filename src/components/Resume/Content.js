import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListCareer from './ListCareer';

const element =
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1>
                    關於我    
                </h1>
                <p>
                    Hi, 我是YIN, 資工系畢業，業界已有兩年全端經驗，將來目標往前端工程師專精
                </p>
                <hr />
                <h1>
                    經驗    
                </h1>
                <p>
                    <MuiThemeProvider >
                        <ListCareer />
                    </MuiThemeProvider >
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