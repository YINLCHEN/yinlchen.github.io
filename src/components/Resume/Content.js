import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skill from './Skill';
import ListCareer from './ListCareer';
import VerticalNonLinear from './VerticalNonLinear';

const element =
    <div className="container">
        <div className="row">
            <div className="col-lg-10">
                <h1>關於我</h1>
                Hi，我是YIN，資工系畢業，業界已有兩年全端經驗，主要開發後端 JAVA 及 Ｃ# 系統，前端使用 Javascipt 及 jQuery，並有多個專案經驗；
                興趣使然，前端能帶給使用者體驗，因平時有攝影、後製影片興趣，對於美感設計也有堅持，前端的活潑不同於後端的乏味；
                除了工作上使用各種技術，下班自學精進React X Redux，以及後端NodeJS、MongoDB，期望將來目標往前端工程師專精！
                <hr/>
                <br/>

                <h1>經驗</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <MuiThemeProvider >
                                <ListCareer />
                            </MuiThemeProvider >
                        </div>
                        <div className="col-lg-6">
                            <MuiThemeProvider >
                                <VerticalNonLinear />
                            </MuiThemeProvider >
                        </div>
                    </div>
                </div>
                <hr/>
                <br/>

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
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;