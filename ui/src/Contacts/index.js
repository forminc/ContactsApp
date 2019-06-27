import React,{useContext} from "react";
import { ContactAppContainer } from "./styles";
import Menubar from "./Components/Menubar";
import AppContainer from "./Components/AppContainer";
import Alert from "./Components/Alert";
import {Context} from './Store';
function ContactApp() {
  const {state} = useContext(Context);
  return (
    <React.Fragment>
        <ContactAppContainer blur={state.alert.showAlert}>
          <Menubar />
          <AppContainer />
        </ContactAppContainer>
        <Alert/>
    </React.Fragment>
  );
}

export default ContactApp;
