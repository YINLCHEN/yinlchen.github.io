import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skill from './Skill';
import ListCareer from './ListCareer';
import VerticalNonLinear from './VerticalNonLinear';

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
     }

    render(){

        const data = this.state.data
        const aboutElement =  Object.keys(data).map((key,index) => 
            <div key={index}>{data[key].About}</div>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1>關於我</h1>
                        {aboutElement}
                        <hr/><br/>

                        <h1>經驗</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <MuiThemeProvider >
                                        <ListCareer props={this.state.data}/>
                                    </MuiThemeProvider >
                                </div>
                                <div className="col-lg-6">
                                    <MuiThemeProvider >
                                        <VerticalNonLinear props={this.state.data}/>
                                    </MuiThemeProvider >
                                </div>
                            </div>
                        </div>
                        <br/><br/><hr/>

                        <h1>技能</h1>
                        <MuiThemeProvider >
                            <Skill />
                        </MuiThemeProvider >
                        <hr/>
                        <br/>

                        <h1>I'm CHEN YIN LIN, Front-End Engineer.</h1>
                        <br/><br/>
                        <br/><br/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;