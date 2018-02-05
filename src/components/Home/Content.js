import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonExampleComplex from './RaisedButtonExampleComplex';

const element =
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <MuiThemeProvider >
                    <RaisedButtonExampleComplex />
                </MuiThemeProvider>
            </div>
        </div>
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;