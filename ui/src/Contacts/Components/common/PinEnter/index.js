import React, { useState } from "react";
import Header from "../CandidHeader";
import PinEnterSubmitButton from './PinEnterSubmitButton';
import {PinEnterContainer,PinEnterTextContainer} from './styles';
import PinInput from './PinInput'
function PinEnterForm(props) {

    
  return (
      <PinEnterContainer>
        <Header>Pin Entry</Header>
        <PinEnterTextContainer>Enter the PIN</PinEnterTextContainer>
        <PinInput pin={props.data.pin} setPin={(pin)=>props.setData({pin})}/>
        <PinEnterSubmitButton></PinEnterSubmitButton>
      </PinEnterContainer>
  );
}

export default PinEnterForm;
