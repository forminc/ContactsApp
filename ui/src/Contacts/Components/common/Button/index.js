import React from 'react';
import {ButtonContainer} from './styles';
function Button(props){
    return (
        <ButtonContainer onClick={props.onClick}>
            {props.text}
        </ButtonContainer>
    )
}
export default Button;