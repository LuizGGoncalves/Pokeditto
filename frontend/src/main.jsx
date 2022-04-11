import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./global.styled";
import ContextForm from "./contexts/context.form";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <ContextForm>
      <App />
    </ContextForm>
  </React.StrictMode>,
  document.getElementById("root")
);
