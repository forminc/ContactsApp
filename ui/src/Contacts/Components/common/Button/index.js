import React from 'react';
import {ButtonContainer} from './styles';
function Button(props){
    return (
        <ButtonContainer onClick={props.onClick}>
            <span>{props.text}</span>
        </ButtonContainer>
    )
}
export default Button;