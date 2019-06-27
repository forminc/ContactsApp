import React from "react";
import { ContactAppContainer } from "./styles";
import Menubar from "./Components/Menubar";
import AppContainer from "./Components/AppContainer";
import { Provider } from "./Store";
import Alert from "./Components/Alert";
function ContactApp() {
  return (
    <Provider>
        <ContactAppContainer>
          <Menubar />
          <AppContainer />
        </ContactAppContainer>
        <Alert/>
    </Provider>
  );
}

export default ContactApp;
