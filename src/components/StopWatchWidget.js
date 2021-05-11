import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Rnd } from 'react-rnd';
import StopWatch from './StopWatch';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style = {{width:"100%",height:"100%"}}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height:"100%",
    color:"white",
  },
}));

const style = {
    border: "solid 1px #ddd",
};

const mainstyle = {
  background: "linear-gradient(360deg, #654ea3, #eaafc8)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  boxShadow: "box-shadow: 0px 8px 38px -8px rgba(0,0,0,0.75)", //"5px 5px 10px #ccc",
  fontWeight: 300,
  color:"white",
  borderRadius: "1rem"
  
}

export default function StopWatchWidget() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Rnd
    style = {mainstyle}
    default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
        
    }}
    dragHandleClassName="handle"
    >
    <Box className={classes.root}>
    <div className='handle'>
      Timer
    </div>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
        >
          <Tab label="Stop Watch" {...a11yProps(0)} />
          <Tab label="Timer" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}> 
          <StopWatch/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
    </div>
    </Box>
    </Rnd>
  );
}
