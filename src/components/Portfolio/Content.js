import React from 'react';
import Portfolio from './Portfolio'
import '../../css/Portfolio/Content.css';

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
        const element =  Object.keys(data).map((key,index) => 
            <Portfolio
                key={index}
                projectImage={ data[key].image ? require('../../images/' + data[key].image) : null }
                projectName={data[key].title}
                projectContribute = {data[key].body}
                href={data[key].link}
                previewSrc={data[key].previewSrc}
            />
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Portfolio</h1>
                        <div className="forPortfolio">
                             {element}
                        </div> 
                    </div>
                </div>
            </div>  
        );
    }
}

export default Content;