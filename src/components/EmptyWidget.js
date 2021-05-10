import { Rnd } from 'react-rnd';
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        border:"red 2px solid",
        width:"auto",
        height:"auto"
    }
}));

const style = {
    border: "solid 1px #ddd",
    background: "#f0f0f0"
};

const EmptyWidget = () => {
    const classes = useStyles();
    return (
        <Rnd
            style = {style}
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
                
            }}
            dragHandleClassName="handle"
            
        >
            <Box>
                <div className='handle'>
                    handle
                </div>
                <p> rnd</p>
            </Box>
        </Rnd>
    );
}

export default EmptyWidget;