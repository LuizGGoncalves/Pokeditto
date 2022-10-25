import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./global.styled";
import ContextForm from "./contexts/context.form";
import ContextPrivate from "./contexts/private";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <ContextForm>
      <ContextPrivate>
        <App />
      </ContextPrivate>
    </ContextForm>
  </React.StrictMode>,
  document.getElementById("root")
);
