import React from "react";
import { ContactAppContainer } from "./styles";
import Menubar from './Components/Menubar';
import AppContainer from './Components/AppContainer';
function ContactApp() {
  return (
    <ContactAppContainer>
      <Menubar />
      <AppContainer />
    </ContactAppContainer>
  );
}

export default ContactApp;
