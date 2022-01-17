import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import DashBoard from "./DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <DashBoard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
