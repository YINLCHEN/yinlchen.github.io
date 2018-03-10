import React from 'react';
import Portfolio from './Portfolio'
import '../../css/Portfolio/Content.css';
import freezeTableLogo from '../../images/freezeTable.gif';
import dynamicSearchLogo from '../../images/dynamicSearch.gif';

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
        const data=this.state.data
        const element =  Object.keys(data).map((key,index) =>
                    <Portfolio
                        key={index}
                        projectName={data[key].title}
                        projectContribute = {data[key].body}
                        href="" />
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Portfolio</h1>
                        <div className="forPortfolio">
                            <Portfolio 
                                projectImage={freezeTableLogo} 
                                projectName="Freeze Table" 
                                projectContribute = "實作凍結表格中的行，可選擇想要凍結的行數，再利用stickyTableHeaders凍結頂端列功能，整合凍結窗格功能" 
                                href="https://github.com/YINLCHEN/FreezeTable"/>
                                
                            <Portfolio 
                                projectImage={dynamicSearchLogo} 
                                projectName="Dynamic Search" 
                                projectContribute = "動態搜尋，ＵＳＥＲ可及時搜尋資料，此作品以字典為例，熟悉javascript及jQuery，並可推廣至搜尋表格內容等實作" 
                                href="https://github.com/YINLCHEN/DynamicSearch"/>

                            <Portfolio
                                projectName="Excel Merge Tool" 
                                projectContribute = "Design Pattern: Factory Pattern，由一個主要ＭergeService，呼叫到再實作出MergeTableService" 
                                href=""/>

                             {element}
                        </div> 
                    </div>
                </div>
            </div>  
        );
    }
}

export default Content;