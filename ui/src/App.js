import React from "react";
import ContactApp from "./Contacts";
import { Provider } from "./Contacts/Store";

function App() {
  return (
    <Provider>
      <ContactApp />
    </Provider>
  );
}

export default App;
