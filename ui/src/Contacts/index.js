import React from "react";
import { ContactAppContainer } from "./styles";
import Menubar from "./Components/Menubar";
import AppContainer from "./Components/AppContainer";
import { Provider } from "./Store";
function ContactApp() {
  return (
    <Provider>
        <ContactAppContainer>
          <Menubar />
          <AppContainer />
        </ContactAppContainer>
    </Provider>
  );
}

export default ContactApp;
