import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useTimer from '../hook/useTimer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));



const StopWatch = () => {
    const classes = useStyles();

    const {handlePause,handleReset,handleResume,handleStart,timer} = useTimer(0);

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    

    return(
        <div className={classes.root}>
            <Typography variant="body1"> 
                {formatTime()}
            </Typography>
            <ButtonGroup color="primary" size="small">
                <Button onClick={handleStart}>Start</Button>
                <Button onClick={handlePause}>Pause</Button>
                <Button onClick={handleResume}>Resume</Button>
                <Button onClick={handleReset}>Reset</Button>
            </ButtonGroup>
        </div>
    )

}

export default StopWatch;