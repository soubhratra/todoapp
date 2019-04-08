import React, {memo} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Layout = memo((props) => {
  let {classes} = props;

  return (
    <div className={classes.root}>
    <Paper elevation={0} style={{padding:0, margin: 0, backgroundColor: '#fafafa'}}>
      <AppBar color="primary" position="static" style={{height:64}}>
        <Toolbar style={{height:64}}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" style={{fontSize:22}} className={classes.grow}>MULTI-TASKER</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
    </div>
  )
});

export default withStyles(styles)(Layout);