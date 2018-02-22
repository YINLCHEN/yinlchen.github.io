import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import ReactLogo from '../../images/ReactLogo.png';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleClick() {
  alert('You clicked the Chip.');
}

export default class ChipExampleSimple extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>
        <Chip
          onClick={handleClick}
          style={styles.chip}
        >
          <Avatar src={ReactLogo} />
          ReactJS
        </Chip>
      </div>
    );
  }
}