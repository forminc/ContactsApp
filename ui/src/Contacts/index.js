import React, { useContext, useEffect } from "react";
import { ContactAppContainer } from "./styles";
import Menubar from "./Components/Menubar";
import AppContainer from "./Components/AppContainer";
import Alert from "./Components/Alert";
import { Context } from "./Store";
import { setProperty } from "./Store/engine/actions";

function ContactApp() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    if (window.screen.height > window.screen.width) {
      dispatch(setProperty("device", "mobile"));
    } else {
      dispatch(setProperty("device", "desktop"));
    }
  }, []);

  return (
    <React.Fragment>
      <ContactAppContainer blur={state.alert.showAlert}>
        <Menubar />
        <AppContainer />
      </ContactAppContainer>
      <Alert />
    </React.Fragment>
  );
}

export default ContactApp;
