import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {cyan50} from 'material-ui/styles/colors';
import ObankLogo from '../../images/obank.png';
import FubonLogo from '../../images/fubon.png';
import MCULogo from '../../images/Ming_Chuan_University_LOGO.svg';

const ListCareer = () => (
  <div>
      <List>
        <Subheader style={{color:cyan50}}>2017.6 ~ Now</Subheader>
        <ListItem style={{color:cyan50}}
          leftAvatar={<Avatar src={ObankLogo} />}
          primaryText="O-BANK IT"
          secondaryText={
            <p style={{color: cyan50}}>
              <span>Web Developer</span>
              -- Develop: C# MVC、JavaScript
            </p>
          }
          secondaryTextLines={2}
        />
        <Subheader style={{color:cyan50}}>2016.3 ~ 2017.6</Subheader>
        <ListItem style={{color:cyan50}}
          leftAvatar={<Avatar src={FubonLogo} />}
          primaryText="Fubon Fiancial IT"
          secondaryText={
            <p style={{color:cyan50}}>
              <span>Web Developer</span>
              -- Develop: JAVA Spring、JavaScript
            </p>
          }
          secondaryTextLines={2}
        />
        <Subheader style={{color:cyan50}}>2010.9 ~ 2014.6</Subheader>
        <ListItem style={{color:cyan50}}
          leftAvatar={<Avatar src={MCULogo} />}
          primaryText="Ming Chuan University"
          secondaryText={
            <p style={{color:cyan50}}>
              <span>資訊工程學系</span>
              -- Computer Science
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
  </div>
);

export default ListCareer;
