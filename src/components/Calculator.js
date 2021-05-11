import {Rnd} from 'react-rnd';
import Calculator from '@pie-framework/material-ui-calculator';
import {Box} from '@material-ui/core';

const mainstyle = {
    background: "linear-gradient(360deg, #654ea3, #eaafc8)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    boxShadow: "box-shadow: 0px 8px 38px -8px rgba(0,0,0,0.75)", //"5px 5px 10px #ccc",
    fontWeight: 300,
    color:"white",
    borderRadius: "1rem"
    
}

const CalculatorWidget = () => {
    return(
        <Rnd
            style={mainstyle}
            default={{
                x: 0,
                y: 0
            }}
            dragHandleClassName="handle"
            
        >
            <Box>
                <div className='handle'>
                    Calculator
                </div>
                <Calculator mode="basic" onEvaluateExpression={(expression, result) => {}} />
            </Box>
        </Rnd>
        
    )
}

export default CalculatorWidget;