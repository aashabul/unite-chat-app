import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import DashBoard from "./DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [id, setId] = useLocalStorage("id");
  return id ? <DashBoard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
