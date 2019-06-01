import React from 'react';
import {InputItemContainer,InputItemLabel} from './styles';

function LabelItemGroup(props){
    let Component=props.Component;
    return(
        <InputItemContainer>
            <InputItemLabel>{props.field.label}</InputItemLabel>
            <Component data={props.data} field={props.field} setData={props.setData}/>
        </InputItemContainer>
    )
}

export default LabelItemGroup;