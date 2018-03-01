import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from './Chip';
import ListCareer from './ListCareer';

const element =
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <h1>關於我</h1>
                    Hi, 我是YIN, 資工系畢業，業界已有兩年全端經驗，主要開發JAVA及Ｃ#相關系統，
                    並有多個專案經驗，因自身興趣，前端可帶給使用者體驗，不同於後端，除了工作上使用javascipt及jQuery外，
                    自學精進React & Redux，將來目標往前端工程師專精！
                <hr />
                
                <h1>關於網站</h1>
                    工作之餘，以ReactJS實作個人網站包含作品集，作品多為需求上遇到的問題解決方案
                    <br/><br/>
                    <h3>使用技術</h3>
                    The website is using ReactJS with Material-UI and NodeJS with Express framework,<br/>
                    deploy to HeroKu with a GitHub webhook.

                <hr />

                <h1>技能</h1>
                <MuiThemeProvider >
                    <Chip />
                </MuiThemeProvider >
                <hr/>

                <h1>經驗</h1>
                <MuiThemeProvider >
                    <ListCareer />
                </MuiThemeProvider >
            </div>
        </div>
    </div>;

class Content extends React.Component{
    render(){
        return element;
    }
}

export default Content;