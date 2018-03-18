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
        const aboutElement2 = "<div>2016年春天，那時候正吹起一股FINTECH金融科技風潮，畢業、退伍後，從花蓮北上台北面試，也懵懵懂懂地加入FUBON IT，開始踏入WEB開發的行列<br /><br />"
        +"工作環境給我的學習曲線，從一開始上升到後期趨於平緩，學習全端包括JAVA、JavaScript、jQuery；一年後，到了O-BANK IT，多了些空間與想法，從使用者角度需要什麼樣的功能，"
        +"僅僅是一個上傳Excel並顯示出來，因為表格太寬，我想User應該很需要凍結固定欄位的功能，而目前只有用套件去凍結頂端列，要凍結直行無法實現，就自己動手用JavaScript和jQuery刻出來<br /><br />"
        +"前端帶給我的成就感更高，而且回饋會即時看到，對於美感也有些想法可以應用在工作上，JavaScript的路也還很長，雖然框架如雨後春筍般，但學習背後的概念才是最重要，"
        +"就像React一開始接觸完全無法理解，我想技術成就是我想往前端專精的原因!<br /><br />"
        +"</div>"
        
        function createMarkup() {
            return {__html: aboutElement2};
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1>關於我</h1>
                        {aboutElement}
                        <br/>
                        <div dangerouslySetInnerHTML={createMarkup()} />
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