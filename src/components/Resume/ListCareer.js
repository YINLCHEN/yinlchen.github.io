import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ObankLogo from '../../images/obank.png';
import FubonLogo from '../../images/fubon.png';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

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
