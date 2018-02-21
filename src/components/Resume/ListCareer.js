import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
import ObankLogo from '../../images/obank.png';
import FubonLogo from '../../images/fubon.png';
import MCULogo from '../../images/Ming_Chuan_University_LOGO.svg';

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
        <Subheader>2010.9 ~ 2014.6</Subheader>
        <ListItem
          leftAvatar={<Avatar src={MCULogo} />}
          primaryText="Ming Chuan University"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>資訊工程學系</span>
              -- Computer Science
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
  </div>
);

export default ListCareer;
