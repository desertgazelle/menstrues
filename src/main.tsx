import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, MsalProvider } from "@azure/msal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loginRequest, msalConfig } from "./authConfig";
import "./index.css";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
      >
        <App />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>
);
