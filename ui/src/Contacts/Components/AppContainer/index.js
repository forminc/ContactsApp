import React, { useContext } from "react";
import { AppBodyContainer } from "./styles";
import ContactsRouter from "../../Routes";
import { Context } from "../../Store";
import constants from "../../constants";
function AppContainer() {
  const { state } = useContext(Context);
  let { showMenu } = state.menu;
  let { device } = state.engine.applicationProperties;
  let leftMargin = "0px";
  if (device !== "mobile" && showMenu) {
    leftMargin = constants.sidebarWidth;
  }
  return (
    <AppBodyContainer leftMargin={leftMargin}>
      <ContactsRouter />
    </AppBodyContainer>
  );
}

export default AppContainer;
