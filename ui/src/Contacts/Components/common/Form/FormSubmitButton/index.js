import React from 'react';
import Button from '../../Button';
import {FormSubmitButtonContainer} from './styles';
function FormSubmitButton(props){
    return(<FormSubmitButtonContainer>
        <Button text={"Submit"} onClick={props.onClick}/>
    </FormSubmitButtonContainer>)
}

export default FormSubmitButton;