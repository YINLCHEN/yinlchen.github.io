import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blueGrey300} from 'material-ui/styles/colors';

function handleClick() {
    document.location.replace("/");
}

const AppBarExampleIcon = () => (
    <AppBar
      title="YINLCHEN"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{ backgroundColor: blueGrey300 }}
      onLeftIconButtonClick = {handleClick}
    />
);

export default AppBarExampleIcon;