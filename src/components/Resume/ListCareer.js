import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
import ObankLogo from '../../images/obank.png';
import FubonLogo from '../../images/fubon.png';

const ListCareer = () => (
  <div>
      <List>
        <Subheader>2017.6 ~ Now</Subheader>
        <ListItem
          leftAvatar={<Avatar src={ObankLogo} />}
          primaryText="O-BANK IT"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Web Developer</span>
              -- Web Developer
            </p>
          }
          secondaryTextLines={2}
        />
        <Subheader>2016.3 ~ 2017.6</Subheader>
        <ListItem
          leftAvatar={<Avatar src={FubonLogo} />}
          primaryText="Fubon Fiancial IT"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Web Developer</span>
              -- Web Developer
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
  </div>
);

export default ListCareer;
