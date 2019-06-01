import React from 'react';
import Button from '../../Button';
import {FormSubmitButtonContainer} from './styles';
function FormSubmitButton(){
    return(<FormSubmitButtonContainer>
        <Button text={"Submit"}/>
    </FormSubmitButtonContainer>)
}

export default FormSubmitButton;