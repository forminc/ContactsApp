import React from 'react';
import {StyledInput} from './styles';

function Input(props){
    return (
        <StyledInput value={props.data} onChange={(e)=>{props.setData(props.field.key,e.target.value)}}/>
    )
}

export default Input