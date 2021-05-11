import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EmptyWidget from './EmptyWidget';
import StopWatchWidget from './StopWatchWidget';
import CalculatorWidget from './Calculator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({onToggleDark}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let [list,setList] = useState([]);
  const handleWidget = (prop) => {
    console.log(prop.target.firstChild.data);
    let widget = prop.target.firstChild.data;
    console.log(widget);
    if(widget=="calculator"){
      setList((list) => [...list,<CalculatorWidget/>]);
    }
    else if(widget=="Timer"){
      setList((list) => [...list,<StopWatchWidget/>]);
    }
  }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Widgets Board
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Add />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleWidget}>
                  calculator
                </MenuItem>
                <MenuItem onClick={handleWidget}>Timer</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
    <div id="widget-holder">
     {list.map((item) => item)}
    </div>
    </>
  );
}
