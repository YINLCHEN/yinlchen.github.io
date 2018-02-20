import React from 'react';
import Portfolio from './Portfolio'
import '../../css/Portfolio/Content.css';
import freezeTableLogo from '../../images/freezeTable.gif';
import dynamicSearchLogo from '../../images/dynamicSearch.gif';

class Content extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>作品集</h1>
                        <div className="forPortfolio">
                            <Portfolio projectImage={freezeTableLogo} projectName="凍結表格" projectContribute = "實作凍結表格中的行，可選擇想要凍結的行數，再利用stickyTableHeaders凍結頂端列功能，整合凍結窗格功能" href="https://github.com/YINLCHEN/FreezeTable"/>
                            <Portfolio projectImage={dynamicSearchLogo} projectName="動態搜尋" projectContribute = "動態搜尋，ＵＳＥＲ可及時搜尋資料，此作品以字典為例，熟悉javascript及jQuery，並可推廣至搜尋表格內容等實作" href="https://github.com/YINLCHEN/DynamicSearch"/>
                        </div> 
                    </div>
                </div>
            </div>  
        );
    }
}

export default Content;