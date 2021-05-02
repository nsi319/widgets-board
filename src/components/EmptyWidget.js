import { Rnd } from 'react-rnd';
import React from 'react';


const EmptyWidget = () => {

    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
                
            }}
        >
            Rnd
        </Rnd>
    );
}

export default EmptyWidget;