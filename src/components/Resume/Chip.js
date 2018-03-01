import React from 'react';
import Avatar from 'material-ui/Avatar';
import ReactLogo from '../../images/ReactLogo.png';
import NodejsLogo from '../../images/NodejsLogo.png';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


export default class ChipExampleSimple extends React.Component {
  render() {
    return (
        <div >
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar src={ReactLogo}/>
                    }
                    >
                    ReactJS
                </ListItem>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar src={NodejsLogo} />
                    }
                    >
                    NodeJS
                </ListItem>
            </List>
        </div>
    );
  }
}