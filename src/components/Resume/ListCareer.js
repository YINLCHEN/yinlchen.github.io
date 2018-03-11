import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {cyan50} from 'material-ui/styles/colors';

class ListCareer extends React.Component{
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
        const data = this.state.data;
        const element =  Object.keys(data).map((Rkey,Rindex) =>
            <div key={Rkey}>
                {
                    Object.keys(data[Rkey].WorkExperience).map( (Wkey, Windex) => {
                        return (
                            <div key={Wkey}>
                            <Subheader style = {{color:cyan50}}>{data[Rkey].WorkExperience[Wkey].WorkTime}</Subheader>
                            <ListItem style = {{color:cyan50}}
                                leftAvatar = {<Avatar src={ data[Rkey].WorkExperience[Wkey].Image ? require('../../images/' + data[Rkey].WorkExperience[Wkey].Image) : null }/>}
                                primaryText = {data[Rkey].WorkExperience[Wkey].Company}
                                secondaryText={
                                    <p style={{color: cyan50}}>
                                    <span>{data[Rkey].WorkExperience[Wkey].Describe}</span>
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            </div>
                        )
                    })
                }
            </div>
        );

        return(
            <div>
                <List>
                    {element}
                </List>
            </div>
        );
    }
}

export default ListCareer;
