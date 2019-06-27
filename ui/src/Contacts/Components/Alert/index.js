import React, { useContext } from "react";
import {Context} from '../../Store'
import {AlertContainer,AlertBackground,AlertPopupContainer,AlertText} from './styles'
import { hideAlert } from "../../Store/alert/actions";
function Alert() {
  const { state, dispatch } = useContext(Context);
  let showAlert = state.alert.showAlert;
  let alertText = state.alert.text;
  if(showAlert){
    setTimeout(()=>{
      dispatch(hideAlert());
    },2000)
  }
  return (
    <AlertContainer>
          <AlertBackground visibility={showAlert}/>
          <AlertPopupContainer visibility={showAlert}>
            <AlertText>{alertText}</AlertText>
          </AlertPopupContainer>
    </AlertContainer>
  );
}


export default Alert;