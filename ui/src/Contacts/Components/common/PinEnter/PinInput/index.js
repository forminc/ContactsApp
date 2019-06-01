import React from 'react';
import {PinInputContainer,PinBoxEmpty,PinBoxFull} from './styles';

function PinInput(props){
    window.onkeydown=(e)=>{
        if(e.which>=48 && e.which<=57 && props.pin.split("").length!==4){
            let digit=e.which-48;
            props.setPin(props.pin+digit);
        }
        if(e.which===8 && !!pin){
            props.setPin(props.pin.substring(0, props.pin.length-1))
        }
    };

    let pin=props.pin;
    let extraSpace=" ".repeat(4-pin.split("").length)
    pin=pin.concat(extraSpace)
    
    return(<PinInputContainer>
        {
            pin.split("").map((e)=>{
                if(e===" "){
                    return <PinBoxEmpty/>
                }
                else{
                    return <PinBoxFull/>
                }
            })
        }

    </PinInputContainer>)
}

export default PinInput;